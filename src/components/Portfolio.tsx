"use client";

import React from "react";

type ThemeId = "blue" | "purple" | "cyan" | "rose";

interface Project {
    title: string;
    category: string;
    description: string;
    themeId: ThemeId;
    video?: string;
    link: string;
}

const projects: Project[] = [
    {
        title: "Riwaaz Ethnic",
        category: "E-commerce",
        description: "A premium ethnic wear brand featuring timeless kurtis with intricate embroidery and elegant designs.",
        themeId: "rose",
        video: "/assets/riwaazethnic.webm",
        link: "https://riwaazethnic.vercel.app/"
    },
    {
        title: "Lab2Door",
        category: "Healthcare Logistics",
        description: "A professional medical service bringing laboratory specimen collection directly to patients' homes and offices.",
        themeId: "blue",
        video: "/assets/lab2door.webm",
        link: "https://lab2door.vercel.app/"
    }
];

const testimonials = [
    {
        project: projects[0],
        quote: "TechMate4u delivered a clean and modern website that matched our brand perfectly. The process was smooth, communication was quick, and the final result exceeded expectations.",
        label: "Clothing Brand"
    },
    {
        project: projects[1],
        quote: "The dashboard and platform experience were designed thoughtfully with attention to usability and performance. The team was responsive and easy to work with.",
        label: "Healthcare Logistics"
    }
];

