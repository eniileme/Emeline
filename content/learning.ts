import type { Metadata } from "next";

export const LEARNING_METADATA: Metadata = {
  title: "Learning",
  description: "Learning hub — placeholder.",
};

export const LEARNING = {
  eyebrow: "Learning",
  title: "Learning",
  intro:
    "A light learning hub — courses, notes, and side projects tied to what you’re studying.",
  currentFocus: {
    heading: "Current focus",
    cards: [
      {
        title: "Course / topic A",
        body: "[Placeholder — e.g. course name or theme you’re working through.]",
      },
      {
        title: "Course / topic B",
        body: "[Placeholder — second thread if needed.]",
      },
    ] as const,
  },
  notes: {
    heading: "Notes & takeaways",
    body: "[Placeholder — short bullets or links to notes later. Keep it informal.]",
  },
  builds: {
    heading: "Learning-related builds",
    cards: [
      { title: "Build 1", body: "[Small project tied to something you learned — placeholder.]" },
      { title: "Build 2", body: "[Another optional card.]" },
    ] as const,
  },
} as const;

