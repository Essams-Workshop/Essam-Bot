import type { FeatureInfo, LeaderboardEntry, TerminalLine } from "@/lib/types";
import { ActivityBars } from "@/components/ui/ActivityBars";
import { Leaderboard } from "@/components/ui/Leaderboard";
import { Panel } from "@/components/ui/Panel";
import { TerminalPanel } from "@/components/ui/TerminalPanel";

type FeatureGridProps = {
  features: FeatureInfo[];
  activity: number[];
  leaderboard: LeaderboardEntry[];
  terminal: TerminalLine[];
};

export function FeatureGrid({ features, activity, leaderboard, terminal }: FeatureGridProps) {
  return (
    <section className="container-shell grid gap-4 pb-12 md:grid-cols-3">
      <Panel title={features[0]?.title}>
        <p className="mb-4 text-sm text-muted">{features[0]?.description}</p>
        <ActivityBars values={activity.slice(0, 8)} className="h-20" />
      </Panel>

      <div>
        <Leaderboard title={features[1]?.title} entries={leaderboard.slice(0, 3)} />
        <p className="mt-3 text-sm text-muted">{features[1]?.description}</p>
      </div>

      <div>
        <TerminalPanel title={features[2]?.title} lines={terminal.slice(0, 3)} compact />
        <p className="mt-3 text-sm text-muted">{features[2]?.description}</p>
      </div>
    </section>
  );
}
