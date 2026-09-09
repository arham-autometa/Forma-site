# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Single-page marketing site for "Forma", a solo architecture practice. Next.js 16 (App Router), plain JavaScript (no TypeScript), Tailwind CSS v4, Framer Motion. Not a git repository as of creation. Content is placeholder copy and SVG images until real assets arrive.

## Commands

```bash
npm run dev      # dev server on http://localhost:3000
npm run build    # production build; also the main correctness check
npm run lint     # eslint (flat config, eslint-config-next)
```

There is no test suite.

## Architecture

- `app/page.js` composes the page from `components/` in order: Header (newspaper-style masthead), Hero (manifesto statement), Services (declarations on a dark bleed, then a numbered process list), About (B&W photo bleed), Contact (book-a-call block, then the form), Footer (mono colophon). `components/Ticker.js` is unused and left from the previous design. Sections are anchored by `id` (`top`, `services`, `about`, `contact`) and the Header nav links to them.
- **Design tokens live in `tokens.css`** at the project root (OKLCH colours, type scale, 4pt spacing, easings). `app/globals.css` imports it, then Tailwind, then maps tokens into a Tailwind v4 `@theme` block. Sections are styled with plain classes in `globals.css`; every colour and font must reference a token.
- **Hallmark build.** Manifesto macrostructure, Brutal theme, N6 masthead, Ft4 colophon. The stamp at the top of `globals.css` and `.hallmark/log.json` record the picks; a future Hallmark run must rotate away from them.
- Fonts are loaded in `app/layout.js` via `next/font/google` (Bricolage Grotesque display, Geist body, Geist Mono for labels and the colophon) and mapped in `tokens.css` to `--font-display` / `--font-body` / `--font-outlier`.
- `design.md` at the project root is an imported design spec that is not currently applied to the site.
- **Server vs client**: components are server components by default. Only `Contact` (form state) and `Reveal` (Framer Motion) are `"use client"`. `Reveal` is the single motion primitive: one horizontal sweep on section entry, once, reduced-motion aware.
- The contact form in `components/Contact.js` validates client-side and currently only `console.log`s the payload at the `TODO`. Any real backend (API route or form service) plugs in there.
- Photos in `public/placeholders/` are Unsplash stock (credited in captions) referenced with `next/image` using `fill`; swap in the practice's own photography by replacing the files and updating `alt` text and captions.
