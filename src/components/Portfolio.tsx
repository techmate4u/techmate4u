"use client";

import React from "react";
import Link from "next/link";
import ProjectCard, { type Project } from "@/components/ui/ProjectCard";

const projects: Project[] = [
    {
        title: "Rapture Tech Website Redesign",
        category: "Web Application",
        challenge: "Migrating a legacy Django-based product portal into a headless Next.js static site to solve hosting overhead, layout shifts, and search engine indexing bottlenecks.",
        resultBold: "Sub-second page speeds, ",
        resultText: "with 100% SEO sitemap indexing, direct WhatsApp inquiry channels, and secure image-download deterrence.",
        tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
        themeId: "cyan",
        video: "/assets/rapturetech-web.webm",
        slug: "rapturetech-website-redesign",
        link: "https://rapturetech.co.in/"
    },
    {
        title: "Offline POS & Weighbridge System",
        category: "Enterprise Software",
        challenge: "Developing a 100% offline billing and receipt management application that interfaces directly with thermal printing hardware in a zero-network warehouse environment.",
        resultBold: "100% offline operational reliability, ",
        resultText: "with background SQLite backup syncs and native AIDL hardware print integration.",
        tags: ["React Native", "Kotlin", "SQLite", "Drizzle ORM"],
        themeId: "blue",
        images: ["/assets/POS_App.webp"],
        slug: "offline-pos-weighbridge"
    },
    {
        title: "Riwaaz Ethnic",
        category: "E-commerce",
        challenge: "Legacy storefront suffered from slow load times, high mobile bounce rates, and limited design layout control.",
        resultBold: "Lighthouse mobile score of 99/100, +38% conversion lift, ",
        resultText: "and sub-second page transitions.",
        tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        themeId: "rose",
        video: "/assets/riwaazethnic.webm",
        slug: "riwaaz-ethnic",
        link: "https://riwaazethnic.vercel.app/"
    },
    {
        title: "Lab2Door",
        category: "Healthcare Logistics",
        challenge: "Confusing patient scheduling flow and manual routing overhead led to booking collisions and logistical delays.",
        resultBold: "50% reduction in booking friction, zero slot collisions, ",
        resultText: "and 2.5x scheduled appointments growth.",
        tags: ["Next.js", "TypeScript", "React", "Supabase"],
        themeId: "blue",
        video: "/assets/lab2door.webm",
        slug: "lab2door",
        link: "https://lab2door.vercel.app/"
    },
    {
        title: "Restaurant Management",
        category: "Hospitality & POS",
        challenge: "Legacy POS dining system had high sync latency and lacked touch-optimized waiter interfaces tableside.",
        resultBold: "Sub-100ms kitchen sync latency, 22% faster table turnover, ",
        resultText: "and full mobile optimization.",
        tags: ["Next.js", "React", "TypeScript", "Real-time Sync"],
        themeId: "cyan",
        images: [
            "/assets/erp1.webp",
            "/assets/erp2.webp",
            "/assets/erp3.webp",
            "/assets/erp4.webp",
            "/assets/erp5.webp"
        ],
        slug: "restaurant-management"
    }
];


export default function Portfolio() {
    return (
        <section
            className="w-full relative z-20 overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 minimalist-grid-section-alt"
        >
            {/* Premium background design elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* Pulsing purple/indigo glow orb on the left */}
                <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-purple-500/10 to-indigo-500/10 blur-[90px] animate-pulse" />
                
                {/* Slow spinning outline polygon */}
                <div className="absolute bottom-[20%] left-[-80px] w-64 h-64 opacity-20 hidden lg:block animate-[spin_40s_linear_infinite_reverse]">
                    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-purple-500">
                        <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                    </svg>
                </div>
            </div>

            <div className="absolute top-[10%] left-[-20px] w-48 h-48 opacity-40 hover:opacity-90 transition-all duration-700 hover:translate-x-[30px] z-0 hidden lg:block group">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-indigo-500/70 transition-colors duration-700 animate-float-3">
                    <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="1" className="animate-[spin_25s_linear_infinite] origin-center" />
                    <rect x="35" y="35" width="30" height="30" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="animate-[spin_15s_linear_infinite_reverse] origin-center" />
                    <circle cx="50" cy="50" r="5" fill="currentColor" />
                </svg>
            </div>

            <div className="absolute top-[40%] right-[-60px] w-64 h-64 opacity-30 hover:opacity-85 transition-all duration-700 hover:-translate-x-[50px] z-0 hidden lg:block group">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-purple-500/70 transition-colors duration-700 animate-float-1">
                    <path d="M 50 10 L 90 90 L 10 90 Z" stroke="currentColor" strokeWidth="1" className="animate-[spin_30s_linear_infinite] origin-center" />
                    <path d="M 50 30 L 70 80 L 30 80 Z" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="animate-[spin_20s_linear_infinite_reverse] origin-center" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 pb-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight font-[family-name:var(--font-outfit)] drop-shadow-md text-[var(--text)]">
                            Proven Results Across Industries
                        </h2>
                        <p className="text-base text-[var(--text-muted)] mt-2">
                            We&apos;ve partnered with leading companies to build scalable, high-performance digital solutions. Here&apos;s a selection of recent client projects that delivered measurable impact.
                        </p>
                    </div>
                    
                    <Link
                        href="/work"
                        className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[var(--line-strong)] text-sm font-bold text-[var(--text)] bg-[var(--surface-muted)] hover:bg-[var(--primary-soft)] hover:text-[var(--primary)] hover:border-[var(--primary-soft)] transition-all duration-300 shadow-sm shrink-0 w-fit"
                    >
                        See All Projects
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 relative z-10">
                {projects.slice(0, 3).map((project, i) => (
                    <ProjectCard key={i} {...project} />
                ))}
            </div>
        </section>
    );
}
