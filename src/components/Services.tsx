"use client";

import React from 'react';

type ServiceItem = {
    id: string;
    keyId: string;
    shortTitle: string;
    title: string;
    description: string;
    features: string[];
    SvgIcon: React.FC;
};

const services: ServiceItem[] = [
    {
        id: "01",
        keyId: "website",
        shortTitle: "WEBSITE",
        title: "Web Development",
        description: "Fast, SEO-optimized platforms built for high performance and conversion.",
        features: ["Custom Apps", "Landing Pages", "Performance"],
        SvgIcon: () => (
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 lg:w-20 lg:h-20">
                <g className="transition-all duration-700 ease-in-out group-hover:scale-[1.05] group-hover:translate-y-[-2px]" style={{ transformOrigin: 'center' }}>
                    <rect x="15" y="25" width="70" height="50" rx="4" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <path d="M15 40 L85 40" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <circle cx="22" cy="32.5" r="1.5" fill="currentColor" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <circle cx="28" cy="32.5" r="1.5" fill="currentColor" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <circle cx="34" cy="32.5" r="1.5" fill="currentColor" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <rect x="25" y="50" width="30" height="15" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text-soft)] group-hover:stroke-transparent" />
                    <rect x="25" y="50" width="30" height="15" className="fill-[#0D9488] opacity-0 scale-y-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-500 ease-out delay-100" style={{ transformOrigin: 'top' }} />
                    <path d="M60 50 L75 50 M60 57 L70 57 M60 64 L72 64" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                </g>
            </svg>
        )
    },
    {
        id: "02",
        keyId: "seo",
        shortTitle: "SEO",
        title: "SEO Strategy",
        description: "Data-driven optimization to boost your rankings and organic visibility.",
        features: ["Technical Audits", "On-Page SEO", "Optimization"],
        SvgIcon: () => (
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 lg:w-20 lg:h-20">
                <g className="transition-all duration-700 ease-in-out group-hover:scale-[1.05] group-hover:translate-y-[-2px]" style={{ transformOrigin: 'center' }}>
                    <rect x="20" y="30" width="60" height="16" rx="8" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <circle cx="65" cy="38" r="4" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <path d="M68 41 L72 45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <path d="M28 38 L45 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <path d="M30 65 L40 55 L50 65 L60 50 L70 60" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text-soft)] group-hover:stroke-transparent" />
                    <path d="M30 65 L40 55 L50 65 L60 50 L70 60" stroke="#00E5FF" strokeWidth="2" strokeLinejoin="round" strokeDasharray="80" strokeDashoffset="80" className="opacity-0 group-hover:opacity-100 group-hover:stroke-dashoffset-[0] transition-all duration-700 ease-out delay-100" />
                    <circle cx="60" cy="50" r="3" className="fill-[#00E5FF] opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-400" style={{ transformOrigin: '60px 50px' }} />
                </g>
            </svg>
        )
    },
    {
        id: "03",
        keyId: "automation",
        shortTitle: "AI",
        title: "AI & Automation",
        description: "Intelligent workflows and AI agents designed to scale your operations.",
        features: ["AI Chatbots", "API Sync", "Workflows"],
        SvgIcon: () => (
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 lg:w-20 lg:h-20">
                <g className="transition-all duration-700 ease-in-out group-hover:scale-[1.05] group-hover:translate-y-[-2px]" style={{ transformOrigin: 'center' }}>
                    <rect x="20" y="25" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <rect x="60" y="25" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <rect x="40" y="65" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <path d="M40 35 L60 35" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <path d="M30 45 L45 65" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <path d="M70 45 L55 65" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <rect x="40" y="65" width="20" height="20" rx="4" className="fill-[#F012BE] opacity-0 scale-50 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out delay-200" style={{ transformOrigin: '50px 75px' }} />
                    <path d="M46 75 L49 78 L55 72" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-400" />
                </g>
            </svg>
        )
    },
    {
        id: "04",
        keyId: "mobile",
        shortTitle: "MOBILE",
        title: "Mobile Apps",
        description: "Premium native and cross-platform apps built for performance and UI/UX.",
        features: ["iOS & Android", "UI/UX", "Backend"],
        SvgIcon: () => (
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 lg:w-20 lg:h-20">
                <g className="transition-all duration-700 ease-in-out group-hover:scale-[1.05] group-hover:translate-y-[-2px]" style={{ transformOrigin: 'center' }}>
                    <rect x="30" y="15" width="40" height="70" rx="6" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <path d="M42 15 L42 18 C42 19 43 20 44 20 L56 20 C57 20 58 19 58 18 L58 15" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <path d="M42 80 L58 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <rect x="38" y="30" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text-soft)] group-hover:stroke-transparent" />
                    <rect x="54" y="30" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <rect x="38" y="44" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <rect x="54" y="44" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text-soft)] group-hover:stroke-transparent" />
                    <rect x="38" y="30" width="8" height="8" rx="2" className="fill-[#FACC15] opacity-0 scale-50 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out delay-100" style={{ transformOrigin: '42px 34px' }} />
                    <rect x="54" y="44" width="8" height="8" rx="2" className="fill-[#FACC15] opacity-0 scale-50 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out delay-200" style={{ transformOrigin: '58px 48px' }} />
                    <circle cx="64" cy="28" r="4" className="fill-red-500 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-400" style={{ transformOrigin: '64px 28px' }} />
                </g>
            </svg>
        )
    },
    {
        id: "05",
        keyId: "marketing",
        shortTitle: "MARKETING",
        title: "Digital Marketing",
        description: "Targeted campaigns across search and social to drive real ROI.",
        features: ["Ads", "Strategy", "Analytics"],
        SvgIcon: () => (
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 lg:w-20 lg:h-20">
                <g className="transition-all duration-700 ease-in-out group-hover:scale-[1.05] group-hover:translate-y-[-2px]" style={{ transformOrigin: 'center' }}>
                    <path d="M20 80 L80 80" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <path d="M30 80 L30 50 L45 50 L45 80" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <path d="M55 80 L55 30 L70 30 L70 80" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text)]" />
                    <path d="M20 60 L40 40 L60 50 L80 20" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-soft)] transition-colors duration-500 group-hover:text-[var(--text-soft)] group-hover:stroke-transparent" />
                    <path d="M20 60 L40 40 L60 50 L80 20" stroke="#FF851B" strokeWidth="2" strokeDasharray="100" strokeDashoffset="100" className="opacity-0 group-hover:opacity-100 group-hover:stroke-dashoffset-[0] transition-all duration-700 ease-out delay-100" />
                    <circle cx="80" cy="20" r="4" className="fill-[#FF851B] opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-300" style={{ transformOrigin: '80px 20px' }} />
                </g>
            </svg>
        )
    }
];

