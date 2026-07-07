# PROJECT_OVERVIEW.md — Muscle Moving & Hauling

Single-page Next.js marketing site for a brand-new moving/hauling company
in Bluffton, SC. Second-ever HD client site; first in Next.js.

## ⚠️ PRE-LAUNCH BLOCKERS

1. **Contact form has NO destination.** It renders fully but on submit shows
   an honest "call us" message. Carson must choose: email inbox (client has
   none yet), SMS-to-lead service, or CRM webhook. Do not launch marketing
   spend against the form until resolved.
2. **No domain** purchased yet.
3. **SCPSC carrier registration** — confirm with Carson whether the client
   holds an SC household-goods carrier registration; if yes, put the real
   number in the trust strip badge slot (currently a placeholder).

## File map

```
app/
  layout.tsx        Metadata, fonts, JSON-LD (MovingCompany schema)
  page.tsx          Section order + server-side hero-video existence check
  globals.css       Tailwind v4 @theme tokens, --nav-h, keyframes, reduced-motion
components/         One file per section (Nav, Hero, Marquee, TrustStrip,
                    Services, Pricing, Comparison, ServiceArea, Stats,
                    Showcase, Faq, Contact, Footer, MobileCallBar, Reveal,
                    HaulBackdrop)
public/videos/      EMPTY — drop hero-bg-desktop.mp4 + hero-bg-mobile.mp4
                    here and the hero auto-upgrades (no code change)
```

## Section order (page.tsx)

Nav → Hero (video-ready) → Marquee → Trust strip → Services (6 cards) →
Pricing transparency → Comparison table → Service area (dual-hub) →
Stats → Showcase (placeholder gallery) → FAQ → Contact → Footer
(+ sticky mobile call bar ≤768px)

## Asset status

| Asset | Status |
|---|---|
| Logo | ❌ CSS wordmark placeholder |
| Hero video | ✅ added 2026-07-01 — compressed to `hero-bg-desktop.mp4` (1.6MB, 720p) + `hero-bg-mobile.mp4` (0.5MB, 9:16 center crop); uncompressed original kept at `assets-src/` (gitignored) |
| Job photos | ❌ Showcase uses graphic placeholders, data-driven swap |
| Testimonials | ❌ intentionally omitted (no customers yet) |
| Domain | ❌ none |
| Email | ❌ none — phone only: (843) 505-4839 |

## Phase 2 ideas (NOT v1 requirements)

- Dedicated per-city SEO landing pages (Bluffton / Hilton Head / Charleston /
  Mount Pleasant / Summerville). Deliberately skipped in v1 — thin duplicate
  pages with no unique copy pre-launch would hurt more than help. The
  `ServiceArea` data array is already typed/structured to feed these later.
- Real reviews section once customers exist.
- Online quote flow once a form destination exists.

## Dev

```powershell
$env:NODE_OPTIONS = "--use-system-ca"   # required for npm install on this machine
npm run dev    # http://localhost:3000
npm run build
npm run lint
```
