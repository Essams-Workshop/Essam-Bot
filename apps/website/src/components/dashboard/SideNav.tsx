"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const items = [
  { label: "overview", href: "/dashboard" },
  { label: "leaderboard", href: "/dashboard/leaderboard" },
  { label: "activity", href: "/dashboard/activity" },
  { label: "achievements", href: "/dashboard/achievements" }
];

export function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-56 shrink-0 border border-border bg-surface/70 p-3 md:block">
      <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-faint">[ nav ]</p>
      <nav className="space-y-2">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block border px-3 py-2 text-xs uppercase tracking-[0.14em] transition",
                active
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-muted hover:border-accent/60 hover:text-accent"
              )}
            >
              [{item.label}]
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
