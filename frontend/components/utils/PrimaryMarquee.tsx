"use client";

import { Marquee } from "@/components/utils/Marquee";
import { useLastFmRecentTrack } from "@/hooks/useLastFmRecentTrack";
import { useMemo } from "react";

const BASE_ITEMS = [
  "SOFTWARE ENGINEER",
  "WRITER",
  "HUMAN",
  "BASED IN MANILA, PH",
  "CREATING THINGS ON THE INTERNET",
  "WISHES HE PLAYED FOR THE DODGERS",
] as const;

const DEMO_LISTENING = "LISTENING TO HUMAN NATURE BY MICHAEL JACKSON";

function listeningItem(phase: string, title: string, artist: string): string {
  if (phase === "loading") return "LISTENING TO …";
  if (phase === "error" || phase === "empty" || !title.trim()) {
    return "LISTENING TO MUSIC";
  }
  return `LISTENING TO ${title.toUpperCase()} BY ${artist.toUpperCase()}`;
}

export function PrimaryMarquee() {
  const apiKey = process.env.NEXT_PUBLIC_LASTFM_API_KEY?.trim();
  const username = process.env.NEXT_PUBLIC_LASTFM_USERNAME?.trim();
  const hasCreds = Boolean(apiKey && username);

  const lf = useLastFmRecentTrack({
    user: username ?? "",
    apiKey: apiKey ?? "",
    enabled: hasCreds,
  });

  const listening = useMemo(() => {
    if (!hasCreds) return DEMO_LISTENING;
    return listeningItem(lf.phase, lf.display.title, lf.display.artist);
  }, [hasCreds, lf.phase, lf.display.title, lf.display.artist]);

  const items = useMemo(() => [...BASE_ITEMS, listening], [listening]);

  return <Marquee items={items} />;
}
