# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Marketing site for "Forma", a solo architecture practice. Next.js 16 (App Router), plain JavaScript (no TypeScript), Tailwind CSS v4 and GSAP. Everything lives on the one route, `/`. Content is placeholder copy until real assets arrive.

## Commands

```bash
npm run dev      # dev server on http://localhost:3000
npm run build    # production build; also the main correctness check
npm run lint     # eslint (flat config, eslint-config-next)
```

There is no test suite.

## Architecture

- **One route.** `/` is the scroll-world film (`components/World.js`, client, loads `public/world/scrub-engine.js` and mounts it with the config in `lib/world.js`), then the letter section (`components/Letter.js`) and the Footer. The film's CTAs link to `#contact` and `#about` inside the letter; the wordmark links to `#top`.
- **Scroll-world assets** live in `public/world/`: five scene posters (`<scene>.webp`, `<scene>-m.webp`), and in `vid/` the dive clips (`<scene>.mp4`, 1080p 16:9) plus connectors (`conn1..4.mp4`) and their `-m.mp4` mobile siblings (native 9:16, 720 wide). Clips are Runway Seedance 2 renders; connectors are frame-locked to the neighbouring dives' actual first/last frames. Re-rendering any dive means re-rendering its two connectors. The engine is framework-agnostic vanilla JS (from the scroll-world skill) and is themed via `.sw-root` CSS variables at the bottom of `app/globals.css`.
- **Content after the film on `/`.** The engine's layers are `position: fixed` with z-index up to 60, so anything placed after `<World />` must be opaque and `relative z-[70]` (the Letter section and the Footer wrapper are) to slide over the film like a curtain. Supporting changes: the engine holds its last scene past the end of its track (edited in `scrub-engine.js`), `.sw-covered` on `#world` stops painting the film once the letter covers it, and `html, body { overflow-x: clip }` replaces the engine's `hidden`, which would break `position: sticky`.
- **Letter section** (`components/Letter.js`): a sticky 100dvh stage inside a `h-[910vh]` section, driven by one scrubbed GSAP ScrollTrigger timeline (SplitText char fades, CustomEase `letter.out`). Timeline positions are in screens of scroll; `LENGTH` must match the section height class. Heading writes in over an outline copy (`.letter-outline`), the seal fades, the flap opens, the paper rises out of a masked pocket while the envelope drops, the paper flies off, then an About chapter (the studio image drops in as a print, the heading writes in, body and principles fade up, then it lifts away), then "Write back." with the email and address writes in centred, moves aside (left on desktop, up on phones) and `ContactForm` comes forward. Chapters taller than the screen (About on phones, the reply on short screens) scroll up via `overflowOf`. The prompt is laid out in its final position and offset back to centre (`onRefresh`/`place`). Reading-pose offsets come from `measure()`; everything is recomputed on refresh (a ResizeObserver refreshes when the film track, paper, About or reply block resizes). Reduced motion swaps moves for fades. `#about` and `#contact` are invisible anchors positioned along the timeline (`ANCHORS`, in screens), so links jump to those beats rather than to DOM sections; retune them if the timeline changes. Links jump, never smooth-scroll: there is no CSS `scroll-behavior`, and a document click handler in `Letter.js` scrolls `#` links instantly and completes the scrub's catch-up tween (`getTween().progress(1)`) so chapters in between don't replay.
- **Practice copy** (email, address, About title, paragraphs and principles) lives in `lib/practice.js`.
- **Styling is Tailwind v4**: there is no `tailwind.config.js`. The palette (`cream`, `sand`, `stone`, `clay`, `bark`, `moss`) and font families are declared in `@theme` in `app/globals.css`, so `bg-sand`, `text-clay`, `font-serif`, etc. work as utilities. Add new design tokens there, not in a config file.
- Fonts are loaded in `app/layout.js` via `next/font/google` (Fraunces for headings, Inter for body) and exposed as CSS variables that `globals.css` maps into `--font-serif` / `--font-sans`. `h1`–`h3` get the serif face globally.
- `design.md` at the project root is an imported design spec that is not applied to the site.
- **Server vs client**: components are server components by default. Only `World` (engine mount), `Letter` (GSAP) and `ContactForm` (form state) are `"use client"`.
- The contact form in `components/ContactForm.js` (rendered by the letter with `compact`) validates client-side and currently only `console.log`s the payload at the `TODO`. Any real backend (API route or form service) plugs in there.
- The About chapter's print is the papercraft still `public/world/studio-about.webp`; swap in real photography by changing its `src`, `alt` and caption in `Letter.js`. Scroll-world chrome overrides (wordmark, mobile text fade, hidden phone scroll hint) are unlayered rules at the bottom of `app/globals.css`.
