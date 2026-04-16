type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <header className="mb-10 space-y-3">
      {eyebrow ? (
        <p className="text-[10.5px] font-jetbrains-mono font-normal uppercase tracking-[0.12em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-space-grotesk text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      {intro ? (
        <p className="max-w-2xl text-[15px] leading-relaxed text-muted">{intro}</p>
      ) : null}
    </header>
  );
}
