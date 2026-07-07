# Muscle Moving & Hauling — Website

Single-page marketing site for Muscle Moving & Hauling, a moving/hauling
company in Bluffton, SC serving the Lowcountry + Charleston corridor.

Built by **Handran Development**.

## Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · Framer Motion 12 · TypeScript

## Quick start

```powershell
$env:NODE_OPTIONS = "--use-system-ca"   # this machine needs the system CA for npm
npm install
npm run dev        # → http://localhost:3000
```

## Project docs

| File | What |
|---|---|
| `PRODUCT.md` | Confirmed business facts — the only source of truth for copy |
| `DESIGN.md` | Palette, type, motion language |
| `DECISIONS.md` | Standing rules (Next.js one-off, nav token, placeholders) |
| `PROJECT_OVERVIEW.md` | File map, section order, pre-launch blockers |
| `NEXT_SESSION_BRIEF.md` | Start here each session |
| `CHANGELOG.md` / `SESSION_LOGS/` | History |

## Dropping in the hero video (later)

Place files at `public/videos/hero-bg-desktop.mp4` and
`public/videos/hero-bg-mobile.mp4`. The hero detects them server-side and
switches from the animated backdrop automatically — no code change.
