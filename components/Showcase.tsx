import Reveal from "./Reveal";

/**
 * Placeholder-driven gallery. Each slot is a data entry — when real jobsite
 * photos exist, set `img` on an entry and the graphic panel swaps for the
 * photo. Content change, not a rebuild (see DECISIONS.md asset table).
 */
type Slot = {
  title: string;
  tag: string;
  panel: string;
  img?: string; // e.g. "/images/jobs/local-move-bluffton.jpg"
};

const SLOTS: Slot[] = [
  { title: "Full-house local move", tag: "Local Moves", panel: "from-muscle/70 via-tar to-tar" },
  { title: "Garage cleanout, gone by noon", tag: "Junk Removal", panel: "from-dock-yellow/40 via-gravel to-tar" },
  { title: "Office relocation, zero downtime", tag: "Commercial", panel: "from-muscle-bright/50 via-concrete to-tar" },
  { title: "Storage run, both directions", tag: "Storage", panel: "from-gravel via-concrete to-tar" },
];

export default function Showcase() {
  return (
    <section className="relative bg-tar py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="label-cond mb-4 text-sm text-muscle">The Work</p>
          <h2 className="headline max-w-3xl text-4xl text-white sm:text-5xl md:text-6xl">
            Jobs we show up <span className="text-muscle">for.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-smoke">
            Real photos from real jobs are coming as we run them — no stock
            movers pretending to be us.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SLOTS.map((slot, i) => (
            <Reveal key={slot.title} delay={(i % 4) * 0.08} className="h-full">
              <figure className="group h-full overflow-hidden border border-white/10">
                <div
                  className={`relative flex aspect-[4/5] items-end bg-gradient-to-b ${slot.panel} p-5 transition-transform duration-500`}
                  style={
                    slot.img
                      ? {
                          backgroundImage: `url(${slot.img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : undefined
                  }
                >
                  <div className="noise absolute inset-0" />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-tar/90 to-transparent" />
                  <figcaption className="relative">
                    <p className="label-cond text-[11px] text-muscle">
                      {slot.tag}
                    </p>
                    <p className="headline mt-1.5 text-base leading-tight text-white">
                      {slot.title}
                    </p>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
