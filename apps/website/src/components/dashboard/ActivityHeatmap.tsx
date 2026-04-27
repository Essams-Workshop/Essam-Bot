type ActivityHeatmapProps = {
  values: number[];
};

export function ActivityHeatmap({ values }: ActivityHeatmapProps) {
  const normalized = values.slice(0, 182);
  const max = Math.max(...normalized, 1);

  return (
    <div className="border border-border bg-surface/70 p-4">
      <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-faint">[ activity_heatmap_26w ]</p>
      <div className="grid gap-1" style={{ gridTemplateColumns: "repeat(26, minmax(0, 1fr))" }}>
        {normalized.map((value, index) => {
          const intensity = Math.max(0.08, value / max);
          return (
            <span
              key={`heat-${index}`}
              className="h-3 w-3 border border-accent/20"
              style={{ backgroundColor: `rgba(53,231,255,${(intensity * 0.8).toFixed(2)})` }}
              title={`day ${index + 1}: ${value}`}
            />
          );
        })}
      </div>
    </div>
  );
}
