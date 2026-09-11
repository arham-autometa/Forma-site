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

The page follows a Hallmark "Portfolio Grid" structure: a masthead, a short statement, a filterable work index with grid and list views, one project told in full, the practice, and a dark inquiry band.
The locked design system is `design.md` at the project root. Its tokens (colours, Inter and JetBrains Mono type, spacing, radii, easings) live in `src/app/tokens.css`, the only source of colour and font values.
Each project's schematic plan is drawn from the `plan.rooms` data in `src/data/projects.ts`.
`.hallmark/log.json` records design choices so future runs rotate away from them.

## Photographs

All project photographs are placeholders hotlinked from Pexels and Unsplash, credited inside each project panel. Replace the `photos` entries in `src/data/projects.ts` with the firm's own photography before launch.
