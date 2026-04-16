import { ContentCard } from "@/components/site/ContentCard";
import { PageHeader } from "@/components/site/PageHeader";
import { NOW, NOW_METADATA } from "@/content/now";

export default function NowPage() {
  return (
    <div className="space-y-8">
      <PageHeader title={NOW.title} intro={NOW.intro} />
      <p className="text-sm font-jetbrains-mono text-muted">{NOW.lastUpdatedLine}</p>

      <div className="space-y-4">
        <ContentCard title={NOW.cards[0].title}>
          <p>{NOW.cards[0].body}</p>
        </ContentCard>
        <ContentCard title={NOW.cards[1].title}>
          <p>{NOW.cards[1].body}</p>
        </ContentCard>
        <ContentCard title={NOW.cards[2].title}>
          <p>{NOW.cards[2].body}</p>
        </ContentCard>
      </div>
    </div>
  );
}

export const metadata = NOW_METADATA;
