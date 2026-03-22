import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectCard } from "@/components/site/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects and builds — placeholder.",
};

const projects = [
  {
    title: "Project alpha",
    description: "One-line description placeholder.",
    status: "In progress",
  },
  {
    title: "Project beta",
    description: "One-line description placeholder.",
    status: "Shipped",
  },
  {
    title: "Project gamma",
    description: "One-line description placeholder.",
    status: "Experiment",
  },
  {
    title: "Project delta",
    description: "One-line description placeholder.",
    status: "Idea",
  },
] as const;

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Projects"
        title="Projects"
        intro="Apps and builds — replace placeholders with real case studies or links when ready."
      />
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <li key={p.title}>
            <ProjectCard {...p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
