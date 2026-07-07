# NEXT_SESSION_BRIEF — Muscle Moving & Hauling

> Status as of 2026-07-01: **v1 built and verified locally. Not committed,
> not deployed.** See `SESSION_LOGS/2026-07-01-session-summary.md` for the
> full build record.

## Current state

- Complete single-page site runs at `npm run dev` → localhost:3000
  (set `$env:NODE_OPTIONS = "--use-system-ca"` before any npm install)
- Build + lint clean. All 16 phone CTAs verified. JSON-LD valid.
- Hero video live (compressed desktop + mobile variants). Scroll cue
  removed from hero at Carson's request.
- **Committed locally 2026-07-01** (initial commit, Carson's "save the
  work"). No remote exists yet — nothing pushed anywhere.

## First things to check next session

1. **Mobile visual pass at 390/480/768px** — the only verification step not
   completed (browser window was occluded; see session log). Check nav/hero
   spacing, sticky call bar vs. footer, marquee overflow.
2. Anything Carson decided from the open questions below.

## Open questions for Carson

1. **Contact form destination** (pre-launch blocker) — email / SMS-lead / CRM
2. **SCPSC carrier registration?** → real badge into `TrustStrip.tsx` slot
3. **Hero headline sign-off** — currently "Moving? No problem."
4. **Domain + hosting** (HD site uses Netlify; nothing set up here)
5. ~~Seedance hero video~~ — ✅ DONE 2026-07-01: video added, compressed
   (1.6MB desktop / 0.5MB mobile), serving correctly. Visual playback +
   overlay-contrast check still pending alongside the mobile pass below.

## Rules recap

Read `AGENTS.md` + `PRODUCT.md` before editing. Facts only from `PRODUCT.md`.
No commits/pushes without Carson's explicit say-so.
