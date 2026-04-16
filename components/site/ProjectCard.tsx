type ProjectCardProps = {
  title: string;
  description: string;
  status: string;
  href?: string;
};

export function ProjectCard({ title, description, status, href = "#" }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border-[0.5px] border-border bg-card transition-colors hover:border-accent/70">
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-accent/50" aria-hidden="true" />
      <div className="aspect-video bg-surface-muted" />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-space-grotesk text-base font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted">{description}</p>
        <span className="inline-flex w-fit rounded-full border-[0.5px] border-border px-2 py-0.5 text-xs text-muted">
          {status}
        </span>
        <a
          href={href}
          className="mt-auto pt-2 text-sm font-medium text-accent underline-offset-4 hover:text-accent-hover hover:underline"
        >
          View project
        </a>
      </div>
    </article>
  );
}
