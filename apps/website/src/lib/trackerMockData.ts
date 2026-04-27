import type {
  Achievement,
  ContributionEvent,
  EventKind,
  GlobalStats,
  LeaderboardEntry,
  PaginatedActivity,
  Period,
  RankTier,
  User
} from "@/lib/trackerTypes";

const TIERS: Array<{ tier: RankTier; min: number }> = [
  { tier: "apprentice", min: 0 },
  { tier: "builder", min: 2000 },
  { tier: "architect", min: 6000 },
  { tier: "operator", min: 11000 },
  { tier: "oracle", min: 18000 }
];

const REPOS = ["essam-bot/api", "essam-bot/bot", "essam-bot/website", "community/docs", "tools/cli", "infra/terraform"];
const LANGS = ["TypeScript", "Python", "Rust", "Go", "SQL", "Shell"];
const KINDS: EventKind[] = ["commit", "pr_opened", "pr_merged", "review", "issue", "manual"];

const USERS: User[] = Array.from({ length: 30 }).map((_, idx) => {
  const n = idx + 1;
  const points = 24000 - idx * 610;
  const tier = TIERS.slice().reverse().find((t) => points >= t.min)?.tier ?? "apprentice";
  const nextTierAt = TIERS.find((t) => t.min > points)?.min ?? points;
  const weekPoints = 550 - idx * 11;
  const commits = 110 - idx;
  const prsMerged = 38 - Math.floor(idx / 2);
  const reviews = 55 - idx;

  const languageStats = LANGS.map((language, langIdx) => {
    const raw = Math.max(8, 100 - langIdx * 15 - idx);
    return { language, raw };
  });
  const totalRaw = languageStats.reduce((acc, item) => acc + item.raw, 0);

  return {
    id: `u-${n}`,
    discordId: `10000000000000${String(n).padStart(2, "0")}`,
    handle: n === 1 ? "essam" : `builder_${String(n).padStart(2, "0")}`,
    displayName: n === 1 ? "Essam Khawaja" : `Builder ${String(n).padStart(2, "0")}`,
    avatarSeed: `A${n}`,
    github: n === 1 ? "syedessamuddinkhawaja" : `builder${String(n).padStart(2, "0")}`,
    rankTier: tier,
    rankNumber: n,
    points,
    nextTierAt,
    createdAt: new Date(2025, 8, ((n * 3) % 28) + 1).toISOString(),
    stats: {
      totalPoints: points,
      weekPoints,
      streakDays: Math.max(3, 44 - idx),
      globalRank: n,
      commits,
      prsMerged,
      reviews
    },
    languageStats: languageStats.map((item) => ({
      language: item.language,
      points: Math.round((item.raw / totalRaw) * points),
      sharePct: Math.round((item.raw / totalRaw) * 100)
    })),
    repos: REPOS.slice(0, 2 + (n % 4))
  };
});

const EVENTS: ContributionEvent[] = Array.from({ length: 220 }).map((_, idx) => {
  const user = USERS[idx % USERS.length];
  const kind = KINDS[idx % KINDS.length];
  const pointsMap: Record<EventKind, number> = {
    commit: 10,
    pr_opened: 20,
    pr_merged: 35,
    review: 15,
    issue: 8,
    manual: 12
  };

  return {
    id: `ev-${idx + 1}`,
    userId: user.id,
    repo: user.repos[idx % user.repos.length],
    kind,
    title:
      kind === "commit"
        ? `Pushed ${((idx % 4) + 1).toString()} commits`
        : kind === "pr_opened"
          ? "Opened pull request"
          : kind === "pr_merged"
            ? "Merged pull request"
            : kind === "review"
              ? "Completed code review"
              : kind === "issue"
                ? "Closed issue"
                : "Manual contribution logged",
    points: pointsMap[kind] + (idx % 5),
    at: new Date(Date.now() - idx * 1000 * 60 * 70).toISOString()
  };
});

