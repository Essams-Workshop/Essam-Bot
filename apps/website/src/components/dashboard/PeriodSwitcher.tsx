"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Period } from "@/lib/trackerTypes";

const PERIODS: Period[] = ["week", "month", "season", "all"];

export function PeriodSwitcher() {
  const search = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const current = (search.get("period") as Period | null) ?? "week";

  return (
    <div className="flex border border-border">
      {PERIODS.map((period) => {
        const active = period === current;
        return (
          <button
            key={period}
            type="button"
            onClick={() => {
              const params = new URLSearchParams(search.toString());
              params.set("period", period);
              router.push(`${pathname}?${params.toString()}`);
            }}
            className={`border-r px-3 py-2 text-xs uppercase tracking-[0.14em] last:border-r-0 ${
              active ? "border-accent bg-accent/10 text-accent" : "border-border text-muted hover:text-accent"
            }`}
          >
            {period}
          </button>
        );
      })}
    </div>
  );
}
