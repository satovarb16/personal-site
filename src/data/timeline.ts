export interface TimelineEntry {
  /** Short git-style ref — decorative texture, like the `~ $` prompt marker. */
  hash: string;
  /** Human-readable period. */
  date: string;
  /** Git ref badge (e.g. "HEAD -> main") rendered next to the hash. */
  ref?: string;
  /** Small category label: education / shipping / engineering / work / freelance. */
  kind: string;
  title: string;
  /** Prose body — used by most entries. */
  description?: string;
  /** Discrete detail lines — used by education entries instead of prose. */
  details?: string[];
  /** The HEAD commit — gets the live (green) node styling. */
  current?: boolean;
}

// Read top-to-bottom like `git log`: newest commit first.
// Source of truth: Tovar_Santiago_Resume_June2026.pdf.
export const timeline: TimelineEntry[] = [
  {
    hash: "a1f0c3e",
    date: "May 2026 – Present",
    ref: "HEAD -> main",
    kind: "freelance",
    title: "Los Ches — Restaurant Site",
    description:
      "Independently designed, developed, and shipped a production site for a family restaurant — orchestrating Claude Code with autonomous sub-agents under SDD and TDD. Responsive, SEO-optimized, deployed to Cloudflare, and in active use.",
    current: true,
  },
  {
    hash: "c4e7b21",
    date: "May 2026 – Present",
    kind: "shipping",
    title: "runway — Job Search MCP Server",
    description:
      "Python MCP server giving Claude Code real-time H-1B sponsorship data from USCIS and live job retrieval from Greenhouse, Ashby, and Lever — with a full pytest suite and local caching.",
  },
  {
    hash: "9f3a0d8",
    date: "May 2026 – Present",
    kind: "engineering",
    title: "repo-pilot — AI Coding Agent",
    description:
      "AI development assistant that analyzes a repo, proposes changes, runs sandboxed tests, and opens PRs — with human approval gates at every critical step.",
  },
  {
    hash: "7b2d9f4",
    date: "May 2026",
    kind: "education",
    title: "University of Florida",
    details: [
      "B.S. Computer Engineering",
      "Minor in Engineering Innovation",
      "Gainesville, FL",
    ],
  },
  {
    hash: "3e8c1a6",
    date: "Aug 2025 – May 2026",
    kind: "engineering",
    title: "Smart Task Alarm System — Senior Design",
    description:
      "Architected an alarm system spanning an Android app, backend services, PostgreSQL, and Raspberry Pi hardware synced over MQTT for low-latency execution.",
  },
  {
    hash: "0d5b7c2",
    date: "May 2025 – Aug 2025",
    kind: "work",
    title: "IT Intern — CascadaNet",
    description:
      "Built and debugged Python REST APIs, engineered a batch media-upload pipeline, administered cloud-hosted databases, and maintained VoIP systems for 200+ users.",
  },
  {
    hash: "5c1e9b0",
    date: "Jan 2022 – May 2023",
    kind: "education",
    title: "Broward College",
    details: ["Associate of Arts", "Computer Engineering track", "Davie, FL"],
  },
];
