import type { LeaderboardEntry } from "@/lib/trackerTypes";

type LeaderboardTableProps = {
  entries: LeaderboardEntry[];
  pinnedYou?: LeaderboardEntry | null;
};

export function LeaderboardTable({ entries, pinnedYou }: LeaderboardTableProps) {
  return (
    <div className="border border-border bg-surface/70">
      <div className="grid grid-cols-[70px_1.2fr_1fr_80px_90px_110px] border-b border-border px-3 py-2 text-[11px] uppercase tracking-[0.15em] text-faint">
        <span>rank</span>
        <span>handle</span>
        <span>tier</span>
        <span>repos</span>
        <span>delta</span>
        <span>points</span>
      </div>
      {entries.map((entry) => (
        <div
          key={entry.userId}
          className="grid grid-cols-[70px_1.2fr_1fr_80px_90px_110px] border-b border-border px-3 py-3 text-sm last:border-b-0"
        >
          <span className="text-accent">#{String(entry.rank).padStart(2, "0")}</span>
          <span className="text-text">
            {entry.handle}
            {entry.you ? <em className="ml-2 not-italic text-accent">[you]</em> : null}
          </span>
          <span className="text-muted">{entry.tier}</span>
          <span className="text-muted">{entry.repos}</span>
          <span className="text-muted">+{entry.weekDelta}</span>
          <span className="text-accent">{entry.points.toLocaleString()}</span>
        </div>
      ))}
      {pinnedYou ? (
        <div className="border-t border-accent bg-accent/10 px-3 py-2 text-xs uppercase tracking-[0.14em] text-accent">
          your_position: #{pinnedYou.rank} {pinnedYou.handle} ({pinnedYou.points.toLocaleString()} pts)
        </div>
      ) : null}
    </div>
  );
}
