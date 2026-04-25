import { Button } from "@/components/ui/Button";

const items = ["TERMINAL", "RANKINGS", "DRIVERS", "INTEGRATION"];

export function TopNav() {
  return (
    <header className="container-shell pt-6">
      <div className="panel panel-cut flex items-center justify-between rounded-md px-4 py-3">
        <span className="mono text-xs tracking-[0.18em] text-accent">BUILDER_COHORT_#1</span>
        <nav className="hidden gap-6 md:flex">
          {items.map((item) => (
            <a key={item} href="#" className="mono text-[11px] tracking-[0.16em] text-muted transition hover:text-accent">
              {item}
            </a>
          ))}
        </nav>
        <Button href="/dashboard" className="px-3 py-1.5 text-[10px]">
          INITIALIZE_SESSION
        </Button>
      </div>
    </header>
  );
}
