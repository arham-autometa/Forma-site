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

- `app/page.js` composes the page from `components/` in order: Header, Hero, Services, About, Contact, Footer. Sections are anchored by `id` (`top`, `services`, `about`, `contact`) and the Header nav links to them.
- **Styling is Tailwind v4**: there is no `tailwind.config.js`. The palette (`cream`, `sand`, `stone`, `clay`, `bark`, `moss`) and font families are declared in `@theme` in `app/globals.css`, so `bg-sand`, `text-clay`, `font-serif`, etc. work as utilities. Add new design tokens there, not in a config file.
- Fonts are loaded in `app/layout.js` via `next/font/google` (Fraunces for headings, Inter for body) and exposed as CSS variables that `globals.css` maps into `--font-serif` / `--font-sans`. `h1`–`h3` get the serif face globally.
- `design.md` at the project root is an imported design spec that is not applied to the site.
- **Server vs client**: components are server components by default. Only `Header` (mobile menu state), `Contact` (form state), and `Reveal` (Framer Motion) are `"use client"`. Keep it that way; wrap new animated blocks in `Reveal` rather than importing `framer-motion` into more components.
- `components/Reveal.js` is the single scroll-animation primitive (fade + slide-up, plays once). Accepts `delay` and `className`.
- The contact form in `components/Contact.js` validates client-side and currently only `console.log`s the payload at the `TODO`. Any real backend (API route or form service) plugs in there.
- Photos in `public/placeholders/` are Unsplash stock (credited in captions) referenced with `next/image` using `fill`; swap in the practice's own photography by replacing the files and updating `alt` text and captions.
