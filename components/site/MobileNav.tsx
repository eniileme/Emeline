"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between border-b border-white/10 bg-black/30 px-4 py-3 backdrop-blur-sm">
        <Link href="/" className="font-space-grotesk text-base font-semibold text-white">
          {SITE.name}
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-white/15 px-3 py-2 text-sm text-slate-200 hover:bg-white/5"
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
        >
          Menu
        </button>
      </div>

      <div
        id="mobile-nav-panel"
        className={`fixed inset-0 z-50 transition-[visibility,opacity] duration-200 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/60"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        />
        <nav
          className="absolute right-0 top-0 flex h-full w-[min(100%,18rem)] flex-col border-l border-white/10 bg-[#0c0c0c] p-4 shadow-xl"
          aria-label="Main mobile"
        >
          <div className="mb-6 border-b border-white/10 pb-4">
            <p className="font-space-grotesk text-lg font-semibold text-white">{SITE.name}</p>
            <p className="text-xs text-slate-500">{SITE.tagline}</p>
          </div>
          <ul className="flex flex-1 flex-col gap-1">
            {MAIN_NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm ${
                      active ? "bg-white/10 font-medium text-white" : "text-slate-400 hover:bg-white/5"
                    }`}
                  >
                    <NavIcon name={item.href} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-auto border-t border-white/10 pt-4 text-sm">
            <a href={SITE.linkedinUrl} className="block py-1 text-pink-300/90" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${SITE.email}`} className="block py-1 text-pink-300/90">
              Email
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
