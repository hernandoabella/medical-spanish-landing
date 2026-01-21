"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  BookOpen,
  Users,
  Clock,
  Download,
  Mail,
  FileText,
  Volume2,
  GraduationCap,
  Sparkles,
  MessageCircle
} from "lucide-react";

const faqs = [
  {
    question: "Does the book include real clinical cases?",
    answer: "Yes! The book includes 3 detailed real clinical cases that strengthen practical learning. These cases cover: 1) Diabetic foot assessment and management, 2) Prenatal visit with complications, and 3) Post-operative follow-up with complication screening. Each case walks you through complete patient interactions from symptoms to treatment plans."
  },
  {
    question: "Does it include a glossary?",
    answer: "Yes—a complete glossary of over 1,000 essential medical Spanish terms and phrases organized by medical system. The glossary includes symptoms, anatomy, diagnoses, procedures, and treatment terms, all with phonetic pronunciation guides for easy learning."
  },
  {
    question: "Are the audio tracks included?",
    answer: "Yes—you receive free lifetime access to downloadable MP3 audio files featuring native Spanish-speaking healthcare professionals. The audio library includes pronunciation of all medical terms, complete dialogues from clinical scenarios, and both slow and normal-speed recordings for practice."
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getIconForFaq = (index: number) => {
    const question = faqs[index].question.toLowerCase();
    const iconClass = "w-6 h-6 transition-transform duration-500 group-hover:rotate-12";

    if (question.includes('case')) return <FileText className={iconClass} />;
    if (question.includes('glossary')) return <BookOpen className={iconClass} />;
    if (question.includes('audio')) return <Volume2 className={iconClass} />;
    return <HelpCircle className={iconClass} />;
  };

  return (
    <section className="py-24 bg-[#f8faff] relative overflow-hidden">
      {/* Círculos decorativos de fondo */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-[#002EC1]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Header Animado */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Common <span className="text-[#002EC1]">Questions</span>
          </h2>
        </div>

        {/* FAQ List con Efecto de Enfoque */}
        <div className="space-y-4 mb-20">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`group transition-all duration-500 rounded-[2rem] border-2 
                  ${isOpen
                    ? "bg-white border-[#002EC1] shadow-[0_20px_40px_rgba(0,46,193,0.08)] scale-[1.02]"
                    : "bg-white/50 border-gray-100 hover:border-blue-200 hover:bg-white"}`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-6 md:p-8 flex justify-between items-center text-left"
                >
                  <div className="flex items-center gap-6">
                    <div className={`p-4 rounded-2xl transition-all duration-500 
                      ${isOpen ? "bg-[#002EC1] text-white" : "bg-white text-[#002EC1] shadow-sm border border-gray-50"}`}>
                      {getIconForFaq(index)}
                    </div>
                    <h3 className={`text-xl font-bold transition-colors duration-300 
                      ${isOpen ? "text-gray-900" : "text-gray-600"}`}>
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`transition-all duration-500 rounded-full p-2 
                    ${isOpen ? "bg-gray-100 rotate-180" : "bg-gray-50 group-hover:bg-blue-50"}`}>
                    <ChevronDown className={`w-6 h-6 ${isOpen ? "text-[#002EC1]" : "text-gray-400"}`} />
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out 
                  ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-8 pb-8 md:pl-[104px] md:pr-12">
                    <div className="h-px bg-gray-100 mb-6" />
                    <p className="text-gray-500 text-lg leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;