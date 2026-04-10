"use client";

import React, { useRef, useState, useEffect } from "react";
import { TrendingUp, Zap, Lock } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─────────────────────────────────────────────
   Floating metric cards data
───────────────────────────────────────────── */

type FloatingCard = {
    id: string;
    icon: React.ElementType;
    label: string;
    value: string;
    iconColor: string;
    iconBg: string;
    position: string;
    delay: string;
    floatAnimation: string;
};

const FLOATING_CARDS: FloatingCard[] = [
    {
        id: "growth",
        icon: TrendingUp,
        label: "Traffic Growth",
        value: "+180%",
        iconColor: "text-emerald-500 flex justify-center items-center",
        iconBg: "bg-emerald-50/50",
        position: "top-[-12px] right-[-6px] sm:top-[-14px] sm:right-[-10px] md:top-[6%] md:right-[-18px] lg:right-[-40px]",
        delay: "hero-stagger-2",
        floatAnimation: "animate-float-1",
    },

    {
        id: "speed",
        icon: Zap,
        label: "Processing Speed",
        value: "Lightning-fast",
        iconColor: "text-purple-500 fill-purple-500",
        iconBg: "bg-purple-50/50",
        position: "bottom-[-12px] left-[-6px] sm:bottom-[-14px] sm:left-[-10px] md:bottom-[-10px] md:left-[-12px]",
        delay: "hero-stagger-4",
        floatAnimation: "animate-float-3",
    },
];

export default function HeroVisual() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
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

    // We make them move at different speeds relative to the page scroll
    const yBrowser = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

    return (
        <div ref={containerRef} className="relative w-full h-full flex items-center justify-center lg:justify-end select-none lg:pr-8">

            {/* Background glow */}
            <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] -z-10 pointer-events-none" style={{ background: "var(--primary-soft)" }} />
            <div className="absolute top-[48%] right-[10%] h-[18rem] w-[18rem] -translate-y-1/2 rounded-full blur-[110px] -z-10 pointer-events-none" style={{ background: "var(--hero-warm-glow)" }} />
            <div className="absolute bottom-[8%] right-[18%] h-[14rem] w-[14rem] rounded-full blur-[100px] -z-10 pointer-events-none" style={{ background: "color-mix(in srgb, var(--panel) 14%, transparent)" }} />

            {/* ── Main Browser Mockup (Showing a Real Website) ── */}
            <motion.div
                style={{ y: 0, background: "var(--panel)", boxShadow: "var(--hero-card-shadow)" }}
                className="relative w-full max-w-[92vw] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[560px] rounded-[1rem] sm:rounded-[1.5rem] overflow-hidden hero-fade-up hero-stagger-1 mx-auto lg:ml-auto flex flex-col"
            >

                {/* Browser Header */}
                <div className="h-12 flex items-center px-4 gap-3 shrink-0" style={{ background: "var(--surface-muted)", borderBottom: "1px solid var(--line)" }}>
                    <div className="flex gap-1.5 p-2">
                        <div className="w-3 h-3 rounded-full shadow-inner" style={{ background: "var(--line-strong)" }} />
                        <div className="w-3 h-3 rounded-full shadow-inner" style={{ background: "var(--line-strong)" }} />
                        <div className="w-3 h-3 rounded-full shadow-inner" style={{ background: "var(--line-strong)" }} />
                    </div>
                    {/* URL Bar */}
                    <div className="h-7 w-full max-w-[240px] rounded-md mx-auto flex items-center justify-center shadow-sm gap-1.5 px-3" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
                        <Lock className="w-2.5 h-2.5" style={{ color: "var(--text-soft)" }} />
                        <span className="text-[10px] font-medium" style={{ color: "var(--text-muted)" }}>Client Showcase: Amara</span>
                    </div>
                    <div className="w-12" /> {/* Spacer for centering */}
                </div>

                {/* Website Image Container */}
                <div className="relative w-full overflow-hidden border-t shadow-[inset_0_4px_20px_rgba(0,0,0,0.03)] flex" style={{ background: "var(--surface-muted)", borderColor: "var(--line)" }}>
                    <div className="absolute inset-0 w-full h-full animate-pulse" style={{ background: "color-mix(in srgb, var(--surface-muted) 70%, var(--line))" }} /> {/* Loading skeleton */}

                    {/* Flat UI Screenshot */}
                    <img
                        src="/assets/laptop.webp"
                        alt="Amara website"
                        loading="lazy"
                        className="relative block w-full h-auto object-cover object-top"
                    />

                    {/* Subtle inner shadow for depth instead of a heavy gloss */}
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)] pointer-events-none" />
                </div>
            </motion.div>

            {/* ── Floating Mobile View (Responsive showcasing) ── */}
            <motion.div
                style={{ y: 0 }}
                className="absolute bottom-[-10px] right-[-4px] sm:bottom-[-14px] sm:right-[-8px] md:bottom-[4px] md:right-[2%] lg:bottom-[-18px] lg:right-[-12px] z-40 hero-fade-up hero-stagger-4"
            >
                <div className="w-[110px] sm:w-[132px] md:w-[156px] lg:w-[200px] rounded-2xl sm:rounded-3xl border-[4px] sm:border-[6px] border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden bg-white rotate-[6deg] transition-transform hover:rotate-0 duration-500 animate-float-mobile">
                    <img
                        src="/assets/mobile-amara.png"
                        alt="Mobile responsive view"
                        loading="lazy"
                        className="w-full h-auto object-cover block"
                        style={{ background: "var(--surface-muted)" }}
                    />
                </div>
            </motion.div>

            {/* ── Floating Metric Badges (Overlapping) ── */}
            {FLOATING_CARDS.map((card) => (
                <motion.div
                    key={card.id}
                    style={{ y: 0 }}
                    className={`absolute z-50 ${card.position} flex-col flex ${card.delay} hero-fade-up`}
                >
                    <div className={`glass-panel ${card.floatAnimation} backdrop-blur-2xl rounded-2xl p-2.5 pr-5 flex items-center gap-3 transition-transform hover:-translate-y-1 duration-300 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.35)] border ring-1 ring-inset`} style={{ borderColor: "color-mix(in srgb, var(--panel) 50%, transparent)" }}>
                        <div className={`w-10 h-10 rounded-full ${card.iconBg} flex items-center justify-center shrink-0 shadow-inner`}>
                            <card.icon className={`w-5 h-5 ${card.iconColor}`} strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-[10px] font-bold uppercase tracking-widest leading-none mb-1 text-shadow-sm" style={{ color: "var(--text-muted)" }}>
                                {card.label}
                            </span>
                            <span className="text-[15px] font-extrabold tracking-tight leading-none drop-shadow-sm" style={{ color: "var(--text)" }}>
                                {card.value}
                            </span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
