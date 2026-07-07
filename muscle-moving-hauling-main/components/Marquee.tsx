const WORDS = [
  "Fast",
  "No Problem",
  "Local",
  "Free Estimates",
  "Show-Up Fee + Hourly",
  "Junk Gone",
  "Heavy? Bring It",
];

/**
 * Infinite ticker band — speed as a literal design element. Content is
 * duplicated once and the track translates -50%, so the loop is seamless.
 * Framed by hazard stripes top and bottom. CSS-only; collapses under
 * prefers-reduced-motion via the global override.
 */
export default function Marquee() {
  const row = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {WORDS.map((word) => (
        <span key={word} className="flex items-center gap-10">
          <span className="headline whitespace-nowrap text-3xl text-white md:text-4xl">
            {word}
          </span>
          <span aria-hidden className="text-2xl text-muscle">
            ▸
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-tar py-6">
      <div className="hazard absolute inset-x-0 top-0 h-1" />
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
      <div className="hazard absolute inset-x-0 bottom-0 h-1" />
    </div>
  );
}
