"use client";

import { useState, useRef, useEffect } from "react";
import { Send, User, Minimize2, Maximize2, X, MessageCircle, Square, RotateCcw } from "lucide-react";
import Image from "next/image";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type SalesChatProps = {
  productName?: string;
  productImage?: string;
  embedded?: boolean;
};

// Suggested quick questions
const SUGGESTED_QUESTIONS = [
  "📚 What book is best for medical Spanish?",
  "👨‍⚕️ Do you have books for healthcare professionals?",
  "👶 Best parenting books for toddlers?",
  "🎧 Do you have audiobooks?",
  "💰 What are your prices?",
  "🚚 Shipping and return policy?",
];

// How long we wait for the model to finish before considering the request stalled.
const REQUEST_TIMEOUT_MS = 60_000;

// Module-scope counter so message ids stay unique and stable (no Date.now in
// the component body, which would break React's purity rules). Seeded randomly
// so ids stay unique even if the module is hot-reloaded during development
// (Fast Refresh resets module state, which used to collide message ids).
let messageIdCounter = Math.floor(Math.random() * 1_000_000);
function createMessageId(): string {
  messageIdCounter += 1;
  return `msg-${messageIdCounter}`;
}

// Render message content with clickable markdown links, bold, paragraph breaks, bullets
function renderMessageContent(content: string) {
  // Split content by paragraph breaks (\n\n)
  const paragraphs = content.split("\n\n");
  const renderedParagraphs: React.ReactNode[] = [];

  paragraphs.forEach((para, pIdx) => {
    const trimmed = para.trim();
    if (!trimmed) return;

    // Check if this paragraph is a bullet list
    const bulletRegex = /^[\s]*[-*]\s+/;
    const lines = trimmed.split("\n");

    const isBulletList = lines.every((line) => bulletRegex.test(line));

    if (isBulletList) {
      const bullets = lines.map((line) => {
        const text = line.replace(/^[\s]*[-*]\s+/, "");
        return (
          <li key={`${pIdx}-${text.slice(0, 20)}`} className="mb-1">
            <span className="text-[#0B8288] mr-2">•</span>
            {renderInlineMarkdown(text)}
          </li>
        );
      });
      renderedParagraphs.push(<ul key={`ul-${pIdx}`} className="mb-3 ml-4 list-none pl-0">{bullets}</ul>);
    } else {
      renderedParagraphs.push(
        <p key={`p-${pIdx}`} className="mb-3 last:mb-0">
          {renderInlineMarkdown(trimmed)}
        </p>,
      );
    }
  });

  // If no paragraphs were generated, show plain content
  if (renderedParagraphs.length === 0) {
    renderedParagraphs.push(<span key="content">{content}</span>);
  }

  return <>{renderedParagraphs}</>;
}

// Render inline markdown (bold, links) within a text string
function renderInlineMarkdown(text: string) {
  const parts: React.ReactNode[] = [];

  // Use the same link parsing logic
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <span key={`span-${lastIndex}`}>{formatBold(text.slice(lastIndex, match.index))}</span>,
      );
    }
    parts.push(
      <a
        key={`link-${match.index}`}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#0B8288] underline hover:text-[#1A9D9D]"
      >
        {match[1]}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(
      <span key={`last-${lastIndex}`}>{formatBold(text.slice(lastIndex))}</span>,
    );
  }

  if (parts.length === 0) {
    return formatBold(text);
  }

  return <>{parts}</>;
}

// Format bold text **text** -> <strong>
function formatBold(text: string) {
  const boldRegex = /\*\*(.+?)\*\*/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(<strong key={`b-${match.index}`}>{match[1]}</strong>);
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  if (parts.length === 1 && typeof parts[0] === "string") {
    return <>{text}</>;
  }

  return <>{parts}</>;
}

