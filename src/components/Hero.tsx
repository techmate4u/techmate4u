"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <section
            className="w-full min-h-[85vh] pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-visible flex flex-col items-center hero-premium-section"
            id="home"
        >
            {/* ── Background image — extends above section to sit behind the floating navbar ── */}
            <div
                aria-hidden="true"
                className="absolute left-0 right-0 bottom-0 pointer-events-none"
                style={{
                    top: "-120px",
                    backgroundImage: "url('/assets/bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    backgroundRepeat: "no-repeat",
                    zIndex: 0,
                    maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
            />

            <div className="w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-8 items-start relative z-10">
                <header className="lg:col-span-7 flex flex-col gap-8 z-10 text-center lg:text-left items-center lg:items-start w-full relative">
                    {/* ── Headline with staggered entrance ── */}
                    <div className="flex flex-col gap-6">
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
                        <p className="hero-fade-up hero-stagger-3 text-sm sm:text-base lg:text-[1.125rem] font-medium max-w-xl leading-[1.65] tracking-[-0.01em] drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)] text-[var(--text-muted)]">
                            We build high-performance websites and AI-powered systems
                            designed to turn visitors into loyal customers.
                        </p>
                    </div>

                    {/* ── CTAs ── */}
                    <div className="hero-fade-up hero-stagger-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                        {/* Primary CTA ── */}
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
            </div>
        </section>
    );
}
