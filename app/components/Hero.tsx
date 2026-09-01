"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { FaAmazon, FaStar } from "react-icons/fa";
import { Headphones, BookOpen, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Professionals trained" },
  { icon: Headphones, value: "40", label: "Native audio tracks" },
  { icon: FaStar, value: "4.9/5", label: "Average rating" },
  { icon: BookOpen, value: "1,000+", label: "Glossary terms" },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.from(".book-img", {
        opacity: 0,
        scale: 0.92,
        y: 30,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.35,
      });

      gsap.from(".hero-chip", {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
        delay: 0.9,
      });

      gsap.from(".hero-stat", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.7,
      });

      gsap.to(".book-img", {
        y: -12,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Línea de acento superior */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0B8288] via-[#1A9D9D] to-[#D96B2B]" />

      {/* Patrón de puntos médico sutil */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#153047 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Resplandores de fondo */}
      <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(11,130,136,0.10),transparent_70%)] blur-2xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(217,107,43,0.08),transparent_70%)] blur-2xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center pt-14 pb-10 md:pt-24 md:pb-14">

        {/* Texto */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <div className="fade-up inline-flex items-center gap-2.5 self-start rounded-full border border-[#0B8288]/20 bg-[#0B8288]/5 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0B8288] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0B8288]" />
            </span>
            <span className="text-[11px] md:text-xs font-semibold tracking-wide text-[#0B8288] uppercase">
              The complete clinical Spanish guide
            </span>
          </div>

          <h1 className="fade-up text-[clamp(2.4rem,4.5vw,3.6rem)] font-black text-[#0F2137] leading-[1.04] tracking-tight">
            Communicate with
            <br />
            every patient,{" "}
            <span className="bg-gradient-to-r from-[#0B8288] to-[#1A9D9D] bg-clip-text text-transparent">
              confidently.
            </span>
          </h1>

          <p className="fade-up text-lg text-gray-500 leading-relaxed max-w-lg">
            Real clinical dialogues, essential vocabulary, and native
            pronunciation — built for busy healthcare professionals who want to
            connect with Spanish-speaking patients today.
          </p>

          <div className="fade-up flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <Link
              href="https://www.amazon.com/dp/B0G92L65ZB"
              className="btn-cta-primary bg-[#0F2137] hover:bg-[#0B8288]"
            >
              <FaAmazon className="w-4 h-4" />
              Get the Book on Amazon
            </Link>
            <Link
              href="#library"
              className="btn-cta-secondary border-slate-200 bg-white text-[#0F2137] hover:border-[#0B8288] hover:text-[#0B8288]"
            >
              Explore all books
            </Link>
          </div>

          <div className="fade-up flex items-center gap-2.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4 text-[#0B8288]" />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              <strong className="text-gray-800">4.9</strong> · 500+ professionals
              trained
            </span>
          </div>
        </div>

        {/* Libro */}
        <div className="relative flex items-center justify-center order-1 lg:order-2 py-6">
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-[radial-gradient(circle,rgba(11,130,136,0.14),transparent_65%)] blur-2xl pointer-events-none" />
          <div className="absolute w-[105%] h-[105%] rounded-full border border-[#0B8288]/10 pointer-events-none" />

          <img
            src="/book-mockupz.jpg"
            alt="Medical Spanish Book"
            className="book-img relative z-10 w-[70%] md:w-[62%] lg:w-[78%] max-w-[320px] h-auto object-contain"
            style={{ filter: "drop-shadow(0 30px 60px rgba(15,33,55,0.22))" }}
          />

          {/* Chip flotante: audio */}
          <div className="hero-chip absolute top-4 -left-2 md:top-10 md:left-0 z-20 flex items-center gap-2.5 rounded-xl bg-white/90 backdrop-blur px-3.5 py-2.5 shadow-[0_12px_32px_rgba(15,33,55,0.14)] border border-white">
            <div className="w-8 h-8 rounded-lg bg-[#0B8288]/10 flex items-center justify-center">
              <Headphones className="w-4 h-4 text-[#0B8288]" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#0F2137]">40 audio tracks</p>
              <p className="text-[10px] text-gray-500">Native pronunciation</p>
            </div>
          </div>

          {/* Chip flotante: glosario */}
          <div className="hero-chip absolute bottom-4 -right-1 md:bottom-10 md:right-0 z-20 flex items-center gap-2.5 rounded-xl bg-white/90 backdrop-blur px-3.5 py-2.5 shadow-[0_12px_32px_rgba(15,33,55,0.14)] border border-white">
            <div className="w-8 h-8 rounded-lg bg-[#D96B2B]/10 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-[#D96B2B]" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#0F2137]">1,000+ glossary</p>
              <p className="text-[10px] text-gray-500">Clinical terms</p>
            </div>
          </div>
        </div>
      </div>

      {/* Franja de estadísticas */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 pb-12 md:pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-[0_16px_40px_rgba(21,48,71,0.06)]">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="hero-stat flex flex-col items-center gap-1.5 bg-white px-4 py-6 text-center"
            >
              <Icon className="w-5 h-5 text-[#0B8288]" />
              <span className="text-2xl font-black text-[#0F2137]">{value}</span>
              <span className="text-xs text-gray-500 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
