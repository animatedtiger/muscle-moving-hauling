import { PHONE_DISPLAY, PHONE_TEL } from "./Nav";

export default function Footer() {
  return (
    <footer className="relative bg-tar">
      <div className="hazard h-1.5" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="headline text-xl text-white">
              Muscle{" "}
              <span className="text-muscle">Moving &amp; Hauling</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-smoke">
              Fast, no-nonsense moving, hauling, and muscle-for-hire across
              the Lowcountry.
            </p>
          </div>

          <div>
            <p className="label-cond text-xs text-fog">Service Area</p>
            <p className="mt-4 text-sm leading-relaxed text-smoke">
              50 miles from Bluffton &amp; Charleston, SC — Hilton Head,
              Okatie, Hardeeville, Mount Pleasant, Summerville, North
              Charleston, and everywhere between.
            </p>
          </div>

          <div>
            <p className="label-cond text-xs text-fog">Talk to a Human</p>
            <a
              href={PHONE_TEL}
              className="headline mt-4 inline-block text-2xl text-muscle transition-colors duration-300 hover:text-muscle-bright"
            >
              {PHONE_DISPLAY}
            </a>
            <p className="mt-2 text-xs text-smoke">
              Calls answered fast. Free estimates on every job.
            </p>
          </div>
        </div>

        {/* pb clears the sticky mobile call bar (h-16) so the credit line
            is never covered on small screens. */}
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pb-16 pt-7 text-xs text-smoke sm:flex-row sm:items-center sm:justify-between md:pb-0">
          <p>
            © {new Date().getFullYear()} Muscle Moving &amp; Hauling ·
            Bluffton, SC
          </p>
          <p>
            Site by{" "}
            <a
              href="https://handrandevelopment.com"
              className="text-fog transition-colors duration-300 hover:text-muscle"
            >
              Handran Development
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
