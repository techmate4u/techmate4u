"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, X, Volume2, VolumeX, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  duration: string;
  videoBg: string;
  accentColor: string;
}

export default function ClientVoice() {
  const testimonials: Testimonial[] = [
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
    {
      name: "Amita Desai",
      role: "Founder, HealthConnect Pro",
      quote: '"Building a HIPAA-compliant telemedicine platform is complex. TechMate4u not only delivered on time but exceeded our expectations on security and UX."',
      duration: "2:45",
      videoBg: "from-[#065f46] to-[#059669]",
      accentColor: "text-emerald-500",
    },
  ];

  // State for interactive mock player
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const activeTestimonial = activeIdx !== null ? testimonials[activeIdx] : null;

  // Helpers for time formatting and arithmetic
  const getSeconds = (durationStr: string) => {
    const [m, s] = durationStr.split(":").map(Number);
    return m * 60 + s;
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const totalSeconds = activeTestimonial ? getSeconds(activeTestimonial.duration) : 0;

  // Sync subtitle tracks with current time
  const getSubtitle = (idx: number, secs: number) => {
    const subs = [
      // Sarah Chen
      [
        { start: 0, end: 4, text: "Hi, I'm Sarah Chen, VP of Product at TechFlow Systems." },
        { start: 4, end: 9, text: "Working with TechMate4u completely transformed our onboarding experience." },
        { start: 9, end: 15, text: "Within just 3 months of launch, we saw a 67% improvement in user retention..." },
        { start: 15, end: 20, text: "...and we successfully doubled our free-to-paid conversion rate!" },
        { start: 20, end: 26, text: "Their engineering speed and attention to product design is unmatched." },
        { start: 26, end: 999, text: "[Outro music playing... TechMate4u Digital Product Studio]" },
      ],
      // Michael Roberts
      [
        { start: 0, end: 4, text: "Hello there, I'm Michael Roberts, CEO of FinServe Solutions." },
        { start: 4, end: 9, text: "Our team needed enterprise-grade software built on a tight startup timeline." },
        { start: 9, end: 15, text: "TechMate4u delivered precisely that, keeping us closely involved at every milestone." },
        { start: 15, end: 20, text: "Their technical architecture is robust, and communication was exceptional." },
        { start: 20, end: 26, text: "I highly recommend them for any complex product development." },
        { start: 26, end: 999, text: "[Outro music playing... TechMate4u Digital Product Studio]" },
      ],
      // Amita Desai
      [
        { start: 0, end: 4, text: "Hi, I'm Amita Desai, Founder of HealthConnect Pro." },
        { start: 4, end: 9, text: "Building a HIPAA-compliant telemedicine platform is an immense challenge." },
        { start: 9, end: 15, text: "TechMate4u not only met our deadline but exceeded our expectations on security and UX." },
        { start: 15, end: 20, text: "The feedback from our doctors and patients has been universally positive." },
        { start: 20, end: 26, text: "They are a true engineering partner, not just a vendor." },
        { start: 26, end: 999, text: "[Outro music playing... TechMate4u Digital Product Studio]" },
      ],
    ];

    const currentSubs = subs[idx] || [];
    const matched = currentSubs.find((sub) => secs >= sub.start && secs < sub.end);
    return matched ? matched.text : "";
  };

  // Playback timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && activeIdx !== null) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalSeconds) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeIdx, totalSeconds]);

  // Handle opening player modal
  const openPlayer = (idx: number) => {
    setActiveIdx(idx);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  // Handle closing player modal
  const closePlayer = () => {
    setActiveIdx(null);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  // Progress Bar click-to-seek handler
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const targetTime = Math.floor(percentage * totalSeconds);
    setCurrentTime(Math.min(targetTime, totalSeconds));
  };

  return (
    <section id="client-voice" className="w-full relative z-20 overflow-hidden py-16 lg:py-24 minimalist-grid-section">
      {/* Visual styles for the visualizer animation */}
      <style>{`
        @keyframes visualizerBounce {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
        .bar-anim-1 { animation: visualizerBounce 0.6s ease-in-out infinite; }
        .bar-anim-2 { animation: visualizerBounce 0.8s ease-in-out infinite 0.15s; }
        .bar-anim-3 { animation: visualizerBounce 0.5s ease-in-out infinite 0.3s; }
        .bar-anim-4 { animation: visualizerBounce 0.7s ease-in-out infinite 0.05s; }
        .bar-anim-5 { animation: visualizerBounce 0.9s ease-in-out infinite 0.2s; }
        .bar-anim-6 { animation: visualizerBounce 0.6s ease-in-out infinite 0.1s; }
      `}</style>

      {/* Premium background design elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Pulsing fuchsia/cyan glow orb on the right side */}
        <div className="absolute top-[20%] right-[-10%] w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-fuchsia-500/5 to-cyan-500/10 blur-[100px] animate-pulse" />
        
        {/* Abstract floating soundwave outline */}
        <div className="absolute bottom-[10%] left-[-60px] w-64 h-64 opacity-40 hidden lg:block animate-[spin_60s_linear_infinite] text-indigo-500/70">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-indigo-500/70">
            <path d="M 10,50 L 25,20 L 40,80 L 55,10 L 70,90 L 85,30 L 95,50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          </svg>
        </div>

        {/* Abstract floating concentric orbits */}
        <div className="absolute top-[15%] right-[-60px] w-64 h-64 opacity-40 hidden lg:block animate-float-3">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-rose-500/70">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" className="animate-[spin_30s_linear_infinite] origin-center" />
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" className="animate-[spin_15s_linear_infinite_reverse] origin-center" />
            <path d="M 50 10 A 40 40 0 0 1 90 50" stroke="currentColor" strokeWidth="1.5" className="animate-[spin_8s_linear_infinite] origin-center" />
            <circle cx="50" cy="10" r="3" fill="currentColor" className="animate-[spin_8s_linear_infinite] origin-center" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="mb-14 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4" style={{ borderColor: "color-mix(in srgb, var(--primary) 25%, transparent)", background: "color-mix(in srgb, var(--primary) 10%, transparent)" }}>
            <Users className="w-4 h-4" style={{ color: "var(--primary)" }} />
            <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: "var(--primary)" }}>Client Testimonials</span>
          </div>
          <h2 className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            Hear directly from the leaders and founders who partnered with us to transform their digital operations.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {testimonials.map((test, index) => (
            <div 
              key={index} 
              className="flex flex-col rounded-3xl p-5 border shadow-xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full"
              style={{
                borderColor: "color-mix(in srgb, var(--primary) 10%, transparent)",
                boxShadow: "0 15px 35px rgba(37, 99, 235, 0.04)"
              }}
            >
              {/* Colored Video Box */}
              <div
                onClick={() => openPlayer(index)}
                className={`w-full aspect-[5/4] rounded-2xl relative overflow-hidden bg-gradient-to-br ${test.videoBg} shadow-inner flex items-center justify-center mb-5 cursor-pointer group`}
              >
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-white/25 shadow-xl">
                    <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm select-none">
                  {test.duration}
                </div>
              </div>

              {/* Client Info & Quote */}
              <div className="flex flex-col grow px-1">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex-grow">
                    <h3 className="text-base font-bold font-[family-name:var(--font-outfit)] tracking-tight text-[var(--text)] leading-tight">
                      {test.name}
                    </h3>
                    <p className="text-[10px] text-[var(--primary)] font-bold uppercase tracking-wider mt-1">
                      {test.role}
                    </p>
                  </div>
                  <span className="text-4xl font-serif leading-none select-none" style={{ color: "color-mix(in srgb, var(--primary) 18%, transparent)" }}>
                    ”
                  </span>
                </div>
                <p className="text-[13px] leading-relaxed text-[var(--text-muted)] italic font-medium">
                  {test.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- PREMIUM VIDEO PLAYER MODAL --- */}
      <AnimatePresence>
        {activeIdx !== null && activeTestimonial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePlayer}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#0f172a] border border-slate-800 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col"
            >
              {/* Top Bar / Client Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/40">
                <div className="flex flex-col">
                  <span className="text-white font-bold font-[family-name:var(--font-outfit)] text-base">
                    {activeTestimonial.name}
                  </span>
                  <span className="text-slate-400 text-xs tracking-wide uppercase font-semibold">
                    {activeTestimonial.role}
                  </span>
                </div>
                <button
                  onClick={closePlayer}
                  className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* simulated Video Screen Area */}
              <div className={`w-full aspect-[16/10] bg-gradient-to-br ${activeTestimonial.videoBg} relative flex flex-col justify-between p-6 select-none`}>
                
                {/* Dynamic Waveform / Equalizer Visualizer */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
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

                {/* Simulated center Play Overlay button (only visible when paused) */}
                {!isPlaying && (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 m-auto size-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:scale-105 hover:bg-white/20 transition-all duration-300 shadow-2xl"
                  >
                    <Play className="h-8 w-8 text-white fill-white ml-1" />
                  </button>
                )}

                {/* Subtitle track */}
                <div className="w-full mt-auto mb-2 text-center z-10 px-4 md:px-8 min-h-[50px] flex items-center justify-center">
                  <p className="text-white text-base md:text-lg font-medium drop-shadow-md text-center bg-black/40 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/5">
                    {getSubtitle(activeIdx, currentTime) || "[Simulating Audio Testimonial Playback...]"}
                  </p>
                </div>
              </div>

              {/* Player Control Interface */}
              <div className="bg-[#0b0f19] px-6 py-5 flex flex-col gap-4">
                
                {/* Interactive Seeking Progress Bar */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-slate-400 select-none w-10">
                    {formatTime(currentTime)}
                  </span>
                  <div
                    onClick={handleSeek}
                    className="flex-grow h-1.5 rounded-full bg-slate-800 cursor-pointer relative overflow-hidden group/bar"
                  >
                    <div
                      className="h-full bg-white transition-all duration-300 rounded-full"
                      style={{ width: `${(currentTime / totalSeconds) * 100}%` }}
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 size-3 rounded-full bg-white shadow opacity-0 group-hover/bar:opacity-100 transition-opacity"
                      style={{ left: `calc(${(currentTime / totalSeconds) * 100}% - 6px)` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 select-none w-10 text-right">
                    {activeTestimonial.duration}
                  </span>
                </div>

                {/* Controls buttons row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Play/Pause Button */}
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:text-slate-200 focus:outline-none transition-colors p-1"
                    >
                      {isPlaying ? <Pause className="h-5 w-5 fill-white" /> : <Play className="h-5 w-5 fill-white" />}
                    </button>

                    {/* Mute/Volume Button */}
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-white hover:text-slate-200 focus:outline-none transition-colors p-1"
                    >
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </button>
                  </div>

                  <span className="text-[10px] text-slate-500 font-extrabold tracking-wider uppercase select-none">
                    Simulated Experience
                  </span>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
