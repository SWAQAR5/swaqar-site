---
name: swaqar-web
description: Apply when building, editing, styling, or reviewing any part of the SWAQAR Trade website. Enforces the locked copy, brand tokens, non-custodial category discipline, i18n readiness, and accessibility. Trigger for any HTML/CSS/JS work in this repo.
---

# SWAQAR Trade — web build discipline

Use this whenever you touch the SWAQAR website. It is the guardrail layer; `CLAUDE.md`
holds fuller context.

## Hard rules (never break)
1. **Copy is LOCKED.** On-page English text is frozen. Never rewrite, trim, or "improve" copy.
   Canonical source: `content/en.json` and the strings in `index.html` — they must match.
   If copy seems wrong, flag it in your reply; do not edit it.
2. **Category discipline.** SWAQAR coordinates trade; it does NOT trade, broker, hold funds,
   take title, settle, or operate logistics. Never add language/imagery implying otherwise.
3. **Evidence before claims.** Never present incorporation, licences, partners, revenue, or
   corridor activation as fact. Keep "candidate", "Phase I", "in preparation" intact.
4. **Brand is fixed.** Don't redesign logo, palette, type, or tagline.

## Tokens (use exactly)
- Colour: Navy `#0B1F3A` · Gold `#B8923A` · White `#FFFFFF` · Light `#F7F8FA`
  · Body `#4A5568` · Muted `#718096` · Rule `#D1D5DB`. Backgrounds: navy/white/light only.
  Gold = sole accent, used sparingly.
- Type: Playfair Display (display) · DM Sans (body) · DM Mono (eyebrows/labels/stats).
- 8px grid · container 1200px · measure ≤720px · radius 0–2px.

## Quality floor (every change)
- Responsive at ≤480 / ≤768 / ≤1024 / ≥1025; don't just shrink desktop diagrams onto mobile.
- Visible keyboard focus; keyboard path through nav, accordion, expanders, form; tap targets ≥44px.
- `prefers-reduced-motion`: content must be fully visible with motion off (reveal is enhancement only).
- No text baked into images; SVG diagrams have text descriptions.
- Contrast AA: gold-on-navy 5.7:1, white-on-navy 15:1, body-on-white 8.4:1.

## i18n
- Wire text to `content/<locale>.json` keys; never hardcode a second language into markup.
- Playfair + DM Sans are Latin-only — an Arabic and a CJK face must be chosen before AR/ZH builds.
- Arabic is RTL: `dir=rtl` + logical CSS properties; mirror layout and directional glyphs.
- Never translate: SWAQAR, SWAQAR Trade, SWAQAR Group, GCC, FATF. Transcreate named phrases.
- Never invent translations or the missing Arms 02–07 descriptions.

## Prohibited imagery
No maps implying owned routes; no marketplace/broker/trading-floor/cargo/commodity/boardroom imagery.
Label candidate/Phase-I elements clearly.

## Definition of done
Copy matches locked source · responsive at all breakpoints · AA contrast · keyboard + reduced-motion
pass · no prohibited imagery · candidate/Phase-I labelled.
