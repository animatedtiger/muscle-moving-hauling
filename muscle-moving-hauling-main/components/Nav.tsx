"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

export const PHONE_DISPLAY = "(843) 505-4839";
export const PHONE_TEL = "tel:+18435054839";

// Stable no-op subscribe for the client-only mount check below.
const emptySubscribe = () => () => {};

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Service Area", href: "#service-area" },
  { label: "FAQ", href: "#faq" },
  { label: "Get a Quote", href: "#quote" },
];

/**
 * Fixed nav. Height comes exclusively from the shared --nav-h token
 * (see DECISIONS.md — nav/hero coupling). The phone number is the
 * persistent primary CTA: the client has no email or booking flow.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // True only on the client — gates the portal so it never renders during
  // SSR, where `document` is undefined.
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the menu is open; always restore on close/unmount.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes the menu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Portaled to <body> so no ancestor transform/overflow/z-index can trap it.
  const overlay = (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[99999] bg-tar lg:hidden"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_45%_at_50%_0%,rgba(255,90,31,0.12)_0%,transparent_70%)]" />
          <div className="hazard absolute inset-x-0 top-0 h-1.5" />

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-5 z-10 flex h-10 w-10 items-center justify-center border border-white/15"
          >
            <span className="relative block h-3.5 w-5">
              <span className="absolute left-0 top-1.5 h-0.5 w-full rotate-45 bg-white" />
              <span className="absolute left-0 top-1.5 h-0.5 w-full -rotate-45 bg-white" />
            </span>
          </button>

          <div className="relative flex h-full flex-col justify-center gap-2 px-8">
            {LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
                className="headline border-b border-white/10 py-5 text-3xl text-white"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={PHONE_TEL}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="headline mt-8 inline-flex w-fit items-center gap-3 bg-muscle px-8 py-4 text-xl text-white shadow-[0_0_40px_rgba(255,90,31,0.45)]"
            >
              Call {PHONE_DISPLAY}
            </motion.a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-tar/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[var(--nav-h)] max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Wordmark — CSS placeholder until the client has a real logo */}
        <a href="#top" className="group flex items-center gap-3">
          <span className="hazard flex h-9 w-9 items-center justify-center">
            <span className="flex h-[26px] w-[26px] items-center justify-center bg-tar font-display text-sm text-muscle">
              M
            </span>
          </span>
          <span className="headline text-base leading-none text-white sm:text-lg">
            Muscle{" "}
            <span className="text-muscle">Moving&nbsp;&amp;&nbsp;Hauling</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="label-cond group relative text-[13px] text-fog transition-colors duration-300 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-muscle transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={PHONE_TEL}
          className="headline hidden items-center gap-2.5 bg-muscle px-6 py-3 text-sm text-white shadow-[0_0_32px_rgba(255,90,31,0.35)] transition-all duration-300 hover:bg-muscle-bright hover:shadow-[0_0_48px_rgba(255,122,61,0.55)] lg:inline-flex"
        >
          <PhoneIcon />
          {PHONE_DISPLAY}
        </a>

        {/* Mobile: phone always visible + menu toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={PHONE_TEL}
            aria-label={`Call ${PHONE_DISPLAY}`}
            className="flex h-10 w-10 items-center justify-center bg-muscle text-white"
          >
            <PhoneIcon />
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="relative z-50 flex h-10 w-10 items-center justify-center border border-white/15"
          >
            <span className="relative block h-3.5 w-5">
              <span className="absolute left-0 top-0 h-0.5 w-full bg-white" />
              <span className="absolute left-0 top-1.5 h-0.5 w-full bg-white" />
              <span className="absolute left-0 top-3 h-0.5 w-full bg-white" />
            </span>
          </button>
        </div>
      </nav>

      {mounted ? createPortal(overlay, document.body) : null}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.58 4.5 2 2 0 0 1 3.54 2.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.78-1.78a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
