import { ContentCard } from "@/components/site/ContentCard";
import { PageHeader } from "@/components/site/PageHeader";
import { LEARNING, LEARNING_METADATA } from "@/content/learning";

export default function LearningPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title={LEARNING.title}
        intro={LEARNING.intro}
      />

      <section className="space-y-3">
        <h2 className="font-space-grotesk text-lg font-medium text-foreground">{LEARNING.currentFocus.heading}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {LEARNING.currentFocus.cards.map((card) => (
            <ContentCard key={card.title} title={card.title}>
              <p>{card.body}</p>
            </ContentCard>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-space-grotesk text-lg font-medium text-foreground">{LEARNING.notes.heading}</h2>
        <ContentCard>
          <p>{LEARNING.notes.body}</p>
        </ContentCard>
      </section>

      <section className="space-y-3">
        <h2 className="font-space-grotesk text-lg font-medium text-foreground">{LEARNING.builds.heading}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {LEARNING.builds.cards.map((card) => (
            <ContentCard key={card.title} title={card.title}>
              <p>{card.body}</p>
            </ContentCard>
          ))}
        </div>
      </section>
    </div>
  );
}

export const metadata = LEARNING_METADATA;
