type StatTileProps = {
  label: string;
  value: string;
  delta?: string;
};

export function StatTile({ label, value, delta }: StatTileProps) {
  return (
    <article className="border border-border bg-surface/70 p-4">
      <p className="text-[11px] uppercase tracking-[0.16em] text-faint">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-accent">{value}</p>
      {delta ? <p className="mt-2 text-xs text-muted">{delta}</p> : null}
    </article>
  );
}
