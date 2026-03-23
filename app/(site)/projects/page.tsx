import { PageHeader } from "@/components/site/PageHeader";
import { ProjectCard } from "@/components/site/ProjectCard";
import { PROJECTS, PROJECTS_METADATA } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow={PROJECTS.eyebrow}
        title={PROJECTS.title}
        intro={PROJECTS.intro}
      />
      <ul className="grid gap-4 sm:grid-cols-2">
        {PROJECTS.cards.map((p) => (
          <li key={p.title}>
            <ProjectCard {...p} href={p.href} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export const metadata = PROJECTS_METADATA;
