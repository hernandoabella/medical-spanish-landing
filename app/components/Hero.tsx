"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
      })
      .from(".hero-image-wrapper", {
        x: 100,
        opacity: 0,
        duration: 1.5,
        rotateY: -20,
      }, "-=1");

      // Floating animation for the book
      gsap.to(".floating-book", {
        y: -30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] flex items-center bg-[#fdfdfd] overflow-hidden"
    >
      {/* Fondo decorativo Full Width */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#142B47]/5 skew-x-[-6deg] translate-x-20 z-0 hidden lg:block" />

      <div className="relative w-full h-full px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-0 z-10">
        
        {/* Lado Izquierdo: Texto (Ocupa 7 de 12 columnas) */}
        <div className="hero-content lg:col-span-7 flex flex-col justify-center space-y-8 py-10">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 bg-[#0B8288]/10 text-[#0B8288] font-bold rounded-full text-sm tracking-widest uppercase">
              The Ultimate Medical Resource
            </span>
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-black text-gray-900 leading-[0.95] tracking-tighter">
              Master <br />
              <span className="text-[#0B8288]">Medical</span> <br />
              <span className="relative">
                Spanish
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9C118.957 4.47226 235.155 2.5 355 9" stroke="#0B8288" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
            Bridge the gap between you and your patients. Learn <strong className="text-gray-900">practical clinical dialogues</strong> and essential vocabulary used in real-world hospitals.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <Link
              href="https://www.amazon.com/dp/B0G92L65ZB"
              className="w-full sm:w-auto px-12 py-5 bg-[#142B47] text-white text-xl font-bold rounded-full hover:bg-[#0B8288] transition-colors duration-300 text-center shadow-2xl shadow-[#142B47]/20"
            >
              Get the Book Now
            </Link>
            <div className="flex flex-col">
              <span className="text-gray-900 font-bold text-lg">4.9/5 Rating</span>
              <span className="text-gray-500 text-sm">from 500+ professionals</span>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Imagen (Ocupa 5 de 12 columnas) */}
        <div className="hero-image-wrapper lg:col-span-5 flex items-center justify-center relative">
          {/* Círculo de luz detrás del libro */}
          <div className="absolute w-[120%] aspect-square bg-[#0B8288]/10 rounded-full blur-[100px] -z-10" />
          
          <div className="floating-book w-full max-w-[500px] lg:max-w-none perspective-[1000px]">
            <img
              src="/book-mockupz.jpg"
              alt="Medical Spanish Book"
              className="w-full h-auto object-contain transform-gpu drop-shadow-[0_60px_60px_rgba(0,0,0,0.18)]"
            />
          </div>
        </div>

      </div>

      {/* Indicador de Scroll para "llenar" la altura visualmente */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gray-900 animate-pulse" />
      </div>
    </section>
  );
}