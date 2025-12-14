"use client";

import {
  Stethoscope,
  GraduationCap,
  HeartPulse,
  Ambulance,
  UserRound,
  Users
} from "lucide-react";

const audiences = [
  { label: "Physicians", icon: Stethoscope },
  { label: "Residents", icon: GraduationCap },
  { label: "Nurses / Nurse Practitioners", icon: HeartPulse },
  { label: "Physician Assistants", icon: UserRound },
  { label: "Paramedics / EMTs", icon: Ambulance },
  { label: "Physical & Mental Health Therapists", icon: HeartPulse },
  { label: "Medical & PA Students", icon: GraduationCap },
  { label: "Public Health Workers", icon: Users }
];

const WhoItsFor = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0B316D] mb-12">
          🩺 Who This Book Is For
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-[#0B316D]/15 hover:shadow-md transition"
            >
              <item.icon className="w-8 h-8 text-[#002EC1] mb-4" />
              <p className="font-medium text-[#0B316D]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
