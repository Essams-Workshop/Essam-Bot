import { ActivityHeatmap } from "@/components/dashboard/ActivityHeatmap";
import { EventRow } from "@/components/dashboard/EventRow";
import { LeaderboardTable } from "@/components/dashboard/LeaderboardTable";
import { ProgressBar } from "@/components/dashboard/ProgressBar";
import { RankBadge } from "@/components/dashboard/RankBadge";
import { SectionHeader } from "@/components/dashboard/SectionHeader";
import { StatTile } from "@/components/dashboard/StatTile";
import { fetchJson } from "@/lib/api";
import type { LeaderboardEntry, PaginatedActivity, User } from "@/lib/trackerTypes";

export const dynamic = "force-dynamic";

function buildHeatmap(seed: number): number[] {
  return Array.from({ length: 182 }).map((_, index) => Math.max(1, ((seed + index * 7) % 23) + ((index % 5) * 2)));
}

export default async function DashboardPage() {
  const me = await fetchJson<User>("/api/me");
  const leaderboard = await fetchJson<LeaderboardEntry[]>("/api/leaderboard?period=week");
  const recentActivity = await fetchJson<PaginatedActivity>(`/api/users/${me.id}/activity`);
  const topFive = leaderboard.slice(0, 5);

  return (
    <div>
      <SectionHeader
        label="overview"
        title="builder command deck"
        subtitle="Track coding output, rank movement, and contribution momentum."
      />

      <section className="mb-6 border border-border bg-surface/70 p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-faint">operator</p>
            <p className="mt-1 text-xl font-semibold text-text">{me.displayName}</p>
            <p className="mt-1 text-sm text-muted">@{me.handle} · github/{me.github}</p>
          </div>
          <RankBadge tier={me.rankTier} rank={me.rankNumber} />
        </div>
        <div className="mt-4">
          <ProgressBar current={me.points} target={me.nextTierAt} label="progress_to_next_tier" />
        </div>
      </section>

      <section className="mb-6 grid gap-3 md:grid-cols-4">
        <StatTile label="total_points" value={me.stats.totalPoints.toLocaleString()} />
        <StatTile label="week_points" value={me.stats.weekPoints.toLocaleString()} delta="+8.3% vs last week" />
        <StatTile label="streak_days" value={String(me.stats.streakDays)} />
        <StatTile label="global_rank" value={`#${me.stats.globalRank}`} />
      </section>

      <section className="mb-6">
        <ActivityHeatmap values={buildHeatmap(me.points)} />
      </section>

      <section className="mb-6 grid gap-4 lg:grid-cols-2">
        <article className="border border-border bg-surface/70 p-4">
          <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-faint">[ language_breakdown ]</p>
          <ul className="space-y-2">
            {me.languageStats.map((item) => (
              <li key={item.language}>
                <div className="mb-1 flex items-center justify-between text-xs text-muted">
                  <span>{item.language}</span>
                  <span>{item.sharePct}%</span>
                </div>
                <div className="h-2 border border-border">
                  <div className="h-full bg-accent/70" style={{ width: `${item.sharePct}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article>
          <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-faint">[ top_5_preview ]</p>
          <LeaderboardTable entries={topFive} />
        </article>
      </section>

      <section>
        <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-faint">[ recent_activity ]</p>
        <ul className="space-y-2">
          {recentActivity.items.slice(0, 6).map((event) => (
            <EventRow key={event.id} event={event} />
          ))}
        </ul>
      </section>
    </div>
  );
}
