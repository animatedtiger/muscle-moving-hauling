import Reveal from "./Reveal";

const ITEMS = [
  {
    title: "Fast",
    copy: "Quick scheduling, quick crews. We don't drag a half-day job into a whole one.",
    icon: (
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" strokeLinejoin="round" />
    ),
  },
  {
    title: "No Problem",
    copy: "Tight stairwell, heavy safe, last-minute call — the answer is the same.",
    icon: (
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Free Estimates",
    copy: "Know what it costs before anyone lifts a box. Always free, no strings.",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M9 15l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Straight Pricing",
    copy: "One show-up fee, one hourly rate. No broker markups, no surprise fees.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12M15.5 9.5c-.6-1-1.9-1.5-3.5-1.5-2 0-3 1-3 2 0 3 7 1.5 7 4.5 0 1-1 2-3.5 2-1.8 0-3-.6-3.5-1.5" strokeLinecap="round" />
      </>
    ),
  },
];

/*
 * SCPSC BADGE SLOT — pending Carson's confirmation.
 * If the client holds an SC household-goods carrier registration, add a
 * fifth item here with the real certificate number, e.g.:
 *   { title: "SC Registered Carrier", copy: "SCPSC Cert. #____", icon: ... }
 * Do NOT render a registration claim until the number is confirmed.
 */

export default function TrustStrip() {
  return (
    <section className="relative bg-asphalt py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="h-full">
              <div className="group flex h-full flex-col gap-4 bg-asphalt p-8 transition-colors duration-300 hover:bg-concrete">
                <span className="flex h-11 w-11 items-center justify-center border border-muscle/40 text-muscle transition-all duration-300 group-hover:border-muscle group-hover:shadow-[0_0_24px_rgba(255,90,31,0.3)]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    {item.icon}
                  </svg>
                </span>
                <h3 className="headline text-xl text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-fog">{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
