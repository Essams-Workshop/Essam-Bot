type SectionHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
  rightSlot?: React.ReactNode;
};

export function SectionHeader({ label, title, subtitle, rightSlot }: SectionHeaderProps) {
  return (
    <header className="mb-6 flex flex-col gap-3 border-b border-border pb-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-[11px] uppercase tracking-[0.2em] text-accent">[{label}]</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-text md:text-3xl">{title}</h1>
        {subtitle ? <p className="mt-2 text-sm text-muted">{subtitle}</p> : null}
      </div>
      {rightSlot ? <div>{rightSlot}</div> : null}
    </header>
  );
}
