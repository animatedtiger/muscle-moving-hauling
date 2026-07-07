# DECISIONS.md — Muscle Moving & Hauling

Standing decisions. Read before changing anything structural.

---

## Next.js is an intentional one-off

**Decision:** This site is built in Next.js 16 (App Router, Tailwind v4,
Framer Motion), NOT the vanilla HTML/CSS/JS pattern used for Swanson-Cleaning.

**Why:** Carson's explicit choice — he wants this site to outclass everything
local, and it mirrors the stack of HD's own site
(`10-WEBSITE/handran-development/`). It is not a mistake to be "fixed" back
to vanilla by a future session.

**How to apply:** Keep version parity with the HD site when upgrading
(Next 16.2.9 / React 19.2.4 / Tailwind v4 / Framer Motion 12).

---

## Nav height / hero padding coupling

**Decision:** Nav height, any future announcement bar offset, and hero
top-clearance derive from ONE shared token — `--nav-h` in
`app/globals.css` (80px, matching HD's `h-20`). Components consume the
token (`h-[var(--nav-h)]`, `pt-[var(--nav-h)]`, `scroll-margin-top`);
no independent magic numbers.

**Why:** Swanson's `DECISIONS.md` documents this exact recurring bug —
three hand-synced values (nav height / announcement top / hero padding)
drifting apart and causing overlap or gaps. Solved here structurally from
day one instead of by discipline.

**How to apply:** Any nav/logo/hero size change = change `--nav-h` only.
Never introduce a hardcoded nav-height value in a component.

---

## Asset placeholders (v1 status)

| Asset | Status | Placeholder |
|---|---|---|
| Logo | none | CSS/SVG text wordmark — no fake logo file |
| Hero video | ✅ live (2026-07-01) | Compressed from Carson's 6.8MB source → 1.6MB desktop / 0.5MB mobile (9:16 crop). Original in `assets-src/` (gitignored). Backdrop remains as fallback if files are removed |
| Photos | none | Gradient/graphic panels + icons — NO stock photos passed off as their team |
| Testimonials | none (just opened) | Section omitted entirely — no fabricated quotes |
| Email | does not exist | Phone-only CTAs; form shows honest "call us" message |

---

## Contact form has no destination — pre-launch blocker

**Decision:** The quote form is fully built UI-wise but on submit shows
*"Call us directly at (843) 505-4839 — online quote requests are coming
soon."* It does not POST anywhere.

**Why:** No email, no CRM, no SMS service exists yet. A fake success state
would silently eat real leads — worse than honesty.

**How to apply:** Before launch Carson must pick a destination (email /
SMS-to-lead / CRM webhook). Until then, do not wire it to anything or
soften the message.

---

## npm needs the Windows system CA on this machine

**Decision:** Run `$env:NODE_OPTIONS = "--use-system-ca"` before any
`npm install` in this project.

**Why:** 2026-07-01 — installs fail with `UNABLE_TO_VERIFY_LEAF_SIGNATURE`
against registry.npmjs.org without it (the initial `create-next-app` hung
for 30+ minutes on this). Local cert-chain interception; system CA store
resolves it.
