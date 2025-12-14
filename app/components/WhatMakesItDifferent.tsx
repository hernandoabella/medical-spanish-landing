"use client";

import {
  CheckCircle,
  BookOpen,
  MessageSquare,
  Stethoscope,
  Languages,
  ListChecks,
  Clock
} from "lucide-react";

const features = [
  { text: "Real clinical cases", icon: Stethoscope },
  { text: "Authentic dialogues", icon: MessageSquare },
  { text: "Designed specifically for healthcare providers", icon: CheckCircle },
  { text: "Intermediate level—easy to follow, clinically accurate", icon: BookOpen },
  { text: "Includes pronunciation guidance", icon: Languages },
  { text: "Glossary of essential medical Spanish terms", icon: ListChecks },
  { text: "Organized for quick reference during patient encounters", icon: Clock }
];

const WhatMakesItDifferent = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0B316D] mb-14">
          What Makes This Book Different
        </h2>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl border border-[#0B316D]/15 hover:shadow-md transition"
            >
              <item.icon className="w-6 h-6 text-[#002EC1] flex-shrink-0 mt-1" />

              <p className="text-[#0B316D] font-medium leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesItDifferent;
