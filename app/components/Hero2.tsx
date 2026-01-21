"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function AngerManagementSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Animación del libro (Entrada desde la izquierda con rotación)
      tl.from(".book-container", {
        x: -100,
        opacity: 0,
        duration: 1.5,
        rotate: -5,
      })
      // Animación del contenido de texto
      .from(".text-reveal > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      }, "-=1");

      // Floating sutil infinito para el libro
      gsap.to(".floating-book", {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-full min-h-screen flex items-center justify-center bg-[#FCFCFC] px-6 md:px-12 py-20 overflow-hidden relative"
    >
      {/* Elementos decorativos de fondo para un Light Mode "Genial" */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-[#142B47]/[0.02] -skew-x-12 translate-x-20" />
      
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        
        {/* Book Image Section - LADO IZQUIERDO */}
        <div className="book-container relative flex justify-center lg:justify-start order-2 lg:order-1">
          {/* Círculo de luz suave detrás del libro */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#142B47]/5 rounded-full blur-[100px]" />
          
          <div className="floating-book relative group transition-transform duration-700 ease-out">
            <img
              src="/book-mockup2.jpg"
              alt="Anger Management for Explosive Parents Book Cover"
              className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl rounded-r-2xl shadow-[20px_40px_80px_rgba(0,0,0,0.1)] group-hover:shadow-[20px_40px_100px_rgba(20,43,71,0.15)] transition-all duration-500"
            />
          </div>
        </div>

        {/* Text Content - LADO DERECHO */}
        <div className="text-reveal space-y-10 order-1 lg:order-2">
          <div className="space-y-6">
                        
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.95] tracking-tighter">
              Parent with <br />
              <span className="text-[#142B47] relative inline-block">
                Confidence
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9C118.957 4.47226 235.155 2.5 355 9" stroke="#142B47" strokeWidth="6" strokeLinecap="round" opacity="0.2"/>
                </svg>
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl font-medium">
              Stop yelling and start connecting. <strong className="text-gray-900">Anger Management for Explosive Parents</strong> is a practical, judgment-free guide to help you regain control, understand your triggers, and respond with patience—even in the most challenging moments.
            </p>
          </div>

          <ul className="space-y-5">
            {[
              "Identify emotional triggers before they explode",
              "Simple techniques to stop yelling in the moment",
              "How to repair emotional connections after conflict",
              "Break generational anger patterns for good",
              "Parent with firmness without fear, guilt, or rage"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-4 text-gray-700 group cursor-default">
                <span className="flex-shrink-0 w-7 h-7 bg-[#0B8288]/10 text-[#0B8288] rounded-full flex items-center justify-center font-bold text-sm transition-colors group-hover:bg-[#0B8288] group-hover:text-white">
                  ✓
                </span>
                <span className="text-lg md:text-xl font-semibold group-hover:text-[#142B47] transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="pt-6">
            <Link
              target="_blank"
              href="https://www.amazon.com/Praxmed-Publishing-ebook/dp/B0GGJ3GPDF"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#142B47] text-white text-xl font-bold rounded-2xl hover:bg-[#0B8288] transition-all duration-500 hover:scale-[1.05] shadow-[0_20px_40px_rgba(20,43,71,0.2)] hover:shadow-[0_20px_40px_rgba(11,130,136,0.3)] w-full sm:w-auto"
            >
              <span className="relative z-10">Get the Kindle Edition</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Indicador de profundidad decorativo inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent opacity-60" />
    </section>
  );
}