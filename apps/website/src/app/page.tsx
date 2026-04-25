import { EmailCapture } from "@/components/landing/EmailCapture";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { Hero } from "@/components/landing/Hero";
import { Panel } from "@/components/ui/Panel";
import { TopNav } from "@/components/ui/TopNav";
import { mock } from "@/lib/mockData";

export default function HomePage() {
  return (
    <main className="pb-10">
      <TopNav />
      <Hero status={mock.cohort.status} />

      <section className="container-shell grid gap-4 pb-4 md:grid-cols-[2fr_1fr]">
        <Panel title="VISION_STATEMENT">
          <div className="flex items-start justify-between gap-3">
            <p className="max-w-2xl text-sm leading-relaxed text-text/95">
              In the age of infinite noise, we return to the source. Builder Cohort #1 is designed to filter the architects from
              the audience. We track every commit, every pull request, and every deployment in high-fidelity. No fluff, no
              meetings, just pure mechanical output.
            </p>
            <span className="mono text-4xl text-accent/40">01</span>
          </div>
          <p className="mono mt-5 text-xs tracking-[0.15em] text-accent/75">SYSTEM_PROTOCOL_ENABLED</p>
        </Panel>

        <Panel title="CORE_METRIC" className="bg-accent text-bg">
          <p className="mono text-6xl font-semibold">{mock.cohort.uptime.toFixed(1)}%</p>
          <p className="mono mt-2 text-xs tracking-[0.14em] text-bg/70">UPTIME_EFFICIENCY_MEASURE</p>
        </Panel>
      </section>

      <FeatureGrid features={mock.features} activity={mock.activity} leaderboard={mock.leaderboard} terminal={mock.terminal} />
      <EmailCapture seats={mock.cohort.seats} claimed={mock.cohort.claimed} />

      <footer className="container-shell pb-8">
        <div className="mono flex flex-wrap items-center justify-between gap-3 border-t border-accent/20 pt-4 text-[10px] tracking-[0.14em] text-muted">
          <span>NODE_SIGNAL_OPERATIONAL</span>
          <span>BUILD_HASH: 01AF4C9</span>
          <span className="inline-flex items-center gap-2">
            <i className="live-dot" /> SYSTEM_ONLINE
          </span>
        </div>
      </footer>
    </main>
  );
}
