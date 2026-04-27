import { AchievementCard } from "@/components/dashboard/AchievementCard";
import { SectionHeader } from "@/components/dashboard/SectionHeader";
import { fetchJson } from "@/lib/api";
import type { Achievement, User } from "@/lib/trackerTypes";

export const dynamic = "force-dynamic";

export default async function AchievementsPage() {
  const me = await fetchJson<User>("/api/me");
  const achievements = await fetchJson<Achievement[]>(`/api/users/${me.id}/achievements`);
  const unlocked = achievements.filter((item) => item.unlockedAt).length;
  const sorted = achievements.slice().sort((a, b) => {
    const aScore = a.unlockedAt ? 2 : a.progress > 0 ? 1 : 0;
    const bScore = b.unlockedAt ? 2 : b.progress > 0 ? 1 : 0;
    return bScore - aScore;
  });

  return (
    <div>
      <SectionHeader
        label="achievements"
        title="badge progression"
        subtitle={`${unlocked} / ${achievements.length} unlocked`}
      />
      <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {sorted.map((item) => (
          <AchievementCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
