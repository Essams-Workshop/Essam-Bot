import { NextResponse } from "next/server";
import { getAchievementsCatalog } from "@/lib/trackerMockData";

export async function GET() {
  return NextResponse.json(getAchievementsCatalog());
}
