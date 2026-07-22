# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server (http://localhost:5173)
- `npm run build` — type-check (`tsc -b`) then production build via Vite
- `npm run lint` — run Oxlint
- `npm run preview` — preview the production build locally

There is no test suite configured in this project.

## Architecture

Single-page personal portfolio: React 19 + TypeScript + Vite 8, styled with Tailwind CSS v4, animated with Framer Motion, icons from React Icons.

- **Tailwind v4 is configured CSS-first**, not via `tailwind.config.js`. The theme (custom `primary` purple palette inspired by the .NET brand color, plus font) is declared with `@theme` in `src/styles/index.css`, which is imported once from `src/main.tsx`. Add/change design tokens there rather than creating a JS config file.
- **Path alias**: `@/` maps to `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`) — use it for all intra-`src` imports instead of relative paths.
- **Composition flow**: `main.tsx` → `App.tsx` → `layouts/MainLayout.tsx` (renders `Header` + `Footer` around page content) → `pages/Home.tsx`. This is a single-page app; new pages should be added under `src/pages/` and composed the same way rather than introducing a router unless the site grows beyond one page.
- **Content vs. presentation split**: static content (nav links, social links, skills, projects) lives in `src/data/*.ts` as typed arrays/interfaces, consumed by components in `src/components/` and `src/pages/`. When adding new content sections, follow this pattern — add a typed data file rather than hardcoding arrays in JSX.
- `src/pages/Home.tsx` is a single-page scroll layout with anchor sections (`#home`, `#about`, `#projects`) that `src/data/navigation.ts` links into; `Footer.tsx` doubles as the `#contact` section. Keep section `id`s in sync with `navigation.ts` when restructuring.
- Folder structure: `src/assets` and `src/hooks` exist as scaffolding for future use and are currently empty.
