import type { Metadata } from "next";
import { ContentCard } from "@/components/site/ContentCard";
import { PageHeader } from "@/components/site/PageHeader";

export const metadata: Metadata = {
  title: "Learning",
  description: "Learning hub — placeholder.",
};

export default function LearningPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Learning"
        title="Learning"
        intro="A light learning hub — courses, notes, and side projects tied to what you’re studying."
      />

      <section className="space-y-3">
        <h2 className="font-space-grotesk text-lg font-medium text-white">Current focus</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <ContentCard title="Course / topic A">
            <p>[Placeholder — e.g. course name or theme you’re working through.]</p>
          </ContentCard>
          <ContentCard title="Course / topic B">
            <p>[Placeholder — second thread if needed.]</p>
          </ContentCard>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-space-grotesk text-lg font-medium text-white">Notes & takeaways</h2>
        <ContentCard>
          <p>[Placeholder — short bullets or links to notes later. Keep it informal.]</p>
        </ContentCard>
      </section>

      <section className="space-y-3">
        <h2 className="font-space-grotesk text-lg font-medium text-white">Learning-related builds</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <ContentCard title="Build 1">
            <p>[Small project tied to something you learned — placeholder.]</p>
          </ContentCard>
          <ContentCard title="Build 2">
            <p>[Another optional card.]</p>
          </ContentCard>
        </div>
      </section>
    </div>
  );
}
