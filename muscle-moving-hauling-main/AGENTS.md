<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Muscle Moving & Hauling — Agent Rules

## Client contact — phone only

The client has **no email address**. Phone is the only contact channel:
**(843) 505-4839** → every CTA must be a real `tel:+18435054839` anchor.
Never invent an email, never wire a form to a fake destination. The contact
form intentionally shows an honest "call us" message on submit — do not
"fix" that into a fake success state. See `PROJECT_OVERVIEW.md` for the
pre-launch form-destination blocker.

## Stack

Next.js 16.2.9 / React 19.2.4 / Tailwind v4 / Framer Motion 12 — pinned to
match `HANDRAN-DEVELOPMENT/10-WEBSITE/handran-development/`. Next.js here is
an **intentional one-off** departure from the Swanson vanilla-HTML pattern
(Carson's explicit choice) — do not migrate it back. See `DECISIONS.md`.

## This machine

`npm install` fails TLS verification against registry.npmjs.org unless Node
uses the Windows system CA store. Before any install:

```powershell
$env:NODE_OPTIONS = "--use-system-ca"
```

## Session hygiene

- Read `NEXT_SESSION_BRIEF.md` first, every session.
- Update `CHANGELOG.md` + `NEXT_SESSION_BRIEF.md` and add a dated log in
  `SESSION_LOGS/` after any meaningful session.
- Never commit or push unless Carson explicitly asks.
- Confirmed business facts live in `PRODUCT.md` — do not invent services,
  pricing, stats, reviews, or addresses beyond them.
