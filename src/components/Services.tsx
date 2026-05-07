"use client";

import React from 'react';

type ServiceItem = {
    id: string;
    keyId: string;
    shortTitle: string;
    title: string;
    description: string;
    image: string;
    features: string[];
    popular?: boolean;
};

const services: ServiceItem[] = [
    {
        id: "01",
        keyId: "website",
        shortTitle: "WEBSITE",
        title: "Website Development",
        description: "Fast, responsive and SEO-friendly websites built with modern technologies.",
        image: "/assets/web-service.webp",
        features: [
            "Custom Web Applications",
            "Landing Pages that Convert",
            "Speed & Performance Optimized"
        ]
    },
    {
        id: "02",
        keyId: "seo",
        shortTitle: "TECHNICAL",
        title: "Technical SEO",
        description: "Improve visibility, rankings and user experience with data-driven SEO strategies.",
        image: "/assets/seo-service.webp",
        features: [
            "Technical Audits",
            "On-Page & Off-Page SEO",
            "Schema & Index Optimization"
        ]
    },
    {
        id: "03",
        keyId: "automation",
        shortTitle: "AUTOMATION",
        title: "Automation Systems",
        description: "Automate workflows and customer operations using AI and powerful integrations.",
        image: "/assets/automation-service.webp",
        features: [
            "AI Voice & Chat Agents",
            "CRM & API Integrations",
            "WhatsApp / SMS Automation"
        ]
    },
    {
        id: "04",
        keyId: "mobile",
        shortTitle: "MOBILE",
        title: "Mobile App Development",
        description: "Cross-platform mobile apps with beautiful UI and powerful backend.",
        image: "/assets/mobileapp-service.webp",
        features: [
            "Android & iOS Apps",
            "Firebase & Supabase Backend",
            "Push Notifications"
        ]
    }
];

export default function Services() {
    return (
        <section className="w-full relative z-20 -mt-20 lg:-mt-28 pt-20 lg:pt-28" id="services">
            <div className="w-full relative overflow-hidden">
                <div className="absolute top-[30%] left-[-40px] w-32 h-64 opacity-30 hover:opacity-80 transition-all duration-700 hover:translate-x-[40px] z-0 hidden lg:block group">
                    <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-400 group-hover:text-blue-500 transition-colors duration-700 animate-float-1">
                        <circle cx="20" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                        <circle cx="20" cy="100" r="60" stroke="currentColor" strokeWidth="1" />
                        <path d="M 20 20 L 20 180" stroke="currentColor" strokeWidth="1" />
                        <path d="M -60 100 L 100 100" stroke="currentColor" strokeWidth="0.5" />
                        <rect x="-10" y="85" width="30" height="30" stroke="currentColor" strokeWidth="2" className="group-hover:rotate-45 origin-center transition-transform duration-1000" />
                    </svg>
                </div>

                <div className="absolute top-[60%] right-[-40px] w-32 h-64 opacity-30 hover:opacity-80 transition-all duration-700 hover:-translate-x-[40px] z-0 hidden lg:block group">
                    <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-400 group-hover:text-fuchsia-500 transition-colors duration-700 animate-float-2">
                        <path d="M 50 20 L 120 60 L 120 140 L 50 180 L -20 140 L -20 60 Z" stroke="currentColor" strokeWidth="1" />
                        <path d="M 50 50 L 90 75 L 90 125 L 50 150 L 10 125 L 10 75 Z" stroke="currentColor" strokeWidth="1.5" className="group-hover:rotate-180 origin-center transition-transform duration-1000" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-16 lg:pt-20 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-[1px]" style={{ background: "var(--line-strong)" }}></div>
                                <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Services We Offer</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight font-[family-name:var(--font-outfit)] drop-shadow-md text-[var(--text)]">
                                Digital Infrastructure<br />
                                <span className="text-[var(--text-soft)]">Built to Scale.</span>
                            </h2>
                            <p className="text-lg leading-relaxed drop-shadow-md text-[var(--text-muted)]">
                                We build the systems that power modern digital businesses — from high-performance websites to AI automation and scalable mobile apps.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`group relative flex flex-col rounded-[2rem] border overflow-hidden transition-all duration-500 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.15)] hover:-translate-y-2 ${service.popular
                                    ? "border-[var(--primary)] shadow-[0_0_30px_-10px_rgba(0,229,255,0.1)] bg-[var(--panel)]"
                                    : "border-[var(--line)] bg-[var(--panel)]"
                                    }`}
                            >

                                {/* Image Area - Edge to Edge */}
                                <div className="w-full aspect-video relative overflow-hidden shrink-0 border-b" style={{ borderColor: "var(--line-soft)", background: "var(--surface-muted)" }}>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-muted)] to-transparent opacity-20 pointer-events-none" />
                                </div>

                                {/* Content Area */}
                                <div className="flex flex-col flex-grow p-8 md:p-10">
                                    <h3 className="font-bold text-2xl mb-4 font-[family-name:var(--font-outfit)] tracking-tight text-[var(--text)]">
                                        {service.title}
                                    </h3>
                                    <p className="text-base leading-relaxed mb-8 text-[var(--text-muted)] h-16">
                                        {service.description}
                                    </p>

                                    {/* Features List */}
                                    <ul className="flex flex-col gap-4 mb-10">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-[var(--text-soft)]">
                                                <span className="material-symbols-outlined text-[16px] text-[var(--primary)]">check_circle</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Learn More Link */}
                                    <a
                                        href="#contact"
                                        onClick={() => window.dispatchEvent(new CustomEvent('selectService', { detail: service.keyId }))}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] hover:opacity-80 transition-opacity mt-auto"
                                    >
                                        Get Started
                                        <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
