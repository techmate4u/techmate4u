"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/ui/Card";
import LazyVideo from "@/components/ui/LazyVideo";
import { ExternalLink } from "lucide-react";

export type ThemeId = "blue" | "purple" | "cyan" | "rose" | "emerald";

export interface Project {
  title: string;
  category: string;
  challenge: string;
  resultBold: string;
  resultText: string;
  tags: string[];
  themeId: ThemeId;
  video?: string;
  images?: string[];
  link?: string;
  slug?: string;
}

export interface ProjectCardProps extends Project {
  variant?: "default" | "compact";
}

export default function ProjectCard({
  title,
  challenge,
  resultBold,
  resultText,
  category,
  themeId,
  tags,
  video,
  images,
  link,
  slug,
  variant = "default",
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isTouch = useRef<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inView, setInView] = useState(false);
  // Mobile tap-to-open state for the compact hover panel
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Detect touch-only devices (no hover capability) once on mount
    isTouch.current = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  }, []);

  const handleMediaTap = () => {
    if (isTouch.current) {
      setIsOpen(prev => !prev);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (images && images.length > 1 && inView) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [images, inView]);

  // Map theme to gradient and badge color matching the screenshots
  let headerGradient = "from-blue-200 to-indigo-100";
  let badgeClass = "bg-blue-50 text-blue-700 border-blue-200/50";
  
  if (themeId === "cyan" || themeId === "emerald") {
    headerGradient = "from-teal-200/80 to-emerald-100/50";
    badgeClass = "bg-teal-50 text-teal-700 border-teal-200/50";
  } else if (themeId === "rose") {
    headerGradient = "from-rose-200 to-pink-100";
    badgeClass = "bg-rose-50 text-rose-700 border-rose-200/50";
  } else if (themeId === "purple") {
    headerGradient = "from-purple-200 to-fuchsia-100";
    badgeClass = "bg-purple-50 text-purple-700 border-purple-200/50";
  }

  const challengeLimit = 95;
  const resultLimit = 95;

  const showChallenge = isExpanded || challenge.length <= challengeLimit
    ? challenge
    : challenge.slice(0, challengeLimit) + "...";

  const combinedResultLength = resultBold.length + resultText.length;
  const hasResultTruncation = combinedResultLength > resultLimit;

  let showResultBold = resultBold;
  let showResultText = resultText;

  if (!isExpanded && hasResultTruncation) {
    if (resultBold.length >= resultLimit) {
      showResultBold = resultBold.slice(0, resultLimit) + "...";
      showResultText = "";
    } else {
      const remainingLimit = resultLimit - resultBold.length;
      showResultText = resultText.slice(0, remainingLimit) + "...";
    }
  }

  const needsToggle = challenge.length > challengeLimit || combinedResultLength > resultLimit;

  if (variant === "compact") {
    return (
      <div ref={cardRef} className="w-full group">
        <Card
          className="flex flex-col w-full overflow-hidden p-0 transition-all duration-500 hover:border-[var(--primary)] rounded-2xl border cursor-pointer sm:cursor-default"
          style={{
            background: "var(--panel)",
            boxShadow: "0 2px 20px 0 rgba(0,0,0,0.08), 0 1px 4px 0 rgba(0,0,0,0.04)"
          }}
          onClick={handleMediaTap}
        >
          {/* Media — aspect-[4/3] on mobile for taller tap area, video aspect on desktop */}
          <div className="relative w-full aspect-[4/3] sm:aspect-video overflow-hidden">
            {video ? (
              <LazyVideo
                src={video}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            ) : images && images.length > 0 ? (
              <div className="w-full h-full relative">
                {images.map((img, idx) => (
                  <Image
                    key={img}
                    src={img}
                    alt={title}
                    fill
                    priority={idx === 0}
                    className={`object-cover transition-all duration-700 group-hover:scale-[1.03] absolute inset-0 ${
                      idx === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            ) : null}

            {/* Hover overlay — fades in on hover (desktop) or tap (mobile) */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-500 z-10 ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />

            {/* Frosted glass panel — starts offset so category+title strip shows at bottom.
                Desktop: slides up on CSS hover. Mobile: slides up on tap via isOpen state. */}
            <div
              className={`absolute bottom-0 left-0 right-0 z-20 transition-all duration-500 ease-out p-4 pt-3 flex flex-col border-t ${
                isOpen ? "translate-y-0" : "translate-y-[calc(100%-80px)] group-hover:translate-y-0"
              }`}
              style={{
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderColor: "rgba(255,255,255,0.18)"
              }}
            >
              {/* Solid backing for legibility in both light and dark modes */}
              <div className="absolute inset-0 bg-white/92 dark:bg-slate-900/92 -z-10" />

              {/* Category + Title — always visible in the 80px strip */}
              <div className="flex items-center justify-between gap-3 h-[52px]">
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase text-[var(--primary)] mb-0.5 block">
                    {category}
                  </span>
                  <h3 className="font-[family-name:var(--font-outfit)] text-[15px] sm:text-base font-black leading-[1.2] tracking-tight text-slate-900 dark:text-white line-clamp-1">
                    {title}
                  </h3>
                </div>
                {/* Chevron indicator for mobile — flips when open */}
                <div className="sm:hidden flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 shrink-0">
                  <svg
                    className={`h-4 w-4 text-slate-500 dark:text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              {/* Details — fade in on hover (desktop) or when isOpen (mobile) */}
              <div 
                className={`transition-opacity duration-300 flex flex-col pt-1 ${
                  isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-hover:delay-100"
                }`}
                onClick={(e) => {
                  // Prevent taps on the details/buttons from bubbling up and closing the card
                  e.stopPropagation();
                }}
              >
                <div className="mb-2">
                  <h4 className="text-[9px] font-extrabold tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-0.5">Challenge</h4>
                  <p className="text-[12px] leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                    {challenge.length > 90 ? challenge.slice(0, 90) + "..." : challenge}
                  </p>
                </div>
                <div className="mb-3">
                  <h4 className="text-[9px] font-extrabold tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-0.5">Result</h4>
                  <p className="text-[12px] leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                    <span className="font-bold text-slate-900 dark:text-white">{resultBold}</span>
                    {resultText.length > 55 ? resultText.slice(0, 55) + "..." : resultText}
                  </p>
                </div>
                <div className="flex gap-2.5 border-t pt-3" style={{ borderColor: "color-mix(in srgb, var(--text) 8%, transparent)" }}>
                  {slug ? (
                    <Link
                      href={`/work/${slug}`}
                      className="flex-1 flex items-center justify-center h-10 rounded-xl text-xs font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] cursor-pointer"
                      style={{ background: "var(--primary)" }}
                    >
                      Case Study
                    </Link>
                  ) : (
                    <div className="flex-1 flex items-center justify-center h-10 rounded-xl text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 opacity-40 cursor-not-allowed select-none">
                      Case Study
                    </div>
                  )}
                  {(() => {
                    const label = link && link !== "#" ? "Live Site" : (category.toLowerCase().includes("software") || category.toLowerCase().includes("pos") ? "Deployed App" : "Production Build");
                    return link && link !== "#" ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 h-10 rounded-xl text-xs font-bold transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-[0.98] border cursor-pointer text-slate-900 dark:text-white"
                        style={{ borderColor: "var(--line-strong)", background: "transparent" }}
                      >
                        {label} <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <div className="flex-1 flex items-center justify-center h-10 rounded-xl text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 opacity-60 select-none border border-slate-200 dark:border-slate-800">
                        {label}
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div ref={cardRef} className="w-full flex justify-center group h-full">
      <Card
        className="flex flex-col w-full min-h-[520px] overflow-hidden relative p-0 transition-all duration-300 hover:border-[var(--primary)]"
        style={{
          background: "var(--panel)",
          boxShadow: "0 2px 16px 0 rgba(0,0,0,0.07), 0 1px 4px 0 rgba(0,0,0,0.04)"
        }}
      >
        {/* Media or Color Panel Header */}
        <div
          className="w-full aspect-video relative overflow-hidden shrink-0 border-b"
          style={{ borderColor: "var(--line-soft)", background: "var(--surface-muted)" }}
        >
          {video ? (
            <LazyVideo
              src={video}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : images && images.length > 0 ? (
            <div className="w-full h-full relative">
              {images.map((img, idx) => (
                <Image
                  key={img}
                  src={img}
                  alt={`${title} screenshot ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${
                    idx === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              {/* Slideshow indicators */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                  {images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? "bg-white w-4" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${headerGradient}`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-muted)] to-transparent opacity-20 pointer-events-none" />
        </div>

        {/* Content Block */}
        <div className="w-full grow p-6 md:p-8 flex flex-col justify-start relative z-10">
          {/* Category Badge */}
          <span className={`inline-block self-start text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${badgeClass} mb-4`}>
            {category}
          </span>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold mb-5 font-[family-name:var(--font-outfit)] leading-tight text-[var(--text)]">
            {title}
          </h3>

          {/* Challenge */}
          <div className="mb-5">
            <h4 className="text-[10px] font-extrabold tracking-wider uppercase text-[var(--text-soft)] mb-1.5">
              Challenge
            </h4>
            <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[var(--text-muted)]">
              {showChallenge}
            </p>
          </div>

          {/* Result */}
          <div className={needsToggle ? "mb-3" : "mb-6"}>
            <h4 className="text-[10px] font-extrabold tracking-wider uppercase text-[var(--text-soft)] mb-1.5">
              Result
            </h4>
            <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[var(--text-muted)]">
              <span className="font-bold text-[var(--text)]">{showResultBold}</span>
              {showResultText}
            </p>
          </div>

          {/* Toggle Button */}
          {needsToggle && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[11px] font-extrabold uppercase tracking-wider text-[var(--primary)] hover:text-[var(--primary-strong)] transition-colors mb-4 focus:outline-none cursor-pointer text-left w-fit"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          )}

          {/* Action Buttons Footer — Case Study & Demo */}
          <div className="mt-auto pt-4 border-t" style={{ borderColor: "var(--line-soft)" }}>
            <div className="flex w-full gap-3">
              {slug ? (
                <Link
                  href={`/work/${slug}`}
                  className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:scale-[0.98] shadow-md"
                  style={{ background: "var(--primary)", boxShadow: "0 8px 20px -8px var(--theme-glow)" }}
                >
                  Case Study
                </Link>
              ) : (
                <div className="flex-1 flex items-center justify-center h-12 rounded-xl text-sm font-bold text-[var(--text-muted)] bg-[var(--surface-muted)] opacity-40 cursor-not-allowed select-none">
                  Case Study
                </div>
              )}

              {(() => {
                const label = link && link !== "#" ? "Live Site" : (category.toLowerCase().includes("software") || category.toLowerCase().includes("pos") ? "Deployed App" : "Production Build");
                return link && link !== "#" ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-[var(--surface)] hover:-translate-y-0.5 active:scale-[0.98] border"
                    style={{ borderColor: "var(--line-strong)", color: "var(--text)", background: "var(--surface-muted)" }}
                  >
                    {label} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <div className="flex-1 flex items-center justify-center h-12 rounded-xl text-[12px] font-bold text-[var(--text-muted)] bg-[var(--surface-muted)] opacity-60 select-none border" style={{ borderColor: "var(--line-soft)" }}>
                    {label}
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
