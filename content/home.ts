import type { Metadata } from "next";

export const HOME_METADATA: Metadata = {
  title: "Home",
  description: "Portfolio home — placeholder.",
};

export const HOME = {
  heroSubtitle: "Portfolio, experience, and learning — compact home base",
  heroPositioning:
    "Short positioning line goes here when you’re ready. This page stays small — no endless scroll.",
  ctas: {
    linkedinLabel: "LinkedIn",
    emailLabel: "Email",
  },
  exploreLabel: "Explore",
  featured: [
    {
      href: "/projects",
      title: "Projects",
      blurb: "Apps and experiments — placeholder grid.",
    },
    {
      href: "/learning",
      title: "Learning",
      blurb: "Courses, notes, and topics in progress.",
    },
    {
      href: "/now",
      title: "Now",
      blurb: "What you’re focused on lately.",
    },
  ],
  footerText: "built with Next.js • deployed on Vercel",
} as const;

