"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { FaAmazon } from "react-icons/fa";

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
      className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-7rem)] flex items-center bg-white overflow-hidden"
    >
      {/* Línea de acento superior */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#0B8288]" />

      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 lg:py-0">

        {/* Libro — first on mobile */}
        <div className="flex items-center justify-center relative order-1">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-56 h-56 rounded-full bg-[#0B8288]/6" />
          </div>
          <img
            src="/book-mockupz.jpg"
            alt="Medical Spanish Book"
            className="book-img relative z-10 w-[60%] md:w-[50%] lg:w-[70%] max-w-[280px] h-auto object-contain"
            style={{ filter: "drop-shadow(0 20px 40px rgba(15,33,55,0.15))" }}
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-7 order-2">

<h1 className="fade-up text-[clamp(2rem,3.5vw,3rem)] font-bold text-[#0F2137] leading-[1.05] tracking-tight">
            Communicate with<br />
            every patient,<br />
            <span className="text-[#0B8288]">confidently.</span>
          </h1>

          <p className="fade-up text-[1.05rem] text-gray-500 leading-relaxed max-w-md">
            A practical guide for healthcare professionals. Real clinical dialogues,
            essential vocabulary, and pronunciation tools — built for busy clinicians.
          </p>

          <div className="fade-up w-12 h-[1px] bg-gray-200" />

          <div className="fade-up flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
            <Link
              href="https://www.amazon.com/dp/B0G92L65ZB"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0F2137] text-white text-sm font-semibold tracking-wide hover:bg-[#0B8288] transition-colors duration-300 rounded-sm sm:inline-flex"
            >
              <FaAmazon className="w-4 h-4" />
              Get the Book
            </Link>

            <div className="flex items-center gap-2 justify-center">
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

      </div>
    </section>
  );
}