const ACHIEVEMENT_TEMPLATE: Array<{ key: string; title: string; description: string; target: number }> = [
  { key: "first_pr", title: "First PR", description: "Open your first pull request.", target: 1 },
  { key: "commit_100", title: "100 Commits", description: "Ship one hundred commits.", target: 100 },
  { key: "merge_25", title: "25 Merged PRs", description: "Merge twenty-five pull requests.", target: 25 },
  { key: "streak_30", title: "30 Day Streak", description: "Code for thirty straight days.", target: 30 },
  { key: "review_50", title: "Code Reviewer", description: "Complete fifty reviews.", target: 50 },
  { key: "polyglot_4", title: "Polyglot", description: "Contribute in four languages.", target: 4 },
  { key: "issue_40", title: "Issue Hunter", description: "Close forty issues.", target: 40 },
  { key: "points_5k", title: "5K Points", description: "Reach 5,000 points.", target: 5000 },
  { key: "points_10k", title: "10K Points", description: "Reach 10,000 points.", target: 10000 },
  { key: "operator_tier", title: "Operator Tier", description: "Reach operator rank tier.", target: 1 },
  { key: "night_shift", title: "Night Shift", description: "Log 30 events after midnight.", target: 30 },
  { key: "mentor", title: "Mentor", description: "Complete 100 review comments.", target: 100 }
];

function buildAchievements(user: User): Achievement[] {
  return ACHIEVEMENT_TEMPLATE.map((template, idx) => {
    const progress =
      template.key === "first_pr"
        ? Math.min(1, user.stats.prsMerged)
        : template.key === "commit_100"
          ? user.stats.commits
          : template.key === "merge_25"
            ? user.stats.prsMerged
            : template.key === "streak_30"
              ? user.stats.streakDays
              : template.key === "review_50"
                ? user.stats.reviews
                : template.key === "polyglot_4"
                  ? user.languageStats.filter((l) => l.points > 400).length
                  : template.key === "issue_40"
                    ? Math.round(user.stats.commits * 0.35)
                    : template.key === "points_5k"
                      ? user.points
                      : template.key === "points_10k"
                        ? user.points
                        : template.key === "operator_tier"
                          ? ["operator", "oracle"].includes(user.rankTier)
                            ? 1
                            : 0
                          : template.key === "night_shift"
                            ? Math.round(user.stats.commits * 0.3)
                            : Math.round(user.stats.reviews * 1.8);

    return {
      id: `${user.id}-${template.key}`,
      key: template.key,
      title: template.title,
      description: template.description,
      target: template.target,
      progress: Math.min(progress, template.target),
      unlockedAt: progress >= template.target ? new Date(Date.now() - idx * 86_400_000 * 3).toISOString() : null
    };
  });
}

function periodFactor(period: Period): number {
  if (period === "week") return 0.08;
  if (period === "month") return 0.25;
  if (period === "season") return 0.6;
  return 1;
}

export function getCurrentUser(): User {
  return USERS[0];
}

export function getUserById(id: string): User | null {
  return USERS.find((user) => user.id === id) ?? null;
}

export function getUserByHandle(handle: string): User | null {
  return USERS.find((user) => user.handle.toLowerCase() === handle.toLowerCase()) ?? null;
}

export function getGlobalStats(): GlobalStats {
  return {
    activeBuilders: USERS.length,
    totalCommits: USERS.reduce((acc, user) => acc + user.stats.commits, 0),
    mergedPrs: USERS.reduce((acc, user) => acc + user.stats.prsMerged, 0),
    activeStreaks: USERS.filter((user) => user.stats.streakDays >= 7).length
  };
}

export function getLeaderboard(period: Period, viewerId?: string): LeaderboardEntry[] {
  const factor = periodFactor(period);
  return USERS.map((user) => ({
    userId: user.id,
    rank: 0,
    handle: user.handle,
    displayName: user.displayName,
    tier: user.rankTier,
    points: Math.max(120, Math.round(user.points * factor)),
    weekDelta: Math.max(3, Math.round(user.stats.weekPoints * (0.2 + factor))),
    repos: user.repos.length,
    you: viewerId === user.id
  }))
    .sort((a, b) => b.points - a.points)
    .map((entry, index) => ({ ...entry, rank: index + 1 }));
}

export function getUserActivity(userId: string, cursor: string | null, kind?: EventKind): PaginatedActivity {
  const pageSize = 20;
  const filtered = EVENTS.filter((event) => event.userId === userId && (!kind || event.kind === kind)).sort(
    (a, b) => new Date(b.at).getTime() - new Date(a.at).getTime()
  );
  const start = cursor ? Number(cursor) : 0;
  const items = filtered.slice(start, start + pageSize);
  const nextCursor = start + pageSize < filtered.length ? String(start + pageSize) : null;
  return { items, nextCursor };
}

export function getUserAchievements(userId: string): Achievement[] {
  const user = getUserById(userId);
  return user ? buildAchievements(user) : [];
}

export function getAchievementsCatalog(): Achievement[] {
  return buildAchievements(getCurrentUser()).map((achievement) => ({ ...achievement, unlockedAt: null, progress: 0 }));
}
