"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery & Research",
    description: "Analyzing your goals, target audience, and current technical landscape to define project requirements."
  },
  {
    title: "Proposal & Quote",
    description: "Delivering a comprehensive project scope, timeline, and transparent pricing structure."
  },
  {
    title: "Agreement Signed",
    description: "Finalizing contract terms and establishing clear project milestones and deliverables."
  },
  {
    title: "Initial Payment",
    description: "Securing resources, aligning our engineering team, and officially kicking off the project."
  },
  {
    title: "Design Phase",
    description: "Creating wireframes, user flows, and high-fidelity visual prototypes for your approval."
  },
  {
    title: "Development",
    description: "Building the solution using modern, scalable frameworks and rigorous coding standards."
  },
  {
    title: "Revisions & Testing",
    description: "Conducting quality assurance, performance testing, and iterative client feedback rounds."
  },
  {
    title: "Final Delivery",
    description: "Deploying to production, performing final code reviews, and handing over the keys."
  },
  {
    title: "Support & Maintenance",
    description: "Providing ongoing updates, uptime monitoring, and proactive technical support."
  }
];

export default function ProcessLite() {
  return (
    <section id="process" className="w-full relative z-20 overflow-hidden py-16 lg:py-24 process-premium-section">
      {/* Premium background design elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Pulsing cyan/violet glow orb in the center */}
        <div className="absolute top-[30%] left-[30%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-400/5 to-purple-400/5 blur-[100px] animate-pulse" />
        
        {/* Left Floating Node Grid / Network Structure */}
        <div className="absolute top-[15%] left-[-60px] w-64 h-64 opacity-40 hidden lg:block animate-float-1">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-cyan-500/70">
            <path d="M 20 20 L 60 40 L 100 20 L 80 80 L 40 80 Z" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="animate-[spin_40s_linear_infinite] origin-center" />
            <line x1="20" y1="20" x2="60" y2="60" stroke="currentColor" strokeWidth="0.5" />
            <line x1="60" y1="40" x2="60" y2="60" stroke="currentColor" strokeWidth="0.5" />
            <line x1="100" y1="20" x2="60" y2="60" stroke="currentColor" strokeWidth="0.5" />
            <line x1="80" y1="80" x2="60" y2="60" stroke="currentColor" strokeWidth="0.5" />
            <line x1="40" y1="80" x2="60" y2="60" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="20" cy="20" r="4" fill="currentColor" />
            <circle cx="60" cy="40" r="4" fill="currentColor" />
            <circle cx="100" cy="20" r="4" fill="currentColor" />
            <circle cx="80" cy="80" r="4" fill="currentColor" />
            <circle cx="40" cy="80" r="4" fill="currentColor" />
            <circle cx="60" cy="60" r="5" fill="currentColor" className="animate-pulse" />
          </svg>
        </div>

        {/* Right Floating Concentric Arcs and Waveforms */}
        <div className="absolute bottom-[15%] right-[-60px] w-64 h-64 opacity-40 hidden lg:block animate-float-2">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-violet-500/70">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.75" strokeDasharray="5 5" className="animate-[spin_50s_linear_infinite] origin-center" />
            <path d="M 50 15 A 35 35 0 0 1 85 50" stroke="currentColor" strokeWidth="2" className="animate-[spin_10s_linear_infinite_reverse] origin-center" />
            <path d="M 50 85 A 35 35 0 0 1 15 50" stroke="currentColor" strokeWidth="2" className="animate-[spin_10s_linear_infinite_reverse] origin-center" />
            <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" />
            <polygon points="50,40 58,55 42,55" stroke="currentColor" strokeWidth="1" className="animate-[spin_6s_linear_infinite] origin-center" />
          </svg>
        </div>

        {/* Abstract timeline visual path */}
        <div className="absolute inset-0 opacity-[0.025] hidden lg:block">
          <svg className="w-full h-full text-slate-800" viewBox="0 0 800 600" fill="none">
            <path d="M100 200 C300 100, 500 500, 700 300" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
            <path d="M150 400 C350 200, 450 600, 650 400" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-16 lg:mb-24">
          <div className="flex items-center gap-3.5 mb-4">
              <div className="flex items-center gap-1.5 text-[var(--primary)]">
                  <span className="text-[10px]">✦</span>
                  <div className="w-6 h-[1px]" style={{ background: "var(--primary)", opacity: 0.5 }}></div>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">How We Work</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight font-[family-name:var(--font-outfit)] drop-shadow-md text-[var(--text)]">
            Our Process
          </h2>
          <p className="text-lg lg:text-xl mt-6 leading-relaxed drop-shadow-md text-[var(--text-muted)]">
            A rigorous, transparent timeline designed to ensure seamless delivery from initial concept to final launch.
          </p>
        </div>

        {/* Professional Static Horizontal Timeline */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-12 lg:gap-y-16 gap-x-6 lg:gap-x-8"
        >
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col relative">
              {/* Minimal Timeline Track */}
              <div className="w-full h-[1px] mb-6 relative" style={{ background: "var(--line-strong)" }}>
                  {/* Clean Node */}
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full" 
                       style={{ background: "var(--primary)" }} 
                  />
              </div>

              {/* Step Content */}
              <div className="flex flex-col pr-4">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "var(--primary)" }}>
                  {String(i + 1).padStart(2, '0')} {/* Phase */}
                </span>
                <h3 className="text-base font-bold font-[family-name:var(--font-outfit)] tracking-tight leading-snug mb-3" style={{ color: "var(--text)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
