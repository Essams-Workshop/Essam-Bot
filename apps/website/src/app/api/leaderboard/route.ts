import { NextResponse } from "next/server";
import { getCurrentUser, getLeaderboard } from "@/lib/trackerMockData";
import type { Period } from "@/lib/trackerTypes";

const PERIODS: Period[] = ["week", "month", "season", "all"];

export async function GET(request: Request) {
  const search = new URL(request.url).searchParams;
  const periodParam = search.get("period") as Period | null;
  const period = periodParam && PERIODS.includes(periodParam) ? periodParam : "week";
  const viewer = getCurrentUser();
  return NextResponse.json(getLeaderboard(period, viewer.id));
}
