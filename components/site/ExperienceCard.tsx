type ExperienceCardProps = {
  company: string;
  role: string;
  dates: string;
  summary: string;
  bullets: readonly string[];
};

export function ExperienceCard({ company, role, dates, summary, bullets }: ExperienceCardProps) {
  return (
    <article className="relative overflow-hidden rounded-xl border-[0.5px] border-border bg-card p-5">
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-accent/50" aria-hidden="true" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-space-grotesk text-lg font-semibold text-foreground">{company}</h3>
        <span className="text-xs font-jetbrains-mono text-muted">{dates}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-accent">{role}</p>
      <p className="mt-3 text-sm leading-relaxed text-summary">{summary}</p>
      <ul className="mt-4 list-inside list-disc space-y-1.5 text-sm text-muted">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
