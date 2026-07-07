"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import HaulBackdrop from "./HaulBackdrop";
import { PHONE_DISPLAY, PHONE_TEL } from "./Nav";

const ease = [0.21, 0.6, 0.18, 1] as const;

/**
 * Video-ready hero. With no video files present, HaulBackdrop renders a
 * finished animated scene. Drop hero-bg-desktop.mp4 / hero-bg-mobile.mp4
 * into public/videos/ and the videos cover it automatically — the
 * existence check happens server-side in app/page.tsx.
 *
 * Top clearance derives from --nav-h (see DECISIONS.md).
 */
export default function Hero({
  hasDesktopVideo,
  hasMobileVideo,
}: {
  hasDesktopVideo: boolean;
  hasMobileVideo: boolean;
}) {
  const reduce = useReducedMotion();
  const hasAnyVideo = hasDesktopVideo || hasMobileVideo;

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <HaulBackdrop />

      {/* Desktop video (≥ md). Hidden on mobile so only one plays per viewport. */}
      {hasDesktopVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
        >
          <source src="/videos/hero-bg-desktop.mp4" type="video/mp4" />
        </video>
      )}

      {/* Mobile video (< md). Hidden on desktop. */}
      {hasMobileVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 block h-full w-full object-cover md:hidden"
        >
          <source src="/videos/hero-bg-mobile.mp4" type="video/mp4" />
        </video>
      )}

      {/* Dark overlay for text readability — only when a video is present;
          HaulBackdrop carries its own scrim. */}
      {hasAnyVideo && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(85%_70%_at_50%_45%,rgba(16,18,20,0.45)_0%,rgba(16,18,20,0.85)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-asphalt to-transparent" />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-32 pt-[calc(var(--nav-h)+4rem)] text-center md:pb-40">
        {/* Badge slot — mirrors the big movers' rating-badge position.
            Holds a true claim until real ratings exist. */}
        <motion.p
          {...fadeUp(0.1)}
          className="label-cond mb-7 inline-flex items-center gap-2.5 border border-muscle/40 bg-tar/50 px-5 py-2 text-xs text-fog backdrop-blur-md"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-muscle opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-muscle" />
          </span>
          Bluffton → Charleston · Free Estimates
        </motion.p>

        <motion.h1
          {...fadeUp(0.25)}
          className="headline text-5xl text-white sm:text-6xl md:text-7xl lg:text-[6rem]"
        >
          Moving?
          <br />
          <span className="text-muscle">No problem.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.45)}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-fog md:text-lg"
        >
          Fast, no-nonsense moving and hauling across the Lowcountry — homes,
          businesses, junk, and anything that needs muscle. Show up, work
          hard, done.
        </motion.p>

        <motion.div
          {...fadeUp(0.62)}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={PHONE_TEL}
            className="headline group inline-flex items-center gap-3 bg-muscle px-9 py-4.5 text-lg text-white shadow-[0_0_48px_rgba(255,90,31,0.45)] transition-all duration-300 hover:bg-muscle-bright hover:shadow-[0_0_72px_rgba(255,122,61,0.65)]"
          >
            Call {PHONE_DISPLAY}
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          <a
            href="#quote"
            className="label-cond inline-flex items-center border border-white/25 px-8 py-4.5 text-sm text-white transition-all duration-300 hover:border-muscle hover:text-muscle-bright"
          >
            Free Estimate
          </a>
        </motion.div>

        {/* Route micro-form — the big movers lead with a 2-field quote
            starter. Ours converts to a phone call (no backend exists). */}
        <motion.div {...fadeUp(0.8)} className="mx-auto mt-12 max-w-xl">
          <RouteForm />
        </motion.div>
      </div>

    </section>
  );
}

/**
 * Two fields, one button. On submit it doesn't pretend to auto-quote —
 * it hands the visitor to the phone with their route acknowledged.
 */
function RouteForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="panel px-6 py-5 text-center">
        <p className="text-sm leading-relaxed text-fog">
          Got it — call us now and we&rsquo;ll lock in your quote:
        </p>
        <a
          href={PHONE_TEL}
          className="headline mt-2 inline-block text-2xl text-muscle transition-colors duration-300 hover:text-muscle-bright"
        >
          {PHONE_DISPLAY}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="panel flex flex-col gap-2.5 p-2.5 sm:flex-row"
    >
      <label className="flex-1">
        <span className="sr-only">Moving from</span>
        <input
          type="text"
          name="from"
          required
          maxLength={80}
          placeholder="Moving from (city or zip)"
          className="w-full bg-tar/70 px-4 py-3.5 text-sm text-white placeholder:text-smoke outline-none transition-all duration-300 focus:shadow-[inset_0_0_0_1px_var(--color-muscle)]"
        />
      </label>
      <label className="flex-1">
        <span className="sr-only">Moving to</span>
        <input
          type="text"
          name="to"
          required
          maxLength={80}
          placeholder="Moving to"
          className="w-full bg-tar/70 px-4 py-3.5 text-sm text-white placeholder:text-smoke outline-none transition-all duration-300 focus:shadow-[inset_0_0_0_1px_var(--color-muscle)]"
        />
      </label>
      <button
        type="submit"
        className="label-cond bg-muscle px-6 py-3.5 text-sm text-white transition-colors duration-300 hover:bg-muscle-bright"
      >
        Get Moving
      </button>
    </form>
  );
}
