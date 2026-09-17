---
name: swaqar-web
description: Apply when building, editing, styling, or reviewing any part of the SWAQAR Trade website. Enforces the locked copy, brand tokens, non-custodial category discipline, i18n readiness, and accessibility. Trigger for any HTML/CSS/JS work in this repo.
---

# SWAQAR Trade — web build discipline

Use this whenever you touch the SWAQAR website. It is the guardrail layer; `CLAUDE.md`
holds fuller context.

## Hard rules (never break)
1. **Copy is LOCKED.** On-page English text is frozen. Never rewrite, trim, or "improve" copy.
   Canonical source: `lib/translations.ts` (the `t` object — one leaf per key, `{ en, ar, fr, zh }`).
   Render it via `tx(key, locale)`. If copy seems wrong, flag it in your reply; do not edit it.
2. **Category discipline.** SWAQAR coordinates trade; it does NOT trade, broker, hold funds,
   take title, settle, or operate logistics. Never add language/imagery implying otherwise.
3. **Evidence before claims.** Never present incorporation, licences, partners, revenue, or
   corridor activation as fact. Keep "candidate", "Phase I", "in preparation" intact.
4. **Brand is fixed.** Don't redesign logo, palette, type, or tagline.

## Architecture
Next.js App Router. Each route is a server `page.tsx` (metadata only, via `generateMetadata`)
delegating to a `'use client'` component (e.g. `HomeClient.tsx`) — never merge metadata into
the client component; keep this split intact. Shared chrome (`SiteHeader`/`SiteFooter`) and
each diagram (`HeroGlobe`, `CoordinationGapDiagram`, `ModelSpineDiagram`,
`IdentityCorridorDiagram`, `CorridorArchitectureDiagram`) are their own components under
`app/[locale]/`. Locale routing is via `i18n/routing.ts`; next-intl's own message-catalog
system is unused for copy — don't add one.

## Tokens (use exactly)
- Colour: Navy `#0B1F3A` · Gold `#B8923A` · White `#FFFFFF` · Light `#F7F8FA` · Charcoal `#171A1F`
  · Body `#4A5568` · Muted `#718096` · Rule `#D1D5DB`. Backgrounds: navy/white/light only.
  Gold = sole accent, used sparingly. (Deep-teal `#1A4A6E` is also declared as a reserve token
  but not currently rendered anywhere — don't treat it as an active brand colour.)
- Type: Playfair Display (display/serif) · DM Sans (body, and eyebrows/labels/stats — uppercase
  + letter-spacing, not a monospace face). No monospace font is loaded or used anywhere in the
  live site.
- 8px grid · container 1240px · measure 70ch · radius 0–2px for structural/decorative elements.
  A small, deliberate status-badge/capsule (fully rounded) is an acceptable exception when it's
  genuinely showing state (e.g. an "In Preparation" indicator) — used sparingly, not for
  buttons/cards/generic chrome.
- `app/swaqar.css` (imported in `app/[locale]/layout.tsx`) is the only live token source.
  `app/globals.css` is unused Tailwind scaffolding with a different palette and different fonts
  (IBM Plex, Cormorant) — it is never imported, not canonical. Don't pull tokens or fonts from it.

## Quality floor (every change)
- Responsive at ≤480 / ≤768 / ≤1024 / ≥1025; don't just shrink desktop diagrams onto mobile.
- Visible keyboard focus; keyboard path through nav, accordion, expanders, form; tap targets ≥44px.
- `prefers-reduced-motion`: content must be fully visible with motion off (reveal is enhancement only).
- No text baked into images; SVG diagrams have text descriptions.
- Contrast AA: gold-on-navy 5.7:1, white-on-navy 15:1, body-on-white 8.4:1.

## i18n
- Wire text to `lib/translations.ts` keys via `tx()`; never hardcode a second language into markup.
- Playfair + DM Sans are Latin-only — Arabic and CJK faces are already chosen and wired in
  `app/[locale]/layout.tsx`: Noto Naskh Arabic (`next/font/google`) for `ar`, Noto Sans SC
  (Google Fonts CSS2 endpoint) for `zh`.
- Arabic is RTL: `dir=rtl` + logical CSS properties; mirror layout and directional glyphs by
  default — but do not blindly mirror a diagram or visual whose meaning is fixed in the real
  world (e.g. geographic left-right order, a directional process/sequence). Decide per element
  and document the choice, the way the Corridor Architecture (fixed, unmirrored) and Identity
  (locale-direction-aware) diagrams do.
- Never translate: SWAQAR, SWAQAR Trade, SWAQAR Group, GCC, FATF. Transcreate named phrases.
- Never invent translations for a key with no approved value yet — check `lib/translations.ts`
  for that key's current state before assuming it's missing.

## Prohibited imagery
No maps implying owned routes; no marketplace/broker/trading-floor/cargo/commodity/boardroom imagery.
Label candidate/Phase-I elements clearly.

## Definition of done
Copy matches locked source · responsive at all breakpoints · AA contrast · keyboard + reduced-motion
pass · no prohibited imagery · candidate/Phase-I labelled.
