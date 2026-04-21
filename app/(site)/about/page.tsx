import { ABOUT, ABOUT_METADATA } from "@/content/about";

const showCurrently = ABOUT.currently.body.trim().length > 0;

const bioLead = ABOUT.bioParagraphs[0] ?? "";
const bioRest = ABOUT.bioParagraphs.slice(1);

export default function AboutPage() {
  return (
    <article className="space-y-6">
      <header className="space-y-4 md:space-y-5">
        <h1 className="font-space-grotesk text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {ABOUT.title}
        </h1>

        <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-x-16">
          <p className="order-1 max-w-[640px] text-[15px] font-normal leading-relaxed text-foreground md:hidden">
            {ABOUT.intro}
          </p>

          <figure className="order-2 w-full max-w-full shrink-0 md:max-w-[380px] md:self-start">
            <img
              src="/emeline-headshot.png"
              alt="Portrait of Emeline Le Guillou"
              className="h-auto w-full max-w-full rounded-[14px]"
            />
          </figure>

          <div className="order-3 flex min-w-0 max-w-[640px] flex-col gap-4 md:order-1 md:flex-1">
            <p className="hidden text-[15px] font-normal leading-relaxed text-foreground md:block">{ABOUT.intro}</p>

            <p className="text-[15px] leading-relaxed text-muted">{bioLead}</p>

            {bioRest.map((paragraph, index) => (
              <p key={index} className="text-[15px] leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}

            <div className="mt-8 space-y-2">
              <h2 className="text-[10.5px] font-normal uppercase tracking-[0.12em] text-accent font-jetbrains-mono">
                {ABOUT.themes.heading}
              </h2>
              <p className="text-[15px] leading-relaxed text-muted">{ABOUT.themes.line}</p>
            </div>

            {showCurrently ? (
              <div className="mt-6 space-y-3 pt-1">
                <h2 className="text-[10.5px] font-normal uppercase tracking-[0.12em] text-accent font-jetbrains-mono">
                  {ABOUT.currently.heading}
                </h2>
                <p className="text-sm leading-relaxed text-muted">{ABOUT.currently.body}</p>
              </div>
            ) : null}
          </div>
        </div>
      </header>
    </article>
  );
}

export const metadata = ABOUT_METADATA;
