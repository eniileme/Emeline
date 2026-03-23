import { ContentCard } from "@/components/site/ContentCard";
import { PageHeader } from "@/components/site/PageHeader";
import { ABOUT, ABOUT_METADATA } from "@/content/about";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title={ABOUT.title}
        intro={ABOUT.intro}
      />
      <ContentCard title={ABOUT.cards.bio.title}>
        <p>
          {ABOUT.cards.bio.body}
        </p>
      </ContentCard>
      <ContentCard title={ABOUT.cards.positioning.title}>
        <p>{ABOUT.cards.positioning.body}</p>
      </ContentCard>
      <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center text-sm text-slate-500">
        {ABOUT.avatarPlaceholder}
      </div>
    </div>
  );
}

export const metadata = ABOUT_METADATA;
