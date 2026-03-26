type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <header className="mb-10 space-y-3">
      {eyebrow ? (
        <p className="text-[10.5px] font-jetbrains-mono font-normal uppercase tracking-[0.12em] text-[#C4896A]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-space-grotesk text-3xl font-bold tracking-tight text-[#2A2320] sm:text-4xl">
        {title}
      </h1>
      {intro ? (
        <p className="max-w-2xl text-[15px] leading-relaxed text-[#7A706A]">{intro}</p>
      ) : null}
    </header>
  );
}
