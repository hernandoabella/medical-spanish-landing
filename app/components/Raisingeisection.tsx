"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function RaisingEISection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".book-img", {
        opacity: 0,
        x: 30,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.4,
      });

      gsap.to(".book-img", {
        y: -10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Cover palette: teal #1A7A8A, orange #E8773A, navy #1A3A5C
  const points = [
    { text: "Understand how children process emotions at each developmental stage", color: "#1A7A8A" },
    { text: "Build resilience and self-awareness in everyday situations", color: "#E8773A" },
    { text: "Strengthen communication without yelling or power struggles", color: "#1A3A5C" },
    { text: "Use positive discipline that teaches rather than punishes", color: "#1A7A8A" },
    { text: "Support empathy and emotional regulation that lasts a lifetime", color: "#E8773A" },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex items-center overflow-hidden px-6 md:px-12"
      style={{ backgroundColor: "#F0F8FA" }}
    >
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24 lg:py-0">

        {/* Text — left */}
        <div className="flex flex-col gap-6">

          <div className="fade-up flex items-center gap-3">
            <div className="w-6 h-[2px]" style={{ backgroundColor: "#1A7A8A" }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#1A7A8A" }}>
              Secure Parenting Blueprint
            </span>
          </div>

          <h2
            className="fade-up font-black leading-[1.0] tracking-tight"
            style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)" }}
          >
            <span style={{ color: "#E8773A" }}>Raise</span>{" "}
            <span style={{ color: "#1A7A8A" }}>emotionally</span>
            <br />
            <span style={{ color: "#1A3A5C" }}>intelligent</span>{" "}
            <span style={{ color: "#1A7A8A" }}>kids.</span>
          </h2>

          <p
            className="fade-up text-base leading-relaxed max-w-md"
            style={{ color: "#3a4f5c" }}
          >
            Not about being a perfect parent — it's about understanding your child's emotions and responding with{" "}
            <strong style={{ color: "#1A3A5C" }}>confidence, calm, and consistency.</strong>{" "}
            Practical strategies that fit real family life.
          </p>

          <div className="fade-up flex items-center gap-2">
            <div className="h-[1px] w-10" style={{ backgroundColor: "#E8773A", opacity: 0.4 }} />
            <div className="h-[1px] w-6" style={{ backgroundColor: "#1A7A8A", opacity: 0.3 }} />
            <div className="h-[1px] w-4" style={{ backgroundColor: "#1A3A5C", opacity: 0.2 }} />
          </div>

          <ul className="fade-up flex flex-col gap-3">
            {points.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-[2px] w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: item.color + "18" }}
                >
                  <svg
                    className="w-3 h-3"
                    style={{ color: item.color }}
                    fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed" style={{ color: "#3a4f5c" }}>{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="fade-up flex items-center gap-5 pt-2">
            <Link
              target="_blank"
              href="https://www.amazon.com/Raising-Emotionally-Intelligent-Children-Strategies-ebook/dp/B0GKWC93RZ"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-white text-sm font-bold tracking-wide rounded-sm transition-all duration-300"
              style={{ backgroundColor: "#1A3A5C" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1A7A8A")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1A3A5C")}
            >
              Get the Book
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5" style={{ color: "#E8773A" }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs ml-1" style={{ color: "#5a7080" }}>
                <strong style={{ color: "#1A3A5C" }}>4.4</strong> · Verified readers
              </span>
            </div>
          </div>
        </div>

        {/* Book — right */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glow matching the cover's soft watercolor teal/orange */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[70px] opacity-25 pointer-events-none"
              style={{ background: "radial-gradient(circle at 40% 50%, #E8773A 0%, #1A7A8A 60%, #1A3A5C 100%)" }}
            />

            {/* Soft ring */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] rounded-full border"
              style={{ borderColor: "#1A7A8A22" }}
            />

            <img
              src="/raising.jpg"
              alt="Raising Emotionally Intelligent Children by M. Eliza Rowen"
              className="book-img relative z-10 w-full max-w-[360px] h-auto object-contain"
              style={{
                filter: "drop-shadow(0 24px 48px rgba(26,58,92,0.15)) drop-shadow(0 6px 16px rgba(232,119,58,0.1))",
              }}
            />

           
          </div>
        </div>

      </div>
    </section>
  );
}