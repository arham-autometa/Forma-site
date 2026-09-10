# Forma — landing page

Single-page marketing site for Forma, an architecture and interior design firm.
Built with Next.js (App Router), Tailwind CSS v4 and framer-motion.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Edit content

- `src/data/site.ts` — studio email (used for the mailto inquiry link), address, phone, nav.
- `src/data/projects.ts` — the six portfolio projects: copy, materials, Unsplash image IDs.
- `src/data/services.ts` — the services list.

Images are hotlinked from Unsplash; swap the photo IDs in `projects.ts` for the firm's own photography when available.

## Design system

The page follows a Hallmark "Photographic" macrostructure. Design tokens (colours in OKLCH, type scale, spacing, easings) live in `src/app/tokens.css` and are the only source of colour and font values. `.hallmark/log.json` records the design choices for future runs.
