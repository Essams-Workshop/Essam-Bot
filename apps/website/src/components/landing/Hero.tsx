import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="container-shell relative pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="flex flex-col items-center text-center">
        <Link
          href="#how-it-works"
          className="inline-flex items-center gap-2 border border-border bg-surface/60 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <span className="inline-flex h-1.5 w-1.5 bg-accent shadow-[0_0_8px_rgba(53,231,255,0.7)]" />
          new : essam_bot v0.1
          <span aria-hidden="true">-&gt;</span>
        </Link>

        <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-text md:text-6xl">
          Your personal automation
          <br />
          <span className="text-glow text-accent"> bot</span>
        </h1>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          <span className="text-accent">{"> "}</span>
          essam bot listens, responds, and keeps your workflows moving. one dashboard, zero noise, no surprises.
          <span className="terminal-caret" aria-hidden="true" />
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href="/dashboard" variant="primary" size="lg">
            open_live_demo
            <span aria-hidden="true">-&gt;</span>
          </Button>
          <Button href="#how-it-works" variant="secondary" size="lg">
            learn_how_it_works
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-faint">
          <span className="inline-flex items-center gap-2">
            <span className="live-dot" /> system_online
          </span>
          <span>uptime 99.9%</span>
          <span>build_hash 01af4c9</span>
        </div>
      </div>
    </section>
  );
}
