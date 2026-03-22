import type { Metadata } from "next";
import { ContentCard } from "@/components/site/ContentCard";
import { PageHeader } from "@/components/site/PageHeader";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm focused on — placeholder.",
};

export default function NowPage() {
  return (
    <div className="space-y-10">
      <PageHeader eyebrow="Now" title="Now" intro="A lightweight /now page — update the date when you refresh this." />
      <p className="text-sm font-jetbrains-mono text-slate-500">Last updated: [YYYY-MM-DD — edit me]</p>

      <div className="space-y-4">
        <ContentCard title="Currently focusing on">
          <p>[Placeholder — main priority or theme right now.]</p>
        </ContentCard>
        <ContentCard title="Currently building">
          <p>[Placeholder — what’s on the bench.]</p>
        </ContentCard>
        <ContentCard title="Currently learning">
          <p>[Placeholder — books, courses, or skills.]</p>
        </ContentCard>
      </div>
    </div>
  );
}
