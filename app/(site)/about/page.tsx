import type { Metadata } from "next";
import { ContentCard } from "@/components/site/ContentCard";
import { PageHeader } from "@/components/site/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description: "About Emeline Le Guillou — placeholder.",
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="About"
        title="About"
        intro="Placeholder intro — replace with a short bio when ready."
      />
      <ContentCard title="Bio">
        <p>
          [Your background, focus areas, and what you care about professionally. Keep it concise; expand later.]
        </p>
      </ContentCard>
      <ContentCard title="Positioning">
        <p>[One secondary statement — e.g. how you think about CS, product, or building in public.]</p>
      </ContentCard>
      <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center text-sm text-slate-500">
        Photo / avatar area (optional)
      </div>
    </div>
  );
}
