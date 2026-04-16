import { PageHeader } from "@/components/site/PageHeader";
import { SITE } from "@/lib/site";
import { CONTACT, CONTACT_METADATA } from "@/content/contact";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title={CONTACT.title}
        intro={CONTACT.intro}
      />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <a
          href={SITE.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center rounded-full bg-primary-btn px-8 py-3 text-sm font-medium text-primary-btn-fg transition hover:bg-primary-btn-hover"
        >
          {CONTACT.ctas.linkedinLabel}
        </a>
        <a
          href={`mailto:${SITE.email}`}
          className="inline-flex justify-center rounded-full border-[0.5px] border-secondary-border px-8 py-3 text-sm font-normal text-muted transition hover:border-accent hover:text-foreground"
        >
          {CONTACT.ctas.emailLabel}
        </a>
      </div>
      <p className="text-sm text-muted">
        {CONTACT.note}
      </p>
    </div>
  );
}

export const metadata = CONTACT_METADATA;
