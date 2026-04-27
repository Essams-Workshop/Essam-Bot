import { NextResponse } from "next/server";
import { getUserById } from "@/lib/trackerMockData";

type Params = {
  params: { id: string };
};

export async function GET(_: Request, { params }: Params) {
  const user = getUserById(params.id);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json(user);
}
