import type { Metadata } from "next";

export const EXPERIENCE_METADATA: Metadata = {
  title: "Experience",
  description: "Experience and roles — placeholder.",
};

export const EXPERIENCE = {
  eyebrow: "Experience",
  title: "Experience",
  intro: "Roles, responsibilities, and the work I’ve done across Customer Success, support, operations, and SaaS growth.",
  filterLabels: [
    "Overview",
    "Customer success",
    "Support",
    "Operations & systems",
    "Leadership",
  ],
  roles: [
    {
      company: "Boksi.com Solutions",
      role: "Global Head of Customer Success",
      dates: "Jan 2025 — Present",
      summary: "Leading Boksi’s international Customer Success organisation across Finland, Germany, and the Philippines, with responsibility for team leadership, customer operations, and client growth.",
      bullets: [
        "Manage an international team of 12 across Customer Success and self-service support.",
        "Oversee customer relationships, campaign delivery, and UGC strategy for clients across multiple markets (Finland and Germany).",
        "Drive operational clarity, team structure, and cross-functional collaboration in a scaling SaaS environment.",
      ] as const,
    },
    {
      company: "Ageras (Zervant)",
      role: "Customer Success Lead",
      dates: "Jul 2024 — Jan 2025",
      summary: "Led Customer Success at group level, building the function beyond Zervant and helping align customer operations across Ageras's wider organisation.",
      bullets: [
        "Set the direction for Customer Success within the revenue leadership team during a broader organisational restructure.",
        "Improved onboarding, activation, conversion, and lifecycle journeys across multiple platforms.",
        "Oversaw systems and migration work to reduce cost, improve scale, and support more than 300,000 active users.",
      ] as const,
    },
    {
      company: "Zervant",
      role: "Head of Customer Success",
      dates: "Mar 2022 — Jul 2024",
      summary: "Led Customer Success across 12 core markets and six languages, combining team leadership, customer lifecycle design, and operational development in a changing organisation.",
      bullets: [
        "Managed a team of six Customer Success Managers and helped shape onboarding, lifecycle strategy, segmentation, and customer health tracking.",
        "Built systems and programmes including onboarding strategy, marketing automation, touchpoint mapping, and a Power BI-based customer health assessment tool.",
        "Contributed to major business outcomes, including longer customer lifetime, higher LTV, and lower churn, while taking on broader leadership responsibility across Zervant and Ageras.",
      ] as const,
    },
    {
      company: "Zervant",
      role: "Customer Success Manager",
      dates: "May 2018 — Mar 2022",
      summary: "Managed the French-speaking customer base (100k+ users), focusing on onboarding, activation, and helping small businesses get value from the product.",
      bullets: [
        "Owned Customer Success for the French market, supporting tens of thousands of active users through onboarding, education, and lifecycle communication.",
        "Identified friction points in product and user journeys, contributing feedback loops that informed UX and feature improvements.",
        "Worked across support, product, and marketing to improve activation, engagement, and long-term customer value.",
      ] as const,
    },
    {
      company: "Zervant",
      role: "French Customer Service Specialist",
      dates: "Feb 2018 - May 2018",
      summary: "Provided first-line support for French-speaking customers, helping troubleshoot issues and guide them through the product.",
      bullets: [
        "Handled inbound support for French-speaking customers, providing technical assistance and product guidance.",
        "Identified common issues and patterns, contributing to product documentation and knowledge base improvements.",
        "Shared recurring customer pain points with internal teams to support better customer experience and retention.",
      ] as const,
    },
  ] as const,
  anglesLabel: "Focus areas",
  pillTitle: "Non-functional placeholder",
  cvCard: {
    title: "CV / resume",
    body: "[Coming soon]",
  },
} as const;

