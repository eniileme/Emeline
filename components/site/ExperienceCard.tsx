type ExperienceCardProps = {
  company: string;
  role: string;
  dates: string;
  summary: string;
  bullets: readonly string[];
};

export function ExperienceCard({ company, role, dates, summary, bullets }: ExperienceCardProps) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.03] p-5 shadow-sm shadow-black/20">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-space-grotesk text-lg font-medium text-white">{company}</h3>
        <span className="text-xs font-jetbrains-mono text-slate-500">{dates}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-pink-200/90">{role}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{summary}</p>
      <ul className="mt-4 list-inside list-disc space-y-1.5 text-sm text-slate-400">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
