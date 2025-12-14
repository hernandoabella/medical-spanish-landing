"use client";

import { Headphones, Download, PlayCircle, Volume2, Repeat, CheckCircle, Clock, Smartphone, Car, UserCheck, Music } from "lucide-react";

const Bonus = () => {
  const audioFeatures = [
    {
      icon: <Volume2 className="w-5 h-5" />,
      title: "Real Clinical Dialogues",
      description: "Authentic conversations between providers and patients"
    },
    {
      icon: <PlayCircle className="w-5 h-5" />,
      title: "Essential Medical Phrases",
      description: "200+ most-used phrases in clinical settings"
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Native Pronunciation",
      description: "Recorded by native Spanish-speaking healthcare professionals"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Symptom-Based Questions",
      description: "Learn to ask about specific symptoms accurately"
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: "Emergency Commands",
      description: "Clear instructions for urgent situations"
    },
    {
      icon: <Repeat className="w-5 h-5" />,
      title: "Treatment Explanations",
      description: "How to explain procedures and medications"
    },
    {
      icon: <Music className="w-5 h-5" />,
      title: "System-Based Review",
      description: "Organized by medical specialty for easy learning"
    }
  ];

  const benefits = [
    "Improve accent and pronunciation",
    "Practice on the go - during commute or breaks",
    "Reinforce what you learn in the book",
    "Train your ear for real patient interactions",
    "Build confidence through repetition",
    "Learn at your own pace, anytime, anywhere"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#002EC1] to-[#0B316D] text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Headphones className="w-4 h-4" />
            FREE BONUS WITH BOOK PURCHASE
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            🎧 Audio Tracks – <span className="text-[#002EC1]">Free Download</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto font-semibold mb-8">
            Listen. Repeat. Master Clinical Spanish.
          </p>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As part of <strong>Medical Spanish for Healthcare Professionals – Intermediate Edition</strong>, 
            you get access to a complete audio library designed for medical communication.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Column - Audio Features */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Headphones className="w-6 h-6 text-[#002EC1]" />
                Complete Audio Library Includes:
              </h2>
              
              <div className="space-y-4">
                {audioFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#002EC1]/20 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="p-2 bg-[#002EC1]/10 rounded-lg group-hover:bg-[#002EC1]/20 transition-colors">
                      <div className="text-[#002EC1]">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Audio Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#002EC1] mb-1">6+</div>
                  <div className="text-sm text-gray-600">Hours of Audio</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#002EC1] mb-1">200+</div>
                  <div className="text-sm text-gray-600">Dialogues & Phrases</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#002EC1] mb-1">12</div>
                  <div className="text-sm text-gray-600">Medical Systems</div>
                </div>
              </div>
            </div>

            {/* Why Use Audio */}
            <div className="bg-gradient-to-r from-[#002EC1] to-[#0B316D] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Why Use the Audio Pack?</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Download & Preview */}
          <div className="space-y-8">
            {/* Download Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#002EC1] to-[#0B316D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Download the Audio Pack
                  </h3>
                  <p className="text-gray-600">
                    Instant access to all MP3 files in organized ZIP format
                  </p>
                </div>
                
                <button className="group relative w-full py-4 bg-gradient-to-r from-[#002EC1] to-[#0B316D] text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-[#002EC1]/30 hover:scale-[1.02] transition-all duration-300">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Download className="w-5 h-5" />
                    <span className="text-lg">Download Audio Tracks – MP3 ZIP</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B316D] to-[#002EC1] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <div className="mt-6 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Compatible with all devices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#002EC1]" />
                    <span>Lifetime access and updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Headphones className="w-4 h-4 text-[#002EC1]" />
                    <span>Professional quality recordings</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-gray-50 px-8 py-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Individual Value</span>
                  <span className="text-xl font-bold text-[#002EC1]">$35 Value</span>
                </div>
              </div>
            </div>

            {/* Preview Audio */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Preview Sample Audio
              </h3>
              
              <div className="space-y-6">
                {[
                  { title: "Emergency Room Dialogue", time: "1:24", type: "Normal Speed" },
                  { title: "Cardiac Symptoms Questions", time: "0:45", type: "Slow Speed" },
                  { title: "Medication Instructions", time: "1:12", type: "Normal Speed" }
                ].map((sample, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[#002EC1]/30 hover:shadow-sm transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <button className="w-12 h-12 bg-[#002EC1]/10 rounded-full flex items-center justify-center hover:bg-[#002EC1]/20 transition-colors">
                        <PlayCircle className="w-6 h-6 text-[#002EC1]" />
                      </button>
                      <div>
                        <h4 className="font-semibold text-gray-900">{sample.title}</h4>
                        <p className="text-sm text-gray-500">{sample.type}</p>
                      </div>
                    </div>
                    <div className="text-gray-500">{sample.time}</div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 py-3 border-2 border-[#002EC1] text-[#002EC1] font-semibold rounded-xl hover:bg-[#002EC1]/5 transition-colors">
                Listen to More Samples
              </button>
            </div>

            {/* Mobile Access */}
            <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#002EC1]/10 rounded-xl">
                  <Smartphone className="w-8 h-8 text-[#002EC1]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Mobile Friendly</h4>
                  <p className="text-sm text-gray-600">
                    Download to your phone and practice anytime, anywhere
                  </p>
                </div>
              </div>
            </div>

            {/* Car Practice */}
            <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#002EC1]/10 rounded-xl">
                  <Car className="w-8 h-8 text-[#002EC1]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Practice On-The-Go</h4>
                  <p className="text-sm text-gray-600">
                    Perfect for commute listening and repetition practice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-[#002EC1] to-[#0B316D] rounded-2xl p-10 text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Get the Complete Learning Package
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Book + Audio Pack + All Bonuses for one affordable price
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#002EC1] font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02] shadow-lg">
                Get Book + Audio Now
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/20">
                View Package Details
              </button>
            </div>
            <p className="text-sm opacity-80 mt-6">
              Audio Pack included FREE with book purchase • Instant digital delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonus;