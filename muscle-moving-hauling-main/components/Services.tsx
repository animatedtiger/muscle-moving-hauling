import Reveal from "./Reveal";
import { PHONE_TEL } from "./Nav";

type Service = {
  title: string;
  copy: string;
  /** Tailwind gradient classes for the card's graphic panel — stands in for
      real job photos until they exist (see DECISIONS.md asset table). */
  panel: string;
  icon: React.ReactNode;
};

const SERVICES: Service[] = [
  {
    title: "Local Moves",
    copy: "Houses, apartments, condos — packed on the truck and into your new place the same day.",
    panel: "from-muscle/80 via-muscle/30 to-tar",
    icon: <path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10" strokeLinejoin="round" />,
  },
  {
    title: "Packing & Unpacking",
    copy: "Boxes, wrap, and careful hands. We pack it like it's ours and unpack it where it goes.",
    panel: "from-gravel via-concrete to-tar",
    icon: (
      <path
        d="M21 8l-9-5-9 5v8l9 5 9-5V8zM3 8l9 5m0 0 9-5m-9 5v9"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Junk Removal",
    copy: "Old couch, garage full of stuff, storm debris — loaded, hauled, gone.",
    panel: "from-dock-yellow/50 via-muscle/25 to-tar",
    icon: (
      <path
        d="M3 6h18M8 6V4h8v2M6 6l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14M10 11v6M14 11v6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Commercial Moves",
    copy: "Offices, shops, and equipment moved on your schedule — nights and weekends included.",
    panel: "from-muscle-bright/60 via-gravel to-tar",
    icon: (
      <path
        d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 7h1m4 0h1M9 11h1m4 0h1M9 15h1m4 0h1"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Storage",
    copy: "Between places? We'll haul it to storage and bring it back when you're ready.",
    panel: "from-concrete via-gravel/80 to-tar",
    icon: (
      <path
        d="M3 9l9-6 9 6v12H3V9zM7 21v-8h10v8M7 17h10"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "General Labor",
    copy: "Anything that needs muscle — rearranging, loading, lifting, site cleanup. Just ask.",
    panel: "from-muscle/60 via-tar to-tar",
    icon: (
      <path
        d="M6.5 6.5h11m-11 11h11M4 4v5m16-5v5M4 15v5m16-5v5M6.5 6.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0zm16 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0zm-16 11a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0zm16 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0z"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-tar py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="label-cond mb-4 text-sm text-muscle">What We Do</p>
          <h2 className="headline max-w-3xl text-4xl text-white sm:text-5xl md:text-6xl">
            If it&rsquo;s heavy, it&rsquo;s <span className="text-muscle">ours.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.1} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden border border-white/10 bg-concrete transition-all duration-300 hover:border-muscle/50 hover:shadow-[0_12px_48px_rgba(255,90,31,0.15)]">
                {/* Graphic panel — photo slot placeholder, on-brand gradient */}
                <div
                  className={`relative h-36 bg-gradient-to-br ${service.panel}`}
                >
                  <div className="noise absolute inset-0" />
                  <div className="hazard-thin absolute inset-x-0 bottom-0 h-2 opacity-60" />
                  <span className="absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center border border-white/25 bg-tar/70 text-white backdrop-blur-sm transition-colors duration-300 group-hover:border-muscle group-hover:text-muscle">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden
                    >
                      {service.icon}
                    </svg>
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="headline text-lg text-white">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">
                    {service.copy}
                  </p>
                  <div className="mt-6 flex items-center gap-5">
                    <a
                      href={PHONE_TEL}
                      className="label-cond text-xs text-muscle transition-colors duration-300 hover:text-muscle-bright"
                    >
                      Call Now
                    </a>
                    <a
                      href="#quote"
                      className="label-cond text-xs text-smoke transition-colors duration-300 hover:text-white"
                    >
                      Free Estimate →
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
