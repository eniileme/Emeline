"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV, SITE } from "@/lib/site";

function navLinkClass(active: boolean) {
  return [
    "group flex items-center gap-2 rounded-md px-2 py-2 text-sm transition-colors",
    active ? "font-medium text-foreground" : "text-muted hover:text-foreground",
  ].join(" ");
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-full flex-col border-r border-[0.5px] border-border bg-background px-5 py-7">
      <div className="mb-8">
        <Link href="/" className="block font-space-grotesk text-lg font-bold tracking-tight text-foreground leading-tight">
          {SITE.name}
        </Link>
        <p className="mt-1 text-xs text-subtle">{SITE.tagline}</p>
      </div>

      <nav className="flex flex-1 flex-col gap-0.5" aria-label="Main">
        {MAIN_NAV.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link key={item.href} href={item.href} className={navLinkClass(active)}>
              <span className={active ? "text-foreground" : "text-muted group-hover:text-foreground"}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <footer className="mt-auto border-t border-[0.5px] border-border pt-4">
        <p className="mb-2 text-[10px] font-jetbrains-mono uppercase tracking-[0.12em] text-eyebrow">Connect</p>
        <div className="flex flex-col gap-1 text-sm">
          <a
            href={SITE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover"
          >
            LinkedIn
          </a>
          <a href={`mailto:${SITE.email}`} className="text-accent hover:text-accent-hover">
            Email
          </a>
        </div>
      </footer>
    </aside>
  );
}
