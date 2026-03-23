import type { Metadata } from "next";

export const HOME_METADATA: Metadata = {
  title: "Home",
  description: "Portfolio home — placeholder.",
};

export const HOME = {
  heroSubtitle: "Customer Success Leader | B2B SaaS Growth & Scalability | Automation + applied AI | Builder mindset",
  heroPositioning:
    "I’ve spent my career helping SaaS companies grow through better customer experience, stronger operations, and clearer systems. These days, I’m also building projects, learning fast, and exploring how AI and software can make work more useful — and more human.",
  ctas: {
    linkedinLabel: "LinkedIn",
    emailLabel: "Email",
  },
  exploreLabel: "Explore",
  featured: [
    {
      href: "/projects",
      title: "Projects",
      blurb: "Things I’m building — practical tools, experiments, and side projects.",
    },
    {
      href: "/learning",
      title: "Learning",
      blurb: "Courses, notes, and topics I’m actively exploring in AI, coding, and product.",
    },
    {
      href: "/now",
      title: "Now",
      blurb: "What I’m focused on lately: work, projects, and current priorities.",
    },
  ],
  footerText: "Built with Next.js, Tailwind, and curiosity.",
} as const;

