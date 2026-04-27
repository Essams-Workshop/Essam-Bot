import type { Achievement } from "@/lib/trackerTypes";

type AchievementCardProps = {
  item: Achievement;
};

export function AchievementCard({ item }: AchievementCardProps) {
  const pct = Math.min(100, Math.round((item.progress / item.target) * 100));
  return (
    <article className="border border-border bg-surface/70 p-4">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm text-text">{item.title}</h3>
        <span className={`text-[11px] uppercase tracking-[0.12em] ${item.unlockedAt ? "text-accent" : "text-faint"}`}>
          {item.unlockedAt ? "unlocked" : "locked"}
        </span>
      </div>
      <p className="mt-2 text-xs text-muted">{item.description}</p>
      <p className="mt-3 text-xs text-accent">
        [{`${"#".repeat(Math.round((pct / 100) * 10))}${".".repeat(10 - Math.round((pct / 100) * 10))}`}] {pct}%
      </p>
      <p className="mt-1 text-[11px] text-faint">
        {item.progress}/{item.target}
      </p>
    </article>
  );
}
