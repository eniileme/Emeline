"use client";

import type { ReactNode } from "react";
import { MobileNav } from "@/components/site/MobileNav";
import { Sidebar } from "@/components/site/Sidebar";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF8F6] md:flex-row">
      <div className="hidden md:fixed md:inset-y-0 md:left-0 md:z-40 md:flex md:w-56 md:flex-shrink-0 lg:w-60">
        <Sidebar />
      </div>

      <div className="flex min-h-screen flex-1 flex-col md:pl-56 lg:pl-60">
        <MobileNav />
        <main className="flex-1 px-5 py-9 sm:px-7 sm:py-10 lg:px-12 lg:py-12">
          <div className="mx-auto w-full max-w-4xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
