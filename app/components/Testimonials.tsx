"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import {
  FaUserMd,
  FaHospital,
  FaStar,
  FaStethoscope,
  FaQuoteLeft,
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
      className="bg-[#0F2137] py-24 relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#0B8288]/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#0B8288]/20 rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="testi-head text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
            <div className="flex items-center text-amber-300 gap-0.5">
              <FaStar className="w-4 h-4" />
              <FaStar className="w-4 h-4" />
              <FaStar className="w-4 h-4" />
              <FaStar className="w-4 h-4" />
              <FaStar className="w-4 h-4" />
            </div>
            <span className="text-white/80 text-sm font-medium">4.9/5 Average Rating</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Healthcare Professionals Are Saying
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Real feedback from doctors, nurses, and medical students who have improved their patient communication
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="testi-card bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-[box-shadow,translate] duration-300 group"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0B8288]/10 to-[#0B8288]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaQuoteLeft className="w-6 h-6 text-[#0B8288]" />
                </div>
              </div>

              <div className="relative mb-8">
                <p className="text-gray-700 leading-relaxed text-lg pl-4 border-l-2 border-[#0B8288]/20">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#0B8288]/20 to-transparent mb-6"></div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-[#0B8288]/20 rounded-full opacity-60 blur-sm"></div>
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={56}
                    height={56}
                    className="rounded-full relative z-10 border-2 border-white shadow-md"
                  />
                </div>

                <div>
                  <p className="font-bold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>

                  <div className="flex items-center gap-1 mt-1">
                    <div className="flex text-amber-400 gap-0.5">
                      <FaStar className="w-3 h-3" />
                      <FaStar className="w-3 h-3" />
                      <FaStar className="w-3 h-3" />
                      <FaStar className="w-3 h-3" />
                      <FaStar className="w-3 h-3" />
                    </div>
                    <span className="text-xs text-gray-400">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testi-trust mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10">
            <span className="text-white/60 text-sm font-medium">Trusted by professionals at</span>
            <div className="flex items-center gap-4 text-white/40">
              <FaHospital className="w-5 h-5" />
              <FaUserMd className="w-5 h-5" />
              <FaStethoscope className="w-5 h-5" />
              <span className="text-xs font-semibold text-white/30 tracking-wider">+ more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
