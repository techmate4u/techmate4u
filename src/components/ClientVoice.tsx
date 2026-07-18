"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  duration: string;
  videoBg: string;
  accentColor: string;
  videoSrc?: string;
  logoUrl?: string;
}

export default function ClientVoice() {
  const testimonials: Testimonial[] = [
    {
      name: "Dev Patel",
      role: "Founder, Sports Social",
      quote: '"Partnering with TechMate4u enabled us to scale our media platform. We saw a 150% growth in user engagement and community reach month-on-month after launch."',
      duration: "0:44",
      videoBg: "from-black to-slate-900",
      accentColor: "text-indigo-500",
      videoSrc: "/assets/TM4U_Testo_SOS(1).mp4",
      logoUrl: "/assets/sports-social-logo.svg",
    },
  ];

  const [inlinePlayingIdx, setInlinePlayingIdx] = useState<number | null>(null);

  return (
    <section id="client-voice" className="w-full relative z-20 overflow-hidden py-16 lg:py-24 minimalist-grid-section">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-fuchsia-500/5 to-cyan-500/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[-60px] w-64 h-64 opacity-40 hidden lg:block animate-[spin_60s_linear_infinite]">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-indigo-500/70">
            <path d="M 10,50 L 25,20 L 40,80 L 55,10 L 70,90 L 85,30 L 95,50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14 text-center flex flex-col items-center">
          <h2 className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            Hear directly from the leaders and founders who partnered with us to transform their digital operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {testimonials.map((test, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-3xl p-5 border shadow-xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full ${
                testimonials.length === 1 ? "md:col-start-2" : ""
              }`}
              style={{ borderColor: "color-mix(in srgb, var(--primary) 10%, transparent)", boxShadow: "0 15px 35px rgba(37,99,235,0.04)" }}
            >
              {/* Video/Audio Box */}
              <motion.div
                layout
                className={`w-full rounded-2xl relative overflow-hidden bg-black shadow-inner flex items-center justify-center mb-5 group transition-all duration-500 ease-in-out ${
                  inlinePlayingIdx === index ? "aspect-[9/16]" : "aspect-square"
                }`}
              >
                {test.videoSrc ? (
                  <>
                    <video
                      src={test.videoSrc}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                        inlinePlayingIdx === index ? "blur-0 scale-100" : "blur-[4px] scale-[1.02] opacity-70"
                      }`}
                      playsInline
                      preload="none"
                      controls={inlinePlayingIdx === index}
                      onClick={(e) => {
                        if (inlinePlayingIdx === index) {
                          e.stopPropagation();
                        }
                      }}
                      onPlay={() => setInlinePlayingIdx(index)}
                      onPause={() => setInlinePlayingIdx(null)}
                      onEnded={() => setInlinePlayingIdx(null)}
                    />

                    {inlinePlayingIdx !== index && (
                      <>
                        {test.logoUrl ? (
                          <div className="absolute inset-0 flex items-center justify-center z-10 p-10 pointer-events-none">
                            <img
                              src={test.logoUrl}
                              alt={`${test.name} Logo`}
                              className="max-h-[60%] max-w-[60%] object-contain"
                            />
                          </div>
                        ) : null}

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const videoEl = e.currentTarget.closest('.group')?.querySelector('video');
                              if (videoEl) {
                                videoEl.play().catch((err) => console.log(err));
                              }
                            }}
                            aria-label={`Play video testimonial from ${test.name}`}
                            className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-white/30 shadow-2xl cursor-pointer"
                          >
                            <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                          </button>
                        </div>

                        {/* Duration Badge */}
                        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm select-none z-10">
                          {test.duration}
                        </div>
                      </>
                    )}
                  </>
                ) : null}
              </motion.div>

              <div className="flex flex-col grow px-1">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex-grow">
                    <h3 className="text-base font-bold font-[family-name:var(--font-outfit)] tracking-tight text-[var(--text)] leading-tight">{test.name}</h3>
                    <p className="text-[10px] text-[var(--primary)] font-bold uppercase tracking-wider mt-1">{test.role}</p>
                  </div>
                  <span className="text-4xl font-serif leading-none select-none" style={{ color: "color-mix(in srgb, var(--primary) 18%, transparent)" }}>"</span>
                </div>
                <p className="text-[13px] leading-relaxed text-[var(--text-muted)] italic font-medium">{test.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
