"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import {
  FaStar,
  FaQuoteLeft,
  FaHospital,
  FaUserMd,
  FaStethoscope,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Dr. Pedro Gomez",
    role: "Family Medicine Physician",
    quote:
      "This book helped me communicate confidently with Spanish-speaking patients. The clinical cases are incredibly practical.",
    avatar: "/doc1.jpg"
  },
  {
    name: "Dr. Luis Hernández",
    role: "Emergency Medicine",
    quote:
      "The glossary and audio tracks make a huge difference. I use it almost every day during my shifts.",
    avatar: "/doc2.jpg"
  },
  {
    name: "Sarah Mitchell",
    role: "Medical Student",
    quote:
      "Clear explanations, real examples, and excellent pronunciation guides. Highly recommended.",
    avatar: "/doc4.jpg"
  }
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testi-head", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".testi-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".testi-trust", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom 92%",
          once: true,
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    // Recalcular posiciones cuando cargan las imágenes (evita animaciones
    // que nunca se disparan y dejan la sección invisible).
    const refresh = () => ScrollTrigger.refresh();
    refresh();
    const t = setTimeout(refresh, 500);
    window.addEventListener("load", refresh);

    return () => {
      ctx.revert();
      clearTimeout(t);
      window.removeEventListener("load", refresh);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0F2137] py-24 md:py-32 relative overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(11,130,136,0.12),transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(217,107,43,0.08),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="testi-head text-center mb-16">
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-5">
            <div className="flex items-center text-amber-300 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4" />
              ))}
            </div>
            <span className="text-white/80 text-sm font-medium">4.9/5 Average Rating</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            What Healthcare Professionals Are Saying
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base leading-relaxed">
            Real feedback from doctors, nurses, and medical students who have improved their patient communication
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="testi-card bg-white rounded-2xl p-7 md:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-[box-shadow,transform] duration-300 group flex flex-col"
            >
              <div className="mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0B8288]/10 to-[#0B8288]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaQuoteLeft className="w-5 h-5 text-[#0B8288]" />
                </div>
              </div>

              <div className="relative mb-6 flex-1">
                <p className="text-gray-700 leading-relaxed text-[15px] pl-4 border-l-2 border-[#0B8288]/20">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#0B8288]/20 to-transparent mb-5"></div>

              <div className="flex items-center gap-3.5">
                <div className="relative shrink-0">
                  <div className="absolute -inset-1 bg-[#0B8288]/20 rounded-full opacity-60 blur-sm"></div>
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-full relative z-10 border-2 border-white shadow-md"
                  />
                </div>

                <div>
                  <p className="font-bold text-gray-900 text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.role}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="flex text-amber-400 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-3 h-3" />
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-400">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testi-trust mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-3.5 rounded-xl border border-white/10">
            <span className="text-white/50 text-sm font-medium">Trusted by professionals at</span>
            <div className="flex items-center gap-5 text-white/30">
              <FaHospital className="w-5 h-5" />
              <FaUserMd className="w-5 h-5" />
              <FaStethoscope className="w-5 h-5" />
              <span className="text-xs font-semibold text-white/25 tracking-wider">+ more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
