import type { ExperienceCompany, ExperienceRole } from "@/content/experience";

type RoleTimelineItemProps = {
  isLatest: boolean;
  showLine: boolean;
};

function RoleTimelineItem({ isLatest, showLine }: RoleTimelineItemProps) {
  return (
    <div className="relative w-6 flex-shrink-0 pt-2">
      {showLine ? (
        <div
          className="absolute left-1/2 top-4 bottom-0 w-px -translate-x-1/2 bg-white/5"
          aria-hidden="true"
        />
      ) : null}
      <span
        className={[
          "absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full ring-1 ring-white/10",
          isLatest ? "bg-pink-300/85" : "bg-white/20",
        ].join(" ")}
        aria-hidden="true"
      />
    </div>
  );
}

function parseStartYear(dates: string) {
  const match = dates.match(/(\d{4})/);
  if (!match) return null;
  const year = Number(match[1]);
  return Number.isFinite(year) ? year : null;
}

type CompanyExperienceCardProps = {
  company: ExperienceCompany;
};

export function CompanyExperienceCard({ company }: CompanyExperienceCardProps) {
  // Reverse-chronological by start year; if parsing fails, preserve the authored order.
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

  return (
    <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-sm shadow-black/20">
      <header className="flex items-start justify-between gap-6">
        <h2 className="font-space-grotesk text-lg font-semibold tracking-tight text-white">
          {company.company}
        </h2>

        <div className="text-right">
          <p className="font-jetbrains-mono text-xs uppercase tracking-wider text-slate-500">
            {company.companyDates}
          </p>
          {company.totalDuration ? (
            <p className="mt-1 text-xs text-slate-500">{company.totalDuration}</p>
          ) : null}
        </div>
      </header>

      <div className="mt-6 space-y-10">
        {orderedRoles.map((role: ExperienceRole, idx: number) => {
          const isLatest = idx === 0;
          const showLine = idx !== orderedRoles.length - 1;
          const hasDivider = idx !== orderedRoles.length - 1;

          return (
            <div key={role.role + role.dates} className="flex gap-4">
              <RoleTimelineItem isLatest={isLatest} showLine={showLine} />

              <div
                className={[
                  "flex-1",
                  hasDivider ? "border-b border-white/5 pb-8" : "",
                ].join(" ")}
              >
                <div className="max-w-[52ch]">
                  <h3
                    className={[
                      "font-space-grotesk text-base tracking-tight",
                      isLatest ? "font-semibold text-white" : "font-medium text-white",
                    ].join(" ")}
                  >
                    {role.role}
                  </h3>

                  <p className="mt-1 font-jetbrains-mono text-xs text-slate-500">{role.dates}</p>
                </div>

                <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-slate-300">
                  {role.summary}
                </p>

                <ul className="mt-5 max-w-[52ch] list-inside list-disc space-y-2 text-sm text-slate-400">
                  {role.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

