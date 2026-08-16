"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaAmazon } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function AngerManagementSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".book-img", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
        opacity: 0,
        x: -30,
        duration: 1.1,
        ease: "power3.out",
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

  const points = [
    "Identify emotional triggers before they explode",
    "Simple techniques to stop yelling in the moment",
    "How to repair emotional connections after conflict",
    "Break generational anger patterns for good",
    "Parent with firmness without fear, guilt, or rage",
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-7rem)] flex items-center bg-white px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 lg:py-0">

        {/* Book */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-[#264C62]/6" />
            </div>
            <img
              src="/book-mockup2.jpg"
              alt="Anger Management for Explosive Parents"
              className="book-img relative z-10 w-full max-w-[340px] h-auto object-contain"
              style={{ filter: "drop-shadow(0 20px 40px rgba(15,33,55,0.15))" }}
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-7 order-2 lg:order-1">

          <div className="fade-up flex items-center gap-3">
            <div className="w-6 h-[2px] bg-[#264C62]" />
            <span className="text-[#264C62] text-xs font-semibold tracking-[0.2em] uppercase">
              Parenting Guide
            </span>
          </div>

          <h2 className="fade-up text-[clamp(2.4rem,5vw,3.8rem)] font-bold text-[#0F2137] leading-[1.05] tracking-tight">
            Parent with<br />
            <span className="text-[#264C62]">confidence.</span>
          </h2>

          <p className="fade-up text-gray-500 text-base leading-relaxed max-w-md">
            Stop yelling and start connecting. A practical, judgment-free guide to help you regain control, understand your triggers, and respond with patience — even in the most challenging moments.
          </p>

          <div className="fade-up w-12 h-[1px] bg-gray-200" />

          <ul className="fade-up flex flex-col gap-3">
            {points.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#264C62]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <div className="fade-up pt-2">
            <Link
              target="_blank"
              href="https://www.amazon.com/Praxmed-Publishing-ebook/dp/B0GGJ3GPDF"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0F2137] text-white text-sm font-semibold tracking-wide hover:bg-[#264C62] transition-colors duration-300 rounded-sm"
            >
              <FaAmazon className="w-4 h-4" />
              Get on Amazon
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}