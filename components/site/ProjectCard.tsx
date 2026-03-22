type ProjectCardProps = {
  title: string;
  description: string;
  status: string;
  href?: string;
};

export function ProjectCard({ title, description, status, href = "#" }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] shadow-sm shadow-black/20 transition-colors hover:border-pink-500/25">
      <div className="aspect-video bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-transparent" />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-space-grotesk text-base font-medium text-white">{title}</h3>
        <p className="text-sm text-slate-400">{description}</p>
        <span className="inline-flex w-fit rounded-full border border-white/10 px-2 py-0.5 text-xs text-pink-200/90">
          {status}
        </span>
        <a
          href={href}
          className="mt-auto pt-2 text-sm font-medium text-pink-300/90 underline-offset-4 hover:text-pink-200 hover:underline"
        >
          View project
        </a>
      </div>
    </article>
  );
}
