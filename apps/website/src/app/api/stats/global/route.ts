import { NextResponse } from "next/server";
import { getGlobalStats } from "@/lib/trackerMockData";

export async function GET() {
  return NextResponse.json(getGlobalStats());
}
