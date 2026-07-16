"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { FaAmazon } from "react-icons/fa";

export default function AnxiousAttachmentSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 28,
        opacity: 0,
        duration: 1,
        stagger: 0.13,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.from(".book-img", {
        opacity: 0,
        x: 40,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.to(".book-img", {
        y: -12,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const points = [
    { text: "Understand your own attachment patterns as a parent", color: "#11756C" },
    { text: "Calm your nervous system during high-stress moments", color: "#E7650D" },
    { text: "Respond with intention instead of reacting with fear", color: "#514189" },
    { text: "Build daily rituals that create emotional safety at home", color: "#E96511" },
    { text: "Break anxious cycles before they pass to your child", color: "#11756C" },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-7rem)] flex items-center overflow-hidden px-4 md:px-12"
      style={{ backgroundColor: "#FBF7F0" }}
    >
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 lg:py-0">

        {/* ── Book — first on mobile ── */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[70px] opacity-30 pointer-events-none"
              style={{ background: "radial-gradient(circle at 40% 50%, #E7650D 0%, #514189 45%, #11756C 100%)" }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] rounded-full border"
              style={{ borderColor: "#E7650D22" }}
            />
            <img
              src="/anxius.jpg"
              alt="Anxious Attachment Workbook For Parents by M. Eliza Rowen"
              className="book-img relative z-10 w-full max-w-[360px] h-auto object-contain"
              style={{
                filter: "drop-shadow(0 24px 48px rgba(81,65,137,0.18)) drop-shadow(0 6px 16px rgba(231,101,13,0.12))",
              }}
            />
          </div>
        </div>

        {/* ── Text ── */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">

          <div className="fade-up flex items-center gap-3">
            <div className="w-6 h-[2px]" style={{ backgroundColor: "#11756C" }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#11756C" }}>
              Secure Parenting Blueprint
            </span>
          </div>

          <div className="fade-up">
            <h2
              className="font-black leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(2.6rem,5.5vw,4rem)" }}
            >
              <span style={{ color: "#E7650D" }}>Anxious</span>{" "}
              <span style={{ color: "#11756C" }}>about</span>
              <br />
              <span style={{ color: "#514189" }}>your parenting?</span>
            </h2>
          </div>

          <p
            className="fade-up text-base leading-relaxed max-w-md"
            style={{ color: "#5a4e42" }}
          >
            Stop worrying you're "messing up." This workbook helps you understand what's happening{" "}
            <strong style={{ color: "#0F2137" }}>inside you</strong> — so you can raise a child who feels{" "}
            <strong style={{ color: "#11756C" }}>safe, secure, and confident.</strong>
          </p>

          <div className="fade-up flex items-center gap-3">
            <div className="h-[1px] w-10" style={{ backgroundColor: "#E7650D", opacity: 0.4 }} />
            <div className="h-[1px] w-6" style={{ backgroundColor: "#514189", opacity: 0.3 }} />
            <div className="h-[1px] w-4" style={{ backgroundColor: "#11756C", opacity: 0.25 }} />
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
                <span className="text-sm leading-relaxed" style={{ color: "#4a4040" }}>{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="fade-up flex items-center gap-5 pt-2">
            <Link
              target="_blank"
              href="https://www.amazon.com/dp/B0GR68K3WM"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-white text-sm font-bold tracking-wide rounded-sm transition-all duration-300"
              style={{ backgroundColor: "#E7650D" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#11756C")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#E7650D")}
            >
              <FaAmazon className="w-4 h-4" />
              Get on Amazon
            </Link>

            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5" style={{ color: "#E7650D" }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs ml-1" style={{ color: "#8a7a6a" }}>
                <strong style={{ color: "#0F2137" }}>4.9</strong> · Readers love it
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}