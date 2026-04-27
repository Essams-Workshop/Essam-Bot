import type { ContributionEvent } from "@/lib/trackerTypes";

type EventRowProps = {
  event: ContributionEvent;
};

export function EventRow({ event }: EventRowProps) {
  const date = new Date(event.at);
  return (
    <li className="border border-border bg-surface/60 px-3 py-3">
      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] uppercase tracking-[0.12em] text-faint">
        <span>
          {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </span>
        <span className="border border-accent/30 px-2 py-0.5 text-accent">{event.kind}</span>
      </div>
      <p className="mt-2 text-sm text-text">
        <span className="text-accent">{"> "}</span>
        {event.title} in {event.repo}
      </p>
      <p className="mt-1 text-xs text-accent">+{event.points} pts</p>
    </li>
  );
}
