type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <header className="mb-10 space-y-3">
      {eyebrow ? (
        <p className="text-xs font-jetbrains-mono font-light uppercase tracking-widest text-pink-300/80">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-space-grotesk text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h1>
      {intro ? (
        <p className="max-w-2xl text-base leading-relaxed text-slate-400">{intro}</p>
      ) : null}
    </header>
  );
}
