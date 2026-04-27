import {
  getCurrentUser,
  getLeaderboard,
  getUserAchievements,
  getUserActivity,
  getUserById,
  getGlobalStats,
  getAchievementsCatalog
} from "@/lib/trackerMockData";
import type { EventKind, Period } from "@/lib/trackerTypes";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL ?? "";

function resolveMockApi<T>(path: string): T {
  const [pathname, query = ""] = path.split("?");
  const params = new URLSearchParams(query);

  if (pathname === "/api/me") return getCurrentUser() as T;
  if (pathname === "/api/achievements") return getAchievementsCatalog() as T;
  if (pathname === "/api/stats/global") return getGlobalStats() as T;

  if (pathname === "/api/leaderboard") {
    const period = (params.get("period") as Period | null) ?? "week";
    return getLeaderboard(period, getCurrentUser().id) as T;
  }

  const activityMatch = pathname.match(/^\/api\/users\/([^/]+)\/activity$/);
  if (activityMatch) {
    const userId = activityMatch[1];
    const cursor = params.get("cursor");
    const type = params.get("type") as EventKind | null;
    return getUserActivity(userId, cursor, type ?? undefined) as T;
  }

  const userAchievementsMatch = pathname.match(/^\/api\/users\/([^/]+)\/achievements$/);
  if (userAchievementsMatch) {
    return getUserAchievements(userAchievementsMatch[1]) as T;
  }

  const userMatch = pathname.match(/^\/api\/users\/([^/]+)$/);
  if (userMatch) {
    const user = getUserById(userMatch[1]);
    if (!user) throw new Error("Mock API: user not found");
    return user as T;
  }

  throw new Error(`Mock API route not implemented for path: ${path}`);
}

export async function fetchJson<T>(path: string, init?: RequestInit): Promise<T> {
  if (!API_BASE && path.startsWith("/api/")) {
    return resolveMockApi<T>(path);
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...init,
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}
