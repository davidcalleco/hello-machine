# Design review 2

## Direction

**Working title: Brief to live.** The homepage now moves through six purposeful scenes instead of repeating index/rule/text rows: a brief assembly, work catalogue, process pipeline, offer selector, human/AI split, and a direct close.

## Decisions

- The proposition is the first headline: “Expert-led websites, accelerated by AI.”
- Work is proof-first and uses only honest practice/studio entries from existing routes; no invented clients, metrics, or outcomes.
- Each interaction changes understanding: catalogue preview, process artifact, offer model, and comparison balance.
- Existing brand type and signal colors remain. Layouts vary deliberately: canvas, catalogue, diagram, selector, split meter.
- No gradients, glass, rounded SaaS cards, decorative cursor, or perpetual motion.

## Accessibility and fallback

- Work and offer controls are links/buttons with visible focus and keyboard handlers (`focus` and `click`). Process controls use tabs with `aria-selected` and panels. The range control has an accessible label.
- Server-rendered content remains legible with JavaScript disabled; the first work/offer/process state is the fallback.
- No essential meaning depends on animation. Reduced motion removes the hero tilt.
- Layout uses normal flow, CSS grid, and stable minimum areas to avoid content jumps.

## Assumptions

- Existing booking integration and service routes are still the source of truth.
- Public project imagery and approved case studies are not available, so typographic color compositions stand in as clearly non-client proof.
- The comparison slider is a conceptual explainer, not a quantitative claim.
