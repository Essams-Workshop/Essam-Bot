import type { LeaderboardEntry } from "@/lib/types";
import { Panel } from "@/components/ui/Panel";

type LeaderboardProps = {
  entries: LeaderboardEntry[];
  title?: string;
};

export function Leaderboard({ entries, title = "TOP_NODES_REGISTRY" }: LeaderboardProps) {
  return (
    <Panel title={title}>
      <ul className="space-y-2">
        {entries.map((entry) => (
          <li
            key={entry.rank}
            className="mono flex items-center justify-between rounded-sm border border-accent/15 px-3 py-2 text-xs transition hover:border-accent/50 hover:bg-accent/5"
          >
            <span className="text-muted">
              {String(entry.rank).padStart(2, "0")} {entry.handle}
              {entry.you ? <em className="ml-2 rounded bg-accent/20 px-1.5 py-0.5 not-italic text-accent">YOU</em> : null}
            </span>
            <span className="text-accent">{entry.points.toLocaleString()} PTS</span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