export default function Services() {
    return (
        <section className="w-full relative z-20 overflow-hidden -mt-6 lg:-mt-8 pt-6 lg:pt-8" id="services">
            <div className="w-full relative overflow-hidden">
                {/* Left Interactive Decoration */}
                <div className="absolute top-[30%] left-[-40px] w-32 h-64 opacity-30 hover:opacity-80 transition-all duration-700 hover:translate-x-[40px] z-0 hidden lg:block group">
                    <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-400 group-hover:text-blue-500 transition-colors duration-700 animate-float-1">
                        <circle cx="20" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                        <circle cx="20" cy="100" r="60" stroke="currentColor" strokeWidth="1" />
                        <path d="M 20 20 L 20 180" stroke="currentColor" strokeWidth="1" />
                        <path d="M -60 100 L 100 100" stroke="currentColor" strokeWidth="0.5" />
                        <rect x="-10" y="85" width="30" height="30" stroke="currentColor" strokeWidth="2" className="group-hover:rotate-45 origin-center transition-transform duration-1000" />
                    </svg>
                </div>

                {/* Right Interactive Decoration */}
                <div className="absolute top-[60%] right-[-40px] w-32 h-64 opacity-30 hover:opacity-80 transition-all duration-700 hover:-translate-x-[40px] z-0 hidden lg:block group">
                    <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-400 group-hover:text-fuchsia-500 transition-colors duration-700 animate-float-2">
                        <path d="M 50 20 L 120 60 L 120 140 L 50 180 L -20 140 L -20 60 Z" stroke="currentColor" strokeWidth="1" />
                        <path d="M 50 50 L 90 75 L 90 125 L 50 150 L 10 125 L 10 75 Z" stroke="currentColor" strokeWidth="1.5" className="group-hover:rotate-180 origin-center transition-transform duration-1000" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-4 pt-16 lg:pt-20 pb-10 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-[1px]" style={{ background: "var(--line-strong)" }}></div>
                                <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Services We Offer</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight font-[family-name:var(--font-outfit)] drop-shadow-md text-[var(--text)]">
                                Digital Systems<br />
                                <span className="text-[var(--text-soft)]">Built for Scale.</span>
                            </h2>
                            <p className="text-base leading-relaxed drop-shadow-md text-[var(--text-muted)] max-w-lg">
                                We engineer high-performance platforms that drive growth — from custom web apps to intelligent AI automation.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`group relative flex flex-row lg:flex-col items-center lg:items-start p-4 sm:p-5 lg:p-8 rounded-xl lg:rounded-lg border transition-all duration-500 overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] lg:hover:-translate-y-2 border-[var(--line)] bg-[var(--panel)] h-full lg:col-span-2 ${index === 3 ? 'lg:col-start-2' : ''}`}
                            >
                                {/* Subtle Hover Background Glow (Mobile Only) */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-transparent opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 lg:hidden" />
                                
                                {/* Accent Line (Desktop Only) */}
                                <div className="hidden lg:block absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-0 scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 origin-center transition-all duration-700 ease-out" />

                                {/* Icon container */}
                                <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-full lg:h-auto rounded-xl lg:rounded-none border lg:border-0 border-[var(--line-strong)] flex items-center justify-center bg-[var(--surface-muted)] lg:bg-transparent group-hover:border-[var(--primary-soft)] lg:group-hover:border-0 transition-colors duration-500 relative z-10 lg:mb-8 lg:mt-2">
                                    <service.SvgIcon />
                                </div>

                                {/* Content block */}
                                <div className="flex flex-col ml-4 sm:ml-6 lg:ml-0 relative z-10 w-full">
                                    <h3 className="font-bold text-base sm:text-lg lg:text-xl font-[family-name:var(--font-outfit)] tracking-tight text-[var(--text)] group-hover:text-[var(--primary)] transition-colors duration-300 lg:mb-2">
                                        {service.title}
                                    </h3>
                                    
                                    <p className="text-[12px] sm:text-[13px] lg:text-sm leading-snug lg:leading-relaxed text-[var(--text-muted)] mt-1 lg:mt-0 mb-3 lg:mb-4 line-clamp-2 lg:line-clamp-none">
                                        {service.description}
                                    </p>
                                    
                                    <div className="mt-auto">
                                        <a
                                            href="#contact"
                                            onClick={() => window.dispatchEvent(new CustomEvent('selectService', { detail: service.keyId }))}
                                            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs lg:text-sm font-bold text-[var(--primary)] hover:opacity-80 transition-opacity"
                                        >
                                            Get Started
                                            <span className="material-symbols-outlined text-[14px] sm:text-[16px] lg:text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
