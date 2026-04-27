import { faqs } from "@/lib/landingContent";

export function FAQ() {
  return (
    <section id="faq" className="container-shell pb-24 md:pb-32">
      <div className="mb-10 flex flex-col items-start gap-3 border-b border-border pb-6 md:mb-14">
        <p className="text-[11px] uppercase tracking-[0.32em] text-accent">[ faq ]</p>
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.01em] md:text-4xl">
          Frequently asked questions.
        </h2>
      </div>

      <div className="border border-border">
        {faqs.map((item, idx) => (
          <details
            key={item.question}
            className={`group bg-surface/60 px-5 py-5 transition-colors hover:bg-surface open:bg-surface md:px-7 md:py-6 ${
              idx > 0 ? "border-t border-border" : ""
            }`}
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-medium text-text md:text-lg">
              <span className="flex items-start gap-3">
                <span className="mt-1 text-[11px] tracking-[0.2em] text-accent">[?]</span>
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className="mt-1 text-accent transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-4 max-w-3xl pl-9 text-sm leading-relaxed text-muted md:text-base">
              <span className="text-accent">{"> "}</span>
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
