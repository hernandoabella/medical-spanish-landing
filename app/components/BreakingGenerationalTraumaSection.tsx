"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function BreakingGenerationalTraumaSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".trauma-fade-up", {
        y: 28,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.from(".trauma-book-img", {
        opacity: 0,
        x: -40,
        duration: 1.15,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.to(".trauma-book-img", {
        y: -10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const points = [
    { text: "Recognize inherited survival patterns before they shape your parenting", color: "#0B8288" },
    { text: "Understand how unresolved trauma affects your reactions at home", color: "#D96B2B" },
    { text: "Build healthier responses rooted in safety, repair, and connection", color: "#264C62" },
    { text: "Use science-based tools to interrupt cycles instead of repeating them", color: "#0B8288" },
    { text: "Raise a freer generation with more calm, trust, and emotional resilience", color: "#D96B2B" },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen overflow-hidden bg-[#F4FBFA] px-6 md:px-12"
    >
      <div className="mx-auto grid min-h-screen max-w-5xl grid-cols-1 items-center gap-16 py-24 lg:grid-cols-2 lg:py-0">
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <div
              className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px] opacity-25 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 40% 50%, #0B8288 0%, #264C62 45%, #D96B2B 100%)",
              }}
            />

            <div
              className="absolute top-1/2 left-1/2 h-[105%] w-[105%] -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{ borderColor: "#0B828822" }}
            />

            <img
              src="/breaking-generational-trauma-for-parents.jpg"
              alt="Breaking Generational Trauma for Parents by M. Eliza Rowen"
              className="trauma-book-img relative z-10 w-full max-w-[360px] object-contain"
              style={{
                filter:
                  "drop-shadow(0 24px 48px rgba(38,76,98,0.18)) drop-shadow(0 6px 16px rgba(217,107,43,0.12))",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="trauma-fade-up flex items-center gap-3">
            <div className="h-[2px] w-6 bg-[#0B8288]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B8288]">
              Science-Based Parenting Guide
            </span>
          </div>

          <div className="trauma-fade-up">
            <h2
              className="font-black leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(2.6rem,5.5vw,4rem)" }}
            >
              <span className="text-[#264C62]">Breaking</span>{" "}
              <span className="text-[#264C62]">Generational</span>
              <br />
              <span className="text-[#0B8288]">Trauma</span>{" "}
              <span className="text-[#264C62]">for Parents</span>
            </h2>
          </div>

          <p className="trauma-fade-up max-w-md text-base leading-relaxed text-[#49606B]">
            A science-based guide to healing the past and raising a freer generation.
            This book helps parents understand inherited emotional patterns, respond with
            more intention, and create a safer family dynamic at home.
          </p>

          <div className="trauma-fade-up flex items-center gap-3">
            <div className="h-[1px] w-10 bg-[#D96B2B]/40" />
            <div className="h-[1px] w-6 bg-[#264C62]/30" />
            <div className="h-[1px] w-4 bg-[#0B8288]/25" />
          </div>

          <ul className="trauma-fade-up flex flex-col gap-3">
            {points.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-[2px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${item.color}18` }}
                >
                  <svg
                    className="h-3 w-3"
                    style={{ color: item.color }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed text-[#425660]">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="trauma-fade-up flex items-center gap-5 pt-2">
            <Link
              target="_blank"
              href="https://www.amazon.com/-/es/gp/product/B0FNX6ZC6C"
              className="inline-flex items-center gap-2 rounded-sm bg-[#264C62] px-7 py-3.5 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:bg-[#0B8288]"
            >
              Get the Book
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
