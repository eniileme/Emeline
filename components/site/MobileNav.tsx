"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
      <div className="flex items-center justify-between border-b border-[0.5px] border-border bg-background px-4 py-3">
        <Link href="/" className="font-space-grotesk text-base font-bold text-foreground">
          {SITE.name}
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-[0.5px] border-secondary-border px-3 py-2 text-sm text-muted hover:text-foreground"
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
          className="absolute inset-0 bg-scrim"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        />
        <nav
          className="absolute right-0 top-0 flex h-full w-[min(100%,18rem)] flex-col border-l border-[0.5px] border-border bg-background p-4"
          aria-label="Main mobile"
        >
          <div className="mb-6 border-b border-[0.5px] border-border pb-4">
            <p className="font-space-grotesk text-lg font-bold text-foreground">{SITE.name}</p>
            <p className="text-xs text-subtle">{SITE.tagline}</p>
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
                    className={`flex items-center gap-2 rounded-md px-2 py-2.5 text-sm ${
                      active ? "font-medium text-foreground" : "text-muted hover:text-foreground"
                    }`}
                  >
                    <NavIcon name={item.href} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-auto border-t border-[0.5px] border-border pt-4 text-sm">
            <a href={SITE.linkedinUrl} className="block py-1 text-accent hover:text-accent-hover" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${SITE.email}`} className="block py-1 text-accent hover:text-accent-hover">
              Email
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
