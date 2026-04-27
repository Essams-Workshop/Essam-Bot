import { testimonials, type Testimonial } from "@/lib/landingContent";

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="group relative flex w-[320px] shrink-0 flex-col gap-5 border border-border bg-surface/80 p-6 transition-colors hover:border-accent md:w-[380px]">
      <span
        aria-hidden="true"
        className="absolute right-3 top-3 text-[10px] uppercase tracking-[0.18em] text-faint group-hover:text-accent"
      >
        :: log_entry
      </span>
      <p className="text-sm leading-relaxed text-text/90 md:text-[15px]">
        <span className="text-accent">{"> "}</span>
        {item.quote}
      </p>
      <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
        <span className="inline-flex h-9 w-9 items-center justify-center border border-border bg-surfaceSoft text-[11px] font-bold tracking-widest text-accent">
          {item.initials}
        </span>
        <div className="flex flex-col">
          <span className="text-sm text-text">{item.name}</span>
          <span className="text-[11px] uppercase tracking-[0.16em] text-faint">{item.role}</span>
        </div>
      </div>
    </article>
  );
}

export function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="pb-24 md:pb-32">
      <div className="container-shell mb-8 flex items-center justify-between gap-4">
        <p className="text-[11px] uppercase tracking-[0.32em] text-faint">[ field_reports ]</p>
        <p className="hidden text-[11px] uppercase tracking-[0.18em] text-faint md:block">
          stream_status: live
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent md:w-40"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent md:w-40"
          aria-hidden="true"
        />
        <div className="marquee-track flex w-max gap-4 px-4">
          {loop.map((item, idx) => (
            <TestimonialCard key={`${item.name}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
