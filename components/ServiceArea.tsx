import Reveal from "./Reveal";

/**
 * Dual-hub coverage data. Typed and exported so phase-2 per-city landing
 * pages (see PROJECT_OVERVIEW.md) can consume the same source of truth.
 */
export type Hub = {
  name: string;
  tagline: string;
  cities: string[];
};

export const HUBS: Hub[] = [
  {
    name: "Bluffton Hub",
    tagline: "Home base — the Lowcountry corridor",
    cities: [
      "Bluffton",
      "Hilton Head Island",
      "Okatie",
      "Hardeeville",
      "Beaufort",
      "Ridgeland",
      "Savannah, GA (border area)",
    ],
  },
  {
    name: "Charleston Hub",
    tagline: "Full coverage up the coast",
    cities: [
      "Charleston",
      "Mount Pleasant",
      "Summerville",
      "North Charleston",
      "Goose Creek",
      "West Ashley",
      "Johns Island",
    ],
  },
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="relative overflow-hidden bg-tar py-24 md:py-32">
      {/* Oversized stencil word bleeding off-canvas — road-marking motif */}
      <span
        aria-hidden
        className="headline text-outline pointer-events-none absolute -right-8 top-8 select-none text-[9rem] opacity-[0.07] md:text-[14rem]"
      >
        50 MI
      </span>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="label-cond mb-4 text-sm text-muscle">Coverage</p>
          <h2 className="headline max-w-3xl text-4xl text-white sm:text-5xl md:text-6xl">
            Two hubs. <span className="text-muscle">One crew standard.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-fog">
            We run 50 miles out from both Bluffton and Charleston — the whole
            Lowcountry corridor, covered without long-haul pricing.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {HUBS.map((hub, i) => (
            <Reveal key={hub.name} delay={i * 0.12} className="h-full">
              <div className="panel relative h-full overflow-hidden p-8">
                <div className="hazard-thin absolute inset-y-0 left-0 w-2 opacity-70" />
                <h3 className="headline text-2xl text-white">{hub.name}</h3>
                <p className="label-cond mt-2 text-xs text-muscle">
                  {hub.tagline}
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {hub.cities.map((city) => (
                    <li
                      key={city}
                      className="flex items-center gap-2.5 text-sm text-fog"
                    >
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 shrink-0 bg-muscle"
                      />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-sm text-smoke">
            Not sure you&rsquo;re in range? Call — if we can get a truck to
            you, you&rsquo;re in range.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
