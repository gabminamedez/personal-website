import { FABLE_USERNAME } from "@/consts/fable";
import { fetchFableReading } from "@/lib/fable";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function configuredUsername(): string {
  return (
    process.env.FABLE_USERNAME?.trim() ||
    process.env.NEXT_PUBLIC_FABLE_USERNAME?.trim() ||
    FABLE_USERNAME
  );
}

export async function GET() {
  const username = configuredUsername();
  if (!username) {
    return NextResponse.json(
      { error: "Fable username is not configured" },
      { status: 404 },
    );
  }

  try {
    const data = await fetchFableReading(username);
    return NextResponse.json({ data });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Failed to load Fable";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
