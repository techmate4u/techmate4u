"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";

export default function IntroLoader() {
  const [show, setShow] = useState<boolean | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [fade, setFade] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if the intro has already played in this browser session
    const hasPlayed = sessionStorage.getItem("techmate-intro-played");
    if (hasPlayed === "true") {
      setShow(false);
    } else {
      setShow(true);
      // Lock scroll while the intro plays
      document.body.style.overflow = "hidden";
    }

    return () => {
      // Ensure body scroll is unlocked when the loader unmounts
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleFinish = () => {
    if (fade) return;
    setFade(true);
    setTimeout(() => {
      sessionStorage.setItem("techmate-intro-played", "true");
      setShow(false);
      document.body.style.overflow = "unset";
    }, 1200);
  };

  const handleTimeUpdate = () => {
    const videoEl = videoRef.current;
    if (!videoEl || !videoEl.duration || fade) return;

    // Start zoom-in transition 1.5 seconds before the video ends
    const remainingTime = videoEl.duration - videoEl.currentTime;
    if (remainingTime <= 1.5) {
      setFade(true);
      setTimeout(() => {
        sessionStorage.setItem("techmate-intro-played", "true");
        setShow(false);
        document.body.style.overflow = "unset";
      }, 1200);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  if (show === null || !show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center select-none pointer-events-auto transition-colors duration-1000 ${
        fade ? "bg-white/0 pointer-events-none" : "bg-black"
      }`}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/assets/intro_video.mp4"
        autoPlay
        muted={isMuted}
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleFinish}
        className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-[1200ms] ease-in-out"
        style={{
          transform: fade ? "scale(3.5)" : "scale(1)",
          opacity: fade ? 0 : 1,
          filter: fade ? "brightness(1.1) blur(6px)" : "brightness(0.9) blur(0px)",
        }}
      />

      {/* Interface Overlay Controls */}
      <div className="absolute inset-x-0 bottom-8 px-6 sm:px-12 flex items-center justify-between z-10 w-full max-w-7xl mx-auto pointer-events-none">
        {/* Sound Toggle (Mute/Unmute) */}
        <button
          onClick={toggleMute}
          className="pointer-events-auto flex items-center justify-center size-12 rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-black/60 active:scale-95 cursor-pointer"
          aria-label={isMuted ? "Unmute Intro Video" : "Mute Intro Video"}
          title={isMuted ? "Unmute Sound" : "Mute Sound"}
        >
          {isMuted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
        </button>

        {/* Skip Intro Button */}
        <button
          onClick={handleFinish}
          className="pointer-events-auto flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-white/20 bg-white/10 text-white text-sm font-bold tracking-wide uppercase backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 active:scale-95 cursor-pointer"
          aria-label="Skip Intro Video"
        >
          Skip Intro
          <ArrowRight className="size-4" />
        </button>
      </div>

      {/* Premium ambient light flare to enhance luxury feel */}
      <div className="absolute top-0 left-0 w-full h-[35%] bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-0" />
    </div>
  );
}
