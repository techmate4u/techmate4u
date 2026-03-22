"use client";

import React from 'react';

const services = [
    {
        title: "Website Development",
        description: "Custom SaaS landing pages, marketing sites, and full-stack web applications built on modern frameworks.",
        // Hexagon & Eye with Yellow center (Ref: Line 01)
        SvgIcon: () => (
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-24 md:h-24">
                <g className="transition-all duration-700 ease-in-out group-hover:scale-[1.05] group-hover:translate-y-[-2px]" style={{ transformOrigin: 'center' }}>
                    {/* Outer Hexagon */}
                    <path d="M25 20 L75 20 L95 50 L75 80 L25 80 L5 50 Z" stroke="currentColor" strokeWidth="1.5" className="text-slate-300 transition-colors duration-500 group-hover:text-slate-800" />
                    {/* Inner Eye / Diamond Lines */}
                    <path d="M5 50 L50 20 L95 50 L50 80 Z" stroke="currentColor" strokeWidth="1.5" className="text-slate-300 transition-colors duration-500 group-hover:text-slate-800" />
                    <path d="M50 20 L50 80" stroke="currentColor" strokeWidth="1.5" className="text-slate-300 transition-colors duration-500 group-hover:text-slate-800" />
                    {/* Yellow Core Fill - expands on hover */}
                    <path d="M27 50 L50 35 L73 50 L50 65 Z" className="fill-[#FACC15] scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-out" style={{ transformOrigin: 'center' }} />
                </g>
            </svg>
        )
    },
    {
        title: "Technical SEO",
        description: "Architecture optimization, semantic markup, and speed enhancements to rank higher organically in search.",
        // Triangles & Cyan Square (Ref: Line 05)
        SvgIcon: () => (
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-24 md:h-24">
                <g className="transition-all duration-700 ease-in-out group-hover:scale-[1.05] group-hover:translate-y-[-2px]" style={{ transformOrigin: 'center' }}>
                    {/* Left Triangle Grid */}
                    <path d="M20 20 L80 20 L20 80 Z" stroke="currentColor" strokeWidth="1.5" className="text-slate-300 transition-colors duration-500 group-hover:text-slate-800" />
                    <path d="M20 50 L50 50 L50 20" stroke="currentColor" strokeWidth="1.5" className="text-slate-300 transition-colors duration-500 group-hover:text-slate-800" />
                    <path d="M35 20 L35 65" stroke="currentColor" strokeWidth="1.5" className="text-slate-300 transition-colors duration-500 group-hover:text-slate-800" />
                    <path d="M20 35 L65 35" stroke="currentColor" strokeWidth="1.5" className="text-slate-300 transition-colors duration-500 group-hover:text-slate-800" />
                    {/* Cyan Square Base */}
                    <path d="M48 48 L80 48 L80 80 L48 80 Z" stroke="currentColor" strokeWidth="1.5" className="text-slate-300 transition-colors duration-500 group-hover:text-slate-200 group-hover:stroke-transparent delay-100" />
                    {/* Cyan Square Fill - reveals on hover */}
                    <path d="M48 48 L80 48 L80 80 L48 80 Z" className="fill-[#00E5FF] scale-y-0 translate-y-4 opacity-0 group-hover:scale-y-100 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]" style={{ transformOrigin: 'bottom' }} />
                </g>
            </svg>
        )
    },
    {
        title: "Automation Systems",
        description: "Connecting your existing tools via APIs or building bespoke workflows that eliminate manual data entry.",
        // Abstract intersecting squares (Magenta) (Ref: Line 07)
        SvgIcon: () => (
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-24 md:h-24">
                <g className="transition-all duration-700 ease-in-out group-hover:scale-[1.05] group-hover:translate-y-[-2px]" style={{ transformOrigin: 'center' }}>
                    {/* Top Right Square */}
                    <path d="M50 30 L80 30 L80 60 L50 60 Z" stroke="currentColor" strokeWidth="1.5" className="text-slate-300 transition-colors duration-500 group-hover:text-slate-800" />
                    {/* Downward Triangle */}
                    <path d="M40 30 L60 50 L40 70 Z" stroke="currentColor" strokeWidth="1.5" className="text-slate-300 transition-colors duration-500 group-hover:text-slate-800" />
                    {/* Angle Line */}
                    <path d="M60 50 L80 70" stroke="currentColor" strokeWidth="1.5" className="text-slate-300 transition-colors duration-500 group-hover:text-slate-800" />
                    {/* Magenta Fill */}
                    <path d="M40 30 L60 50 L40 70 Z" className="fill-[#F012BE] opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-100" />
                </g>
            </svg>
        )
    },
    {
        title: "Mobile App Development",
        description: "Cross-platform mobile experiences that bring your digital products directly to your users' devices.",
        // Concentric Circles with Yellow Intersection (Ref: Line 12)
        SvgIcon: () => (
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-24 md:h-24">
                <g className="transition-all duration-700 ease-in-out group-hover:scale-[1.05] group-hover:translate-y-[-2px]" style={{ transformOrigin: 'center' }}>
                    {/* Concentric Left Rings */}
                    <circle cx="45" cy="50" r="12" stroke="currentColor" strokeWidth="1.5" className="text-slate-300 transition-colors duration-500 group-hover:text-slate-800 group-hover:rotate-12 origin-[45px_50px]" />
                    <circle cx="45" cy="50" r="22" stroke="currentColor" strokeWidth="1.5" className="text-slate-300 transition-colors duration-500 group-hover:text-slate-800 group-hover:rotate-90 origin-[45px_50px]" />
                    <circle cx="45" cy="50" r="32" stroke="currentColor" strokeWidth="1.5" className="text-slate-300 transition-colors duration-500 group-hover:text-slate-800 group-hover:rotate-180 origin-[45px_50px]" />

                    {/* Right Yellow Sphere */}
                    <circle cx="70" cy="50" r="10" className="fill-[#FACC15] translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 cubic-bezier(0.34,1.56,0.64,1)" />
                    {/* Center Yellow Sphere */}
                    <circle cx="55" cy="50" r="10" className="fill-[#FACC15] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150" />
                </g>
            </svg>
        )
    }
];

