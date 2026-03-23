import Link from "next/link";
import { SITE } from "@/lib/site";
import { HOME } from "@/content/home";

export default function HomePage() {
  return (
    <div className="animate-fade-in flex min-h-[70vh] flex-col">
      <div className="flex-1 space-y-8">
        <section className="text-center md:text-left">
          <div className="mx-auto max-w-2xl md:mx-0">
            <h1 className="font-space-grotesk text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              {SITE.name}
            </h1>

            {/* Short positioning line (lighter + less dominant than before). */}
            <p className="mt-3 text-sm text-pink-200/80 sm:text-base font-jetbrains-mono font-light tracking-wide leading-relaxed">
              {HOME.heroSubtitle}
            </p>

            <p className="mx-auto mt-4 max-w-[46ch] text-sm text-slate-400 md:mx-0 md:text-left">
              {HOME.heroPositioning}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-start">
              <a
                href={SITE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-pink-400/30 bg-gradient-to-r from-pink-500/20 to-purple-600/20 px-7 py-2.5 text-sm font-medium text-white transition hover:border-pink-400/40 hover:from-pink-500/30 hover:to-purple-600/30"
              >
                {HOME.ctas.linkedinLabel}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-2.5 text-sm font-medium text-pink-100/90 transition hover:border-pink-400/30 hover:bg-white/[0.03] hover:text-white"
              >
                {HOME.ctas.emailLabel}
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="mt-8 border-t border-white/10 pt-8">
            <h2 className="mb-4 font-jetbrains-mono text-xs font-light uppercase tracking-widest text-slate-500">
              {HOME.exploreLabel}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-3">
              {HOME.featured.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block h-full rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-pink-400/25 hover:bg-white/[0.04]"
                  >
                    <span className="font-space-grotesk text-base font-medium text-white">
                      {item.title}
                    </span>
                    <p className="mt-2 text-sm text-slate-400">{item.blurb}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <footer className="mt-auto pt-10 text-xs text-slate-500/70 font-jetbrains-mono">
        {HOME.footerText}
      </footer>
    </div>
  );
}
