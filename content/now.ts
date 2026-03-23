import type { Metadata } from "next";

export const NOW_METADATA: Metadata = {
  title: "Now",
  description: "What I'm focused on — placeholder.",
};

export const NOW = {
  eyebrow: "Now",
  title: "Now",
  intro: "A lightweight /now page — update the date when you refresh this.",
  lastUpdatedLine: "Last updated: [YYYY-MM-DD — edit me]",
  cards: [
    {
      title: "Currently focusing on",
      body: "[Placeholder — main priority or theme right now.]",
    },
    {
      title: "Currently building",
      body: "[Placeholder — what’s on the bench.]",
    },
    {
      title: "Currently learning",
      body: "[Placeholder — books, courses, or skills.]",
    },
  ] as const,
} as const;

