"use client";

import { CheckCircle, BookOpen, Users, Heart, Award, Target, FileText } from "lucide-react";

const AboutBook = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-[#002EC1]/10 text-[#002EC1] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" />
            Essential Resource for Healthcare
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Medical Spanish for Healthcare Professionals
            <span className="block text-2xl md:text-3xl text-[#002EC1] mt-3">
              Intermediate Edition
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master clinical communication through real-world dialogues and
            essential medical phrases designed for actual practice.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-[#002EC1] mb-2">200+</div>
            <div className="text-gray-600">Clinical Dialogues</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-[#002EC1] mb-2">12</div>
            <div className="text-gray-600">Medical Systems Covered</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-[#002EC1] mb-2">3</div>
            <div className="text-gray-600">Real Clinical Cases</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-[#002EC1] mb-2">1000+</div>
            <div className="text-gray-600">Essential Terms</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Core Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#002EC1]/20 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#002EC1]/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#002EC1]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real Clinical Dialogues</h3>
              <p className="text-gray-600 mb-4">
                Authentic patient interactions covering history taking, physical exams,
                emergencies, diagnostics, treatment plans, and informed consent.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-[#002EC1] rounded-full"></div>
                  History & Physical Exams
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-[#002EC1] rounded-full"></div>
                  Emergency Scenarios
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-[#002EC1] rounded-full"></div>
                  Diagnostic Conversations
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#002EC1]/20 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#0B316D]/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-[#0B316D]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">System-Based Coverage</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive medical systems coverage with specialized phrases
                and questions for each specialty.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Respiratory', 'Cardiovascular', 'GI', 'Neuro', 'OB/GYN', 'MSK'].map((system) => (
                  <div
                    key={system}
                    className="bg-[#002EC1]/5 px-3 py-2 rounded-lg text-sm text-[#0B316D] font-medium hover:bg-[#002EC1]/10 transition-colors"
                  >
                    {system}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#002EC1]/20 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#002EC1]/10 to-[#0B316D]/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-[#002EC1]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Practical Clinical Cases</h3>
              <p className="text-gray-600 mb-4">
                Apply your knowledge with three detailed real-world cases
                including symptoms, diagnostics, and treatment discussions.
              </p>
              <div className="space-y-3">
                {['Dengue Fever', 'Diabetic Foot', 'Pregnancy Complications'].map((caseName, idx) => (
                  <div key={caseName} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#002EC1]/10 rounded-lg flex items-center justify-center text-[#002EC1] font-semibold">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700 font-medium">{caseName}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Features */}
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Target className="w-7 h-7 text-[#002EC1]" />
                Core Learning Features
              </h3>
              <div className="space-y-6">
                <Feature
                  title="Pronunciation Guide"
                  description="Easy phonetic support with audio references for all dialogues and key medical terms."
                />
                <Feature
                  title="Complete Glossary"
                  description="1,000+ essential medical terms covering symptoms, anatomy, diagnoses, and procedures."
                />
                <Feature
                  title="Treatment Explanations"
                  description="Clear language for explaining medications, dosages, warnings, and side effects."
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <FileText className="w-7 h-7 text-[#002EC1]" />
                Professional Benefits
              </h3>
              <div className="space-y-6">
                <Feature
                  title="Enhanced Patient Trust"
                  description="Build stronger relationships through clear, compassionate communication."
                />
                <Feature
                  title="Reduced Medical Errors"
                  description="Accurate understanding of symptoms and treatment compliance."
                />
                <Feature
                  title="Cultural Competence"
                  description="Navigate healthcare conversations with cultural sensitivity and awareness."
                />
              </div>
            </div>
          </div>

          {/* Target Audience */}
          <div className="bg-gradient-to-r from-[#002EC1] to-[#0B316D] rounded-2xl p-10 text-white mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6">Who This Book Is For</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Doctors', 'Nurses', 'Medical Students', 'Therapists', 'PAs/NPs', 'EMTs/Paramedics', 'Public Health', 'Interpreters'].map((role) => (
                  <div
                    key={role}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="text-lg font-semibold">{role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl p-10 border border-[#002EC1]/20 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Start Improving Patient Communication Today
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Join thousands of healthcare professionals who have transformed their
                Spanish communication skills and patient outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/buy"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#002EC1] to-[#0B316D] text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-[#002EC1]/90 hover:to-[#0B316D]/90 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  <BookOpen className="w-5 h-5" />
                  Buy the Book
                </a>
                <a
                  href="/preview"
                  className="inline-flex items-center justify-center gap-3 bg-white text-[#002EC1] px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all border-2 border-[#002EC1]/20 hover:border-[#002EC1]/40"
                >
                  Preview Sample Chapter
                </a>
              </div>
              <p className="text-gray-500 text-sm mt-6">
                Instant digital download + optional print edition
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ title, description }: { title: string; description: string }) => (
  <div className="flex gap-4 group">
    <div className="p-1 bg-[#002EC1]/10 rounded-full group-hover:bg-[#002EC1]/20 transition-colors">
      <CheckCircle className="w-6 h-6 text-[#002EC1] flex-shrink-0" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-[#002EC1] transition-colors">
        {title}
      </h4>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  </div>
);

export default AboutBook;