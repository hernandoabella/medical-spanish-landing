"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Next.js?",
    answer: "Next.js is a React framework for building fast web applications."
  },
  {
    question: "Does it support SSR?",
    answer: "Yes, Next.js supports Server-Side Rendering, Static Generation, and more."
  },
  {
    question: "Is Tailwind required?",
    answer: "No, but Tailwind makes styling much faster and cleaner."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center text-[#0B316D]">
        ❓ Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className="border border-[#0B316D]/20 rounded-xl p-5 cursor-pointer bg-white hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-[#0B316D]">
                {faq.question}
              </h3>

              <span className="text-2xl font-bold text-[#002EC1]">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <p className="mt-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
