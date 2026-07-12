"use client";

import React from "react";
import ProjectCard, { type Project } from "@/components/ui/ProjectCard";

const projects: Project[] = [
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
            className="w-full relative z-20 overflow-hidden -mt-10 lg:-mt-14 pt-6 lg:pt-8"
            id="portfolio"
        >
            

            
            {/* Background layers moved to src/app/page.tsx for centralized editing. */}

            <div className="absolute top-[10%] left-[-20px] w-48 h-48 opacity-30 hover:opacity-80 transition-all duration-700 hover:translate-x-[30px] z-0 hidden lg:block group">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-400 group-hover:text-blue-500 transition-colors duration-700 animate-float-3">
                    <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="1" className="group-hover:rotate-90 origin-center transition-transform duration-1000" />
                    <rect x="35" y="35" width="30" height="30" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="group-hover:-rotate-90 origin-center transition-transform duration-1000 delay-100" />
                    <circle cx="50" cy="50" r="5" fill="currentColor" />
                </svg>
            </div>

            <div className="absolute top-[40%] right-[-60px] w-64 h-64 opacity-20 hover:opacity-70 transition-all duration-700 hover:-translate-x-[50px] z-0 hidden lg:block group">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-400 group-hover:text-fuchsia-500 transition-colors duration-700 animate-float-1">
                    <path d="M 50 10 L 90 90 L 10 90 Z" stroke="currentColor" strokeWidth="1" className="group-hover:rotate-12 origin-center transition-transform duration-[1200ms]" />
                    <path d="M 50 30 L 70 80 L 30 80 Z" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="group-hover:-rotate-12 origin-center transition-transform duration-1000" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 pt-16 lg:pt-20 pb-8 relative z-10">
                <div className="mb-4">
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tight font-[family-name:var(--font-outfit)] drop-shadow-md text-[var(--text)]">
                        Proven Results Across Industries
                    </h2>
                    <p className="text-base text-[var(--text-muted)] mt-2">
                        We&apos;ve partnered with leading companies to build scalable, high-performance digital solutions. Here&apos;s a selection of recent client projects that delivered measurable impact.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 pb-20 relative z-10">
                {projects.map((project, i) => (
                    <ProjectCard key={i} {...project} />
                ))}
            </div>
        </section>
    );
}
