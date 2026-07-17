"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, X, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    {
      name: "Sarah Chen",
      role: "VP Product, TechFlow Systems",
      quote: '"TechMate4u transformed our onboarding experience. Within 3 months, we saw a 67% improvement in user retention and doubled our free-to-paid conversion rate."',
      duration: "2:34",
      videoBg: "from-[#0f3575] to-[#1d4ed8]",
      accentColor: "text-blue-500",
    },
    {
      name: "Michael Roberts",
      role: "CEO, FinServe Solutions",
      quote: '"The team delivered enterprise-grade solutions while keeping us involved at every step. Their technical expertise and communication were exceptional."',
      duration: "3:12",
      videoBg: "from-[#0f766e] to-[#0d9488]",
      accentColor: "text-teal-500",
    },
  ];

  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [inlinePlayingIdx, setInlinePlayingIdx] = useState<number | null>(null);

  const activeTestimonial = activeIdx !== null ? testimonials[activeIdx] : null;

  const getSeconds = (durationStr: string) => {
    if (!durationStr.includes(":")) return 0;
    const [m, s] = durationStr.split(":").map(Number);
    return m * 60 + s;
  };

  const formatTime = (secs: number) => {
    if (!isFinite(secs) || secs < 0) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const totalSeconds = activeTestimonial ? getSeconds(activeTestimonial.duration) : 0;

  const getSubtitle = (idx: number, secs: number) => {
    const subs: { start: number; end: number; text: string }[][] = [
      // Dev Patel
      [
        { start: 0, end: 6, text: "Hello, my name is Dev Patel, and I am the founder of Sports Social." },
        { start: 6, end: 12, text: "We are a sports media management association." },
        { start: 12, end: 18, text: "When we wanted to build a modern platform to connect athletes and communities..." },
        { start: 18, end: 26, text: "...we partnered with TechMate4u to design and develop the entire web experience." },
        { start: 26, end: 34, text: "The results have been incredible—we saw a 150% growth in user engagement month-on-month." },
        { start: 34, end: 44, text: "Their engineering speed and design choices were outstanding. Work with them. Thank you!" },
      ],
      // Sarah Chen
      [
        { start: 0, end: 4, text: "Hi, I am Sarah Chen, VP of Product at TechFlow Systems." },
        { start: 4, end: 9, text: "Working with TechMate4u completely transformed our onboarding experience." },
        { start: 9, end: 15, text: "Within just 3 months of launch, we saw a 67% improvement in user retention..." },
        { start: 15, end: 20, text: "...and we successfully doubled our free-to-paid conversion rate!" },
        { start: 20, end: 26, text: "Their engineering speed and attention to product design is unmatched." },
        { start: 26, end: 999, text: "[Outro music playing... TechMate4u Digital Product Studio]" },
      ],
      // Michael Roberts
      [
        { start: 0, end: 4, text: "Hello there, I am Michael Roberts, CEO of FinServe Solutions." },
        { start: 4, end: 9, text: "Our team needed enterprise-grade software built on a tight startup timeline." },
        { start: 9, end: 15, text: "TechMate4u delivered precisely that, keeping us closely involved at every milestone." },
        { start: 15, end: 20, text: "Their technical architecture is robust, and communication was exceptional." },
        { start: 20, end: 26, text: "I highly recommend them for any complex product development." },
        { start: 26, end: 999, text: "[Outro music playing... TechMate4u Digital Product Studio]" },
      ],
    ];
    const currentSubs = subs[idx] || [];
    const matched = currentSubs.find((sub) => secs >= sub.start && secs < sub.end);
    return matched ? matched.text : "";
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && activeIdx !== null) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalSeconds) { setIsPlaying(false); return 0; }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeIdx, totalSeconds]);

  const openPlayer = (idx: number) => { setActiveIdx(idx); setCurrentTime(0); setIsPlaying(true); };

  const closePlayer = () => {
    setActiveIdx(null); setIsPlaying(false); setCurrentTime(0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    setCurrentTime(Math.floor(pct * totalSeconds));
  };

  return (
    <section id="client-voice" className="w-full relative z-20 overflow-hidden py-16 lg:py-24 minimalist-grid-section">
      <style>{`
        @keyframes visualizerBounce { 0%,100%{transform:scaleY(0.3)} 50%{transform:scaleY(1)} }
        .bar-anim-1{animation:visualizerBounce 0.6s ease-in-out infinite}
        .bar-anim-2{animation:visualizerBounce 0.8s ease-in-out infinite 0.15s}
        .bar-anim-3{animation:visualizerBounce 0.5s ease-in-out infinite 0.3s}
        .bar-anim-4{animation:visualizerBounce 0.7s ease-in-out infinite 0.05s}
        .bar-anim-5{animation:visualizerBounce 0.9s ease-in-out infinite 0.2s}
        .bar-anim-6{animation:visualizerBounce 0.6s ease-in-out infinite 0.1s}
      `}</style>

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
              className="flex flex-col rounded-3xl p-5 border shadow-xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full"
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
                ) : (
                  <button
                    onClick={() => openPlayer(index)}
                    aria-label={`Play audio testimonial from ${test.name}`}
                    className={`absolute inset-0 w-full h-full bg-gradient-to-br ${test.videoBg} flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--primary)]`}
                  >
                    {test.logoUrl ? (
                      <img
                        src={test.logoUrl}
                        alt={`${test.name} Logo`}
                        className="absolute inset-0 w-full h-full object-cover z-0"
                      />
                    ) : null}

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-white/25 shadow-xl">
                        <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm select-none z-10">
                      {test.duration}
                    </div>
                  </button>
                )}
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

      <AnimatePresence>
        {activeIdx !== null && activeTestimonial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closePlayer} className="absolute inset-0 bg-black/90 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#0f172a] border border-slate-800 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/40">
                <div className="flex items-center gap-3">
                  {activeTestimonial.logoUrl && (
                    <div className="h-10 w-10 flex items-center justify-center bg-black rounded-lg border border-slate-800 overflow-hidden shrink-0">
                      <img
                        src={activeTestimonial.logoUrl}
                        alt={`${activeTestimonial.name} Logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-white font-bold font-[family-name:var(--font-outfit)] text-base">{activeTestimonial.name}</span>
                    <span className="text-slate-400 text-xs tracking-wide uppercase font-semibold">{activeTestimonial.role}</span>
                  </div>
                </div>
                <button onClick={closePlayer} aria-label="Close video player" className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="w-full aspect-[16/10] bg-black relative flex flex-col justify-between overflow-hidden select-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${activeTestimonial.videoBg} z-0`} />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  {isPlaying ? (
                    <div className="flex items-end gap-2.5 h-16 transform origin-bottom">
                      <div className="w-1.5 bg-white/40 rounded-full bar-anim-1 h-12" />
                      <div className="w-1.5 bg-white/50 rounded-full bar-anim-2 h-16" />
                      <div className="w-1.5 bg-white/75 rounded-full bar-anim-3 h-14" />
                      <div className="w-1.5 bg-white/80 rounded-full bar-anim-4 h-16" />
                      <div className="w-1.5 bg-white/55 rounded-full bar-anim-5 h-10" />
                      <div className="w-1.5 bg-white/40 rounded-full bar-anim-6 h-12" />
                    </div>
                  ) : (
                    <div className="flex items-end gap-2.5 h-16 opacity-30">
                      <div className="w-1.5 bg-white/40 rounded-full h-3" />
                      <div className="w-1.5 bg-white/40 rounded-full h-4" />
                      <div className="w-1.5 bg-white/40 rounded-full h-3" />
                      <div className="w-1.5 bg-white/40 rounded-full h-5" />
                      <div className="w-1.5 bg-white/40 rounded-full h-2" />
                      <div className="w-1.5 bg-white/40 rounded-full h-3" />
                    </div>
                  )}
                </div>
                {!isPlaying && (
                  <button onClick={() => setIsPlaying(true)} aria-label="Play audio testimonial" className="absolute inset-0 m-auto size-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:scale-105 hover:bg-white/20 transition-all duration-300 shadow-2xl z-20">
                    <Play className="h-8 w-8 text-white fill-white ml-1" />
                  </button>
                )}

                {/* Subtitle track */}
                <div className="w-full mt-auto mb-4 text-center z-20 px-4 md:px-8 min-h-[50px] flex items-center justify-center pointer-events-none">
                  <p className="text-white text-sm md:text-base font-medium drop-shadow-md text-center bg-black/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                    {getSubtitle(activeIdx, currentTime) || "[Simulating Audio Testimonial Playback...]"}
                  </p>
                </div>
              </div>

              <div className="bg-[#0b0f19] px-6 py-5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-slate-400 select-none w-10">{formatTime(currentTime)}</span>
                  <div role="slider" aria-label="Seek time" aria-valuemin={0} aria-valuemax={totalSeconds} aria-valuenow={currentTime} onClick={handleSeek} className="flex-grow h-1.5 rounded-full bg-slate-800 cursor-pointer relative overflow-hidden group/bar">
                    <div className="h-full bg-white transition-all duration-300 rounded-full" style={{ width: `${(currentTime / (totalSeconds || 1)) * 100}%` }} />
                    <div className="absolute top-1/2 -translate-y-1/2 size-3 rounded-full bg-white shadow opacity-0 group-hover/bar:opacity-100 transition-opacity" style={{ left: `calc(${(currentTime / (totalSeconds || 1)) * 100}% - 6px)` }} />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 select-none w-10 text-right">{activeTestimonial.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button onClick={() => setIsPlaying(!isPlaying)} aria-label={isPlaying ? "Pause" : "Play"} className="text-white hover:text-slate-200 focus:outline-none transition-colors p-1">
                      {isPlaying ? <Pause className="h-5 w-5 fill-white" /> : <Play className="h-5 w-5 fill-white" />}
                    </button>
                    <button onClick={() => setIsMuted(!isMuted)} aria-label={isMuted ? "Unmute" : "Mute"} className="text-white hover:text-slate-200 focus:outline-none transition-colors p-1">
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-500 font-extrabold tracking-wider uppercase select-none">Simulated Experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
