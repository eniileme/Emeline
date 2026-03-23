import Link from "next/link";
import { SITE } from "@/lib/site";
import { HOME } from "@/content/home";

export default function HomePage() {
  return (
    <div className="animate-fade-in space-y-10">
      <section className="text-center md:text-left">
        <h1 className="font-space-grotesk text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          {SITE.name}
        </h1>
        <p className="mt-4 text-lg text-pink-200/90 font-jetbrains-mono font-light tracking-wide sm:text-xl">
          {HOME.heroSubtitle}
        </p>
        <p className="mx-auto mt-4 max-w-lg text-sm text-slate-400 md:mx-0">{HOME.heroPositioning}</p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
          <a
            href={SITE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 text-sm font-medium text-white shadow-lg transition hover:from-pink-600 hover:to-purple-700"
          >
            {HOME.ctas.linkedinLabel}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center justify-center rounded-full border border-pink-300/30 px-8 py-3 text-sm font-medium text-pink-200 transition hover:border-pink-400 hover:bg-pink-500/10 hover:text-white"
          >
            {HOME.ctas.emailLabel}
          </a>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-jetbrains-mono text-xs font-light uppercase tracking-widest text-slate-500">
          {HOME.exploreLabel}
        </h2>
        <ul className="grid gap-3 sm:grid-cols-3">
          {HOME.featured.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block h-full rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-pink-500/30 hover:bg-white/[0.05]"
              >
                <span className="font-space-grotesk text-base font-medium text-white">{item.title}</span>
                <p className="mt-2 text-sm text-slate-400">{item.blurb}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="text-center text-xs text-slate-500 font-jetbrains-mono md:text-left">
        {HOME.footerText}
      </p>
    </div>
  );
}
