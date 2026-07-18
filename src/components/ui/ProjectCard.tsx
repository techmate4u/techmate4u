"use client";

import React, { useState, useEffect } from "react";
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
}: Project) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images && images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [images]);

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

  return (
    <div className="w-full flex justify-center group h-full">
      <Card
        className="flex flex-col w-full min-h-[520px] overflow-hidden relative p-0 transition-all duration-300 hover:border-[var(--primary)]"
        style={{ background: "var(--panel)" }}
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
              {challenge}
            </p>
          </div>

          {/* Result */}
          <div className="mb-6">
            <h4 className="text-[10px] font-extrabold tracking-wider uppercase text-[var(--text-soft)] mb-1.5">
              Result
            </h4>
            <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[var(--text-muted)]">
              <span className="font-bold text-[var(--text)]">{resultBold}</span>
              {resultText}
            </p>
          </div>

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

              {link && link !== "#" ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-[var(--surface)] hover:-translate-y-0.5 active:scale-[0.98] border"
                  style={{ borderColor: "var(--line-strong)", color: "var(--text)", background: "var(--surface-muted)" }}
                >
                  Demo <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : (
                <div className="flex-1 flex items-center justify-center h-12 rounded-xl text-sm font-bold text-[var(--text-muted)] bg-[var(--surface-muted)] opacity-40 cursor-not-allowed select-none border" style={{ borderColor: "var(--line-soft)" }}>
                  Demo
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
