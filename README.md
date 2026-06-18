# Santiago Tovar — Personal Site

Personal portfolio for Santiago Tovar (AI Engineer · Full-Stack Developer).
Built with [Astro](https://astro.build), styled with Tailwind CSS, and written around a
terminal/console aesthetic (Dracula palette, a single typeface — JetBrains Mono).

## Tech Stack

- **[Astro 6](https://astro.build)** — static site framework
- **[Tailwind CSS 4](https://tailwindcss.com)** — via the `@tailwindcss/vite` plugin
- **Astro Fonts API** — self-hosted JetBrains Mono (Google provider, latin subset, 400–700)
- **Node** `>=22.12.0`

## Sections

A single-page site (`/`) with a sticky scroll-spy nav:

- **About** — name, role, availability status, and bio, framed as a terminal window with a top-right portrait
- **Skills** — grouped tech stack (languages, agentic, web, data, ops, spoken)
- **Projects** — project cards with animated client-side filtering by skill
- **Certifications** — issuer / title / year grid
- **Timeline** — career history rendered as a `git log --graph`
- **Contact** — closing call-to-action

## Project Structure

```text
/
├── public/                 # static assets (favicon.svg — ST monogram)
├── src/
│   ├── assets/             # images processed by Astro (profile photo)
│   ├── components/         # reusable .astro components
│   │   ├── ProjectCard.astro
│   │   ├── Timeline.astro
│   │   ├── Contact.astro
│   │   └── TerminalWindow.astro   # reusable faux terminal-window frame
│   ├── data/               # site content as typed data
│   │   ├── projects.ts     # project list + skill filters
│   │   ├── certifications.ts
│   │   └── timeline.ts
│   ├── layouts/Layout.astro       # base layout: nav + scroll-spy + footer
│   ├── pages/index.astro          # the single page
│   └── styles/global.css          # design tokens + animations
├── astro.config.mjs
└── package.json
```

## Commands

All commands are run from the project root:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |
| `npm run astro`   | Run Astro CLI commands (`astro check`, etc.) |

## Editing Content

Content lives as typed data — no CMS:

- **Projects** → `src/data/projects.ts` (each entry feeds a card and the skill filter)
- **Certifications** → `src/data/certifications.ts`
- **Timeline** → `src/data/timeline.ts`
- **Stack groups** → `stackGroups` array in `src/pages/index.astro`
- **Design tokens** (colors, radii, type) → `:root` in `src/styles/global.css`

## Build & Deploy

```sh
npm run build      # outputs a fully static site to ./dist/
```

Deployed to **Cloudflare Pages** — it builds and publishes automatically on every push to `main`
(build command `npm run build`, output directory `dist`). The `dist/` output is plain static files
and can be hosted anywhere (Netlify, Vercel, GitHub Pages, etc.).
