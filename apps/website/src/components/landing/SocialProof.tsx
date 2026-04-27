import { trustedLogos } from "@/lib/landingContent";

export function SocialProof() {
  return (
    <section className="container-shell pb-20 md:pb-28">
      <div className="mx-auto flex flex-col items-center gap-6 border-y border-border py-10">
        <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-faint">
          <span className="inline-block h-px w-10 bg-border" />
          trusted_by_builders_at
          <span className="inline-block h-px w-10 bg-border" />
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 md:gap-x-14">
          {trustedLogos.map((logo) => (
            <span
              key={logo.name}
              className="text-sm uppercase tracking-[0.2em] text-muted/70 transition-colors hover:text-accent"
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