export default function SalesChat({
  productName,
  productImage,
  embedded = false,
}: SalesChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Welcome to Praxmed Publishing! 👋 I'm your sales assistant — here to help you find the perfect book or audiobook for you or your family. I'm available 24/7. What can I help you with today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [minimized, setMinimized] = useState(true);
  const [size, setSize] = useState<"compact" | "expanded">("compact");
  const [error, setError] = useState(false);
  // { offset: px the mobile keyboard covers at the bottom of the screen,
  //   height: current visible viewport height in px }
  const [viewport, setViewport] = useState({ offset: 0, height: 0 });

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const userStoppedRef = useRef(false);
  const lastUserMessageRef = useRef<string>("");

  // Track the on-screen keyboard so fixed-position chat stays above it on
  // mobile browsers where `interactive-widget=resizes-content` is not honored.
  useEffect(() => {
    if (typeof window === "undefined" || !window.visualViewport) return;
    const vv = window.visualViewport;
    const onViewportChange = () => {
      const gap = Math.max(0, window.innerHeight - vv.height);
      setViewport({
        offset: gap > 120 ? gap : 0,
        height: Math.floor(vv.height),
      });
    };
    onViewportChange();
    vv.addEventListener("resize", onViewportChange);
    vv.addEventListener("scroll", onViewportChange);
    return () => {
      vv.removeEventListener("resize", onViewportChange);
      vv.removeEventListener("scroll", onViewportChange);
    };
  }, []);

  // Scroll the messages list to the bottom. Scrolls the container directly
  // instead of scrollIntoView({ smooth }), which is unreliable on iOS.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const raf = requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
    return () => cancelAnimationFrame(raf);
  }, [messages]);

  useEffect(() => {
    if (productName && messages.length === 1) {
      const greeting = `I see you're interested in "${productName}". Let me tell you more about it — it's one of our bestsellers!`;
      // Deferred so the setState is not synchronous inside the effect body.
      const raf = requestAnimationFrame(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: createMessageId(),
            role: "assistant",
            content: greeting,
          },
        ]);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [productName, messages.length]);

  // Suggestions are only shown before the first exchange (single greeting message).
  const showSuggestions = messages.length <= 1;

  const updateMessage = (id: string, content: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, content } : m)),
    );
  };

  // Core request/streaming logic shared by send and retry.
  const doSend = async (
    requestMessages: { role: "user" | "assistant"; content: string }[],
    assistantId: string,
  ) => {
    userStoppedRef.current = false;
    const controller = new AbortController();
    abortRef.current = controller;
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    setIsLoading(true);

    try {
      const response = await fetch("/api/sales-agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: requestMessages }),
        signal: controller.signal,
      });

      if (!response.ok) throw new Error("Failed to get response");

      let assistantContent = "";
      const body = response.body;

      if (body && typeof body.getReader === "function") {
        const reader = body.getReader();
        const decoder = new TextDecoder();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          assistantContent += decoder.decode(value, { stream: true });
          updateMessage(assistantId, assistantContent);
        }
        // flush decoder state
        assistantContent += decoder.decode();
        updateMessage(assistantId, assistantContent);
      } else {
        // Fallback for browsers without streaming body support (some mobiles)
        assistantContent = await response.text();
        updateMessage(assistantId, assistantContent);
      }

      // A 200 with no content (e.g. the model was rate-limited and returned
      // nothing) should still surface as a retryable error, not a silent empty bubble.
      if (!assistantContent.trim()) {
        throw new Error("Empty response");
      }
    } catch (err) {
      if (userStoppedRef.current) {
        // User pressed Stop — keep whatever partial response arrived.
        setError(false);
        return;
      }
      const timedOut =
        err instanceof DOMException && err.name === "AbortError";
      setError(true);
      updateMessage(
        assistantId,
        timedOut
          ? "⚠️ The request timed out. Please try again, or reach out to contact@praxmedpublishing.com!"
          : "⚠️ Something went wrong. Please try again, or reach out to contact@praxmedpublishing.com!",
      );
    } finally {
      clearTimeout(timeoutId);
      abortRef.current = null;
      setIsLoading(false);
    }
  };

  const handleSubmit = async (
    e?: React.FormEvent<HTMLFormElement>,
    customMessage?: string,
  ) => {
    e?.preventDefault();
    const message = customMessage || input.trim();
    if (!message || isLoading) return;

    lastUserMessageRef.current = message;
    setError(false);

    // Snapshot current history so the request is never stale
    const requestMessages = [
      ...messages.map((m) => ({ role: m.role, content: m.content })),
      { role: "user" as const, content: message },
    ];

    const userMessage: Message = {
      id: createMessageId(),
      role: "user",
      content: message,
    };
    const assistantMessage: Message = {
      id: createMessageId(),
      role: "assistant",
      content: "",
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput("");

    await doSend(requestMessages, assistantMessage.id);
  };

  const handleSuggestedQuestion = (question: string) => {
    if (isLoading) return;
    handleSubmit(undefined, question);
  };

  const handleStop = () => {
    userStoppedRef.current = true;
    abortRef.current?.abort();
  };

  // Re-send the last user message after a failure. The failed assistant bubble
  // (the last message) is dropped from history and reused for the new reply.
  const handleRetry = () => {
    if (isLoading || !lastUserMessageRef.current) return;

    const history = [...messages];
    let assistantId: string;
    const last = history[history.length - 1];
    if (last && last.role === "assistant") {
      assistantId = last.id;
      history.pop();
    } else {
      assistantId = createMessageId();
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: "assistant", content: "" },
      ]);
    }

    setError(false);
    const requestMessages = history.map((m) => ({
      role: m.role,
      content: m.content,
    }));
    doSend(requestMessages, assistantId);
  };

  const toggleSize = () => {
    setSize(size === "compact" ? "expanded" : "compact");
  };

  // Widget positioning: lifts above the mobile keyboard and home-indicator.
  // Falls back to the Tailwind height classes until the viewport effect runs.
  const bottomStyle = `calc(1.5rem + ${viewport.offset}px + env(safe-area-inset-bottom, 0px))`;
  const heightStyle =
    viewport.height > 0
      ? `min(${size === "compact" ? "480px" : "640px"}, calc(${viewport.height}px - 6rem))`
      : undefined;

  /* Embedded mode — integrated chat inside the sales-agent page */
  if (embedded) {
    return (
      <div className="flex h-[500px] flex-col rounded-xl border border-slate-200 bg-white shadow-sm">
        {/* Messages Area */}
        <div
          ref={scrollRef}
          className="flex-1 space-y-4 overflow-y-auto overscroll-y-contain p-4"
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "assistant" && (
                <div className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center overflow-hidden rounded-full">
                  <Image
                    src={productImage || "/doctor-chatbot.jpg"}
                    alt="Praxmed AI Assistant"
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                  message.role === "user"
                    ? "rounded-tr-sm bg-slate-100 text-slate-900"
                    : "rounded-tl-sm bg-slate-50 text-slate-700"
                }`}
              >
              {renderMessageContent(message.content)}
            </div>
              {message.role === "user" && (
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                  <User className="h-4 w-4 text-slate-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Error banner */}
        {error && (
          <div className="flex items-center gap-2 border-t border-red-100 bg-red-50 px-3 py-2">
            <span className="flex-1 text-xs text-red-600">
              Connection lost — your message did not go through.
            </span>
            <button
              onClick={handleRetry}
              className="flex items-center gap-1 rounded-md bg-red-600 px-2.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-red-700"
            >
              <RotateCcw className="h-3 w-3" />
              Retry
            </button>
          </div>
        )}

        {/* Input Area */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex items-center gap-2 border-t border-slate-200 p-3"
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about books, audiobooks, pricing..."
            disabled={isLoading}
            className="flex-1 border-0 bg-slate-50 px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0B8288] disabled:cursor-not-allowed sm:text-sm"
          />
          <button
            type="button"
            onClick={() =>
              isLoading ? handleStop() : formRef.current?.requestSubmit()
            }
            disabled={!isLoading && !input.trim()}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#0B8288] to-[#1A9D9D] text-white transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label={isLoading ? "Stop generating" : "Send message"}
          >
            {isLoading ? (
              <Square className="h-4 w-4" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </button>
        </form>
      </div>
    );
  }

  /* Floating widget mode — always render on all pages */
  if (minimized) {
    return (
      <div className="fixed right-6 z-50" style={{ bottom: bottomStyle }}>
        <button
          onClick={() => setMinimized(false)}
          className="flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0B8288] to-[#1A9D9D] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="h-5 w-5 animate-bounce" />
          <span className="hidden sm:inline">Customer Service 24/7</span>
        </button>
      </div>
    );
  }

  return (
    <div
      className={`fixed right-6 z-50 flex flex-col rounded-2xl border border-slate-200 bg-white shadow-[0_24px_60px_rgba(21,48,71,0.12)] transition-all duration-300 ${
        size === "compact"
          ? "h-[480px] w-[min(384px,calc(100vw-1.5rem))]"
          : "h-[640px] w-[min(640px,calc(100vw-1.5rem))]"
      }`}
      style={{
        bottom: bottomStyle,
        height: heightStyle,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between rounded-t-xl bg-gradient-to-r from-[#0B8288] to-[#1A9D9D] px-4 py-3 text-white">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/20">
            <Image
              src={productImage || "/doctor-chatbot.jpg"}
              alt="Praxmed AI Assistant"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold">Praxmed Publishing</div>
            <div className="text-xs opacity-80">
              Customer Service • 24/7 Live
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={toggleSize}
            className="rounded-lg p-1.5 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
            aria-label={size === "compact" ? "Expand" : "Minimize"}
          >
            {size === "compact" ? (
              <Maximize2 className="h-4 w-4" />
            ) : (
              <Minimize2 className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={() => setMinimized(true)}
            className="rounded-lg p-1.5 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 space-y-4 overflow-y-auto overscroll-y-contain p-4"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.role === "assistant" && (
              <div className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center overflow-hidden rounded-full">
                <Image
                  src={productImage || "/doctor-chatbot.jpg"}
                  alt="Praxmed AI Assistant"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                message.role === "user"
                  ? "rounded-tr-sm bg-slate-100 text-slate-900"
                  : "rounded-tl-sm bg-slate-50 text-slate-700"
              }`}
            >
              {renderMessageContent(message.content)}
              {isLoading &&
                message.role === "assistant" &&
                message.id === messages[messages.length - 1]?.id && (
                  <div className="mt-2 flex items-center gap-1 text-slate-400">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400"></span>
                  </div>
                )}
            </div>
            {message.role === "user" && (
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                <User className="h-4 w-4 text-slate-600" />
              </div>
            )}
          </div>
        ))}

        {/* Suggested Questions */}
        {showSuggestions && !isLoading && (
          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold text-slate-500">
              Quick questions:
            </div>
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => handleSuggestedQuestion(q)}
                disabled={isLoading}
                className="rounded-lg border border-slate-200 px-3 py-2 text-left text-xs text-slate-700 transition-all hover:bg-slate-50 hover:border-[#0B8288]"
              >
                {q}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Error banner */}
      {error && (
        <div className="flex items-center gap-2 border-t border-red-100 bg-red-50 px-3 py-2">
          <span className="flex-1 text-xs text-red-600">
            Connection lost — your message did not go through.
          </span>
          <button
            onClick={handleRetry}
            className="flex items-center gap-1 rounded-md bg-red-600 px-2.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-red-700"
          >
            <RotateCcw className="h-3 w-3" />
            Retry
          </button>
        </div>
      )}

      {/* Input */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-slate-200 p-3"
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about our books or audiobooks..."
          disabled={isLoading}
          className="flex-1 border-0 bg-slate-50 px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0B8288] disabled:cursor-not-allowed sm:text-sm"
        />
        <button
          type="button"
          onClick={() =>
            isLoading ? handleStop() : formRef.current?.requestSubmit()
          }
          disabled={!isLoading && !input.trim()}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#0B8288] to-[#1A9D9D] text-white transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label={isLoading ? "Stop generating" : "Send message"}
        >
          {isLoading ? (
            <Square className="h-4 w-4" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </button>
      </form>
    </div>
  );
}
