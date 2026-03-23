"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV, SITE } from "@/lib/site";

function NavIcon({ name }: { name: string }) {
  const common = "h-4 w-4";
  switch (name) {
    case "/":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5L12 3l9 7.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 9.75V21h14V9.75" />
        </svg>
      );
    case "/about":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 1 0-8 0a4 4 0 0 0 8 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 21a8 8 0 0 0-16 0" />
        </svg>
      );
    case "/experience":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6h4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9h12" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9V6.5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2V9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9" />
        </svg>
      );
    case "/projects":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 7.5A2 2 0 0 1 5.5 5.5h4l1.5 2h7a2 2 0 0 1 2 2v9A2 2 0 0 1 20.5 20.5h-15a2 2 0 0 1-2-2v-11Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" />
        </svg>
      );
    case "/learning":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 22V6.5A2.5 2.5 0 0 0 17.5 4H6.5A2.5 2.5 0 0 0 4 6.5V22" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h8" />
        </svg>
      );
    case "/now":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z" />
        </svg>
      );
    case "/contact":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8 6l8-6" />
        </svg>
      );
    default:
      return null;
  }
}

function navLinkClass(active: boolean) {
  return [
    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
    active
      ? "bg-white/10 font-medium text-white"
      : "text-slate-400 hover:bg-white/5 hover:text-slate-200",
  ].join(" ");
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-full flex-col border-r border-white/10 bg-black/20 px-4 py-6 backdrop-blur-sm">
      <div className="mb-8">
        <Link href="/" className="block font-space-grotesk text-lg font-semibold tracking-tight text-white">
          {SITE.name}
        </Link>
        <p className="mt-1 text-xs text-slate-500">{SITE.tagline}</p>
      </div>

      <nav className="flex flex-1 flex-col gap-0.5" aria-label="Main">
        {MAIN_NAV.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link key={item.href} href={item.href} className={navLinkClass(active)}>
              <NavIcon name={item.href} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <footer className="mt-auto border-t border-white/10 pt-4">
        <p className="mb-2 text-xs font-jetbrains-mono uppercase tracking-wider text-slate-500">Connect</p>
        <div className="flex flex-col gap-1 text-sm">
          <a
            href={SITE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-300/90 hover:text-pink-200"
          >
            LinkedIn
          </a>
          <a href={`mailto:${SITE.email}`} className="text-pink-300/90 hover:text-pink-200">
            Email
          </a>
        </div>
      </footer>
    </aside>
  );
}
