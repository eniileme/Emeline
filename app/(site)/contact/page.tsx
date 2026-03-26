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
          className="inline-flex justify-center rounded-full bg-[#2A2320] px-8 py-3 text-sm font-medium text-[#FAF8F6] transition hover:bg-[#1f1a18]"
        >
          {CONTACT.ctas.linkedinLabel}
        </a>
        <a
          href={`mailto:${SITE.email}`}
          className="inline-flex justify-center rounded-full border-[0.5px] border-[#C4A898] px-8 py-3 text-sm font-normal text-[#7A706A] transition hover:border-[#C4896A] hover:text-[#2A2320]"
        >
          {CONTACT.ctas.emailLabel}
        </a>
      </div>
      <p className="text-sm text-[#7A706A]">
        {CONTACT.note}
      </p>
    </div>
  );
}

export const metadata = CONTACT_METADATA;
