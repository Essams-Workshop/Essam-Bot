import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/trackerMockData";

export async function GET() {
  return NextResponse.json(getCurrentUser());
}
