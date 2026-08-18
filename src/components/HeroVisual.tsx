"use client";

import React from "react";
import HeroCharacter3D from "./HeroCharacter3D";

export default function HeroVisual() {
  return (
    <div className="relative w-full h-[520px] lg:h-[580px] max-w-[560px] flex items-center justify-center select-none overflow-visible">
      {/* ── Subtle glowing ambient backdrop meshes ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="absolute w-[360px] h-[360px] rounded-full blur-[100px] opacity-35 mix-blend-screen bg-gradient-to-tr from-cyan-400 via-blue-400 to-indigo-500" />
        <div className="absolute w-[240px] h-[240px] rounded-full blur-[80px] opacity-30 mix-blend-screen bg-gradient-to-br from-purple-400 to-fuchsia-500" />
      </div>

      {/* ── 3D Interactive Character with Smooth Bottom Fade ── */}
      <div
        className="relative w-full h-full z-10 flex items-center justify-center"
        style={{
          maskImage: "linear-gradient(to bottom, black 70%, transparent 96%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 96%)",
        }}
      >
        <HeroCharacter3D modelUrl="/models/character.glb" />
      </div>
    </div>
  );
}
