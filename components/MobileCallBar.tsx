import { PHONE_DISPLAY, PHONE_TEL } from "./Nav";

/**
 * Sticky bottom call bar, mobile only (hidden ≥ md). The footer reserves
 * bottom padding on small screens so this never covers content.
 */
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] md:hidden">
      <a
        href={PHONE_TEL}
        className="headline flex h-16 items-center justify-center gap-3 bg-muscle text-lg text-white shadow-[0_-8px_32px_rgba(16,18,20,0.5)]"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.58 4.5 2 2 0 0 1 3.54 2.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.78-1.78a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Call {PHONE_DISPLAY}
      </a>
    </div>
  );
}
