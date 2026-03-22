import type { ReactNode } from "react";

type ContentCardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function ContentCard({ title, children, className = "" }: ContentCardProps) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-white/[0.03] p-5 shadow-sm shadow-black/20 ${className}`}
    >
      {title ? (
        <h2 className="mb-3 font-space-grotesk text-lg font-medium text-white">{title}</h2>
      ) : null}
      <div className="text-sm leading-relaxed text-slate-400">{children}</div>
    </div>
  );
}
