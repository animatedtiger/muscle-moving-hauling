"use client";

import { useEffect, useRef } from "react";

/**
 * Animated hero scene: a freight yard at night. Sodium-orange dock glow,
 * a perspective lot grid flowing like a road under headlights, diagonal
 * speed streaks, and drifting dust embers. Pure CSS + one lightweight
 * canvas — looks finished with no video file, disappears beneath the
 * Seedance hero video when Carson drops it in later.
 */
export default function HaulBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let raf = 0;

    type Ember = {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      depth: number;
      twinkle: number;
    };

    const embers: Ember[] = [];
    const COUNT = 60;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      embers.length = 0;
      for (let i = 0; i < COUNT; i++) {
        const depth = 0.3 + Math.random() * 0.7;
        embers.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: depth * 1.7,
          // Dust drifts sideways more than up — wind across a lot, not a fire.
          vx: (0.06 + Math.random() * 0.14) * depth,
          vy: -(0.02 + Math.random() * 0.06) * depth,
          depth,
          twinkle: Math.random() * Math.PI * 2,
        });
      }
    };

    let t = 0;
    const tick = () => {
      t += 0.016;
      ctx.clearRect(0, 0, width, height);
      for (const p of embers) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x > width + 8) {
          p.x = -8;
          p.y = Math.random() * height;
        }
        if (p.y < -8) p.y = height + 8;

        const alpha =
          p.depth * 0.5 * (0.6 + 0.4 * Math.sin(t * 1.3 + p.twinkle));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.depth > 0.7 ? "255, 170, 110" : "255, 110, 50"}, ${alpha})`;
        ctx.shadowColor = "rgba(255, 122, 61, 0.8)";
        ctx.shadowBlur = p.depth * 7;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    seed();
    tick();

    const onResize = () => {
      resize();
      seed();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {/* Base: night sky over asphalt — the always-safe fallback layer */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,#2a2018_0%,#1a1815_40%,#101214_78%)]" />

      {/* Sodium dock-light glow drifting slowly */}
      <div className="absolute -left-1/4 top-[-12%] h-[70vh] w-[70vw] animate-glow-drift rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.16)_0%,transparent_65%)] blur-3xl" />
      <div className="absolute -right-1/4 top-[20%] h-[55vh] w-[55vw] animate-float-slow rounded-full bg-[radial-gradient(circle,rgba(255,201,60,0.07)_0%,transparent_60%)] blur-3xl" />

      {/* Perspective lot grid, flowing toward the viewer */}
      <div className="road-floor absolute inset-x-[-20%] bottom-[-12%] h-[58%] animate-road-flow opacity-70" />

      {/* Horizon line — the lit dock edge */}
      <div className="absolute inset-x-0 top-[42%] h-px bg-gradient-to-r from-transparent via-muscle/50 to-transparent" />

      {/* Diagonal speed streaks */}
      <div className="absolute left-0 top-[24%] h-px w-2/5 animate-streak bg-gradient-to-r from-transparent via-muscle-bright/90 to-transparent" />
      <div className="absolute left-0 top-[60%] h-0.5 w-1/3 animate-streak-late bg-gradient-to-r from-transparent via-muscle/70 to-transparent" />

      {/* Drifting dust embers */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Vignette + readability scrim */}
      <div className="absolute inset-0 bg-[radial-gradient(85%_70%_at_50%_45%,transparent_30%,rgba(16,18,20,0.74)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-asphalt to-transparent" />

      {/* Asphalt grain */}
      <div className="noise absolute inset-0" />
    </div>
  );
}
