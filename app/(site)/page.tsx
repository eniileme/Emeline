import Link from "next/link";
import { SITE } from "@/lib/site";
import { HOME } from "@/content/home";

export default function HomePage() {
  return (
    <div className="animate-fade-in flex min-h-[70vh] flex-col">
      <div className="flex-1 space-y-8">
        <section className="text-left">
          <div className="max-w-[34rem]">
            <p className="mb-4 text-[10.5px] font-jetbrains-mono font-normal uppercase tracking-[0.12em] text-accent">
              Customer Success · Leadership · AI
            </p>
            <h1 className="font-space-grotesk text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-[3.9rem] md:leading-[1.02]">
              Emeline
              <br />
              <em className="font-normal italic text-accent">Le Guillou</em>
            </h1>

            <p className="mt-4 text-[13px] font-jetbrains-mono font-light leading-relaxed tracking-wide text-muted">
              {HOME.heroSubtitle}
            </p>

            <p className="mt-4 max-w-[48ch] text-[14px] leading-relaxed text-foreground/85">
              {HOME.heroPositioning}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-start">
              <a
                href={SITE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary-btn px-7 py-2.5 text-sm font-medium text-primary-btn-fg transition hover:bg-primary-btn-hover"
              >
                {HOME.ctas.linkedinLabel}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center justify-center rounded-full border-[0.5px] border-secondary-border px-7 py-2.5 text-sm font-normal text-muted transition hover:border-accent hover:text-foreground"
              >
                {HOME.ctas.emailLabel}
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="mt-12 border-t border-[0.5px] border-border pt-7">
            <h2 className="mb-4 text-[10px] font-jetbrains-mono font-normal uppercase tracking-[0.12em] text-eyebrow">
              {HOME.exploreLabel}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-3">
              {HOME.featured.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative block h-full overflow-hidden rounded-lg border-[0.5px] border-border bg-card p-4 transition hover:border-accent/70"
                  >
                    <span className="absolute left-0 right-0 top-0 h-0.5 bg-accent/50" aria-hidden="true" />
                    <span className="font-space-grotesk text-[17px] font-bold text-foreground">
                      {item.title}
                    </span>
                    <p className="mt-2 text-[12px] leading-relaxed text-muted">{item.blurb}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <footer className="mt-auto pt-10 font-jetbrains-mono text-[11px] text-eyebrow">
        {HOME.footerText}
      </footer>
    </div>
  );
}
