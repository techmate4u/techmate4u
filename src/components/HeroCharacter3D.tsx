"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { Sparkles } from "lucide-react";

interface HeroCharacter3DProps {
  modelUrl?: string;
  className?: string;
}

export default function HeroCharacter3D({
  modelUrl = "/models/character.glb",
  className = "",
}: HeroCharacter3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    const box = mountRef.current;
    if (!box) return;

    let isDestroyed = false;
    let reqId: number | null = null;
    let isVisible = true;

    // ── 1. Scene Setup ──
    const scene = new THREE.Scene();
    scene.background = null;

    const width = box.clientWidth || 560;
    const height = box.clientHeight || 580;

    // Upper body framing: hair down to waist, perfectly proportioned
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 50);
    camera.position.set(0, 0.55, 1.45);
    camera.lookAt(0, 0.52, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    box.appendChild(renderer.domElement);

    // ── 2. Studio Lighting Setup ──
    scene.add(new THREE.AmbientLight(0xffffff, 1.4));

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    keyLight.position.set(2.5, 4.0, 3.0);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 1.6);
    fillLight.position.set(-3.0, 2.0, 1.0);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x818cf8, 2.2);
    rimLight.position.set(0, 3.5, -2.5);
    scene.add(rimLight);

    const mouseLight = new THREE.PointLight(0x60a5fa, 1.6, 6);
    mouseLight.position.set(0, 1.4, 2.2);
    scene.add(mouseLight);

    // ── 3. Model Rig & Bone Discovery ──
    let head: THREE.Bone | null = null;
    let neck: THREE.Bone | null = null;
    let spine2: THREE.Bone | null = null;
    let initHead = new THREE.Euler();
    let initNeck = new THREE.Euler();
    let initSpine2 = new THREE.Euler();
    let modelScene: THREE.Group | null = null;

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      modelUrl,
      (gltf) => {
        if (isDestroyed) return;
        modelScene = gltf.scene;
        modelScene.position.set(0, 0, 0);

        modelScene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            if (mesh.material) {
              const mat = mesh.material as THREE.MeshStandardMaterial;
              mat.roughness = Math.min(mat.roughness ?? 0.7, 0.85);
              mat.metalness = Math.min(mat.metalness ?? 0.1, 0.25);
              mat.needsUpdate = true;
            }
          }

          if ((child as THREE.Bone).isBone) {
            const bone = child as THREE.Bone;
            if (bone.name === "Head") {
              head = bone;
              initHead.copy(bone.rotation);
            } else if (bone.name === "Neck") {
              neck = bone;
              initNeck.copy(bone.rotation);
            } else if (bone.name === "Spine2") {
              spine2 = bone;
              initSpine2.copy(bone.rotation);
            }
          }
        });

        scene.add(modelScene);
        setLoading(false);
      },
      (xhr) => {
        if (xhr.lengthComputable) {
          const progress = Math.round((xhr.loaded / xhr.total) * 100);
          setLoadProgress(progress);
        }
      },
      (error) => {
        console.error("Failed to load 3D character:", error);
        setLoading(false);
      }
    );

    // ── 4. True-Direction Model-Centered Cursor Calculation ──
    const mouse = {
      targetYaw: 0,
      targetPitch: 0,
      smoothX: 0,
      smoothY: 0,
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!box) return;
      const rect = box.getBoundingClientRect();

      let clientX = 0;
      let clientY = 0;

      if ("touches" in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ("clientX" in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else {
        return;
      }

      let headPixelX = rect.left + rect.width * 0.5;
      let headPixelY = rect.top + rect.height * 0.28;

      if (head) {
        const headWorld = new THREE.Vector3();
        head.getWorldPosition(headWorld);
        headWorld.project(camera);
        headPixelX = rect.left + ((headWorld.x + 1) / 2) * rect.width;
        headPixelY = rect.top + ((-headWorld.y + 1) / 2) * rect.height;
      }

      const deltaX = (clientX - headPixelX) / (window.innerWidth * 0.5);
      const deltaY = (clientY - headPixelY) / (window.innerHeight * 0.5);

      mouse.targetYaw = deltaX * 1.1;
      mouse.targetPitch = deltaY * 0.85;

      mouseLight.position.x = (clientX / window.innerWidth) * 2 - 1 * 2.5;
      mouseLight.position.y = 1.0 + (-(clientY / window.innerHeight) * 2 + 1) * 1.4;
    };

    const handlePointerLeave = () => {
      mouse.targetYaw = 0;
      mouse.targetPitch = 0;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);

    // ── 5. Viewport Observer ──
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(box);

    // ── 6. Resize Observer ──
    const handleResize = () => {
      if (!box) return;
      const w = box.clientWidth;
      const h = box.clientHeight;
      if (w === 0 || h === 0) return;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // ── 7. Render Loop ──
    const clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const time = clock.getElapsedTime();

      // Smooth Easing Damping
      mouse.smoothX += (mouse.targetYaw - mouse.smoothX) * 0.09;
      mouse.smoothY += (mouse.targetPitch - mouse.smoothY) * 0.09;

      const yaw = Math.max(-1.15, Math.min(1.15, mouse.smoothX));
      const pitch = Math.max(-0.68, Math.min(0.68, mouse.smoothY));
      const breath = Math.sin(time * 2.2) * 0.025;

      // Natural Head & Neck Cursor Tracking (Up = tilt up, Down = tilt down)
      if (head) {
        head.rotation.y = initHead.y + yaw * 0.65;
        head.rotation.x = initHead.x + pitch * 0.65 + breath;
        head.rotation.z = initHead.z - yaw * 0.1;
      }
      if (neck) {
        neck.rotation.y = initNeck.y + yaw * 0.25;
        neck.rotation.x = initNeck.x + pitch * 0.25 + breath * 0.5;
      }
      if (spine2) {
        spine2.rotation.y = initSpine2.y + yaw * 0.10;
        spine2.rotation.x = initSpine2.x + pitch * 0.10 + breath * 0.3;
      }

      renderer.render(scene, camera);
    };

    animate();

    // ── 8. Cleanup on Unmount ──
    return () => {
      isDestroyed = true;
      if (reqId !== null) cancelAnimationFrame(reqId);

      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      dracoLoader.dispose();

      if (modelScene) {
        modelScene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.geometry.dispose();
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((m) => m.dispose());
            } else if (mesh.material) {
              mesh.material.dispose();
            }
          }
        });
      }

      renderer.dispose();
      if (box.contains(renderer.domElement)) {
        box.removeChild(renderer.domElement);
      }
    };
  }, [modelUrl]);

  return (
    <div className={`relative w-full h-full min-h-[480px] max-h-[600px] flex items-center justify-center select-none ${className}`}>
      {/* 3D WebGL Canvas Mount */}
      <div ref={mountRef} className="w-full h-full flex items-center justify-center" />

      {/* Instant loading state */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/10 dark:bg-slate-950/20 backdrop-blur-sm rounded-3xl z-30">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
            <Sparkles className="w-4 h-4 text-cyan-400 absolute animate-pulse" />
          </div>
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 font-mono">
            {loadProgress > 0 ? `${loadProgress}%` : "Loading 3D Engine..."}
          </span>
        </div>
      )}
    </div>
  );
}
