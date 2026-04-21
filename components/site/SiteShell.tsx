"use client";

import type { ReactNode } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileNav } from "@/components/site/MobileNav";
import { Sidebar } from "@/components/site/Sidebar";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground md:grid md:min-h-screen md:grid-cols-[max-content_minmax(0,1fr)]">
      <div className="hidden md:sticky md:top-0 md:z-40 md:flex md:h-svh md:max-h-screen md:w-max md:flex-shrink-0 md:self-start">
        <Sidebar />
      </div>

      <div className="flex min-h-screen flex-1 flex-col md:min-w-0">
        <MobileNav />
        <main className="flex-1 px-5 py-9 sm:px-7 sm:py-10 lg:px-12 lg:py-12">
          <div className="mx-auto w-full max-w-4xl">{children}</div>
        </main>
        <ThemeToggle />
      </div>
    </div>
  );
}
