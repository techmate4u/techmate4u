"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/sections/SectionHeading";
import { SERVICES_DATA } from "@/components/servicesData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import characterImage from '../../public/assets/3d_character_wwdc.webp';
import { ChevronLeft, ChevronRight, ChevronsRight, ArrowUpRight } from 'lucide-react';
import Button from "@/components/ui/Button";

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const wave1Ref = useRef<HTMLDivElement>(null);
  const wave2Ref = useRef<HTMLDivElement>(null);
  const glowOverlayRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft] = useState(true);
  const [canScrollRight] = useState(true);
  const [isAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    // Pause autoplay during button interaction
    setIsHovered(true);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 4000); // Resume autoplay after 4 seconds of inactivity

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth : 300;
      const gap = 24; // 1.5rem (gap-6)
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleAutoScroll = () => {
    if (scrollContainerRef.current && !isHovered && isAutoPlaying) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth : 300;
      const gap = 24; // 1.5rem (gap-6)
      container.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
    }
  };

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 4000); // 4-second gap before resuming autoplay
  };

  const handleTouchStart = () => {
    handleMouseEnter();
  };

  const handleTouchEnd = () => {
    handleMouseLeave();
  };

  const handleWheel = () => {
    setIsHovered(true);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 4000);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (container) {
          const { scrollLeft } = container;
          const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth : 300;
          const gap = 24;
          const currentIndex = Math.round(scrollLeft / (cardWidth + gap));
          
          if (currentIndex >= 12) {
            container.scrollTo({ left: (currentIndex - 6) * (cardWidth + gap), behavior: 'auto' });
          } else if (currentIndex <= 5) {
            container.scrollTo({ left: (currentIndex + 6) * (cardWidth + gap), behavior: 'auto' });
          }
        }
      }, 150);
    };

    const initScroll = () => {
      if (container) {
        const firstCard = container.firstElementChild as HTMLElement;
        if (firstCard) {
          const cardWidth = firstCard.offsetWidth;
          const gap = 24;
          container.scrollLeft = 6 * (cardWidth + gap);
        }
      }
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Run initial scroll positioning
      requestAnimationFrame(initScroll);
      setTimeout(initScroll, 60);
      window.addEventListener('resize', initScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', initScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    if (isAutoPlaying && !isHovered) {
      autoPlayTimerRef.current = setInterval(handleAutoScroll, 3000);
    }
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlaying, isHovered]);

  useEffect(() => {
    // Register GSAP ScrollTrigger on client-side
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    // Use matchMedia to run heavy scroll animations only on desktop (lg breakpoint)
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Set initial states for transition animations (character elements only)
      gsap.set(characterRef.current, { x: 260, y: 30, rotate: 0, opacity: 0 });
      gsap.set(ringRef.current, { scale: 0, opacity: 0 });
      gsap.set(wave1Ref.current, { scale: 0, opacity: 0 });
      gsap.set(wave2Ref.current, { scale: 0, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", // Trigger starts when top of services enters screen bottom
          end: "center center", // Reaches completion when services center is at screen center
          scrub: 1.5,
        },
        defaults: { ease: "power3.out" }
      });

      // Step 1: Character walks in from the right
      tl.to(characterRef.current, { x: 0, opacity: 1, duration: 1.2 })
        .to(ringRef.current, { scale: 1, opacity: 1, duration: 0.4 }, "-=0.4");

      // Step 2 & 3: Character looks down and touches the glowing ring
      tl.to(characterRef.current, { rotate: -4, y: 45, duration: 0.8 })
        .to(characterRef.current, { scaleX: 1.05, scaleY: 0.95, duration: 0.3 })
        .to(ringRef.current, { scale: 1.2, borderColor: "rgba(47, 107, 255, 0.8)", boxShadow: "0 0 15px rgba(47, 107, 255, 0.5)", duration: 0.3 }, "-=0.3");

      // Step 4: Large soft wave expands from touchpoint
      tl.to(characterRef.current, { scaleX: 1, scaleY: 1, rotate: 2, duration: 0.5 })
        .fromTo(wave1Ref.current, 
          { scale: 0.2, opacity: 1 }, 
          { scale: 8, opacity: 0, duration: 1.2 }, 
          "-=0.5"
        )
        .fromTo(wave2Ref.current, 
          { scale: 0.2, opacity: 0.8 }, 
          { scale: 11, opacity: 0, duration: 1.5 }, 
          "-=1.0"
        );

      // Step 7: Character waves (slow elegant head tilt / rotate back and forth)
      tl.to(characterRef.current, { rotate: 5, y: 35, duration: 0.6 })
        .to(characterRef.current, { rotate: -1, duration: 0.6 })
        .to(characterRef.current, { rotate: 0, duration: 0.4 });

      // Step 8: Walks away (slides back offscreen to the right and fades behind next scroll blocks)
      tl.to(characterRef.current, { x: 260, opacity: 0, duration: 1.2 })
        .to(ringRef.current, { scale: 0, opacity: 0, duration: 0.8 }, "-=1.2");
    });

    // Clean up on unmount
    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-full relative z-20 overflow-hidden pt-20 pb-10 lg:pt-32 lg:pb-28 bg-white border-b border-[var(--line-soft)]" 
    >
      {/* Top blend gradient overlay to transition smoothly from Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

      {/* Premium Minimal Background Overlay */}
      <div 
        ref={glowOverlayRef}
        className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden bg-white origin-bottom"
      >
        {/* Radial Slate-Indigo Glow */}
        <div 
          className="absolute top-[-30%] left-[-15%] w-[85%] h-[85%] rounded-full blur-[130px]"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)"
          }}
        />

        {/* Soft Champagne Gold Glow */}
        <div 
          className="absolute bottom-[-15%] right-[-10%] w-[75%] h-[75%] rounded-full blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(251, 191, 36, 0.12) 0%, transparent 70%)"
          }}
        />

        {/* Radial Mineral Teal Glow */}
        <div 
          className="absolute top-[25%] left-[-10%] w-[70%] h-[70%] rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(45, 212, 191, 0.08) 0%, transparent 70%)"
          }}
        />

        {/* Radial Dusty Rose Glow */}
        <div 
          className="absolute bottom-[35%] right-[-15%] w-[65%] h-[65%] rounded-full blur-[110px]"
          style={{
            background: "radial-gradient(circle, rgba(244, 63, 94, 0.1) 0%, transparent 70%)"
          }}
        />

        {/* Blurred Gradient Mesh */}
        <div 
          className="absolute top-[15%] right-[10%] w-[380px] h-[380px] rounded-full blur-[110px] mix-blend-multiply opacity-50 bg-gradient-to-tr from-amber-100/20 via-rose-100/15 to-transparent"
        />

        {/* Light Beam from Top Left */}
        <div 
          className="absolute top-0 left-0 w-full h-[65%] pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.07) 0%, transparent 55%)"
          }}
        />

        {/* Translucent Blurred Circles */}
        <div className="absolute top-[20%] left-[22%] w-[120px] h-[120px] rounded-full bg-blue-300/20 blur-[35px] backdrop-filter" />
        <div className="absolute bottom-[30%] right-[25%] w-[170px] h-[170px] rounded-full bg-purple-300/15 blur-[45px] backdrop-filter" />

        {/* Very Light Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.25'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Floating 3D WWDC Character & Scroll Interactions (Right Side) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-visible hidden lg:block">
        {/* The 3D Character (Positioned higher next to title) */}
        <div 
          ref={characterRef}
          className="absolute right-[50px] top-[1%] w-[270px] h-[270px] pointer-events-none select-none z-20 flex items-center justify-center bg-white p-2 rounded-full border border-blue-500/10 shadow-[0_8px_30px_rgb(0,0,0,0.03)]"
          style={{ transformOrigin: "bottom center" }}
        >
          <Image
            src={characterImage}
            alt="TechMate4u Custom Software Engineer Mascot"
            className="w-full h-full object-contain pointer-events-none select-none rounded-full"
            placeholder="blur"
          />
        </div>

        {/* Glowing Touch Ring */}
        <div 
          ref={ringRef}
          className="absolute right-[300px] top-[12%] w-[56px] h-[56px] rounded-full border border-blue-400/30 bg-blue-500/5 shadow-[0_0_12px_rgba(47,107,255,0.15)] flex items-center justify-center z-10"
        >
          <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_#2f6bff] animate-pulse" />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-blue-500" />
        </div>

        {/* Expanding Wave Rings */}
        <div 
          ref={wave1Ref}
          className="absolute right-[304px] top-[14%] w-[48px] h-[48px] rounded-full border border-blue-400/20 pointer-events-none z-0"
        />
        <div 
          ref={wave2Ref}
          className="absolute right-[304px] top-[14%] w-[48px] h-[48px] rounded-full border border-purple-400/15 pointer-events-none z-0"
        />
      </div>

      <div className="w-full relative overflow-visible z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div ref={headingRef} className="mb-14 text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 text-sm font-extrabold uppercase tracking-widest text-[var(--primary)] select-none">
              <ChevronsRight className="h-4.5 w-4.5" /> Our Services
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Comprehensive Services for <span className="text-[var(--primary)] bg-gradient-to-r from-[var(--primary)] to-indigo-500 bg-clip-text text-transparent">Every Business Need</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
              From web design to mobile apps, SEO, AI automation, digital marketing, and social media management—everything your business needs to thrive online.
            </p>
          </div>

          {/* Services Carousel */}
          <div className="relative max-w-6xl mx-auto px-4 sm:px-12 mt-8">
            {/* Left Arrow Button */}
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              aria-label="Previous services"
              className={`hidden md:flex absolute left-0 lg:left-[-12px] top-1/2 -translate-y-1/2 z-30 size-11 rounded-full border border-[var(--line-strong)] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md items-center justify-center shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] ${
                canScrollLeft 
                  ? 'opacity-100 hover:scale-105 hover:border-[var(--primary)] text-[var(--text)] hover:text-[var(--primary)] cursor-pointer' 
                  : 'opacity-30 cursor-not-allowed text-[var(--text-muted)]'
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              aria-label="Next services"
              className={`hidden md:flex absolute right-0 lg:right-[-12px] top-1/2 -translate-y-1/2 z-30 size-11 rounded-full border border-[var(--line-strong)] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md items-center justify-center shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] ${
                canScrollRight 
                  ? 'opacity-100 hover:scale-105 hover:border-[var(--primary)] text-[var(--text)] hover:text-[var(--primary)] cursor-pointer' 
                  : 'opacity-30 cursor-not-allowed text-[var(--text-muted)]'
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Carousel Track Container */}
            <div 
              ref={scrollContainerRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onWheel={handleWheel}
              className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pt-4 pb-6 px-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[...SERVICES_DATA, ...SERVICES_DATA, ...SERVICES_DATA].map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={`${service.slug}-${index}`}
                    className="snap-start shrink-0 w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-2*1.5rem)/3)] flex flex-col"
                  >
                    <Card
                      className="flex flex-col relative overflow-hidden group hover:border-[var(--primary)] transition-all duration-300 flex-1 p-6 md:p-8 cursor-pointer"
                    >
                      {/* Visual Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                      <div className="relative z-10 flex flex-col flex-1">
                        {/* Icon */}
                        <div className="text-[var(--primary)] mb-6 transition-transform duration-300 group-hover:scale-105">
                          <Icon className="h-8 w-8" />
                        </div>

                        {/* Title & Desc */}
                        <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--text)] group-hover:text-[var(--primary)] transition-colors duration-300 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[var(--text-muted)] mb-6 flex-grow">
                          {service.description}
                        </p>

                        {/* CTA Button Link */}
                        <div className="mt-auto z-20">
                          <Button
                            variant="text"
                            href={`/services/${service.slug}`}
                            icon={<ArrowUpRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                            iconPosition="right"
                            className="p-0 text-sm font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors duration-300 after:absolute after:inset-0 after:z-10 cursor-pointer"
                          >
                            Read More
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Mobile Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-6 md:hidden">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                aria-label="Previous services"
                className={`size-11 rounded-full border border-[var(--line-strong)] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md flex items-center justify-center shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] ${
                  canScrollLeft 
                    ? 'opacity-100 text-[var(--text)] hover:text-[var(--primary)] hover:border-[var(--primary)]' 
                    : 'opacity-30 cursor-not-allowed text-[var(--text-muted)]'
                }`}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                aria-label="Next services"
                className={`size-11 rounded-full border border-[var(--line-strong)] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md flex items-center justify-center shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] ${
                  canScrollRight 
                    ? 'opacity-100 text-[var(--text)] hover:text-[var(--primary)] hover:border-[var(--primary)]' 
                    : 'opacity-30 cursor-not-allowed text-[var(--text-muted)]'
                }`}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
