"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Terminal, Shield, Cpu, Activity } from "lucide-react";

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  // Dynamic simulated terminal logs
  const LOG_TEMPLATES = [
    "allocating neural agents...",
    "compiling high-performance bundle...",
    "latency optimized to 14ms",
    "CDN edge sync: [active]",
    "verifying lighthouse matrix...",
    "indexing SEO schemas...",
    "serverless function deployment: OK",
    "optimizing static assets...",
  ];

  useEffect(() => {
    setTerminalLines([
      "system_init: core launch",
      "agent_status: searching nodes...",
    ]);

    const interval = setInterval(() => {
      const randomLog = LOG_TEMPLATES[Math.floor(Math.random() * LOG_TEMPLATES.length)];
      setTerminalLines(prev => {
        const next = [...prev, randomLog];
        if (next.length > 5) next.shift(); // Keep logs clean
        return next;
      });
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  // Motion mouse tilt tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 22, stiffness: 90, mass: 0.65 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

  // Parallax displacement values for layers (deep multi-level Z depth)
  const bgX = useSpring(useTransform(x, [-0.5, 0.5], [8, -8]), springConfig);
  const bgY = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  
  const fg1X = useSpring(useTransform(x, [-0.5, 0.5], [-20, 20]), springConfig);
  const fg1Y = useSpring(useTransform(y, [-0.5, 0.5], [-20, 20]), springConfig);
  
  const fg2X = useSpring(useTransform(x, [-0.5, 0.5], [20, -20]), springConfig);
  const fg2Y = useSpring(useTransform(y, [-0.5, 0.5], [20, -20]), springConfig);

  const fg3X = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig);
  const fg3Y = useSpring(useTransform(y, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[4/3] max-w-[620px] flex items-center justify-center cursor-pointer select-none perspective-1000 overflow-visible lg:scale-100 xl:scale-105"
    >
      {/* ── Glowing backdrop meshes ── */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10"
      >
        <div className="absolute w-[380px] h-[380px] rounded-full blur-[110px] opacity-40 mix-blend-screen bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-500 animate-pulse" />
        <div className="absolute w-[280px] h-[280px] rounded-full blur-[90px] opacity-35 mix-blend-screen bg-gradient-to-br from-purple-500 to-fuchsia-500" />
      </motion.div>

      {/* ── Holographic Science Ring Orbits (Background layer) ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <svg className="absolute w-[80%] h-[80%] animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(6, 182, 212, 0.08)" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="1" strokeDasharray="4 12" />
          <circle cx="50" cy="50" r="41" fill="none" stroke="rgba(6, 182, 212, 0.05)" strokeWidth="0.5" />
        </svg>
        <svg className="absolute w-[68%] h-[68%] animate-[spin_40s_linear_infinite_reverse]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(168, 85, 247, 0.12)" strokeWidth="1" strokeDasharray="1 6" />
          <circle cx="50" cy="50" r="37" fill="none" stroke="rgba(168, 85, 247, 0.04)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* ── 3D Spatial Interactive Mainframe Console ── */}
      <motion.div
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[90%] h-[90%] flex items-center justify-center"
      >
        {/* ── Main Hub Screen / Holographic Cylinder (Center) ── */}
        <motion.div
          style={{ transform: "translateZ(20px)" }}
          className="relative w-[240px] h-[240px] flex items-center justify-center"
        >
          {/* Glowing outer glass sphere */}
          <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-[2px] border border-white/10 shadow-[inset_0_0_30px_rgba(255,255,255,0.05),0_0_40px_rgba(6,182,212,0.15)] flex items-center justify-center">
            {/* Rotating core rings */}
            <div className="w-[85%] h-[85%] rounded-full border border-dashed border-cyan-500/25 animate-[spin_18s_linear_infinite]" />
          </div>

          {/* Central CPU Core Element */}
          <div className="absolute w-22 h-22 rounded-3xl bg-slate-900/90 border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.35)] flex items-center justify-center p-3 animate-[pulse_4s_ease-in-out_infinite]">
            <Cpu className="w-9 h-9 text-cyan-400 animate-pulse" />
          </div>

          {/* Surrounding Orbiting Nodes */}
          <div className="absolute w-full h-full animate-[spin_25s_linear_infinite]">
            <div className="absolute top-[6%] left-[47%] w-3.5 h-3.5 rounded-full bg-cyan-400 border border-white shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            <div className="absolute bottom-[6%] left-[47%] w-3.5 h-3.5 rounded-full bg-purple-500 border border-white shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            <div className="absolute top-[47%] right-[6%] w-4 h-4 rounded-full bg-blue-500 border border-white shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          </div>
        </motion.div>

        {/* ── Layer 1: Developer Console / Terminal (Top-Left) ── */}
        <motion.div
          style={{
            x: fg1X,
            y: fg1Y,
            transform: "translateZ(75px)"
          }}
          className="absolute top-[6%] left-[-6%] z-20 w-[210px] sm:w-[250px]"
        >
          <div className="backdrop-blur-xl bg-slate-950/85 rounded-2xl border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.4)] p-3.5 flex flex-col gap-2">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[9px] font-bold tracking-wider text-slate-400 uppercase font-mono">
                  Agent Console
                </span>
              </div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
              </div>
            </div>

            {/* Scrolling code lines */}
            <div className="flex flex-col gap-1 font-mono text-[8.5px] text-left leading-relaxed text-cyan-300">
              {terminalLines.map((line, idx) => (
                <div key={idx} className="flex gap-1 items-start">
                  <span className="text-slate-600 shrink-0">&gt;</span>
                  <span className="break-all">{line}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Layer 2: Real-time Analytics Visualizer (Bottom-Right) ── */}
        <motion.div
          style={{
            x: fg2X,
            y: fg2Y,
            transform: "translateZ(90px)"
          }}
          className="absolute bottom-[6%] right-[-6%] z-20 w-[200px] sm:w-[230px]"
        >
          <div className="backdrop-blur-xl bg-white/45 border border-white/40 shadow-[0_15px_35px_rgba(0,0,0,0.12)] rounded-2xl p-3.5 flex flex-col gap-2.5">
            {/* Metric label */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-purple-600" />
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-600">
                  Network Speed
                </span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
            </div>

            {/* Dynamic wave visualizer */}
            <div className="h-10 bg-white/30 rounded-xl overflow-hidden flex items-center justify-center px-1">
              <svg className="w-full h-7 text-purple-500/70" viewBox="0 0 100 30" preserveAspectRatio="none">
                <path
                  d="M0,15 C20,2 40,28 60,10 C80,-5 90,25 100,15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
              </svg>
            </div>

            {/* Metric indicators */}
            <div className="flex justify-between items-center text-[9px]">
              <span className="font-semibold text-slate-500 uppercase">Optimization</span>
              <span className="font-extrabold text-purple-700">Sub-100ms Sync</span>
            </div>
          </div>
        </motion.div>

        {/* ── Layer 3: Security Status (Bottom-Left) ── */}
        <motion.div
          style={{
            x: fg3X,
            y: fg3Y,
            transform: "translateZ(50px)"
          }}
          className="absolute bottom-[16%] left-[-10%] z-20"
        >
          <div className="backdrop-blur-xl bg-white/50 border border-white/40 shadow-lg rounded-2xl p-2.5 flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-600">
              <Shield className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-0.5">SSL Status</span>
              <span className="text-[10px] font-extrabold text-slate-800 tracking-tight leading-none">Secure Link</span>
            </div>
          </div>
        </motion.div>

        {/* ── Layer 4: Lighthouse Core Performance (Top-Right) ── */}
        <motion.div
          style={{
            x: useTransform(fg3X, (val) => -val),
            y: useTransform(fg3Y, (val) => -val),
            transform: "translateZ(80px)"
          }}
          className="absolute top-[10%] right-[-8%] z-20"
        >
          <div className="backdrop-blur-xl bg-slate-900/80 border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.35)] rounded-2xl p-3 flex flex-col items-center gap-1">
            <div className="relative w-11 h-11 flex items-center justify-center">
              {/* Circular radial chart */}
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="22"
                  cy="22"
                  r="18"
                  className="stroke-slate-700"
                  strokeWidth="3.5"
                  fill="transparent"
                />
                <circle
                  cx="22"
                  cy="22"
                  r="18"
                  className="stroke-emerald-400"
                  strokeWidth="3.5"
                  strokeDasharray={113}
                  strokeDashoffset={0}
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[11px] font-mono font-extrabold text-white">
                100
              </div>
            </div>
            <span className="text-[8px] font-extrabold text-cyan-400 uppercase tracking-widest mt-0.5 leading-none">
              Performance
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
