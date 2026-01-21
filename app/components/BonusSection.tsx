"use client";

import { useState, useEffect, useRef } from "react";
import { Headphones, Download, CheckCircle, Volume2, PlayCircle, Smartphone, Car, Brain, Music, ShieldCheck } from "lucide-react";
import gsap from "gsap";

const AudioDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [currentFile, setCurrentFile] = useState("");
  const progressRef = useRef(null);
  const containerRef = useRef(null);

  // Animación de entrada
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".audio-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
      
      // Animación de ondas de audio decorativas
      gsap.to(".audio-bar", {
        scaleY: 2,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
        ease: "sine.inOut"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const audioFeatures = [
    "Real clinical dialogues",
    "Essential medical phrases",
    "Native pronunciation",
    "Symptom-based questions",
    "Emergency commands",
    "Treatment explanations",
    "System-based review questions",
  ];

  const benefits = [
    "Improve accent and pronunciation",
    "Practice anytime, anywhere",
    "Reinforce what you learn in the book",
    "Train your ear for real patient interactions",
  ];

  const handleDownloadAll = async () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    setCurrentFile("");

    const totalFiles = 40;
    
    for (let i = 1; i <= totalFiles; i++) {
      const fileName = `AUDIO-TRACK-${i}.opus`;
      const fileUrl = `/audio/${fileName}`;
      
      try {
        setCurrentFile(`Downloading: ${fileName}`);
        
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        const progress = Math.round((i / totalFiles) * 100);
        setDownloadProgress(progress);
        
        await new Promise(resolve => setTimeout(resolve, 300));
        
      } catch (error) {
        console.error(`Failed to download ${fileName}:`, error);
        setCurrentFile(`Failed: ${fileName}`);
      }
    }

    setIsDownloading(false);
    setDownloadProgress(100);
    setCurrentFile("All files downloaded!");
    
    setTimeout(() => {
      setDownloadProgress(0);
      setCurrentFile("");
    }, 2000);
  };

  return (
    <section ref={containerRef} className="w-full bg-[#0a0a0a] py-20 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        <div className="audio-card bg-[#111] rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-0">
            
            {/* Panel Izquierdo: Info */}
            <div className="lg:col-span-7 p-8 md:p-12 space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-[#0B8288]/20 text-[#0B8288] px-4 py-2 rounded-full border border-[#0B8288]/30">
                  <Headphones className="w-4 h-4" />
                  <span className="text-xs font-bold tracking-widest uppercase">AUDIO LIBRARY</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white italic">
                  SYNC YOUR <span className="text-[#0B8288]">KNOWLEDGE.</span>
                </h2>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {audioFeatures.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0B8288]/10 flex items-center justify-center border border-[#0B8288]/20 group-hover:bg-[#0B8288]/30 transition-colors">
                      <CheckCircle className="w-3.5 h-3.5 text-[#0B8288]" />
                    </div>
                    <span className="text-gray-400 text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="pt-8 border-t border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-5 h-5 text-[#0B8288]" />
                  <h3 className="text-xl font-bold text-white">Why Use the Audio Library?</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#0B8288] rounded-full" />
                      <span className="text-gray-500 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Panel Derecho: Engine de Descarga */}
            <div className="lg:col-span-5 bg-white/5 p-8 md:p-12 flex flex-col justify-center border-l border-white/5 relative">
              <div className="absolute top-0 right-0 p-8 flex gap-1 opacity-20 h-12 items-end">
                {[1,2,3,4].map(i => <div key={i} className="audio-bar w-1 bg-[#0B8288] rounded-full h-4" />)}
              </div>

              <div className="space-y-8 relative z-10">
                <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 shadow-inner">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-14 h-14 bg-[#0B8288] rounded-2xl flex items-center justify-center shadow-lg shadow-[#0B8288]/20">
                      <Volume2 className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Complete Audio Library</h3>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">40 Tracks • HQ Opus</p>
                    </div>
                  </div>

                  {/* Progress Section */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black text-[#0B8288] uppercase tracking-tighter">
                        {isDownloading ? currentFile : "SYSTEM READY"}
                      </span>
                      {isDownloading && <span className="text-white font-mono text-xl">{downloadProgress}%</span>}
                    </div>
                    
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#0B8288] to-[#142B47] transition-all duration-300 shadow-[0_0_15px_rgba(11,130,136,0.4)]"
                        style={{ width: `${downloadProgress}%` }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleDownloadAll}
                    disabled={isDownloading}
                    className="w-full mt-8 group relative overflow-hidden bg-white text-black py-5 rounded-2xl font-black text-lg transition-all active:scale-95 disabled:opacity-20"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isDownloading ? "DOWNLOADING..." : "DOWNLOAD ALL"}
                      {!isDownloading && <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />}
                    </span>
                    <div className="absolute inset-0 bg-[#0B8288] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                </div>

                {/* Device Support */}
                <div className="grid grid-cols-3 gap-2 py-4">
                  <div className="flex flex-col items-center gap-2 text-gray-600">
                    <Smartphone className="w-5 h-5" />
                    <span className="text-[10px] font-bold">MOBILE</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-gray-600 border-x border-white/5">
                    <Car className="w-5 h-5" />
                    <span className="text-[10px] font-bold">CARPLAY</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-gray-600">
                    <PlayCircle className="w-5 h-5" />
                    <span className="text-[10px] font-bold">OFFLINE</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-center text-gray-600 text-sm">
          Included with <span className="text-[#0B8288] font-bold">Medical Spanish for Healthcare Professionals</span>
        </p>
      </div>
    </section>
  );
};

export default AudioDownload;