"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MAIN_NAV, SITE } from "@/lib/site";

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
