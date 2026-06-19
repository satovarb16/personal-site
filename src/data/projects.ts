export interface Project {
  title: string;
  description: string;
  role: string;
  period: string;
  skills: string[];
  highlights: string[];
  link?: string;
  linkLabel?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "runway — Job Search MCP Server",
    description:
      "Python MCP server that helps international students (F-1/OPT) filter US job postings by technical fit AND H-1B sponsorship history in a single call — pulling live postings from major ATS platforms and checking real USCIS data. Built and actively used during my own job search.",
    role: "MCP Server Engineer",
    period: "May 2026 – Present",
    skills: ["Python", "MCP", "Claude Code", "Playwright", "pytest", "REST APIs"],
    highlights: [
      "Single analyze_job call gathers the posting, visa verdict, and stored CV profile, then hands Claude a scoring rubric to recommend APPLY / CONSIDER / SKIP.",
      "Two-tier parsing: dedicated parsers for Greenhouse, Ashby, and Lever; JSON-LD/microdata/Playwright fallback for everything else.",
      "Local USCIS caching (~2MB dataset) auto-refreshed on startup — visa checks are instant on subsequent queries.",
      "Published to PyPI and installable as a Claude Code plugin in two commands.",
    ],
    link: "https://github.com/satovarb16/runwayMCP",
    featured: true,
  },
  {
    title: "repo-pilot — AI Coding Agent",
    description:
      "AI-powered development assistant that takes natural-language instructions, analyzes a GitHub repo, proposes file changes, runs sandboxed tests, and opens PRs — with mandatory human approval at every critical step.",
    role: "Full-Stack Engineer",
    period: "May 2026 – Present",
    skills: ["TypeScript", "Next.js", "Fastify", "Prisma", "PostgreSQL", "MCP", "Docker", "Ollama", "Turborepo"],
    highlights: [
      "Local LLM backend via Ollama (Qwen 2.5-Coder) — no cloud API dependency for inference.",
      "Sandboxed Docker containers with network isolation for safe test execution before any commit.",
      "Strict state machine workflow: plan → edits → tests → PR, with approval gates at every step.",
      "Encrypted GitHub PAT storage, path traversal prevention, and full audit trail in PostgreSQL.",
    ],
    link: "https://github.com/satovarb16/repo-pilot",
  },
  {
    title: "Los Ches — Restaurant Landing Page",
    description:
      "Production site for a family restaurant, independently designed, developed, and shipped with no team or brief.",
    role: "Full-Stack Developer & AI Workflow Engineer",
    period: "May 2026 – Present",
    skills: ["Astro", "Claude Code", "AI Agents", "SDD", "TDD", "SEO", "Cloudflare"],
    highlights: [
      "Orchestrated Claude Code with autonomous sub-agents and custom skills to automate component scaffolding, UI generation, and content structuring.",
      "Delivered a fully responsive, SEO-optimized site with dynamic menu sections, photo gallery, embedded map, and WhatsApp reservation flow.",
      "Deployed to Cloudflare — in active production use.",
    ],
    link: "https://websitelosches.pages.dev/",
    linkLabel: "Live",
    featured: true,
  },
  {
    title: "Smart Task Alarm System",
    description:
      "Senior Design project integrating an Android app, backend services, PostgreSQL, and Raspberry Pi hardware for synchronized alarm execution.",
    role: "Developer",
    period: "August 2025 – May 2026",
    skills: ["Android", "Jetpack Compose", "MQTT", "PostgreSQL", "Raspberry Pi", "Python"],
    highlights: [
      "MQTT-based messaging pipelines for low-latency event synchronization between mobile and hardware.",
      "Modular Android scheduling services with configurable recurring alarm logic and cloud-backed PostgreSQL persistence.",
    ],
  },
  {
    title: "Full-Stack Food Review Platform",
    description:
      "Food review platform where users can post, edit, and browse restaurant reviews with live Yelp data.",
    role: "Back-End Developer",
    period: "May 2025 – August 2025",
    skills: ["React", "Flask", "PostgreSQL", "Supabase", "SQLAlchemy", "JWT", "Yelp API"],
    highlights: [
      "Secured API with JWT auth and Supabase token validation.",
      "Ingested live restaurant data from Yelp API — names, addresses, ratings, prices, and coordinates.",
    ],
  },
];

export const allSkills = [...new Set(projects.flatMap((p) => p.skills))].sort();

const hiddenFromFilters = new Set([
  "Android", "Jetpack Compose", "MQTT", "Prisma", "SEO",
  "Turborepo", "TypeScript", "Yelp API", "pytest",
]);

export const filterSkills = allSkills.filter((s) => !hiddenFromFilters.has(s));
