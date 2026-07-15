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

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
          } else {
            // Only pause if it has been loaded
            if (videoEl.src) {
              videoEl.pause();
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "200px" } // Load video 200px before it enters the viewport
    );

    observer.observe(videoEl);

    return () => {
      observer.unobserve(videoEl);
    };
  }, [src]);

  // Handle play when video is loaded in the DOM
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl || !isLoaded) return;

    videoEl.play().catch((err) => {
      // Ignore abort errors from play interrupts
      if (err.name !== "AbortError") {
        console.log("Lazy video play failed:", err);
      }
    });
  }, [isLoaded]);

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
