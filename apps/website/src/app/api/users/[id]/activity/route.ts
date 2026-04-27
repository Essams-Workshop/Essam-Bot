import { NextResponse } from "next/server";
import { getUserActivity, getUserById } from "@/lib/trackerMockData";
import type { EventKind } from "@/lib/trackerTypes";

type Params = {
  params: { id: string };
};

export async function GET(request: Request, { params }: Params) {
  const user = getUserById(params.id);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const search = new URL(request.url).searchParams;
  const cursor = search.get("cursor");
  const kind = search.get("type") as EventKind | null;
  const data = getUserActivity(params.id, cursor, kind ?? undefined);
  return NextResponse.json(data);
}