export default function Portfolio() {
    return (
        <section
            className="w-full relative z-20 overflow-hidden -mt-10 lg:-mt-14 pt-10 lg:pt-14"
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

            <div className="max-w-7xl mx-auto px-4 pt-24 lg:pt-28 pb-12 relative z-10">
                <div className="mb-4">
                    <h2 className="text-4xl lg:text-6xl font-black tracking-tight font-[family-name:var(--font-outfit)] drop-shadow-md text-[var(--text)]">Selected Work</h2>
                    A curated deck of digital products, scalable architectures, and intelligent systems we&apos;ve engineered.
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 pb-20 relative z-10">
                {projects.map((project, i) => (
                    <Card key={i} {...project} />
                ))}
            </div>

            {/* Testimonials / Client Feedback */}
            <div className="max-w-7xl mx-auto px-4 pb-32 relative z-10">
                <div className="flex items-center gap-3 mb-8 lg:mb-10">
                    <div className="w-8 h-[1px]" style={{ background: "var(--primary)" }}></div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-[var(--primary)] font-[family-name:var(--font-outfit)]">Client Feedback</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6">
                    {testimonials.map(({ project, quote, label }) => (
                        <article
                            key={project.title}
                            className="flex min-h-[260px] flex-col rounded-lg border p-5 md:p-6 transition-all duration-500 hover:-translate-y-1"
                            style={{ borderColor: "var(--line)", background: "var(--panel)" }}
                        >
                            <span className="text-5xl text-[var(--primary)] mb-2 font-serif leading-none">&ldquo;</span>
                            <p className="text-base lg:text-lg italic leading-relaxed text-[var(--text-muted)] mb-6 flex-grow">
                                {quote}
                            </p>
                            <div className="mt-auto flex items-center gap-4">
                                <div className="w-8 h-[2px]" style={{ background: "var(--primary)" }}></div>
                                <div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--text)] font-[family-name:var(--font-outfit)] tracking-widest uppercase mb-0.5 transition-colors hover:text-[var(--primary)]"
                                    >
                                        {project.title}
                                        <span className="material-symbols-outlined text-[14px] leading-none">open_in_new</span>
                                    </a>
                                    <span className="block text-sm text-[var(--text-muted)]">{label}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

const Card = ({ title, description, category, themeId, video, link }: Project) => {
    return (
        <div className="w-full flex justify-center group h-full">
            <div className="flex flex-col w-full min-h-[500px] border rounded-lg overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.15)] relative" style={{ borderColor: "var(--line)", background: "var(--panel)" }}>
                <div className="w-full aspect-video relative overflow-hidden shrink-0 border-b" style={{ borderColor: "var(--line-soft)", background: "var(--surface-muted)" }}>
                    {video ? (
                        <video 
                            src={video} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <AbstractArt themeId={themeId} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-muted)] to-transparent opacity-20 pointer-events-none" />
                </div>

                <div className="w-full grow p-8 md:p-10 flex flex-col justify-center relative z-10" style={{ background: "var(--panel)" }}>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-3 text-[var(--text-soft)]">
                        <div className="w-6 h-[1px]" style={{ background: "var(--line-strong)" }}></div>
                        {category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black mb-4 font-[family-name:var(--font-outfit)] leading-[1.1] tracking-tight text-[var(--text)]">{title}</h3>
                    <p className="text-sm md:text-base leading-relaxed mb-6 line-clamp-3 text-[var(--text-muted)]">{description}</p>
                    <div className="mt-auto">
                        <a 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-bold transition-colors group/btn text-[var(--text)] hover:text-[var(--primary)]"
                        >
                            View Live Project
                            <span className="material-symbols-outlined text-xs transform group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


const AbstractArt = ({ themeId }: { themeId: ThemeId }) => {
    return (
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
            {themeId === "blue" && (
                <React.Fragment>
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent blur-xl" />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent blur-xl" />
                    <div className="w-40 h-56 md:w-64 md:h-80 bg-white/80 backdrop-blur-md border border-white/80 rounded-xl shadow-2xl transform -rotate-6 absolute transition-transform duration-700 group-hover:-translate-y-4 group-hover:rotate-[-8deg] " />
                    <div className="w-40 h-56 md:w-64 md:h-80 bg-blue-500/10 backdrop-blur-md border border-white/60 rounded-xl shadow-xl transform rotate-6 absolute ml-16 md:ml-32 mt-12 transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-[8deg] " />
                </React.Fragment>
            )}
            {themeId === "purple" && (
                <React.Fragment>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-400/10 via-transparent to-transparent blur-lg" />
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 blur-lg absolute transition-transform duration-700 group-hover:scale-110 will-change-transform" />
                    <div className="w-24 h-24 md:w-48 md:h-48 bg-white/80 backdrop-blur-md border border-white/90 rounded-full shadow-2xl relative z-10 transform -translate-y-8 -translate-x-8 transition-transform duration-700 group-hover:-translate-y-12 will-change-transform" />
                    <div className="w-20 h-20 md:w-32 md:h-32 bg-white/60 backdrop-blur-md border border-white/60 rounded-full shadow-xl absolute z-20 transform translate-y-12 translate-x-12 transition-transform duration-700 group-hover:translate-y-16 will-change-transform" />
                </React.Fragment>
            )}
            {themeId === "cyan" && (
                <React.Fragment>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent blur-lg" />
                    <div className="w-full h-full flex flex-col gap-4 p-8 md:p-24 absolute inset-0 transform -rotate-12 scale-110 opacity-60">
                        <div className="w-full h-8 md:h-12 bg-white/70 backdrop-blur-sm border border-white/60 rounded-xl shadow-sm transition-transform duration-500 group-hover:translate-x-4 will-change-transform" />
                        <div className="w-3/4 h-8 md:h-12 bg-white/90 backdrop-blur-sm border border-white/90 rounded-xl shadow-md transition-transform duration-700 delay-75 group-hover:translate-x-8 will-change-transform" />
                        <div className="w-full h-24 md:h-32 bg-cyan-500/10 backdrop-blur-sm border border-white/60 rounded-xl shadow-sm transition-transform duration-[900ms] delay-150 group-hover:translate-x-2 will-change-transform" />
                    </div>
                </React.Fragment>
            )}
            {themeId === "rose" && (
                <React.Fragment>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-rose-400/20 via-transparent to-transparent blur-lg" />
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-gradient-to-tr from-rose-400/30 to-orange-300/30 blur-lg absolute bottom-1/4 right-1/4 transition-transform duration-700 group-hover:scale-125 will-change-transform" />

                    <div className="flex items-end gap-2 md:gap-6 h-48 md:h-64 w-full px-8 md:px-24">
                        <div className="w-1/4 h-[40%] bg-white/60 backdrop-blur-sm border border-white/60 rounded-t-xl shadow-lg transition-all duration-500 group-hover:h-[50%]" />
                        <div className="w-1/4 h-[70%] bg-white/80 backdrop-blur-sm border border-white/80 rounded-t-xl shadow-xl transition-all duration-700 delay-75 group-hover:h-[85%]" />
                        <div className="w-1/4 h-[100%] bg-rose-500/10 backdrop-blur-md border border-white/90 rounded-t-xl shadow-2xl relative z-10 transition-all duration-[900ms] delay-150 group-hover:h-[110%]" />
                        <div className="w-1/4 h-[55%] bg-white/60 backdrop-blur-sm border border-white/60 rounded-t-xl shadow-lg transition-all duration-500 delay-200 group-hover:h-[65%]" />
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};
