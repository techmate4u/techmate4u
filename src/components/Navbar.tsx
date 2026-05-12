"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import logo from '../../public/assets/logo.webp';

const NAV_SECTIONS = [
    { name: 'Services', href: '/#services', id: 'services' },
    { name: 'Work', href: '/#portfolio', id: 'portfolio' },
    { name: 'Process', href: '/#process', id: 'process' },
    { name: 'About Us', href: '/about-us', id: 'about-us' },
] as const;

const DOT_W = 6;
const LINE_H = 3;

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');
    const [mobileOpen, setMobileOpen] = useState(false);
    const standaloneActiveSection = NAV_SECTIONS.find(s => !s.href.startsWith('/#') && pathname === s.href)?.id;
    const currentActiveSection = standaloneActiveSection ?? activeSection;

    const borderRef = useRef<SVGRectElement>(null);
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
    const navInnerRef = useRef<HTMLDivElement>(null);
    const scrolledRef = useRef(false);

    // ── Dot/pill indicator ──────────────────────────────────────────────────
    const rawCx = useMotionValue(0);
    const rawW = useMotionValue(DOT_W);
    const cx = useSpring(rawCx, { stiffness: 280, damping: 28, mass: 1 });
    const w = useSpring(rawW, { stiffness: 200, damping: 26, mass: 1 });
    const left = useTransform(() => cx.get() - w.get() / 2);

    const getCenterX = (id: string) => {
        const link = linkRefs.current[id];
        const nav = navInnerRef.current;
        if (!link || !nav) return 0;
        const lr = link.getBoundingClientRect();
        const nr = nav.getBoundingClientRect();
        return lr.left - nr.left + lr.width / 2;
    };

    const animateTo = useCallback((targetId: string) => {
        const toCx = getCenterX(targetId);
        const fromCx = rawCx.get();
        rawCx.set((fromCx + toCx) / 2);
        rawW.set(Math.max(Math.abs(toCx - fromCx) + DOT_W, DOT_W));
        const t = setTimeout(() => { rawCx.set(toCx); rawW.set(DOT_W); }, 110);
        return () => clearTimeout(t);
    }, [rawCx, rawW]);

    const snapTo = useCallback((id: string) => {
        const v = getCenterX(id);
        if (!v) return;
        rawCx.set(v);
        rawW.set(DOT_W);
    }, [rawCx, rawW]);

    const clickedRef = useRef(false);
    const handleLinkClick = useCallback((targetId: string) => {
        clickedRef.current = true;
        animateTo(targetId);
        setTimeout(() => { clickedRef.current = false; }, 900);
    }, [animateTo]);

    useEffect(() => {
        if (!currentActiveSection || clickedRef.current) return;
        const raf = requestAnimationFrame(() => snapTo(currentActiveSection));
        return () => cancelAnimationFrame(raf);
    }, [currentActiveSection, snapTo]);

    useEffect(() => {
        const onResize = () => { if (currentActiveSection) snapTo(currentActiveSection); };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [currentActiveSection, snapTo]);

    // ── Scroll-progress border ──────────────────────────────────────────────
    useEffect(() => {
        const border = borderRef.current;
        if (!border) return;
        let ticking = false;

        const updateOnScroll = () => {
            const nextScrolled = window.scrollY > 20;
            if (nextScrolled !== scrolledRef.current) {
                scrolledRef.current = nextScrolled;
                setScrolled(nextScrolled);
            }

            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollable <= 0) {
                ticking = false;
                return;
            }
            // Add a buffer of 20px to ensure it hits 100% even with subpixel/mobile bar issues
            const rawY = window.scrollY;
            const effectiveY = rawY < 8 ? 0 : rawY;
            const p = Math.max(0, Math.min(effectiveY / Math.max(1, scrollable - 20), 1));

            border.style.strokeDasharray = '1';
            border.style.strokeDashoffset = (1 - p).toString();
            border.style.strokeLinecap = p <= 0.001 ? 'butt' : 'round';
            border.style.filter = p >= 1 ? 'drop-shadow(0 0 6px var(--theme-glow))' : 'none';
            ticking = false;
        };

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(updateOnScroll);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        updateOnScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // ── Inject styles ───────────────────────────────────────────────────────
    useEffect(() => {
        const style = document.createElement('style');
        style.id = 'nav-border-style';
        style.textContent = `
            /* ── Hide native scrollbar ── */
            html { scrollbar-width: none; }
            html::-webkit-scrollbar { display: none; }
        `;
        document.head.appendChild(style);
        return () => document.getElementById('nav-border-style')?.remove();
    }, []);

    /* ── Pathname-based active state for standalone pages ── */
    /* ── Scroll listener for navbar bg ── */
    /* ── IntersectionObserver (hash sections on homepage) ── */
    useEffect(() => {
        // Skip observer on standalone pages — pathname match handles it
        const isStandalonePage = NAV_SECTIONS.some(s => !s.href.startsWith('/#') && pathname === s.href);
        if (isStandalonePage) return;

        const elements = NAV_SECTIONS
            .map(s => document.getElementById(s.id))
            .filter(Boolean) as HTMLElement[];
        if (!elements.length) return;
        const observer = new IntersectionObserver(
            (entries) => { for (const e of entries) if (e.isIntersecting) setActiveSection(e.target.id); },
            { rootMargin: '-20% 0px -75% 0px', threshold: 0 },
        );
        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [pathname]);

    /* ── Mobile scroll lock ── */
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const closeMobile = useCallback(() => setMobileOpen(false), []);
    const isVisible = NAV_SECTIONS.some(s => s.id === currentActiveSection);

    return (
        <>
            {/* ═══════════ Desktop Navbar ═══════════ */}
            <div className={`fixed left-0 right-0 z-50 flex justify-center w-full top-3 px-4 max-w-4xl mx-auto md:transition-[top,max-width] md:duration-500 pointer-events-none ${scrolled ? 'md:top-3 md:max-w-4xl' : 'md:top-5 md:max-w-6xl'
                }`}>
                <header
                    className={`relative rounded-full flex items-center justify-between w-full pointer-events-auto py-3 px-5 backdrop-blur-md transition-[box-shadow] duration-300 ease-out group/nav shadow-[0_18px_40px_-16px_rgba(0,0,0,0.12)] md:transition-[padding,background-color,border-color,box-shadow,backdrop-filter] md:duration-500 md:ease-out md:hover:-translate-y-[2px] md:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] ${scrolled
                        ? 'md:glass-nav md:py-2.5 md:px-6 md:backdrop-blur-2xl md:border'
                        : 'md:glass-nav md:py-3.5 md:px-8 md:border md:backdrop-blur-md'
                        }`}
                    style={{
                        background: scrolled ? 'color-mix(in srgb, var(--panel) 92%, transparent)' : 'color-mix(in srgb, var(--panel) 78%, transparent)',
                        borderColor: 'var(--glass-border)',
                        boxShadow: '0 18px 40px -16px rgba(0,0,0,0.12), 0 18px 48px -28px var(--theme-glow)'
                    }}
                >
                    {/* Blue halo */}
                    <div
                        className={`absolute inset-0 rounded-full transition-opacity duration-700 -z-10 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
                        style={{ boxShadow: '0 0 40px var(--theme-glow), 0 0 80px color-mix(in srgb, var(--theme-glow) 45%, transparent)' }}
                    />

                    {/* ── Animated scroll-progress border ring ── */}
                    <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%" style={{ zIndex: 25, overflow: 'visible' }}>
                        <rect
                            ref={borderRef}
                            x="-1" y="-1"
                            className="w-[calc(100%+2px)] h-[calc(100%+2px)] transition-[filter] duration-300"
                            rx="35"
                            ry="35"
                            fill="none"
                            stroke="var(--primary)"
                            pathLength="1"
                            strokeLinecap="round"
                            style={{
                                strokeDasharray: '1',
                                strokeDashoffset: '1'
                            }}
                        />
                    </svg>

                    {/* Logo */}
                    <Link href="/#home" className="flex items-center gap-1 sm:gap-1.5 relative z-30 group drop-shadow-sm">
                        <Image
                            src={logo}
                            alt="TechMate4u"
                            priority
                            className="h-10 w-auto sm:h-10 transition-all duration-300 group-hover:scale-[1.02]"
                            style={{ filter: 'sepia(1) saturate(300%) hue-rotate(140deg)' }}
                        />
                        <span className="hidden sm:inline font-extrabold text-xl tracking-[-0.03em] transition-colors duration-300 group-hover:text-[var(--primary)] select-none font-[family-name:var(--font-outfit)] text-[var(--text)]">
                            TechMate4u
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav ref={navInnerRef} className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2 z-30">
                        {NAV_SECTIONS.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                ref={(el) => { linkRefs.current[item.id] = el; }}
                                onClick={() => handleLinkClick(item.id)}
                                className={`relative text-[14.5px] font-medium tracking-tight transition-colors duration-200 py-2 drop-shadow-sm ${currentActiveSection === item.id ? 'text-[var(--text)]' : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Dot / pill indicator */}
                        {isVisible && (
                            <motion.div
                                className="absolute pointer-events-none z-0 overflow-visible"
                                style={{ left, width: w, height: LINE_H, bottom: -4, borderRadius: 9999, background: "var(--primary)" }}
                            >
                                <div className="absolute inset-0 rounded-full" style={{ filter: 'blur(4px)', transform: 'scaleY(2.5) scaleX(1.1)', background: "var(--primary)", opacity: 0.5 }} />
                            </motion.div>
                        )}
                    </nav>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-3 relative z-30">
                        <Link
                            href="/#contact"
                            className="hidden sm:flex group relative overflow-hidden text-white text-[14.5px] font-semibold tracking-wide rounded-full h-10 px-6 transition-all duration-300 hover:-translate-y-0.5 items-center justify-center gap-2"
                            style={{ background: "var(--primary)", boxShadow: "0 10px 24px -12px var(--theme-glow)" }}
                        >
                            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5">Get in Touch</span>
                            <span className="material-symbols-outlined text-[16px] relative z-10 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">arrow_forward</span>
                            <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] group-hover:translate-x-[400%] transition-transform duration-1000 ease-out z-0" />
                        </Link>
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="md:hidden flex items-center justify-center size-10 rounded-full transition-colors hover:bg-[var(--primary-soft)]"
                            aria-label="Open navigation menu"
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: '22px', color: 'var(--text-muted)' }}>menu</span>
                        </button>
                    </div>
                </header>
            </div>

            {/* ═══════════ Mobile Overlay ═══════════ */}
            {mobileOpen && (
                <div className="fixed inset-0 z-[100] mobile-nav-overlay" style={{ background: 'var(--panel)' }}>
                    <div className="flex items-center justify-between px-6 pt-5">
                        <Link href="/#home" onClick={closeMobile} className="flex items-center gap-2 group">
                            <Image
                                src={logo}
                                alt="TechMate4u"
                                priority
                                className="h-10 w-auto transition-all duration-300 group-hover:scale-[1.02]"
                                style={{ filter: 'sepia(1) saturate(300%) hue-rotate(140deg)' }}
                            />
                            <span className="hidden sm:inline font-extrabold text-lg tracking-[-0.03em] text-[var(--text)] group-hover:text-[var(--primary)] transition-colors duration-300">TechMate4u</span>
                        </Link>
                        <button onClick={closeMobile} className="flex items-center justify-center size-10 rounded-full transition-colors hover:bg-[var(--primary-soft)]" aria-label="Close navigation menu">
                            <span className="material-symbols-outlined" style={{ fontSize: '24px', color: 'var(--text-muted)' }}>close</span>
                        </button>
                    </div>
                    <nav className="flex flex-col gap-2 px-6 mt-12">
                        {NAV_SECTIONS.map((item, i) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={closeMobile}
                                className="mobile-nav-link text-3xl font-extrabold font-[family-name:var(--font-outfit)] tracking-tight text-[var(--text)] hover:text-[var(--primary)] transition-colors py-3 border-b"
                                style={{ borderColor: 'var(--line-soft)', animationDelay: `${0.1 + i * 0.08}s` }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="px-6 mt-10 mobile-nav-link" style={{ animationDelay: '0.5s' }}>
                        <Link
                            href="/#contact"
                            onClick={closeMobile}
                            className="flex items-center justify-center gap-2 w-full text-white text-lg font-bold rounded-full h-14 transition-all"
                            style={{ background: "var(--primary)", boxShadow: "0 14px 28px -16px var(--theme-glow)" }}
                        >
                            Get in Touch
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
