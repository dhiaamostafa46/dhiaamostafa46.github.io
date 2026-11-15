# Spec 001 — Portfolio redesign ("Engineering dossier")

## Problem
Previous design: generic teal/navy cards, WebGL mesh overlapping text, decorative 3D tilt,
fake "mastery %" bars, console-style jargon. Read as template, not as a senior backend profile.

## References (research)
- Type-led editorial portfolios: hierarchy from typography and grid, not decoration.
- Sticky-rail developer sites: identity + index always visible.
- Backend profiles: evidence (numbers, architecture, case rows) over visual effects.

## Design decisions
| Area | Decision |
|---|---|
| Palette | Warm paper + ink, one signal colour (#d9421c light / #ff6a3d dark) |
| Type | Instrument Serif display, Inter body, JetBrains Mono metadata, IBM Plex Sans Arabic |
| Layout | Fixed left rail (right in RTL) ≥1241px; top bar + drawer below |
| Content | Rows/ledgers with hairline rules instead of cards (services, projects, OSS, experience) |
| Background | Paper grain + pointer spotlight. No canvas / WebGL / particles |
| Motion | Reveal-on-scroll, row hover indent, progress bar; all off with prefers-reduced-motion |
| Removed | Fake skill percentages, fake window chrome, fake LIVE badges, 3D tilt, three.js |

## Acceptance
- No horizontal overflow 320–2560px, EN + AR (RTL), light + dark
- Touch targets ≥44px on coarse pointers; text ≥12px; visible focus
- Page readable with JS disabled
