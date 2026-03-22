import type { Metadata } from "next";
import { ContentCard } from "@/components/site/ContentCard";
import { ExperienceCard } from "@/components/site/ExperienceCard";
import { PageHeader } from "@/components/site/PageHeader";

const filters = [
  "Overview",
  "Customer success",
  "Support",
  "AI & systems",
  "Leadership",
] as const;

export const metadata: Metadata = {
  title: "Experience",
  description: "Experience and roles — placeholder.",
};

const roles = [
  {
    company: "Company name",
    role: "Role title",
    dates: "20XX — Present",
    summary: "One-line summary of the role and scope. Edit when you add real roles.",
    bullets: ["Highlight or responsibility", "Another outcome or focus", "Optional third bullet"],
  },
  {
    company: "Previous company",
    role: "Role title",
    dates: "20XX — 20XX",
    summary: "Short summary placeholder for a prior position.",
    bullets: ["Bullet placeholder", "Bullet placeholder", "Bullet placeholder"],
  },
  {
    company: "Earlier role",
    role: "Role title",
    dates: "20XX — 20XX",
    summary: "Optional third role — edit or remove.",
    bullets: ["Bullet placeholder", "Bullet placeholder"],
  },
] as const;

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Experience"
        title="Experience"
        intro="Placeholder intro — a sentence on how you want to frame your career story."
      />

      <div>
        <p className="mb-2 text-xs font-jetbrains-mono uppercase tracking-wider text-slate-500">
          Angles (filters — UI only for now)
        </p>
        <div className="flex flex-wrap gap-2">
          {filters.map((label) => (
            <span
              key={label}
              className="cursor-default rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-400"
              title="Non-functional placeholder"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {roles.map((r) => (
          <ExperienceCard key={r.company} {...r} />
        ))}
      </div>

      <ContentCard title="CV / resume">
        <p className="text-slate-500">[Optional: link to PDF or full CV later.]</p>
      </ContentCard>
    </div>
  );
}
