"use client";

import Link from "next/link";
import HeroVisual from "./HeroVisual";
import { useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const [isMobile, setIsMobile] = useState(
        () => typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches
    );
    useEffect(() => {
        const mq = window.matchMedia("(max-width: 1023px)");
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full max-w-7xl mx-auto min-h-screen pt-32 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-visible flex flex-col lg:flex-row items-center"
            id="home"
        >
            {/* ── Fixed Colored Blueprint Background ── */}
            <div className="fixed inset-0 w-[100vw] h-[100vh] -z-20 pointer-events-none" style={{ background: "var(--hero-base)" }}>
                {/* Light gradient from right */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(45,212,191,0.06)] to-[rgba(45,212,191,0.12)]" />

                {/* Texture via SVG Filter for realistic blueprint feel */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.08] mix-blend-overlay pointer-events-none">
                    <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>

                {/* Base soft lighting gradient */}
                <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
                <div className="absolute inset-0 hero-white-overlay" style={{ background: "radial-gradient(circle at 18% 24%, rgba(255,255,255,0.86), rgba(255,255,255,0.48), transparent 55%)" }} />
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 76% 30%, var(--hero-cool-glow), transparent 32%)" }} />
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 80% 70%, var(--hero-warm-glow), transparent 30%)" }} />
                <div className="absolute inset-x-0 top-[45%] bottom-0 hero-white-overlay bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.18)_34%,rgba(248,250,252,0.58)_100%)]" />

                {/* Blueprint Grid */}
                <svg className="absolute inset-0 w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="blueprint-small" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" className="stroke-slate-500/[0.11]" strokeWidth="0.5" />
                        </pattern>
                        <pattern id="blueprint-large" width="100" height="100" patternUnits="userSpaceOnUse">
                            <rect width="100" height="100" fill="url(#blueprint-small)" />
                            <path d="M 100 0 L 0 0 0 100" fill="none" className="stroke-slate-500/[0.16]" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#blueprint-large)" />
                </svg>
            </div>


            <div
                className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full relative z-10"
            >
                <header className="lg:col-span-6 flex flex-col gap-8 z-10 text-center lg:text-left items-center lg:items-start w-full relative">
                    {/* ── Headline with staggered entrance ── */}
                    <div className="flex flex-col gap-6 ">
                        {/* Premium Typography styling inspired by Figma guidelines: Tighter tracking, specific leading, and balanced contrast */}
                        <h1 className="text-3xl sm:text-4xl lg:text-[4.5rem] font-extrabold leading-[1.05] tracking-[-0.04em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] font-[family-name:var(--font-outfit)] text-[var(--text)]">
                            <span className="hero-fade-up hero-stagger-1 block">
                                Accelerate Growth with
                            </span>
                            <span className="hero-fade-up hero-stagger-2 block text-transparent bg-clip-text mt-1 pb-2" style={{ backgroundImage: "linear-gradient(135deg, var(--text) 0%, var(--primary) 52%, var(--accent) 100%)" }}>
                                Next-Generation Digital Systems
                            </span>
                        </h1>

                        {/* Subheading — readable line-height, softer blue color */}
                        <p className="hero-fade-up hero-stagger-3 text-sm sm:text-base lg:text-[1.125rem] font-medium max-w-xl leading-[1.65] tracking-[-0.01em] drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]" style={{ color: "var(--text-muted)" }}>
                            We build high-performance websites and AI-powered systems
                            designed to turn visitors into loyal customers.
                        </p>
                    </div>

                    {/* ── CTAs — redesigned with premium micro-interactions ── */}
                    <div className="hero-fade-up hero-stagger-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                        {/* Primary CTA — magnetic hover with inner glow and outer expanding halo */}
                        <Link
                            href="#contact"
                            className="hero-btn-primary group relative overflow-visible text-white text-base font-bold rounded-full h-12 px-8 flex items-center gap-2.5 cursor-pointer shadow-lg transition-all duration-500"
                            style={{ background: "var(--primary)" }}
                        >
                            {/* Inner shine container */}
                            <span className="absolute inset-0 rounded-full overflow-hidden block">
                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/12 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                            </span>

                            <span className="relative z-10 flex items-center gap-2">
                                Get in Touch
                                <span className="material-symbols-outlined text-sm transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 text-white">arrow_forward</span>
                            </span>
                        </Link>

                        {/* Secondary CTA — internal warm glow from bottom right on hover */}
                        <Link
                            href="#portfolio"
                            className="hero-btn-ghost group relative text-base font-bold rounded-full h-12 px-8 flex items-center gap-2.5 cursor-pointer overflow-hidden backdrop-blur-sm border transition-all duration-500 text-[var(--text)]"
                            style={{ background: "color-mix(in srgb, var(--panel) 72%, transparent)", borderColor: "color-mix(in srgb, var(--panel) 85%, var(--line))" }}
                        >
                            {/* Bottom-right expanding warm gradient */}
                            <span className="absolute -bottom-4 -right-4 w-12 h-12 blur-xl rounded-full transition-all duration-500 ease-out group-hover:w-28 group-hover:h-28 pointer-events-none" style={{ background: "color-mix(in srgb, var(--accent) 30%, transparent)" }} />

                            <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
                                <span className="material-symbols-outlined text-sm transition-all duration-300 group-hover:translate-x-1 text-white">play_arrow</span>
                                View Our Work
                            </span>
                        </Link>
                    </div>

                    {/* ── Honest trust signal ── */}
                    <div className="hero-fade-up hero-stagger-5 pt-6 border-t mt-2 w-full" style={{ borderColor: "var(--line)" }}>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[13px] font-semibold tracking-wide uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)] text-[var(--text-muted)]">
                            <span className="flex items-center gap-1.5">
                                <span
                                    className="material-symbols-outlined"
                                    style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1, 'wght' 500", color: "var(--primary)" }}
                                >
                                    bolt
                                </span>
                                <span className="mt-[2px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]">Modern Tech Stack</span>
                            </span>

                            <span aria-hidden="true" style={{ color: "color-mix(in srgb, var(--primary) 42%, transparent)" }}>•</span>

                            <span className="flex items-center gap-1.5">
                                <span
                                    className="material-symbols-outlined"
                                    style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1, 'wght' 500", color: "var(--primary)" }}
                                >
                                    handshake
                                </span>
                                <span className="mt-[2px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]">Startup Friendly</span>
                            </span>

                            <span className="hidden sm:inline" aria-hidden="true" style={{ color: "color-mix(in srgb, var(--primary) 42%, transparent)" }}>•</span>

                            <span className="hidden sm:flex items-center gap-1.5">
                                <span
                                    className="material-symbols-outlined"
                                    style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1, 'wght' 500", color: "var(--primary)" }}
                                >
                                    rocket_launch
                                </span>
                                <span className="mt-[2px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]">End-to-End Delivery</span>
                            </span>
                        </div>
                    </div>
                </header>

                {/* ── Hero Visual ── */}
                <figure className="lg:col-span-6 relative h-[360px] sm:h-[460px] md:h-[540px] lg:h-[600px] w-full overflow-visible mt-10 md:mt-12 lg:mt-0 flex items-center justify-center">
                    <HeroVisual />
                </figure>
            </div>
        </section>
    );
}
