type ProgressBarProps = {
  current: number;
  target: number;
  label: string;
};

export function ProgressBar({ current, target, label }: ProgressBarProps) {
  const pct = target <= 0 ? 0 : Math.min(100, Math.round((current / target) * 100));
  const blocks = 20;
  const filled = Math.round((pct / 100) * blocks);
  const bar = `[${"#".repeat(filled)}${".".repeat(blocks - filled)}]`;

  return (
    <div className="border border-border bg-surface/70 px-3 py-2">
      <p className="text-[11px] uppercase tracking-[0.14em] text-faint">{label}</p>
      <p className="mt-1 text-xs text-accent">
        {bar} {pct}%
      </p>
    </div>
  );
}
