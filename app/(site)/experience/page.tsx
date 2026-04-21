import { ContentCard } from "@/components/site/ContentCard";
import { PageHeader } from "@/components/site/PageHeader";
import { CompanyExperienceCard } from "@/components/site/CompanyExperienceCard";
import { EXPERIENCE, EXPERIENCE_METADATA } from "@/content/experience";

export default function ExperiencePage() {
  return (
    <div className="mx-auto w-full max-w-[720px] space-y-8">
      <PageHeader
        title={EXPERIENCE.title}
        intro={EXPERIENCE.intro}
      />

      <div>
        <p className="mb-2 text-xs font-jetbrains-mono uppercase tracking-wider text-muted">
          {EXPERIENCE.anglesLabel}
        </p>
        <div className="flex flex-wrap gap-2">
          {EXPERIENCE.filterLabels.map((label) => (
            <span
              key={label}
              className="cursor-default rounded-full border-[0.5px] border-border bg-card px-3 py-1 text-xs text-muted"
              title={EXPERIENCE.pillTitle}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {EXPERIENCE.companies.map((c) => (
          <CompanyExperienceCard key={c.company} company={c} />
        ))}
      </div>

      <ContentCard title={EXPERIENCE.cvCard.title}>
        <p className="text-muted">{EXPERIENCE.cvCard.body}</p>
      </ContentCard>
    </div>
  );
}

export const metadata = EXPERIENCE_METADATA;
