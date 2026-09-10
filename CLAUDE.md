# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Marketing site for "Forma", a solo architecture practice. Next.js 16 (App Router), plain JavaScript (no TypeScript), Tailwind CSS v4, Framer Motion, and GSAP (the letter section only). Content is placeholder copy until real assets arrive.

## Commands

```bash
npm run dev      # dev server on http://localhost:3000
npm run build    # production build; also the main correctness check
npm run lint     # eslint (flat config, eslint-config-next)
```

There is no test suite.

## Architecture

- **Two routes.** `/` is the scroll-world film (`components/World.js`, client, loads `public/world/scrub-engine.js` and mounts it with the config in `lib/world.js`), then the letter section (`components/Letter.js`) and the Footer. `/studio` (`app/studio/page.js`) is the original practice page: Header, Hero, Services, About, Contact, Footer, anchored by `id` (`top`, `services`, `about`, `contact`). The world's CTAs link to `/studio#contact` and `/studio#about`; the studio wordmark links back to `/`.
- **Scroll-world assets** live in `public/world/`: five scene posters (`<scene>.webp`, `<scene>-m.webp`), and in `vid/` the dive clips (`<scene>.mp4`, 1080p 16:9) plus connectors (`conn1..4.mp4`) and their `-m.mp4` mobile siblings (native 9:16, 720 wide). Clips are Runway Seedance 2 renders; connectors are frame-locked to the neighbouring dives' actual first/last frames. Re-rendering any dive means re-rendering its two connectors. The engine is framework-agnostic vanilla JS (from the scroll-world skill) and is themed via `.sw-root` CSS variables at the bottom of `app/globals.css`.
- **Content after the film on `/`.** The engine's layers are `position: fixed` with z-index up to 60, so anything placed after `<World />` must be opaque and `relative z-[70]` (the Letter section and the Footer wrapper are) to slide over the film like a curtain. Supporting changes: the engine holds its last scene past the end of its track (edited in `scrub-engine.js`), `.sw-covered` on `#world` stops painting the film once the letter covers it, and `html, body { overflow-x: clip }` replaces the engine's `hidden`, which would break `position: sticky`.
- **Letter section** (`components/Letter.js`): a sticky 100dvh stage inside a `h-[500vh]` section, driven by one scrubbed GSAP ScrollTrigger timeline (SplitText char fades, CustomEase `letter.out`). Timeline positions are in screens of scroll; `LENGTH` must match the section height class. Heading writes in over an outline copy (`.letter-outline`), the seal fades, the flap opens, the paper rises out of a masked pocket while the envelope drops, the paper flies off, then "Write back." and the CTAs. Reading-pose offsets come from `measure()` and are recomputed on refresh (a ResizeObserver refreshes when the film track or paper resizes). Reduced motion swaps moves for fades.
- **Styling is Tailwind v4**: there is no `tailwind.config.js`. The palette (`cream`, `sand`, `stone`, `clay`, `bark`, `moss`) and font families are declared in `@theme` in `app/globals.css`, so `bg-sand`, `text-clay`, `font-serif`, etc. work as utilities. Add new design tokens there, not in a config file.
- Fonts are loaded in `app/layout.js` via `next/font/google` (Fraunces for headings, Inter for body) and exposed as CSS variables that `globals.css` maps into `--font-serif` / `--font-sans`. `h1`–`h3` get the serif face globally.
- `design.md` at the project root is an imported design spec that is not applied to the site.
- **Server vs client**: components are server components by default. Only `Header` (mobile menu state), `Contact` (form state), `Reveal` (Framer Motion), `World` (engine mount) and `Letter` (GSAP) are `"use client"`. Keep it that way; wrap new fade-in blocks in `Reveal` rather than importing `framer-motion` into more components.
- `components/Reveal.js` is the single scroll-animation primitive (fade + slide-up, plays once). Accepts `delay` and `className`.
- The contact form in `components/Contact.js` validates client-side and currently only `console.log`s the payload at the `TODO`. Any real backend (API route or form service) plugs in there.
- `/studio` imagery reuses the papercraft stills from `public/world/` (`house.webp` hero, `studio-about.webp` About) so the page matches the film; swap in the practice's own photography by changing the `src`, `alt` text and captions. Scroll-world chrome overrides (wordmark, mobile text fade, hidden phone scroll hint) are unlayered rules at the bottom of `app/globals.css`.
