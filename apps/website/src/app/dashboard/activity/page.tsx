import { EventRow } from "@/components/dashboard/EventRow";
import { SectionHeader } from "@/components/dashboard/SectionHeader";
import { fetchJson } from "@/lib/api";
import type { EventKind, PaginatedActivity, User } from "@/lib/trackerTypes";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams?: { type?: EventKind; cursor?: string };
};

const TYPES: EventKind[] = ["commit", "pr_opened", "pr_merged", "review", "issue", "manual"];

export default async function ActivityPage({ searchParams }: PageProps) {
  const type = searchParams?.type;
  const cursor = searchParams?.cursor;
  const me = await fetchJson<User>("/api/me");
  const params = new URLSearchParams();
  if (type) params.set("type", type);
  if (cursor) params.set("cursor", cursor);
  const query = params.toString();
  const activity = await fetchJson<PaginatedActivity>(`/api/users/${me.id}/activity${query ? `?${query}` : ""}`);

  return (
    <div>
      <SectionHeader label="activity" title="contribution log" subtitle="Commits, PR events, reviews, and manual logs." />

      <div className="mb-4 flex flex-wrap gap-2">
        {TYPES.map((kind) => (
          <a
            key={kind}
            href={`/dashboard/activity?type=${kind}`}
            className={`border px-3 py-2 text-xs uppercase tracking-[0.14em] ${
              kind === type ? "border-accent bg-accent/10 text-accent" : "border-border text-muted hover:text-accent"
            }`}
          >
            {kind}
          </a>
        ))}
      </div>

      <ul className="space-y-2">
        {activity.items.map((event) => (
          <EventRow key={event.id} event={event} />
        ))}
      </ul>

      {activity.nextCursor ? (
        <a
          href={`/dashboard/activity?${new URLSearchParams({
            ...(type ? { type } : {}),
            cursor: activity.nextCursor
          }).toString()}`}
          className="mt-4 inline-block border border-border px-3 py-2 text-xs uppercase tracking-[0.14em] text-muted hover:border-accent hover:text-accent"
        >
          load_more {"->"}
        </a>
      ) : null}
    </div>
  );
}
