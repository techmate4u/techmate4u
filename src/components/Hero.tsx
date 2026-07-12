"use client";

import Link from "next/link";
import HeroVisual from "./HeroVisual";
import { useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Button from "@/components/ui/Button";

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
            className="w-full max-w-7xl mx-auto min-h-[85vh] pt-24 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-visible flex flex-col lg:flex-row items-center"
            id="home"
        >
            {/* ── Fixed Colored Blueprint Background ── */}
            <div className="fixed inset-0 w-[100vw] h-[100vh] -z-20 pointer-events-none" style={{ background: "var(--hero-base)" }}>
                {/* Tactile Blueprint drawing texture */}
                <div className="absolute inset-0 bg-[url(/assets/bg-blueprint.png)] bg-no-repeat bg-cover opacity-[0.08]" />
                
                {/* Network Globe drawing at bottom right */}
                <div className="absolute right-[-8%] bottom-[8%] w-[550px] h-[550px] bg-[url(/assets/bg-globe.png)] bg-no-repeat bg-contain opacity-[0.09] animate-float-3" />

                {/* Light gradient from right */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(37,99,235,0.08)] to-[rgba(37,99,235,0.15)]" />

                {/* Luminous Ambient Blue Light Orbs */}
                <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-blue-500/15 rounded-full blur-[110px] animate-float-1 pointer-events-none" />
                <div className="absolute top-[50%] right-[8%] w-[500px] h-[500px] bg-blue-600/12 rounded-full blur-[130px] animate-float-2 pointer-events-none" />
                <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-sky-400/15 rounded-full blur-[100px] animate-float-3 pointer-events-none" />

                {/* Texture via SVG Filter for realistic blueprint feel */}
                <svg className="hidden md:block absolute inset-0 w-full h-full opacity-[0.08] mix-blend-overlay pointer-events-none">
                    <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>

                {/* Base soft lighting gradient */}
                <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
                <div className="absolute inset-0 hero-white-overlay" style={{ background: "radial-gradient(circle at 18% 24%, rgba(255,255,255,0.92), rgba(255,255,255,0.70), transparent 55%)" }} />
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 76% 30%, var(--hero-cool-glow), transparent 35%)" }} />
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 80% 70%, var(--hero-warm-glow), transparent 35%)" }} />
                <div className="absolute inset-x-0 top-[45%] bottom-0 hero-white-overlay bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.30)_34%,rgba(248,250,252,0.82)_100%)]" />

                {/* Blueprint Grid */}
                <svg className="absolute inset-0 w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="blueprint-small" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" className="stroke-blue-500/[0.14]" strokeWidth="0.5" />
                        </pattern>
                        <pattern id="blueprint-large" width="100" height="100" patternUnits="userSpaceOnUse">
                            <rect width="100" height="100" fill="url(#blueprint-small)" />
                            <path d="M 100 0 L 0 0 0 100" fill="none" className="stroke-blue-500/[0.22]" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#blueprint-large)" />
                </svg>
            </div>


            <div
                className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-8 items-start w-full relative z-10"
            >
                <header className="lg:col-span-6 flex flex-col gap-8 z-10 text-center lg:text-left items-center lg:items-start w-full relative">
                    {/* ── Headline with staggered entrance ── */}
                    <div className="flex flex-col gap-6 ">
                        {/* Premium Typography styling inspired by Figma guidelines: Tighter tracking, specific leading, and balanced contrast */}
                        <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold leading-[1.15] tracking-[-0.03em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] font-[family-name:var(--font-outfit)] text-[var(--text)]">
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
                        <Button
                            variant="primary"
                            href="/#contact"
                            className="h-12 rounded-full px-8 text-base font-bold shadow-lg"
                            icon={<span className="material-symbols-outlined text-sm transition-all duration-300 group-hover:translate-x-0.5 text-white">arrow_forward</span>}
                            iconPosition="right"
                        >
                            Get in Touch
                        </Button>

                        <Button
                            variant="secondary"
                            href="/#portfolio"
                            className="h-12 rounded-full px-8 text-base font-bold bg-white/70 backdrop-blur-sm"
                            icon={<span className="material-symbols-outlined text-sm transition-all duration-300 group-hover:translate-x-0.5 text-[var(--primary)]">play_arrow</span>}
                            iconPosition="left"
                        >
                            View Our Work
                        </Button>
                    </div>

                    {/* ── Honest trust signal ── */}
                    <div className="hidden sm:block hero-fade-up hero-stagger-5 pt-4 border-t mt-2 w-full" style={{ borderColor: "var(--line)" }}>
                        <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4 text-[11px] sm:text-[13px] font-semibold tracking-wide uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)] text-[var(--text-muted)]">
                            <span className="flex items-center gap-1.5">
                                <span
                                    className="material-symbols-outlined"
                                    style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1, 'wght' 500", color: "var(--primary)" }}
                                >
                                    bolt
                                </span>
                                <span className="mt-[2px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]">Modern Tech Stack</span>
                            </span>

                            <span className="hidden sm:inline" aria-hidden="true" style={{ color: "color-mix(in srgb, var(--primary) 42%, transparent)" }}>•</span>

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

                            <span className="flex items-center gap-1.5">
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
                <figure className="lg:col-span-6 relative h-[360px] sm:h-[460px] md:h-[540px] lg:h-auto w-full overflow-visible mt-4 md:mt-6 lg:mt-0 flex items-start justify-center lg:justify-end">
                    <HeroVisual />
                </figure>
            </div>
        </section>
    );
}
