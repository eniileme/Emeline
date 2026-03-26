type ProjectCardProps = {
  title: string;
  description: string;
  status: string;
  href?: string;
};

export function ProjectCard({ title, description, status, href = "#" }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border-[0.5px] border-[#E2DDD8] bg-[#FFFFFF] transition-colors hover:border-[#C4896A]/70">
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-[#C4896A]/50" aria-hidden="true" />
      <div className="aspect-video bg-[#FAF8F6]" />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-space-grotesk text-base font-semibold text-[#2A2320]">{title}</h3>
        <p className="text-sm text-[#7A706A]">{description}</p>
        <span className="inline-flex w-fit rounded-full border-[0.5px] border-[#E2DDD8] px-2 py-0.5 text-xs text-[#7A706A]">
          {status}
        </span>
        <a
          href={href}
          className="mt-auto pt-2 text-sm font-medium text-[#C4896A] underline-offset-4 hover:underline"
        >
          View project
        </a>
      </div>
    </article>
  );
}
