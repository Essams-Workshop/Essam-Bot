import { LeaderboardTable } from "@/components/dashboard/LeaderboardTable";
import { PeriodSwitcher } from "@/components/dashboard/PeriodSwitcher";
import { SectionHeader } from "@/components/dashboard/SectionHeader";
import { fetchJson } from "@/lib/api";
import type { LeaderboardEntry, Period, User } from "@/lib/trackerTypes";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams?: { period?: Period };
};

export default async function LeaderboardPage({ searchParams }: PageProps) {
  const period = searchParams?.period ?? "week";
  const me = await fetchJson<User>("/api/me");
  const leaderboard = await fetchJson<LeaderboardEntry[]>(`/api/leaderboard?period=${period}`);
  const topThree = leaderboard.slice(0, 3);
  const pinnedYou = leaderboard.find((entry) => entry.userId === me.id && entry.rank > 10) ?? null;

  return (
    <div>
      <SectionHeader
        label="leaderboard"
        title="top builders"
        subtitle="Points are earned from real coding contributions."
        rightSlot={<PeriodSwitcher />}
      />

      <section className="mb-6 grid gap-3 md:grid-cols-3">
        {topThree.map((entry) => (
          <article key={entry.userId} className="border border-border bg-surface/70 p-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-faint">rank #{String(entry.rank).padStart(2, "0")}</p>
            <p className="mt-2 text-lg text-text">{entry.displayName}</p>
            <p className="text-sm text-muted">@{entry.handle}</p>
            <p className="mt-2 text-accent">{entry.points.toLocaleString()} pts</p>
          </article>
        ))}
      </section>

      <LeaderboardTable entries={leaderboard} pinnedYou={pinnedYou} />
    </div>
  );
}
