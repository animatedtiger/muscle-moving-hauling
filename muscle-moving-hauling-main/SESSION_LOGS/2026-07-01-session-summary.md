# Session Log — 2026-07-01 — Founding build (v1)

## What happened

Executed the full site plan (`~/.claude/plans/i-want-to-use-idempotent-gosling.md`)
start to finish in one session:

1. **Scaffold** — create-next-app pinned to the HD-site stack (Next 16.2.9,
   React 19.2.4, Tailwind v4, Framer Motion 12.40), own git repo, full HD doc
   set. Initial `create-next-app` hung 30+ min on npm install — root cause was
   TLS cert verification (`UNABLE_TO_VERIFY_LEAF_SIGNATURE`); fixed with
   `$env:NODE_OPTIONS = "--use-system-ca"` (documented in DECISIONS.md).
2. **Design system** — "Freight Dock" identity: asphalt + safety orange,
   Archivo Black / Barlow / Barlow Condensed, hazard-stripe + speed-streak +
   road-floor + stencil-outline motifs. All tokens in `globals.css` `@theme`.
3. **All 14 components + page** — Nav (phone CTA, `--nav-h` token), Hero
   (video drop-in ready, route micro-form), Marquee, TrustStrip (SCPSC badge
   slot pending), Services (6 confirmed), Pricing, Comparison, ServiceArea
   (typed dual-hub data), Stats (true facts only), Showcase (photo-swap
   placeholders), Faq, Contact (honest no-destination submit), Footer,
   MobileCallBar.
4. **SEO** — MovingCompany JSON-LD (2 GeoCircles, 6 services, no invented
   address), metadata/OG in layout.

## Verification results

| Check | Result |
|---|---|
| `npm run lint` | ✅ 0 errors (1 known-noisy font-rule warning, same as App Router norm) |
| `npm run build` | ✅ clean; `turbopack.root` pinned to silence workspace-root warning |
| Dev boot, no video files | ✅ hero renders HaulBackdrop fallback, no fs errors |
| All `tel:` anchors | ✅ 16/16 exactly `tel:+18435054839` |
| JSON-LD | ✅ parses; MovingCompany, +1-843-505-4839, 2 GeoCircles, 6 services, no street address |
| Route micro-form submit | ✅ "Got it — call us now… (843) 505-4839" |
| Quote form submit | ✅ honest "call us directly / online quotes coming soon" |
| FAQ accordion | ✅ toggles |
| Marquee | ✅ duplicated row, seamless loop |
| Mobile call bar | ✅ hidden ≥768px (computed style verified) |
| Desktop screenshots | ✅ hero / services / pricing verified visually |
| Mobile (390px) visual pass | ⚠️ NOT completed — Chrome window was occluded; renderer throttling blocked viewport resize + screenshots. Needs a quick eyeball on a visible window/phone. |
| Lighthouse / Rich Results | ⚠️ Not run (no public URL yet; run at deploy time) |

Debugging note for future sessions: an occluded/backgrounded Chrome window
throttles rAF → framer-motion entrance animations appear "stuck at opacity 0"
and CDP screenshots time out. That is environment, not site code.

## Open for Carson (also in NEXT_SESSION_BRIEF.md)

1. Contact form destination — pre-launch blocker
2. SCPSC carrier registration — badge slot waiting in TrustStrip.tsx
3. Hero headline sign-off ("Moving? No problem." currently)
4. Domain + hosting choice
5. Seedance hero video → drop into `public/videos/`

Nothing committed to git — awaiting Carson's go-ahead per workspace rules.
