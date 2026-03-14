"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center bg-white overflow-hidden"
    >
      {/* Línea de acento superior */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#0B8288]" />

      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24 lg:py-0 min-h-screen">

        {/* Texto */}
        <div className="flex flex-col gap-7">

          <div className="fade-up flex items-center gap-3">
            <div className="w-6 h-[2px] bg-[#0B8288]" />
            <span className="text-[#0B8288] text-xs font-semibold tracking-[0.2em] uppercase">
              Medical Spanish
            </span>
          </div>

          <h1 className="fade-up text-[clamp(2.8rem,5.5vw,4.5rem)] font-bold text-[#0F2137] leading-[1.05] tracking-tight">
            Communicate with<br />
            every patient,<br />
            <span className="text-[#0B8288]">confidently.</span>
          </h1>

          <p className="fade-up text-[1.05rem] text-gray-500 leading-relaxed max-w-md">
            A practical guide for healthcare professionals. Real clinical dialogues,
            essential vocabulary, and pronunciation tools — built for busy clinicians.
          </p>

          <div className="fade-up w-12 h-[1px] bg-gray-200" />

          <div className="fade-up flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Link
              href="https://www.amazon.com/dp/B0G92L65ZB"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0F2137] text-white text-sm font-semibold tracking-wide hover:bg-[#0B8288] transition-colors duration-300 rounded-sm"
            >
              Get the Book
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-[#0B8288]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                <strong className="text-gray-800">4.9</strong> · 500+ professionals
              </span>
            </div>
          </div>
        </div>

        {/* Libro */}
        <div className="flex items-center justify-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 rounded-full bg-[#0B8288]/6" />
          </div>
          <img
            src="/book-mockupz.jpg"
            alt="Medical Spanish Book"
            className="book-img relative z-10 w-[70%] md:w-[55%] lg:w-[80%] max-w-[360px] h-auto object-contain"
            style={{ filter: "drop-shadow(0 20px 40px rgba(15,33,55,0.15))" }}
          />
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <div className="w-[1px] h-8 bg-gray-300" />
        <span className="text-[9px] tracking-[0.3em] uppercase text-gray-400 font-medium">Scroll</span>
      </div>
    </section>
  );
}