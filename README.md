# Santiago Tovar — Personal Site

Personal portfolio and blog for Santiago Tovar (AI Engineer · Full-Stack Developer).
Built with [Astro](https://astro.build), styled with Tailwind CSS, and written around a
terminal/console aesthetic with a single typeface (JetBrains Mono).

## Tech Stack

- **[Astro 6](https://astro.build)** — static site framework, content collections for the blog
- **[Tailwind CSS 4](https://tailwindcss.com)** — via the `@tailwindcss/vite` plugin
- **[MDX](https://mdxjs.com)** — blog posts authored in Markdown with components
- **Astro Fonts API** — self-hosted JetBrains Mono (Google provider, latin subset, 400–700)
- **Node** `>=22.12.0`

## Sections

- **Hero** — name, role, availability status, and contact links
- **Stack** — grouped tech stack (languages, agentic, web, data, ops)
- **Projects** — project cards with client-side filtering by skill
- **Certifications** — issuer / title / year grid
- **Blog** — MDX-powered posts under `/blog`

## Project Structure

```text
/
├── public/                 # static assets (favicons)
├── src/
│   ├── assets/             # images processed by Astro (profile photo)
│   ├── components/         # reusable .astro components (ProjectCard)
│   ├── content/blog/       # blog posts (.mdx) — the content collection
│   ├── content.config.ts   # blog collection schema
│   ├── data/               # site content as typed data
│   │   ├── projects.ts     # project list + skill filters
│   │   └── certifications.ts
│   ├── layouts/            # Layout.astro (base) and BlogLayout.astro
│   ├── pages/              # routes (index, blog/index, blog/[slug])
│   └── styles/global.css   # global styles + design tokens
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

Content lives as typed data and MDX — no CMS:

- **Projects** → `src/data/projects.ts` (each entry feeds a card and the skill filter)
- **Certifications** → `src/data/certifications.ts`
- **Stack groups** → `stackGroups` array in `src/pages/index.astro`
- **Blog posts** → add an `.mdx` file under `src/content/blog/` matching the schema in `src/content.config.ts`

## Build & Deploy

```sh
npm run build      # outputs static files to ./dist/
```

The `dist/` directory is a fully static site and can be deployed to any static host
(Cloudflare Pages, Netlify, Vercel, GitHub Pages, etc.).
