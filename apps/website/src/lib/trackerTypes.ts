export type Period = "week" | "month" | "season" | "all";

export type EventKind = "commit" | "pr_opened" | "pr_merged" | "review" | "issue" | "manual";

export type RankTier = "apprentice" | "builder" | "architect" | "operator" | "oracle";

export type LanguageStat = {
  language: string;
  points: number;
  sharePct: number;
};

export type UserStats = {
  totalPoints: number;
  weekPoints: number;
  streakDays: number;
  globalRank: number;
  commits: number;
  prsMerged: number;
  reviews: number;
};

export type User = {
  id: string;
  discordId: string;
  handle: string;
  displayName: string;
  avatarSeed: string;
  github: string;
  rankTier: RankTier;
  rankNumber: number;
  points: number;
  nextTierAt: number;
  createdAt: string;
  stats: UserStats;
  languageStats: LanguageStat[];
  repos: string[];
};

export type ContributionEvent = {
  id: string;
  userId: string;
  repo: string;
  kind: EventKind;
  title: string;
  points: number;
  at: string;
};

export type Achievement = {
  id: string;
  key: string;
  title: string;
  description: string;
  target: number;
  progress: number;
  unlockedAt: string | null;
};

export type LeaderboardEntry = {
  userId: string;
  rank: number;
  handle: string;
  displayName: string;
  tier: RankTier;
  points: number;
  weekDelta: number;
  repos: number;
  you?: boolean;
};

export type GlobalStats = {
  activeBuilders: number;
  totalCommits: number;
  mergedPrs: number;
  activeStreaks: number;
};

export type PaginatedActivity = {
  items: ContributionEvent[];
  nextCursor: string | null;
};
