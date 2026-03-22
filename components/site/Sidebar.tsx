"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV, SITE } from "@/lib/site";

function navLinkClass(active: boolean) {
  return [
    "block rounded-lg px-3 py-2 text-sm transition-colors",
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
