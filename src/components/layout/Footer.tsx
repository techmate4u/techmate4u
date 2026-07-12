"use client";

import Link from "next/link";
import Image from "next/image";
import { Bot, Code2, Megaphone, Mail, MapPin, Phone, Search, Smartphone, Instagram } from "lucide-react";
import logo from "../../../public/assets/logo.webp";

const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Process", href: "/#process" },
    { name: "Contact", href: "/#contact" },
];

const serviceLinks = [
    { name: "Web Development", href: "/#services", icon: Code2 },
    { name: "Technical SEO", href: "/#services", icon: Search },
    { name: "Automation Systems", href: "/#services", icon: Bot },
    { name: "Mobile App Development", href: "/#services", icon: Smartphone },
    { name: "Digital Marketing", href: "/#services", icon: Megaphone },
];

const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Refund Policy", href: "/refund-policy" },
];

const contactLinks = [
    { label: "info@techmate4u.com", href: "mailto:info@techmate4u.com", icon: Mail },
    { label: "+91 93272 63267", href: "tel:+919327263267", icon: Phone },
];

const socialLinks = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/officialtechmate4u/",
        icon: (
            <Instagram className="h-4.5 w-4.5" />
        ),
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/techmate-4u",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5" aria-hidden="true">
                <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.851-3.037-1.852 0-2.136 1.445-2.136 2.94v5.666H9.358V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM6.891 20.452H3.781V9h3.11v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
            </svg>
        ),
    },
    {
        label: "Twitter / X",
        href: "https://x.com/techmate4u",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden" style={{ background: "var(--surface-muted)" }}>
            {/* City Skyline background drawing */}
            <div className="absolute right-0 bottom-0 w-[600px] h-[320px] bg-[url(/assets/bg-skyline.png)] bg-no-repeat bg-contain bg-bottom opacity-[0.09] pointer-events-none z-0" />

            <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-px z-10"
                style={{
                    background: "var(--footer-divider)",
                    opacity: 0.4,
                }}
            />

            <div className="mx-auto max-w-7xl px-6 pb-8 pt-14 sm:px-8 lg:px-12 relative z-10">
                <div className="grid grid-cols-2 gap-10 lg:grid-cols-[1.25fr_0.8fr_1fr_1.2fr] lg:gap-8">
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
                        <Link href="/#home" className="group flex w-fit items-center gap-2.5">
                            <Image
                                src={logo}
                                alt="TechMate4u"
                                className="h-10 w-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                                style={{ filter: "sepia(1) saturate(300%) hue-rotate(190deg)" }}
                            />
                            <span className="text-lg font-extrabold tracking-tight text-[var(--text)] drop-shadow-sm transition-colors duration-300 group-hover:text-[var(--primary)]">
                                TechMate4u
                            </span>
                        </Link>

                        <p className="max-w-xs text-sm leading-relaxed text-[var(--text-muted)] drop-shadow-sm">
                            Full-cycle product studio for discovery, design, development, and deployment. We build what others only plan.
                        </p>

                        <div className="mt-1 flex items-center gap-2.5">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="flex size-9 items-center justify-center rounded-full border text-[var(--text-soft)] transition-all duration-300 hover:text-[var(--primary)] hover:border-[var(--primary)] hover:shadow-[0_4px_16px_var(--theme-glow)] hover:-translate-y-1 hover:scale-110"
                                    style={{ background: "var(--panel)", borderColor: "var(--line)" }}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-1 flex flex-col gap-3">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-soft)] drop-shadow-sm">
                            Navigation
                        </h3>
                        <ul className="flex flex-col gap-2.5">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] transition-all duration-300 hover:text-[var(--primary)] hover:translate-x-1.5"
                                    >
                                        <span className="text-[12px] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[var(--primary)]">→</span>
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 flex flex-col gap-3">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-soft)] drop-shadow-sm">
                            Services
                        </h3>
                        <ul className="flex flex-col gap-2.5">
                            {serviceLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center gap-2.5 text-sm font-medium text-[var(--text-muted)] transition-all duration-300 hover:text-[var(--primary)]"
                                    >
                                        <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-blue-500/20 bg-blue-500/10 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(37,99,235,0.35)]">
                                            <link.icon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
                                        </span>
                                        <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--primary)]">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-soft)] drop-shadow-sm">
                            Get In Touch
                        </h3>

                        <div className="flex flex-col gap-3">
                            {contactLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="group flex items-center gap-3 text-sm font-medium text-[var(--text-muted)] transition-all duration-300 hover:text-[var(--primary)]"
                                >
                                    <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-blue-500/20 bg-blue-500/10 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(37,99,235,0.35)]">
                                        <item.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                                    </span>
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">{item.label}</span>
                                </a>
                            ))}

                            <div className="group flex items-center gap-3 text-sm font-medium text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--primary)]">
                                <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-blue-500/20 bg-blue-500/10 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(37,99,235,0.35)]">
                                    <MapPin className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                                </span>
                                <span className="transition-transform duration-300 group-hover:translate-x-1">Ahmedabad, Gujarat, India</span>
                            </div>
                        </div>

                        <a
                            href="mailto:info@techmate4u.com"
                            className="group relative mt-1 inline-flex h-10 w-fit items-center gap-2 overflow-hidden rounded-full px-6 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_var(--theme-glow)]"
                            style={{ background: "var(--primary)", boxShadow: "0 10px 24px -12px var(--theme-glow)" }}
                        >
                            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5">
                                Email Us
                            </span>
                            <span className="material-symbols-outlined relative z-10 -translate-x-3 text-[16px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                mail
                            </span>
                            <div className="absolute -left-full top-0 z-0 h-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />
                        </a>
                    </div>
                </div>

                <div className="mt-10 border-t pt-5" style={{ borderColor: "var(--line)" }}>
                    <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
                        <p className="text-xs text-[var(--text-soft)]">
                            © {new Date().getFullYear()} TechMate4u. All rights reserved.
                        </p>

                        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Legal links">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-xs font-medium text-[var(--text-soft)] transition-all duration-200 hover:text-[var(--primary)] hover:-translate-y-0.5"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}
