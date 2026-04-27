import { Button } from "@/components/ui/Button";

export function ClosingCTA() {
  return (
    <section className="container-shell pb-24 md:pb-32">
      <div className="relative overflow-hidden border border-border bg-surface/80 px-6 py-16 text-center md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(53,231,255,0.18),transparent_60%)]"
        />
        <div className="relative flex flex-col items-center gap-6">
          <p className="text-[11px] uppercase tracking-[0.32em] text-accent">[ ready_player_one ]</p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
            Built with <span className="text-accent text-glow">essam bot</span>.
          </h2>
          <p className="max-w-xl text-sm text-muted md:text-base">
            We use essam bot every day. We think you&apos;ll like it as much as we do.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="/dashboard" variant="primary" size="lg">
              open_live_demo
              <span aria-hidden="true">-&gt;</span>
            </Button>
            <Button href="#faq" variant="secondary" size="lg">
              read_faq
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
