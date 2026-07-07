# CHANGELOG — Muscle Moving & Hauling

## 2026-07-01 — Project created

- Scaffolded Next.js 16.2.9 app (create-next-app, TypeScript, App Router,
  Tailwind v4, ESLint, `@/*` alias); versions pinned to match the HD site;
  framer-motion ^12.40 added. Own git repo initialized.
- Full HD doc set created (README, PRODUCT, DESIGN, DECISIONS,
  PROJECT_OVERVIEW, NEXT_SESSION_BRIEF, SESSION_LOGS/, AGENTS/CLAUDE).
- Full v1 built: "Freight Dock" design system (asphalt + safety orange,
  Archivo Black/Barlow), 14 components — video-ready hero with route
  micro-form, marquee, trust strip, 6 service cards, pricing transparency,
  comparison table, dual-hub service area, true-facts stats, placeholder
  showcase, FAQ, honest no-destination quote form, footer, sticky mobile
  call bar. MovingCompany JSON-LD.
- Verified: lint/build clean, dev boot with hero fallback, 16/16 tel links,
  both form submit states, FAQ, marquee loop. Outstanding: mobile visual
  pass (see session log), Lighthouse/Rich Results at deploy time.
- Hero video added by Carson, compressed 6.84MB → 1.62MB desktop +
  0.48MB mobile (9:16 center crop); original kept in `assets-src/`
  (gitignored). Both files verified valid + serving.
- `suppressHydrationWarning` on `<body>` — browser extensions inject
  attributes pre-hydration (false-positive mismatch warning).
- Removed hero scroll-cue (mouse icon) at Carson's request, including
  orphaned `scroll-dot` keyframes/token. Verified no layout shift.
- Initial commit made at end of session (Carson: "save the work").
