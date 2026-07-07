"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { PHONE_DISPLAY } from "./Nav";

const FAQS = [
  {
    q: "How does pricing work?",
    a: `One show-up fee that covers the truck and crew getting to you, then an hourly rate for time worked. No flat-rate padding, no broker markups, no surprise line items. Call ${PHONE_DISPLAY} and we'll give you both numbers up front — the estimate is free.`,
  },
  {
    q: "What area do you cover?",
    a: "About 50 miles out from both Bluffton and Charleston — Hilton Head, Okatie, Hardeeville, and the Savannah border area on one end; Mount Pleasant, Summerville, and North Charleston on the other. On the edge of the map? Call anyway; if we can get a truck there, we'll take the job.",
  },
  {
    q: 'What counts as "general labor"?',
    a: "Anything that needs strong backs: rearranging furniture, loading a rental truck you already booked, moving a safe or piano dolly-work, shop cleanouts, storm prep. If your first thought was \"I need a couple strong guys,\" that's the service.",
  },
  {
    q: "How do free estimates work?",
    a: "You call, describe the job — what's moving, from where, to where, stairs or no stairs — and we quote the show-up fee and hourly rate on the spot. Bigger or unusual jobs may get a quick walk-through first. Either way it costs nothing and you're not committed.",
  },
  {
    q: "Do you haul junk too?",
    a: "Yes — junk removal is a core service, not a side favor. Furniture, appliances, garage and storage cleanouts, yard debris. We load it, haul it, and it's gone, often on the same trip as your move.",
  },
  {
    q: "How fast can you get here?",
    a: "Fast is the whole brand. Availability varies by day, but we're a local crew with local dispatch — not a national line booking three weeks out. Call and we'll tell you honestly what we can do.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-light-bg py-24 text-ink md:py-32">
      <div className="hazard absolute inset-x-0 top-0 h-1.5" />
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal>
          <p className="label-cond mb-4 text-sm text-muscle">Straight Answers</p>
          <h2 className="headline text-4xl sm:text-5xl md:text-6xl">
            Asked &amp; <span className="text-outline-orange">answered.</span>
          </h2>
        </Reveal>

        <div className="mt-12">
          {FAQS.map((faq, i) => {
            const open = openIdx === i;
            return (
              <Reveal key={faq.q} delay={i * 0.05}>
                <div className="border-b border-ink/15">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenIdx(open ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="headline text-base sm:text-lg">
                      {faq.q}
                    </span>
                    <span
                      aria-hidden
                      className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300 ${
                        open
                          ? "rotate-45 border-muscle bg-muscle text-white"
                          : "border-ink/25 text-ink"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-14 text-sm leading-relaxed text-ink/70">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
