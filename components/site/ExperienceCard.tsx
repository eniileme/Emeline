type ExperienceCardProps = {
  company: string;
  role: string;
  dates: string;
  summary: string;
  bullets: readonly string[];
};

export function ExperienceCard({ company, role, dates, summary, bullets }: ExperienceCardProps) {
  return (
    <article className="relative overflow-hidden rounded-xl border-[0.5px] border-[#E2DDD8] bg-[#FFFFFF] p-5">
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-[#C4896A]/50" aria-hidden="true" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-space-grotesk text-lg font-semibold text-[#2A2320]">{company}</h3>
        <span className="text-xs font-jetbrains-mono text-[#7A706A]">{dates}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-[#C4896A]">{role}</p>
      <p className="mt-3 text-sm leading-relaxed text-[#5F5651]">{summary}</p>
      <ul className="mt-4 list-inside list-disc space-y-1.5 text-sm text-[#7A706A]">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
