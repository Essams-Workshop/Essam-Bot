const navItems = ["DASHBOARD", "METRICS", "HISTORY", "CONFIG"];

export function SideNav() {
  return (
    <aside className="panel panel-cut hidden h-full min-h-[620px] w-20 rounded-md px-2 py-4 md:block">
      <div className="flex h-full flex-col items-center justify-between">
        <div className="space-y-3">
          {navItems.map((item, index) => (
            <button
              key={item}
              className={`mono w-full rounded-sm border px-2 py-2 text-[10px] tracking-[0.12em] ${
                index === 0
                  ? "border-accent/70 bg-accent/15 text-accent"
                  : "border-transparent text-muted hover:border-accent/35 hover:text-accent"
              }`}
            >
              {item.slice(0, 1)}
            </button>
          ))}
        </div>
        <span className="mono text-[9px] tracking-[0.2em] text-muted">CORE</span>
      </div>
    </aside>
  );
}
