import Reveal from "./Reveal";
import { PHONE_DISPLAY, PHONE_TEL } from "./Nav";

const STEPS = [
  {
    n: "01",
    title: "One show-up fee",
    copy: "Covers the truck and the crew getting to your door. You know it before we roll.",
  },
  {
    n: "02",
    title: "Hourly from there",
    copy: "You pay for time worked — not a padded flat rate built to protect us from your stairs.",
  },
  {
    n: "03",
    title: "Free estimate first",
    copy: "Call, tell us the job, get the numbers. No obligation, no pressure, no games.",
  },
];

/**
 * Light contrast-break section. The billing model is framed as the
 * confidence pitch it is — not fine print.
 */
export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-light-bg py-24 text-ink md:py-32">
      <div className="hazard absolute inset-x-0 top-0 h-1.5" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="label-cond mb-4 text-sm text-muscle">Pricing</p>
            <h2 className="headline text-4xl sm:text-5xl md:text-6xl">
              Zero
              <br />
              <span className="text-outline-orange">surprise</span>
              <br />
              fees.
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-ink/70">
              Big van lines quote low and invoice high. We do the opposite of
              complicated: a show-up fee, an hourly rate, and a crew that
              works fast because your bill depends on it.
            </p>
            <a
              href={PHONE_TEL}
              className="headline mt-9 inline-flex items-center gap-3 bg-ink px-8 py-4 text-base text-white transition-colors duration-300 hover:bg-muscle"
            >
              Get Your Numbers — {PHONE_DISPLAY}
            </a>
          </Reveal>

          <div className="flex flex-col justify-center gap-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.12}>
                <div className="group flex gap-6 border border-ink/15 bg-white p-7 transition-all duration-300 hover:border-muscle hover:shadow-[0_8px_32px_rgba(255,90,31,0.14)]">
                  <span className="headline text-3xl text-outline-orange transition-colors duration-300">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="headline text-lg">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">
                      {step.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
