import { steps } from "@/lib/landingContent";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="container-shell pb-24 md:pb-32">
      <div className="mb-10 flex flex-col items-start gap-3 border-b border-border pb-6 md:mb-14">
        <p className="text-[11px] uppercase tracking-[0.32em] text-accent">[ how_it_works ]</p>
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.01em] md:text-4xl">
          Three steps and essam bot is running for you.
        </h2>
      </div>

      <ol className="grid gap-0 border border-border md:grid-cols-3">
        {steps.map((step, idx) => (
          <li
            key={step.number}
            className={`group relative flex flex-col gap-4 bg-surface/70 p-6 transition-colors hover:bg-surface md:p-8 ${
              idx === 0 ? "md:border-r md:border-border" : ""
            } ${idx === 1 ? "md:border-r md:border-border" : ""} ${
              idx > 0 ? "border-t border-border md:border-t-0" : ""
            }`}
          >
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-faint">
              <span className="text-accent">[{step.number.padStart(2, "0")}]</span>
              <span>step_{step.number}</span>
            </div>
            <h3 className="text-lg font-medium tracking-tight text-text md:text-xl">
              <span className="text-accent">{"> "}</span>
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted md:text-[15px]">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
