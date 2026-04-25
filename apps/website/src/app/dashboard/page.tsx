import { ProfileCard } from "@/components/dashboard/ProfileCard";
import { ActivityBars } from "@/components/ui/ActivityBars";
import { Leaderboard } from "@/components/ui/Leaderboard";
import { Panel } from "@/components/ui/Panel";
import { SideNav } from "@/components/ui/SideNav";
import { StatCard } from "@/components/ui/StatCard";
import { TerminalPanel } from "@/components/ui/TerminalPanel";
import { mock } from "@/lib/mockData";

export default function DashboardPage() {
  return (
    <main className="container-shell py-8">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="mono text-sm tracking-[0.2em] text-accent">SYSTEM_ROOT V1.0.4</h1>
        <p className="mono inline-flex items-center gap-2 text-xs text-muted">
          <span className="live-dot" />
          STATUS: ONLINE
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-[80px_1fr]">
        <SideNav />

        <section className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <ProfileCard user={mock.user} />
          </div>
          <div className="lg:col-span-3">
            <StatCard title="THROUGHPUT" value={mock.stats.throughputGbs} suffix="GB/S" />
          </div>
          <div className="lg:col-span-3">
            <StatCard title="CORE_LOAD" value={mock.stats.coreLoadPct} suffix="%" />
          </div>

          <Panel title="UPLINK_ACTIVITY" className="lg:col-span-6">
            <ActivityBars values={mock.activity} />
          </Panel>
          <div className="lg:col-span-6">
            <Leaderboard entries={mock.leaderboard} />
          </div>

          <div className="lg:col-span-12">
            <TerminalPanel lines={mock.terminal} />
          </div>
        </section>
      </div>

      <nav className="panel panel-cut mt-6 grid grid-cols-4 rounded-md p-2 md:hidden">
        {["DASHBOARD", "METRICS", "HISTORY", "CONFIG"].map((item, idx) => (
          <span
            key={item}
            className={`mono rounded-sm px-2 py-2 text-center text-[10px] tracking-[0.1em] ${
              idx === 0 ? "bg-accent/15 text-accent" : "text-muted"
            }`}
          >
            {item}
          </span>
        ))}
      </nav>
    </main>
  );
}
