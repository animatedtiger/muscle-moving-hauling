import Reveal from "./Reveal";
import { PHONE_DISPLAY, PHONE_TEL } from "./Nav";

/**
 * Bold-number section — true facts only. The business just opened, so
 * there are no "500+ moves" style stats to show, and we don't invent them
 * (see PRODUCT.md). These four are all verifiable claims.
 */
const FACTS = [
  { big: "50", unit: "mi", label: "radius from each hub" },
  { big: "2", unit: "hubs", label: "Bluffton + Charleston" },
  { big: "6", unit: "services", label: "moves to muscle-for-hire" },
  { big: "0", unit: "excuses", label: "the no-problem guarantee" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-asphalt py-24 md:py-32">
      {/* Ambient streaks — speed even while you read numbers */}
      <div
        aria-hidden
        className="absolute left-0 top-[30%] h-px w-2/5 animate-streak bg-gradient-to-r from-transparent via-muscle/60 to-transparent"
      />
      <div
        aria-hidden
        className="absolute left-0 top-[70%] h-px w-1/3 animate-streak-late bg-gradient-to-r from-transparent via-muscle-bright/50 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="label-cond mb-4 text-sm text-muscle">Why Muscle</p>
          <h2 className="headline max-w-3xl text-4xl text-white sm:text-5xl md:text-6xl">
            New company. <span className="text-muscle">Old-school work ethic.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {FACTS.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 0.1}>
              <div className="border-l-2 border-muscle pl-6">
                <p className="headline text-6xl text-white md:text-7xl">
                  {fact.big}
                  <span className="ml-1 align-top text-2xl text-muscle md:text-3xl">
                    {fact.unit}
                  </span>
                </p>
                <p className="label-cond mt-3 text-xs text-fog">{fact.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-16 max-w-2xl text-base leading-relaxed text-fog">
            We&rsquo;re earning our reputation one move at a time — which means
            your job gets the effort a company proves itself with.{" "}
            <a
              href={PHONE_TEL}
              className="headline text-lg text-muscle transition-colors duration-300 hover:text-muscle-bright"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
