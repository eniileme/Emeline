import type { Metadata } from "next";

export const ABOUT_METADATA: Metadata = {
  title: "About",
  description: "About Emeline Le Guillou — placeholder.",
};

export const ABOUT = {
  eyebrow: "About",
  title: "About",
  intro: "Placeholder intro — replace with a short bio when ready.",
  cards: {
    bio: {
      title: "Bio",
      body: "[Your background, focus areas, and what you care about professionally. Keep it concise; expand later.]",
    },
    positioning: {
      title: "Positioning",
      body: "[One secondary statement — e.g. how you think about CS, product, or building in public.]",
    },
  },
  avatarPlaceholder: "Photo / avatar area (optional)",
} as const;

