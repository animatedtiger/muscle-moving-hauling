# DESIGN.md — Muscle Moving & Hauling

## Concept: "Freight Dock"

Industrial, blue-collar, fast. The site should feel like safety-orange paint
on wet asphalt — not a tech startup, not white-glove luxury. Every visual
decision serves two brand truths: **speed** and **"no problem."**

Deliberately distinct from HD's own black/gold, Swanson's teal/navy, and the
HD website's navy/electric-blue. Validated by industry research: Allied Van
Lines' real brand is orange + black with a diagonal stripe.

## Palette (Tailwind v4 `@theme` tokens in `app/globals.css`)

| Token | Hex | Use |
|---|---|---|
| `asphalt` | `#171a1c` | Base dark background |
| `tar` | `#101214` | Deepest dark (hazard stripe dark band, footer) |
| `concrete` | `#232629` | Cards / panels on dark |
| `gravel` | `#2e3236` | Elevated surfaces, borders-on-hover |
| `muscle` | `#ff5a1f` | THE accent. CTAs, accents, stripe. Dominant, not sprinkled |
| `muscle-bright` | `#ff7a3d` | Hover states, gradient ends |
| `dock-yellow` | `#ffc93c` | Sparse — badges only |
| `light-bg` | `#f4f3f1` | Alternate light sections (warm, not cream) |
| `fog` | `#b9c0c6` | Secondary text on dark |
| `smoke` | `#8b9298` | Muted text on dark |
| `ink` | `#181818` | Text on light sections |

Rule: orange is the only saturated color on the page. If a section has more
than one accent hue, it's wrong.

## Typography

- **Display:** Archivo Black (`--font-display`, `.headline` helper) —
  uppercase, tight leading (0.94), heavy poster lettering.
- **Body:** Barlow (`--font-body`) — highway-signage DNA, 400–700.
- **Labels/eyebrows:** Barlow Condensed (`--font-condensed`, `.label-cond`) —
  uppercase, 0.22em tracking.
- Loaded via Google Fonts `<link>` in `app/layout.tsx` (NOT `next/font` —
  build-time font downloads hit this machine's TLS issue; see DECISIONS.md).

## Signature motifs

1. **Hazard stripe** (`.hazard`, `.hazard-thin`) — diagonal orange/tar
   stripes. Section dividers, badge edges, the marquee band frame.
2. **Speed streaks** (`animate-streak`) — skewed light streaks crossing dark
   sections. The literal embodiment of "fast."
3. **Road floor** (`.road-floor`) — perspective grid tilted like a parking
   lot / highway at night, used in the hero backdrop.
4. **Stencil outlines** (`.text-outline`, `.text-outline-orange`) — hollow
   road-marking numerals for stats and oversized background words.
5. **Grain** (`.noise`) — asphalt grit overlay on hero/dark feature sections.

## Motion language

- Entrance: `Reveal` fade-up, ease `[0.21, 0.6, 0.18, 1]` (same curve as the
  HD site) — staggered on load in the hero, scroll-triggered elsewhere.
- Ambient: marquee ticker (28s), streaks (7s), drifting orange dock-glow
  (22s), flowing road grid (14s).
- Everything collapses under `prefers-reduced-motion: reduce` via the global
  override block.

## Layout rules

- `--nav-h` (80px) is the single source of truth for nav height / hero
  clearance / `scroll-margin-top`. See DECISIONS.md.
- Dark-dominant page; `light-bg` sections used as contrast breaks (pricing,
  FAQ) so the dark sections keep their weight.
- Phone number is the highest-contrast element in every viewport.
