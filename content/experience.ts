import type { Metadata } from "next";

export const EXPERIENCE_METADATA: Metadata = {
  title: "Experience",
  description: "Experience and roles — placeholder.",
};

export const EXPERIENCE = {
  eyebrow: "Experience",
  title: "Experience",
  intro: "Placeholder intro — a sentence on how you want to frame your career story.",
  filterLabels: [
    "Overview",
    "Customer success",
    "Support",
    "AI & systems",
    "Leadership",
  ],
  roles: [
    {
      company: "Company name",
      role: "Role title",
      dates: "20XX — Present",
      summary: "One-line summary of the role and scope. Edit when you add real roles.",
      bullets: [
        "Highlight or responsibility",
        "Another outcome or focus",
        "Optional third bullet",
      ] as const,
    },
    {
      company: "Previous company",
      role: "Role title",
      dates: "20XX — 20XX",
      summary: "Short summary placeholder for a prior position.",
      bullets: [
        "Bullet placeholder",
        "Bullet placeholder",
        "Bullet placeholder",
      ] as const,
    },
    {
      company: "Earlier role",
      role: "Role title",
      dates: "20XX — 20XX",
      summary: "Optional third role — edit or remove.",
      bullets: ["Bullet placeholder", "Bullet placeholder"] as const,
    },
  ] as const,
  anglesLabel: "Angles (filters — UI only for now)",
  pillTitle: "Non-functional placeholder",
  cvCard: {
    title: "CV / resume",
    body: "[Optional: link to PDF or full CV later.]",
  },
} as const;

