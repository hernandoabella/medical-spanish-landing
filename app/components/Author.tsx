"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Author = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".author-card", {
        scrollTrigger: {
          trigger: ".author-card",
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(".logo-anim", {
        scrollTrigger: {
          trigger: ".logo-anim",
          start: "top 90%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.7)",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="w-full bg-[#fdfdfd] py-24 md:py-32 px-6 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo: Patrón de puntos médico sutil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#142B47 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-4xl mx-auto">
        <div className="author-card bg-white rounded-[2.5rem] p-8 md:p-20 shadow-[0_30px_100px_rgba(20,43,71,0.06)] border border-gray-100 relative">
          
          {/* Comilla decorativa para estilo editorial */}
          <div className="absolute top-10 left-10 text-9xl font-serif text-[#142B47]/5 leading-none select-none">
            “
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Wrapper */}
            <div className="logo-anim mb-12 relative group">
              <div className="absolute -inset-4 bg-[#142B47]/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
              <Image
                src="/logo.png"
                alt="PRAXMED Publishing"
                width={220}
                height={100}
                className="relative grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Content Body */}
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="w-12 h-1 bg-[#0B8288]/30 mx-auto rounded-full" />
              
              <p className="text-gray-600 leading-[1.8] text-xl md:text-2xl font-medium text-center italic">
                <span className="font-black text-[#142B47] not-italic">
                  PRAXMED Publishing
                </span>{" "}
                collaborates with medical educators and bilingual clinicians to
                create clear, practical, and clinically accurate resources for
                healthcare professionals.
              </p>

              <div className="flex justify-center gap-2 pt-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-[#142B47]/20 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Author;