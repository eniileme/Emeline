import type { Metadata } from "next";

export const PROJECTS_METADATA: Metadata = {
  title: "Projects",
  description: "Projects and builds — placeholder.",
};

export const PROJECTS = {
  eyebrow: "Projects",
  title: "Projects",
  intro:
    "Apps and builds — replace placeholders with real case studies or links when ready.",
  cards: [
    {
      title: "Project alpha",
      description: "One-line description placeholder.",
      status: "In progress",
      href: "#",
    },
    {
      title: "Project beta",
      description: "One-line description placeholder.",
      status: "Shipped",
      href: "#",
    },
    {
      title: "Project gamma",
      description: "One-line description placeholder.",
      status: "Experiment",
      href: "#",
    },
    {
      title: "Project delta",
      description: "One-line description placeholder.",
      status: "Idea",
      href: "#",
    },
  ] as const,
} as const;

