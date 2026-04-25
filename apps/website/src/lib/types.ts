export type CohortInfo = {
  status: string;
  seats: number;
  claimed: number;
  uptime: number;
};

export type UserInfo = {
  handle: string;
  level: number;
  rank: number;
  sync: number;
  sessionId: string;
};

export type StatsInfo = {
  throughputGbs: number;
  coreLoadPct: number;
};

export type LeaderboardEntry = {
  rank: number;
  handle: string;
  points: number;
  you?: boolean;
};

export type TerminalLine = {
  t: string;
  level: "INFO" | "WARN" | "SYS";
  msg: string;
};

export type FeatureInfo = {
  title: string;
  description: string;
};

export type MockData = {
  cohort: CohortInfo;
  user: UserInfo;
  stats: StatsInfo;
  activity: number[];
  leaderboard: LeaderboardEntry[];
  terminal: TerminalLine[];
  features: FeatureInfo[];
};
