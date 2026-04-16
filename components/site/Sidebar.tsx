"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV, SITE } from "@/lib/site";

function NavIcon({ name }: { name: string }) {
  const common = "h-[18px] w-[18px]";
  switch (name) {
    case "/":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "/about":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7" />
        </svg>
      );
    case "/experience":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="16" x2="14" y2="16" />
        </svg>
      );
    case "/projects":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="4" width="7" height="7" rx="1" />
          <rect x="13" y="4" width="7" height="7" rx="1" />
          <rect x="4" y="13" width="7" height="7" rx="1" />
          <rect x="13" y="13" width="7" height="7" rx="1" />
        </svg>
      );
    case "/learning":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19V7a2 2 0 012-2h12a2 2 0 012 2v9" />
          <path d="M4 19h16" />
          <path d="M9 12h6" />
          <path d="M9 15.5h4" />
        </svg>
      );
    case "/now":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 7 12 12 15.5 12" />
        </svg>
      );
    case "/contact":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    default:
      return null;
  }
}

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
                <NavIcon name={item.href} />
              </span>
              <span className={active ? "text-foreground" : "text-muted"}>{item.label}</span>
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
