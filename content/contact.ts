import type { Metadata } from "next";

export const CONTACT_METADATA: Metadata = {
  title: "Contact",
  description: "Get in touch — placeholder.",
};

export const CONTACT = {
  eyebrow: "Contact",
  title: "Contact",
  intro: "Short CTA placeholder — say how you prefer to be reached.",
  ctas: {
    linkedinLabel: "LinkedIn",
    emailLabel: "Email",
  },
  note: "[Optional note — e.g. response time, types of messages you welcome.]",
} as const;

