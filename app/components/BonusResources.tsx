"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const bonuses = [
  {
    title: "Anxious Attachment Workbook for Parents",
    description:
      "Fill-in exercises, reflection prompts, and guided practices to help you identify anxious patterns and build secure attachment with your child.",
    image: "/anxius.jpg",
    pdf: "/pdf-books/anxious-attachment-workbook.pdf",
    color: "#514189",
    icon: null,
    features: [
      "Attachment style self-assessment",
      "Daily reflection journaling prompts",
      "Coregulation practice exercises",
      "Trigger-identification worksheets",
    ],
  },
  {
    title: "30-Day Healing Journal",
    description:
      "A structured 30-day journal with daily prompts designed to help you process emotions, track patterns, and build new, healthier responses.",
    image: null,
    pdf: "/pdf-books/30-day-healing-journal.pdf",
    color: "#0B8288",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
      </svg>
    ),
    features: [
      "Daily emotional check-in format",
      "Pattern tracking worksheets",
      "Gratitude and reframing prompts",
      "Weekly reflection guide",
    ],
  },
  {
    title: "100 Healing Affirmations",
    description:
      "A printable collection of 100 carefully crafted affirmations for emotional wellness, self-compassion, and breaking generational patterns.",
    image: null,
    pdf: "/pdf-books/100-healing-affirmations.pdf",
    color: "#9B7A4D",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    features: [
      "Affirmations for self-compassion",
      "Parent-child connection phrases",
      "Morning and evening routines",
      "Printable card format",
    ],
  },
];

export default function BonusResources() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bonus-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0F2137] py-16 md:py-20 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[60%] rounded-full bg-[#0B8288]/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-[#514189]/5 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-[2px] bg-[#0B8288]" />
          <span className="text-[#0B8288] text-xs font-semibold tracking-[0.2em] uppercase">
            Free Resources
          </span>
        </div>

        <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-white leading-tight tracking-tight mb-3">
          Bonus Exercise Workbooks
        </h2>

        <p className="text-white/50 text-base max-w-2xl mb-14 leading-relaxed">
          Printable PDFs with exercises, journal prompts, and affirmations to support your parenting journey — free with any book purchase.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {bonuses.map((bonus) => (
            <a
              key={bonus.title}
              href={bonus.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="bonus-card group block"
            >
              <div
                className="relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-2xl hover:-translate-y-1"
                style={{ "--tw-shadow-color": `${bonus.color}30` } as React.CSSProperties}
              >
                {/* Header area */}
                {bonus.image ? (
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={bonus.image}
                      alt={bonus.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2137] via-[#0F2137]/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold"
                        style={{ color: bonus.color }}
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                        Free PDF
                      </span>
                    </div>
                  </div>
                ) : (
                  <div
                    className="relative h-44 flex items-center justify-center overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${bonus.color}15 0%, ${bonus.color}05 50%, ${bonus.color}10 100%)`,
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-16 h-16 rounded-2xl transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${bonus.color}30, ${bonus.color}10)`,
                        color: bonus.color,
                      }}
                    >
                      {bonus.icon}
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold"
                        style={{ color: bonus.color }}
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                        Free PDF
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:opacity-90 transition-opacity">
                    {bonus.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-5">
                    {bonus.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {bonus.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-white/40">
                        <svg className="w-3.5 h-3.5 mt-0.5 shrink-0" viewBox="0 0 20 20" fill={bonus.color}>
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <span
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300"
                    style={{
                      backgroundColor: `${bonus.color}20`,
                      color: bonus.color,
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Free PDF
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/30 text-sm">
            These bonuses are included with any book purchase. Download and keep forever.
          </p>
        </div>
      </div>
    </section>
  );
}
