"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { PHONE_DISPLAY, PHONE_TEL } from "./Nav";

/**
 * Quote form — UI complete, INTENTIONALLY not wired to a destination.
 *
 * The client has no email, CRM, or SMS lead service yet, so submitting
 * shows an honest hand-off to the phone instead of a fake success state
 * that would silently eat leads. PRE-LAUNCH BLOCKER tracked in
 * PROJECT_OVERVIEW.md: when Carson picks a destination, wire handleSubmit
 * to it and swap the submitted-state copy for a real confirmation.
 * The honeypot field is already in place for that day.
 */

const SERVICES = [
  "Local Move",
  "Packing / Unpacking",
  "Junk Removal",
  "Commercial Move",
  "Storage",
  "General Labor",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // Honeypot: a real user never fills this.
    if (data.get("bot-field")) {
      setSubmitted(true);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="quote" className="relative overflow-hidden bg-asphalt py-24 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[50vh] w-[120vw] -translate-x-1/2 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(255,90,31,0.13)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-muscle/60 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="label-cond mb-5 text-sm text-muscle">Get a Quote</p>
          <h2 className="headline text-4xl text-white sm:text-5xl md:text-6xl">
            Tell us the job.
            <br />
            <span className="text-muscle">We&rsquo;ll say no problem.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-fog">
            Fastest answer is always the phone —{" "}
            <a
              href={PHONE_TEL}
              className="headline text-lg text-muscle transition-colors duration-300 hover:text-muscle-bright"
            >
              {PHONE_DISPLAY}
            </a>{" "}
            — but you can start with the form below.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          {submitted ? (
            <div className="panel mx-auto mt-12 max-w-2xl p-10 text-center md:p-12">
              <span className="hazard mx-auto mb-6 flex h-14 w-14 items-center justify-center">
                <span className="flex h-11 w-11 items-center justify-center bg-tar text-2xl text-muscle">
                  ☎
                </span>
              </span>
              <p className="headline text-xl leading-snug text-white">
                Call us directly at{" "}
                <a
                  href={PHONE_TEL}
                  className="text-muscle transition-colors duration-300 hover:text-muscle-bright"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-fog">
                Online quote requests are coming soon — until then the phone
                is the fastest way to lock in your estimate. We answer.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="panel mx-auto mt-12 max-w-2xl p-7 text-left md:p-10"
            >
              <p className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human:{" "}
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name">
                  <input
                    type="text"
                    name="name"
                    required
                    maxLength={100}
                    placeholder="Sam Rivers"
                    className={inputCls}
                  />
                </Field>
                <Field label="Phone">
                  <input
                    type="tel"
                    name="phone"
                    required
                    maxLength={20}
                    placeholder="(843) 555-0123"
                    className={inputCls}
                  />
                </Field>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field label="When">
                  <input
                    type="text"
                    name="timeframe"
                    maxLength={60}
                    placeholder="e.g. Second week of August"
                    className={inputCls}
                  />
                </Field>
                <Field label="What do you need?">
                  <select name="service" required className={inputCls} defaultValue="">
                    <option value="" disabled>
                      Pick a service
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <Field label="The details" className="mt-5">
                <textarea
                  name="message"
                  required
                  rows={4}
                  maxLength={2000}
                  placeholder="From where, to where, what's moving — stairs, elevators, anything heavy…"
                  className={`${inputCls} resize-none`}
                />
              </Field>

              <button
                type="submit"
                className="headline group mt-7 inline-flex w-full items-center justify-center gap-3 bg-muscle px-9 py-4 text-base text-white shadow-[0_0_40px_rgba(255,90,31,0.35)] transition-all duration-300 hover:bg-muscle-bright hover:shadow-[0_0_64px_rgba(255,122,61,0.55)] sm:w-auto"
              >
                Get My Free Estimate
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </button>

              <p className="mt-5 text-xs leading-relaxed text-smoke">
                In a hurry? Skip the form:{" "}
                <a
                  href={PHONE_TEL}
                  className="text-muscle underline-offset-4 transition-colors duration-300 hover:text-muscle-bright hover:underline"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

const inputCls =
  "w-full bg-tar/70 px-4 py-3.5 text-sm text-white placeholder:text-smoke outline-none transition-all duration-300 focus:shadow-[inset_0_0_0_1px_var(--color-muscle)]";

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="label-cond mb-2 block text-xs text-fog">{label}</span>
      {children}
    </label>
  );
}