export default function Services() {
    return (
        <section className="w-full relative z-20" id="services">
            {/* Flawless massive scroll gradient transitioning from invisible (revealing Hero grid) to solid white */}
            <div className="w-full h-[25vh] min-h-[300px] bg-gradient-to-b from-white/0 via-[#fafafa]/80 to-[#fafafa] pointer-events-none relative z-10" aria-hidden="true" />

            <div className="w-full bg-[#fafafa] relative overflow-hidden">
                {/* ── Fixed Blueprint Grid ── */}
                <div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(203, 213, 225, 0.4) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(203, 213, 225, 0.4) 1px, transparent 1px),
                            linear-gradient(to right, rgba(203, 213, 225, 0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(203, 213, 225, 0.15) 1px, transparent 1px)
                        `,
                        backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
                        backgroundPosition: 'center top',
                        backgroundAttachment: 'fixed'
                    }}
                />

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

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-8 relative z-10">

                    {/* Header Area */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
                        <div className="max-w-2xl">
                            {/* Eyebrow Label */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-[1px] bg-slate-300"></div>
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Services We Offer</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight font-[family-name:var(--font-outfit)] drop-shadow-md">
                                Digital Infrastructure<br />
                                <span className="text-slate-400">Built to Scale.</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed drop-shadow-md">
                                We specialize in the foundational pillars of modern software to transform how your business operates and grows.
                            </p>
                        </div>
                    </div>

                    {/* Editorial Grid Layout for Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-slate-200">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col items-center justify-between p-10 border-b border-r border-slate-200 bg-white hover:bg-slate-50 transition-all duration-500 overflow-hidden aspect-[3/4] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.15)] hover:z-10"
                            >
                                {/* Accent Line on hover */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 origin-center transition-all duration-700 ease-out" />

                                {/* Label */}
                                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase self-start w-full transition-colors duration-300 group-hover:text-slate-600">
                                    {String(index + 1).padStart(2, '0')} {"//"} {service.title.split(' ')[0]}
                                </span>

                                {/* Graphic Geometry */}
                                <div className="flex-grow flex items-center justify-center w-full my-8">
                                    <service.SvgIcon />
                                </div>

                                {/* Content block */}
                                <div className="w-full relative z-10 self-end">
                                    <h3 className="font-bold text-slate-900 text-xl mb-3 font-[family-name:var(--font-outfit)] tracking-tight drop-shadow-md">
                                        {service.title}
                                    </h3>
                                    {/* Hidden on default, expands on hover */}
                                    <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
                                        <div className="overflow-hidden">
                                            <p className="text-slate-600 text-sm leading-relaxed mt-2 pb-1 drop-shadow-md">
                                                {service.description}
                                            </p>
                                        </div>
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
