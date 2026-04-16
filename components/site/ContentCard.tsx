import type { ReactNode } from "react";

type ContentCardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function ContentCard({ title, children, className = "" }: ContentCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border-[0.5px] border-border bg-card p-5 ${className}`}
    >
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-accent/50" aria-hidden="true" />
      {title ? (
        <h2 className="mb-3 font-space-grotesk text-lg font-semibold text-foreground">{title}</h2>
      ) : null}
      <div className="text-sm leading-relaxed text-muted">{children}</div>
    </div>
  );
}
