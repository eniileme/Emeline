import type { ExperienceCompany, ExperienceRole } from "@/content/experience";

function parseStartYear(dates: string) {
  const match = dates.match(/(\d{4})/);
  if (!match) return null;
  const year = Number(match[1]);
  return Number.isFinite(year) ? year : null;
}

/** Company row: title + dates column; role bodies use column 1 for reading width. */
const experienceEntryGrid =
  "grid grid-cols-[minmax(0,1fr)_minmax(11.25rem,max-content)] gap-x-3 items-baseline";

type CompanyExperienceCardProps = {
  company: ExperienceCompany;
};

export function CompanyExperienceCard({ company }: CompanyExperienceCardProps) {
  const orderedRoles = company.roles
    .map((role, index) => ({
      role,
      index,
      startYear: parseStartYear(role.dates),
    }))
    .sort((a, b) => {
      if (a.startYear == null || b.startYear == null) return a.index - b.index;
      return b.startYear - a.startYear;
    })
    .map((x) => x.role);

  const multipleRoles = orderedRoles.length > 1;

  return (
    <section className="relative rounded-md border-[0.5px] border-border/45 bg-card px-3 py-3">
      <div className="absolute left-0 right-0 top-0 h-px bg-accent/25" aria-hidden="true" />

      <div className={experienceEntryGrid}>
        <h2 className="min-w-0 font-space-grotesk text-lg font-semibold tracking-tight text-foreground">
          {company.company}
        </h2>
        <div className="justify-self-end text-right">
          <p className="font-jetbrains-mono text-xs uppercase tracking-[0.12em] text-muted">
            {company.companyDates}
          </p>
          {multipleRoles && company.totalDuration ? (
            <p className="mt-1 text-xs text-subtle">{company.totalDuration}</p>
          ) : null}
        </div>

        {orderedRoles.map((role: ExperienceRole, idx: number) => {
          const isLatest = idx === 0;
          return (
            <div key={role.role + role.dates} className="contents">
              {multipleRoles && idx > 0 ? (
                <div
                  className="col-span-2 mt-5 border-t border-border/20 pt-5"
                  aria-hidden="true"
                />
              ) : null}

              <h3
                aria-label={!multipleRoles ? `${role.role}, ${role.dates}` : undefined}
                className={[
                  "min-w-0 font-space-grotesk text-base tracking-tight text-foreground",
                  idx === 0 ? "mt-3" : "",
                  multipleRoles ? "col-span-2 border-l border-border/30 pl-3" : "",
                  !multipleRoles ? "col-span-2" : "",
                  isLatest ? "font-semibold" : "font-medium",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {role.role}
              </h3>
              {multipleRoles ? (
                <p className="col-span-2 mt-1 border-l border-border/30 pl-3 font-jetbrains-mono text-xs uppercase tracking-[0.12em] text-muted">
                  {role.dates}
                </p>
              ) : null}

              <p
                className={[
                  "col-start-1 text-sm leading-relaxed text-summary",
                  multipleRoles ? "mt-2.5" : "mt-2",
                ].join(" ")}
              >
                {role.summary}
              </p>

              {role.bullets.length > 0 ? (
                <ul
                  className={[
                    "col-start-1 list-inside list-disc space-y-1 text-sm text-muted",
                    multipleRoles ? "mt-2.5" : "mt-2",
                  ].join(" ")}
                >
                  {role.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
