"use client";

import {
  firstRecentTrack,
  isTrackNowPlaying,
  parseDurationSeconds,
  pickArtworkUrl,
  type LastFmRecentTracksResponse,
} from "@/lib/lastfm";
import { useCallback, useEffect, useRef, useState } from "react";

export type LastFmPhase = "loading" | "error" | "now_playing" | "recent" | "empty";

export type LastFmDisplay = {
  title: string;
  artist: string;
  album?: string;
  durationSec: number;
  elapsedSec: number;
  artworkUrl?: string;
  isNowPlaying: boolean;
};

const POLL_MS = 45_000;

function trackKey(resp: LastFmRecentTracksResponse): string | null {
  const t = firstRecentTrack(resp);
  if (!t?.name) return null;
  const artist = t.artist?.["#text"] ?? "";
  return `${artist}|||${t.name}`;
}

async function fetchRecentTracks(
  user: string,
  apiKey: string,
): Promise<LastFmRecentTracksResponse> {
  const q = new URLSearchParams({
    method: "user.getrecenttracks",
    user,
    api_key: apiKey,
    format: "json",
    limit: "1",
    extended: "0",
  });
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?${q.toString()}`,
    { cache: "no-store" },
  );
  if (!res.ok) {
    throw new Error(`Last.fm HTTP ${res.status}`);
  }
  return res.json();
}

export function useLastFmRecentTrack(opts: {
  user: string;
  apiKey: string;
  enabled: boolean;
}) {
  const { user, apiKey, enabled } = opts;

  const [phase, setPhase] = useState<LastFmPhase>(
    enabled ? "loading" : "empty",
  );
  const [display, setDisplay] = useState<LastFmDisplay>({
    title: "",
    artist: "",
    durationSec: 0,
    elapsedSec: 0,
    isNowPlaying: false,
  });
  const [fetchError, setFetchError] = useState<string | null>(null);

  const playbackKeyRef = useRef<string | null>(null);
  const playbackStartRef = useRef<number | null>(null);

  const applyPayload = useCallback((payload: LastFmRecentTracksResponse) => {
    if (payload.error && payload.message) {
      throw new Error(payload.message);
    }
    const t = firstRecentTrack(payload);
    if (!t?.name) {
      setPhase("empty");
      setDisplay({
        title: "Nothing yet",
        artist: "Enable scrobbling in Last.fm",
        durationSec: 0,
        elapsedSec: 0,
        isNowPlaying: false,
      });
      return;
    }

    const now = isTrackNowPlaying(t);
    const artist = t.artist?.["#text"]?.trim() || "Unknown artist";
    const album = t.album?.["#text"]?.trim();
    const durationSec = parseDurationSeconds(t);
    const artworkUrl = pickArtworkUrl(t.image);

    const key = trackKey(payload);
    if (now && key && key !== playbackKeyRef.current) {
      playbackKeyRef.current = key;
      playbackStartRef.current = Date.now();
    }
    if (!now) {
      playbackKeyRef.current = null;
      playbackStartRef.current = null;
    }

    let elapsedSec = 0;
    if (now && playbackStartRef.current && durationSec > 0) {
      elapsedSec = Math.min(
        durationSec,
        Math.floor((Date.now() - playbackStartRef.current) / 1000),
      );
    }

    setDisplay({
      title: t.name,
      artist,
      album,
      durationSec,
      elapsedSec,
      artworkUrl,
      isNowPlaying: now,
    });
    setPhase(now ? "now_playing" : "recent");
  }, []);

  const load = useCallback(
    async (mode: "initial" | "silent" = "initial") => {
      if (!enabled) return;
      setFetchError(null);
      if (mode === "initial") setPhase("loading");
      try {
        const json = await fetchRecentTracks(user, apiKey);
        applyPayload(json);
      } catch (e) {
        const msg =
          e instanceof Error ? e.message : "Last.fm unavailable";
        if (mode === "initial") {
          setFetchError(msg);
          setPhase("error");
        }
      }
    },
    [enabled, user, apiKey, applyPayload],
  );

  useEffect(() => {
    if (!enabled) return;
    void load("initial");
  }, [enabled, load]);

  useEffect(() => {
    if (!enabled) return;
    const id = window.setInterval(() => void load("silent"), POLL_MS);
    return () => window.clearInterval(id);
  }, [enabled, load]);

  useEffect(() => {
    if (!enabled) return;
    const id = window.setInterval(() => {
      setDisplay((prev) => {
        if (!prev.isNowPlaying || prev.durationSec <= 0) return prev;
        if (!playbackStartRef.current) return prev;
        const elapsed = Math.floor(
          (Date.now() - playbackStartRef.current) / 1000,
        );
        const capped = Math.min(prev.durationSec, elapsed);
        return prev.elapsedSec === capped ? prev : { ...prev, elapsedSec: capped };
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [enabled]);

  return {
    phase,
    display,
    fetchError,
    refresh: load,
  };
}
