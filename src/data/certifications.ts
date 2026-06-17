export interface Certification {
  title: string;
  issuer: string;
  year: number;
}

export const certifications: Certification[] = [
  { title: "Claude Code 101", issuer: "Anthropic", year: 2026 },
  { title: "Claude Code in Action", issuer: "Anthropic", year: 2026 },
  { title: "AI Fluency: Framework & Foundations", issuer: "Anthropic", year: 2026 },
  { title: "Introduction to MCP", issuer: "Anthropic", year: 2026 },
  { title: "MCP: Advanced Topics", issuer: "Anthropic", year: 2026 },
];
