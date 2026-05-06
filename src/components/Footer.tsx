"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
];

const serviceLinks = [
    { name: "Web Development", href: "#services" },
    { name: "AI Automation", href: "#services" },
    { name: "UI / UX Design", href: "#services" },
    { name: "SEO & Growth", href: "#services" },
];


/* Social links — swap hrefs for real profiles */
const socialLinks = [
    {
        label: "GitHub",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5" aria-hidden="true">
                <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.087 3.292 9.396 7.862 10.918.575.104.785-.25.785-.555 0-.274-.01-1.001-.015-1.964-3.198.695-3.874-1.54-3.874-1.54-.523-1.328-1.277-1.681-1.277-1.681-1.044-.713.08-.699.08-.699 1.154.082 1.762 1.186 1.762 1.186 1.026 1.758 2.692 1.25 3.349.956.104-.742.4-1.25.728-1.537-2.553-.29-5.24-1.277-5.24-5.682 0-1.255.449-2.28 1.183-3.084-.118-.291-.513-1.46.113-3.044 0 0 .964-.308 3.159 1.178a10.99 10.99 0 0 1 2.878-.387c.976.005 1.958.132 2.878.387 2.194-1.486 3.156-1.178 3.156-1.178.628 1.584.232 2.753.114 3.044.737.804 1.182 1.829 1.182 3.084 0 4.416-2.692 5.389-5.254 5.674.413.354.78 1.053.78 2.123 0 1.534-.014 2.77-.014 3.146 0 .308.208.664.79.552C20.71 21.393 24 17.087 24 12 24 5.648 18.852.5 12 .5Z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5" aria-hidden="true">
                <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.851-3.037-1.852 0-2.136 1.445-2.136 2.94v5.666H9.358V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM6.891 20.452H3.781V9h3.11v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
            </svg>
        ),
    },
    {
        label: "Twitter / X",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
];

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Footer() {
    return (
        <footer className="w-full relative overflow-hidden" style={{ background: "var(--surface-muted)" }}>
            {/* Top gradient divider */}
            <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                    background: "var(--footer-divider)",
                    opacity: 0.4,
                }}
            />

            {/* Main content */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-14 pb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
                    {/* ── Col 1: Brand ── */}
                    <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                        <Link href="#home" className="flex items-center gap-2.5 group w-fit">
                            <Image
                                src={logo}
                                alt="TechMate4u"
                                className="h-8 w-auto transition-all duration-300 group-hover:scale-[1.02]"
                                style={{ filter: 'sepia(1) saturate(300%) hue-rotate(140deg)' }}
                            />
                            <span className="font-extrabold text-lg tracking-tight group-hover:text-[var(--primary)] transition-colors duration-300 drop-shadow-sm text-[var(--text)]">
                                TechMate4u
                            </span>
                        </Link>

                        <p className="text-sm leading-relaxed max-w-xs drop-shadow-sm text-[var(--text-muted)]">
                            Full-cycle product studio — discovery, design, development, and deployment. We build what others only plan.
                        </p>

                        {/* Social icons */}
                        <div className="flex items-center gap-2.5 mt-1">
                            {socialLinks.map((s) => (
                                <Link
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="size-9 rounded-full flex items-center justify-center hover:text-[var(--primary)] border transition-all duration-300 text-[var(--text-soft)]"
                                    style={{ background: "var(--panel)", borderColor: "var(--line)" }}
                                >
                                    {s.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* ── Col 2: Navigation ── */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xs font-semibold uppercase tracking-widest drop-shadow-sm text-[var(--text-soft)]">
                            Navigation
                        </h3>
                        <ul className="flex flex-col gap-2.5">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm font-medium transition-colors duration-200 text-[var(--text-muted)] hover:text-[var(--text)]"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 3: Services ── */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xs font-semibold uppercase tracking-widest drop-shadow-sm text-[var(--text-soft)]">
                            Services
                        </h3>
                        <ul className="flex flex-col gap-2.5">
                            {serviceLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm font-medium transition-colors duration-200 text-[var(--text-muted)] hover:text-[var(--text)]"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 4: Contact & CTA ── */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xs font-semibold uppercase tracking-widest drop-shadow-sm text-[var(--text-soft)]">
                            Get In Touch
                        </h3>

                        <Link
                            href="#contact"
                            className="group relative overflow-hidden inline-flex items-center gap-2 text-white text-sm font-bold rounded-full h-10 px-6 w-fit transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[var(--primary)]/25 mt-1"
                            style={{ background: 'var(--primary)', boxShadow: '0 10px 24px -12px var(--theme-glow)' }}
                        >
                            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5">
                                Contact Us
                            </span>
                            <span className="material-symbols-outlined text-[16px] relative z-10 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                mail
                            </span>
                            {/* Shimmer */}
                            <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:translate-x-[500%] transition-transform duration-700 ease-out z-0" />
                        </Link>

                        {/* Legal links removed temporarily as no Tos/Privacy Policy pages exist */}
                    </div>
                </div>

                {/* ── Bottom bar ── */}
                <div className="mt-10 pt-5 border-t flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "var(--line)" }}>
                    <p className="text-xs text-[var(--text-soft)]">
                        © {new Date().getFullYear()} TechMate4u. All rights reserved.
                    </p>

                    {/* Back to top */}
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-1.5 text-xs hover:text-[var(--primary)] transition-colors duration-200 text-[var(--text-soft)]"
                        aria-label="Back to top"
                    >
                        Back to top
                        <span className="material-symbols-outlined text-[14px] transition-transform duration-300 group-hover:-translate-y-0.5">
                            arrow_upward
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
