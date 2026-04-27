import type { RankTier } from "@/lib/trackerTypes";

type RankBadgeProps = {
  tier: RankTier;
  rank: number;
};

export function RankBadge({ tier, rank }: RankBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 border border-accent bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-accent">
      <span>{tier}</span>
      <span className="text-text">#{rank}</span>
    </div>
  );
}
