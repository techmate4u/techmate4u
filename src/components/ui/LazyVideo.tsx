"use client";

import React, { useRef, useEffect, useState } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  poster?: string;
}

export default function LazyVideo({ src, className, poster }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [inView, setInView] = useState(false);

  // Reset load state when source changes
  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
          if (entry.isIntersecting) {
            setIsLoaded(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "200px" } // Load video 200px before it enters the viewport
    );

    observer.observe(videoEl);

    return () => {
      observer.unobserve(videoEl);
    };
  }, []);

  // Manage play/pause state dynamically based on intersection visibility
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl || !isLoaded) return;

    if (inView) {
      videoEl.play().catch((err) => {
        if (err.name !== "AbortError") {
          console.log("Lazy video play failed:", err);
        }
      });
    } else {
      videoEl.pause();
    }
  }, [inView, isLoaded]);

  return (
    <video
      ref={videoRef}
      src={isLoaded ? src : undefined}
      loop
      muted
      playsInline
      preload={isLoaded ? "metadata" : "none"}
      poster={poster}
      className={className}
    />
  );
}
