"use client";

import Image from "next/image";
import {
  FaUserMd,
  FaHospital,
  FaStar,
  FaStethoscope,
  FaPills,
  FaHeartbeat,
  FaQuoteLeft,
} from "react-icons/fa";
import { GiMedicinePills, GiHealthPotion } from "react-icons/gi";

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
  return (
    <section className="bg-[#0B316D] py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
            <div className="flex items-center text-amber-300">
              <FaStar className="w-4 h-4" />
              <FaStar className="w-4 h-4" />
              <FaStar className="w-4 h-4" />
              <FaStar className="w-4 h-4" />
              <FaStar className="w-4 h-4" />
            </div>
            <span className="text-white font-medium">4.9/5 Average Rating</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Healthcare Professionals Are Saying
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Real feedback from doctors, nurses, and medical students who have improved their patient communication
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0B316D]/10 to-[#0B316D]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaQuoteLeft className="w-6 h-6 text-[#0B316D]" />
                </div>
              </div>

              {/* Quote with quote marks */}
              <div className="relative mb-8">

                <p className="text-gray-700 leading-relaxed text-lg pl-4">
                  {item.quote}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#0B316D]/20 to-transparent mb-6"></div>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-[#0B316D]/20 rounded-full opacity-60 blur-sm"></div>
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={56}
                    height={56}
                    className="rounded-full relative z-10 border-2 border-white shadow-md"
                  />
                </div>

                <div>
                  <p className="font-bold text-[#0B316D]">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-1">
                    <div className="flex text-amber-400">
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

        {/* Trust indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
            <span className="text-white text-sm font-medium">Trusted by professionals at</span>
            <div className="flex items-center gap-4">
              <FaHospital className="w-5 h-5 text-white" />
              <FaUserMd className="w-5 h-5 text-white" />
              <FaStethoscope className="w-5 h-5 text-white" />
              <FaPills className="w-5 h-5 text-white" />
              <FaHeartbeat className="w-5 h-5 text-white" />
              <GiMedicinePills className="w-5 h-5 text-white" />
              <GiHealthPotion className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;