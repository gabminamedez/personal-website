/** Last.fm `user.getRecentTracks` JSON (subset). */

export type LastFmImage = { size: string; "#text": string };

export type LastFmRecentTrack = {
  artist?: { "#text"?: string };
  album?: { "#text"?: string };
  name?: string;
  url?: string;
  duration?: string;
  "@attr"?: { nowplaying?: string };
  image?: LastFmImage[];
  date?: { uts?: string; "#text"?: string };
};

export type LastFmRecentTracksResponse = {
  error?: number;
  message?: string;
  recenttracks?: {
    track?: LastFmRecentTrack | LastFmRecentTrack[];
    "@attr"?: { user?: string };
  };
};

export function pickArtworkUrl(images?: LastFmImage[]): string | undefined {
  if (!images?.length) return undefined;
  const pref = ["extralarge", "large", "medium", "small"];
  for (const size of pref) {
    const hit = images.find((i) => i.size === size && i["#text"]?.trim());
    if (hit?.["#text"]) return hit["#text"];
  }
  const any = images.find((i) => i["#text"]?.trim());
  return any?.["#text"];
}

export function firstRecentTrack(
  payload: LastFmRecentTracksResponse,
): LastFmRecentTrack | null {
  const raw = payload.recenttracks?.track;
  if (!raw) return null;
  return Array.isArray(raw) ? (raw[0] ?? null) : raw;
}

export function parseDurationSeconds(track: LastFmRecentTrack): number {
  const d = parseInt(track.duration ?? "0", 10);
  return Number.isFinite(d) && d > 0 ? d : 0;
}

export function isTrackNowPlaying(track: LastFmRecentTrack): boolean {
  const v = track["@attr"]?.nowplaying;
  return v === "true";
}
