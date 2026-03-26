import Link from "next/link";
import { SITE } from "@/lib/site";
import { HOME } from "@/content/home";

export default function HomePage() {
  return (
    <div className="animate-fade-in flex min-h-[70vh] flex-col">
      <div className="flex-1 space-y-8">
        <section className="text-left">
          <div className="max-w-[34rem]">
            <p className="mb-4 text-[10.5px] font-jetbrains-mono font-normal uppercase tracking-[0.12em] text-[#C4896A]">
              Customer Success · Leadership · AI
            </p>
            <h1 className="font-space-grotesk text-5xl font-bold tracking-tight text-[#2A2320] sm:text-6xl md:text-[3.9rem] md:leading-[1.02]">
              Emeline
              <br />
              <em className="font-normal italic text-[#C4896A]">Le Guillou</em>
            </h1>

            <p className="mt-4 text-[13px] font-jetbrains-mono font-light leading-relaxed tracking-wide text-[#7A706A]">
              {HOME.heroSubtitle}
            </p>

            <p className="mt-4 max-w-[48ch] text-[14px] leading-relaxed text-[#4A4340]">
              {HOME.heroPositioning}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-start">
              <a
                href={SITE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#2A2320] px-7 py-2.5 text-sm font-medium text-[#FAF8F6] transition hover:bg-[#1f1a18]"
              >
                {HOME.ctas.linkedinLabel}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center justify-center rounded-full border-[0.5px] border-[#C4A898] px-7 py-2.5 text-sm font-normal text-[#7A706A] transition hover:border-[#C4896A] hover:text-[#2A2320]"
              >
                {HOME.ctas.emailLabel}
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="mt-12 border-t border-[0.5px] border-[#E2DDD8] pt-7">
            <h2 className="mb-4 text-[10px] font-jetbrains-mono font-normal uppercase tracking-[0.12em] text-[#B0A89E]">
              {HOME.exploreLabel}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-3">
              {HOME.featured.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative block h-full overflow-hidden rounded-lg border-[0.5px] border-[#E2DDD8] bg-[#FFFFFF] p-4 transition hover:border-[#C4896A]/70"
                  >
                    <span className="absolute left-0 right-0 top-0 h-0.5 bg-[#C4896A]/50" aria-hidden="true" />
                    <span className="font-space-grotesk text-[17px] font-bold text-[#2A2320]">
                      {item.title}
                    </span>
                    <p className="mt-2 text-[12px] leading-relaxed text-[#7A706A]">{item.blurb}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <footer className="mt-auto pt-10 font-jetbrains-mono text-[11px] text-[#B0A89E]">
        {HOME.footerText}
      </footer>
    </div>
  );
}
