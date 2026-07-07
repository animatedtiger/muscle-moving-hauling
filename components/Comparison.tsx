import Reveal from "./Reveal";
import { PHONE_TEL, PHONE_DISPLAY } from "./Nav";

type Cell = { text: string; good?: boolean };

const ROWS: { label: string; us: Cell; vanline: Cell; diy: Cell }[] = [
  {
    label: "Scheduling",
    us: { text: "Days, not weeks", good: true },
    vanline: { text: "Booked weeks out" },
    diy: { text: "Whenever you can" },
  },
  {
    label: "Pricing",
    us: { text: "Show-up fee + hourly, quoted up front", good: true },
    vanline: { text: "Broker markups, surprise line items" },
    diy: { text: "Truck rental + gas + your Saturday" },
  },
  {
    label: "Who does the lifting",
    us: { text: "Our crew. That's the point", good: true },
    vanline: { text: "Whoever the broker subcontracts" },
    diy: { text: "You and whoever owes you a favor" },
  },
  {
    label: "Local knowledge",
    us: { text: "Bluffton + Charleston, born and based", good: true },
    vanline: { text: "National dispatch, local afterthought" },
    diy: { text: "You've got GPS" },
  },
  {
    label: "Junk & extras",
    us: { text: "Haul-away on the same trip", good: true },
    vanline: { text: "Not their problem" },
    diy: { text: "Second trip to the dump" },
  },
];

export default function Comparison() {
  return (
    <section className="relative bg-asphalt py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="label-cond mb-4 text-sm text-muscle">The Difference</p>
          <h2 className="headline max-w-3xl text-4xl text-white sm:text-5xl md:text-6xl">
            Us vs. the <span className="text-outline">other guys.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="w-1/5 border-b border-white/10 pb-4" />
                  <th className="border-b-2 border-muscle pb-4 pr-4">
                    <span className="headline block text-lg text-muscle">
                      Muscle Moving
                    </span>
                  </th>
                  <th className="border-b border-white/10 pb-4 pr-4">
                    <span className="label-cond block text-sm text-smoke">
                      Big National Van Lines
                    </span>
                  </th>
                  <th className="border-b border-white/10 pb-4">
                    <span className="label-cond block text-sm text-smoke">
                      DIY / Truck Rental
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.label} className="group">
                    <th className="label-cond border-b border-white/10 py-5 pr-4 align-top text-xs font-semibold text-fog">
                      {row.label}
                    </th>
                    <td className="border-b border-white/10 bg-muscle/5 py-5 pr-4 align-top text-sm leading-relaxed text-white transition-colors duration-300 group-hover:bg-muscle/10">
                      <span className="mr-2 text-muscle" aria-hidden>
                        ✓
                      </span>
                      {row.us.text}
                    </td>
                    <td className="border-b border-white/10 py-5 pr-4 align-top text-sm leading-relaxed text-smoke">
                      {row.vanline.text}
                    </td>
                    <td className="border-b border-white/10 py-5 align-top text-sm leading-relaxed text-smoke">
                      {row.diy.text}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-10 text-sm text-fog">
            Easy call.{" "}
            <a
              href={PHONE_TEL}
              className="headline text-base text-muscle transition-colors duration-300 hover:text-muscle-bright"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
