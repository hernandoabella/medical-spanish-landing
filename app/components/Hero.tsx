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
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
      }, "-=1");

      gsap.to(".floating-book", {
        y: -20,
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
      /* Cambié h-screen por min-h-screen y ajusté el padding en mobile */
      className="relative w-full min-h-screen flex items-center bg-[#fdfdfd] overflow-hidden py-20 lg:py-0"
    >
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#142B47]/5 skew-x-[-6deg] translate-x-20 z-0 hidden lg:block" />

      <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 z-10">
        
        {/* Lado Izquierdo: Texto - Bajamos el tamaño de fuente en mobile */}
        <div className="hero-content lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 bg-[#0B8288]/10 text-[#0B8288] font-bold rounded-full text-xs md:text-sm tracking-widest uppercase">
              The Ultimate Medical Resource
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-900 leading-[0.9] tracking-tighter">
              Master <br />
              <span className="text-[#0B8288]">Medical</span> <br />
              <span className="relative inline-block">
                Spanish
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9C118.957 4.47226 235.155 2.5 355 9" stroke="#0B8288" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
          </div>

          <p className="mt-8 text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Bridge the gap between you and your patients. Learn <strong className="text-gray-900">practical clinical dialogues</strong> and essential vocabulary.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-10">
            <Link
              href="https://www.amazon.com/dp/B0G92L65ZB"
              className="w-full sm:w-auto px-10 py-5 bg-[#142B47] text-white text-lg md:text-xl font-bold rounded-full hover:bg-[#0B8288] transition-all duration-300 text-center shadow-xl hover:shadow-2xl active:scale-95"
            >
              Get the Book Now
            </Link>
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-gray-900 font-bold text-lg">4.9/5 Rating</span>
              <span className="text-gray-500 text-sm">from 500+ professionals</span>
            </div>
          </div>
        </div>

        {/* Lado Derecho: EL LIBRO - Ahora se ve completo en mobile */}
        <div className="hero-image-wrapper lg:col-span-5 flex items-center justify-center relative order-1 lg:order-2">
          {/* Brillo detrás ajustable */}
          <div className="absolute w-[80%] lg:w-[120%] aspect-square bg-[#0B8288]/15 rounded-full blur-[60px] lg:blur-[100px] -z-10" />
          
          <div className="floating-book w-[70%] md:w-[60%] lg:w-full max-w-[450px] perspective-[1000px]">
            <img
              src="/book-mockupz.jpg"
              alt="Medical Spanish Book"
              /* Añadí shadow-2xl directamente para reforzar el efecto de GSAP */
              className="w-full h-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.2)]"
            />
          </div>
        </div>

      </div>

      {/* Indicador de Scroll mejorado */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-20">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[1px] h-10 bg-gray-900" />
      </div>
    </section>
  );
}