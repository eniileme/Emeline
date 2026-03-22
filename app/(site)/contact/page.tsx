import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — placeholder.",
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Contact"
        title="Contact"
        intro="Short CTA placeholder — say how you prefer to be reached."
      />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <a
          href={SITE.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 text-sm font-medium text-white transition hover:from-pink-600 hover:to-purple-700"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${SITE.email}`}
          className="inline-flex justify-center rounded-full border border-pink-300/30 px-8 py-3 text-sm font-medium text-pink-200 transition hover:border-pink-400 hover:bg-pink-500/10"
        >
          Email
        </a>
      </div>
      <p className="text-sm text-slate-500">
        [Optional note — e.g. response time, types of messages you welcome.]
      </p>
    </div>
  );
}
