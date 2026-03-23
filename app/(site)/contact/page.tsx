import { PageHeader } from "@/components/site/PageHeader";
import { SITE } from "@/lib/site";
import { CONTACT, CONTACT_METADATA } from "@/content/contact";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow={CONTACT.eyebrow}
        title={CONTACT.title}
        intro={CONTACT.intro}
      />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <a
          href={SITE.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 text-sm font-medium text-white transition hover:from-pink-600 hover:to-purple-700"
        >
          {CONTACT.ctas.linkedinLabel}
        </a>
        <a
          href={`mailto:${SITE.email}`}
          className="inline-flex justify-center rounded-full border border-pink-300/30 px-8 py-3 text-sm font-medium text-pink-200 transition hover:border-pink-400 hover:bg-pink-500/10"
        >
          {CONTACT.ctas.emailLabel}
        </a>
      </div>
      <p className="text-sm text-slate-500">
        {CONTACT.note}
      </p>
    </div>
  );
}

export const metadata = CONTACT_METADATA;
