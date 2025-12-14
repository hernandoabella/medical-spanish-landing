"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Dr. Emily Carter",
    role: "Family Medicine Physician",
    quote:
      "This book helped me communicate confidently with Spanish-speaking patients. The clinical cases are incredibly practical.",
    avatar: "/avatars/doctor1.jpg"
  },
  {
    name: "Dr. Luis Hernández",
    role: "Emergency Medicine",
    quote:
      "The glossary and audio tracks make a huge difference. I use it almost every day during my shifts.",
    avatar: "/avatars/doctor2.jpg"
  },
  {
    name: "Sarah Mitchell",
    role: "Medical Student",
    quote:
      "Clear explanations, real examples, and excellent pronunciation guides. Highly recommended.",
    avatar: "/avatars/doctor3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-[#0B316D] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          What Readers Are Saying
        </h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <p className="text-gray-600 mb-6 leading-relaxed">
                “{item.quote}”
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />

                <div>
                  <p className="font-semibold text-[#0B316D]">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
