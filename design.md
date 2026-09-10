# Design — Forma

Locked design system. Future Hallmark runs read this file first; pages defer
to it. Amend intentionally — the file is the rule.

## Provenance
- Source · `neurosync-master-your-mind-1-DESIGN.md`, a token spec from the Neuform template "NeuroSync | Master Your Mind" (Meng To), supplied by the project owner on 2026-09-10.
- Adopted · colour roles, type roles and sizes, spacing base, radii, button and card language.
- Not adopted · the source's copy, product content, section composition, motion cues and WebGL notes. Forma keeps its own structure, layout and motion.

## System
- Genre · modern-minimal
- Macrostructure · Portfolio Grid (unchanged)
- Theme · design.md tokens: white background, terracotta primary, slate accent, near-black surface
- Axes · light / sans (Inter) / warm
- Nav · N6 masthead · Footer · Ft4 dense colophon (both unchanged)

## Colour roles
| Role | Value | Forma token | Used for |
| --- | --- | --- | --- |
| primary | #CC8066 | `--color-primary` → `--color-accent` | primary buttons, focus ring, plan open areas, hover on dark |
| secondary | #FFFFFF | `--color-secondary` → `--color-on-plate` | text on surface |
| accent | #334155 | `--color-accent-slate` → `--color-ink-2` | pressed filter chips, secondary emphasis |
| background | #FFFFFF | `--color-background` → `--color-paper` | page |
| surface | #191C21 | `--color-surface` → `--color-plate` | inquiry band, panel scrim |
| text-primary | #111827 | `--color-text-primary` → `--color-ink` | headings, body, text on primary fills |
| text-secondary | #4B5563 | `--color-text-secondary` → `--color-muted` | meta, captions |
| border | #E5E7EB | `--color-border` → `--color-rule` | hairlines, chip and frame borders |

Derived tokens mix the roles above and add no new hues:
- `--color-accent-strong` · primary 72% into text-primary · small-text hover, 4.9:1 on white
- `--color-paper-2` / `--color-paper-3` · border 35% / 70% into background · alternate section, image placeholders
- `--color-on-plate-muted` · secondary 70% into surface

## Typography
| Role | Face | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| display-lg | Inter | 64px (clamps down to 40px) | 500 | 1.04 | 0 |
| body-md | Inter | 16px | 400 | 1.6 | 0 |
| label-md | JetBrains Mono | 12px | 600 | 1.2 | 0 |

Headings, the wordmark and section heads use the display role at their existing scale steps.
Labels cover nav links, meta rows, filters, table cells, captions, plan labels and the colophon.

## Spacing and radius
- Base 8px (`--space-xs`) · gap 16px (`--space-md`) · card padding 24px (`--space-lg`)
- Section padding 80px is recorded as `--space-section` but not applied (see Notes)
- Radius · card 8px · control 8px · pill 9999px

## Components
- Primary button · primary fill, text-primary label, 8px radius, 12px by 20px padding. Hover darkens the fill. No movement.
- Filter chip · pill radius, 1px border, mono label. Pressed is a slate fill with a white label.
- Image frame and plan · 8px radius, border colour for outlines, no shadow on the light ground.
- Text link · Inter 500, 1px underline, accent-strong on hover.

## Motion stance
- Unchanged from the existing build: filter crossfade, index preview crossfade, panel fade, colour-only hovers.
- Reduced motion · transitions collapse to 1ms.

## Notes
- Owner instruction for this system: restyle only. Structure, layout and animation stay as built.
- Hallmark's modern-minimal genre lists the N6 masthead as editorial vocabulary. It is kept because the owner asked for structure to stay unchanged.
- Inter for both display and body is normally a Hallmark tell. It is kept because this file is the owner's chosen system, and JetBrains Mono labels supply the pairing.
- Source motion (masked reveals, staggered entrance, hover lift, ambient movement) and WebGL layers are intentionally not adopted.
- Source section padding (80px) would move every section, so the existing spacing stays.
- Source hex values stay as hex, not OKLCH, so they match the supplied file exactly.
- #CC8066 on white is only 3.1:1. Use it for fills, large text and focus rings, never for small text.

## Exports
`src/app/tokens.css` is the source of truth. `src/app/globals.css` maps it to Tailwind v4 through `@theme inline`.
