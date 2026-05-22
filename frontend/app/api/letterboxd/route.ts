import { LETTERBOXD_USERNAME } from "@/consts/letterboxd";
import { fetchLetterboxdLastFilm } from "@/lib/letterboxd";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function configuredUsername(): string {
  return (
    process.env.LETTERBOXD_USERNAME?.trim() ||
    process.env.NEXT_PUBLIC_LETTERBOXD_USERNAME?.trim() ||
    LETTERBOXD_USERNAME
  );
}

export async function GET() {
  const username = configuredUsername();
  if (!username) {
    return NextResponse.json(
      { error: "Letterboxd username is not configured" },
      { status: 404 },
    );
  }

  try {
    const data = await fetchLetterboxdLastFilm(username);
    return NextResponse.json({ data });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Failed to load Letterboxd";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
