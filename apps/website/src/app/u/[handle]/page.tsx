import { ActivityHeatmap } from "@/components/dashboard/ActivityHeatmap";
import { ProgressBar } from "@/components/dashboard/ProgressBar";
import { RankBadge } from "@/components/dashboard/RankBadge";
import { SectionHeader } from "@/components/dashboard/SectionHeader";
import { StatTile } from "@/components/dashboard/StatTile";
import { getUserByHandle } from "@/lib/trackerMockData";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Params = {
  params: { handle: string };
};

function buildHeatmap(seed: number): number[] {
  return Array.from({ length: 182 }).map((_, index) => Math.max(1, ((seed + index * 7) % 23) + ((index % 4) * 3)));
}

export default async function PublicProfilePage({ params }: Params) {
  const user = getUserByHandle(params.handle);
  if (!user) notFound();

  return (
    <main className="container-shell py-8">
      <SectionHeader
        label="public_profile"
        title={`${user.displayName} (@${user.handle})`}
        subtitle="Read-only builder profile."
      />

      <section className="mb-6 border border-border bg-surface/70 p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted">github/{user.github}</p>
            <p className="mt-1 text-xs text-faint">joined {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
          <RankBadge tier={user.rankTier} rank={user.rankNumber} />
        </div>
        <div className="mt-4">
          <ProgressBar current={user.points} target={user.nextTierAt} label="progress_to_next_tier" />
        </div>
      </section>

      <section className="mb-6 grid gap-3 md:grid-cols-4">
        <StatTile label="total_points" value={user.stats.totalPoints.toLocaleString()} />
        <StatTile label="week_points" value={user.stats.weekPoints.toLocaleString()} />
        <StatTile label="streak_days" value={String(user.stats.streakDays)} />
        <StatTile label="global_rank" value={`#${user.stats.globalRank}`} />
      </section>

      <ActivityHeatmap values={buildHeatmap(user.points)} />
    </main>
  );
}
