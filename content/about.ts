import type { Metadata } from "next";

export const ABOUT_METADATA: Metadata = {
  title: "About",
  description:
    "Customer Success in B2B SaaS and small products around organisation, clarity, and decision-making.",
};

/** Editorial About copy — no card titles. */
export const ABOUT = {
  title: "About",
  intro: "I like building tools that make complex things feel simple.",
  bioParagraphs: [
    "I work in Customer Success in B2B SaaS. I also design and build small products around organisation, clarity, and decision-making.",
  ] as const,
  themes: {
    heading: "Themes",
    line: "clarity · structure · metadata · calm UX",
  },
  /** Optional small section; leave `body` empty to hide. */
  currently: {
    heading: "Currently",
    body: "",
  } as const,
} as const;
