"use client";

import { useLastFmRecentTrack } from "@/hooks/useLastFmRecentTrack";
import { useEffect, useState } from "react";

/** Demo strip when Last.fm credentials are absent — matches original placeholder loop */
const FALLBACK_TRACKS = [
  { t: "You Only Live Once", a: "The Strokes" },
  { t: "Meet Me in the Bathroom", a: "The Strokes" },
  { t: "Last Nite", a: "The Strokes" },
  { t: "Hard to Explain", a: "The Strokes" },
];

const STATUS_LABEL = "APPLE MUSIC";

function DemoNowPlaying() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setI((prevI) => (prevI + 1) % FALLBACK_TRACKS.length);
    }, 1000);
    return () => window.clearInterval(t);
  }, [i]);

  const tr = FALLBACK_TRACKS[i]!;

  return (
    <div className="panel np-panel">
      <div className="p-head">
        <span>NOW PLAYING</span>
        <span className="p-live">
          <span className="dot" />
          {STATUS_LABEL}
        </span>
      </div>
      <div className="np-art" aria-hidden />
      <h4 className="np-track">{tr.t}</h4>
      <p className="np-artist">{tr.a}</p>
      <NpEqBars />
    </div>
  );
}

function NpEqBars() {
  return (
    <div className="np-eq">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

export function NowPlayingPanel() {
  const apiKey = process.env.NEXT_PUBLIC_LASTFM_API_KEY;
  const username = process.env.NEXT_PUBLIC_LASTFM_USERNAME;

  const hasCreds = Boolean(apiKey?.trim() && username?.trim());
  const lf = useLastFmRecentTrack({
    user: username?.trim() ?? "",
    apiKey: apiKey?.trim() ?? "",
    enabled: hasCreds,
  });

  if (!hasCreds) {
    return <DemoNowPlaying />;
  }

  if (lf.phase === "error") {
    return (
      <div className="panel np-panel np-panel--error">
        <div className="p-head">
          <span>NOW PLAYING</span>
          <span className="p-live">
            <span className="dot" />
            {STATUS_LABEL}
          </span>
        </div>
        <div className="np-art" aria-hidden />
        <p className="np-error-msg">
          {lf.fetchError ?? "Could not reach Last.fm."}
        </p>
        <NpEqBars />
      </div>
    );
  }

  if (lf.phase === "loading") {
    return (
      <div className="panel np-panel">
        <div className="p-head">
          <span>NOW PLAYING</span>
          <span className="p-live">
            <span className="dot" />
            {STATUS_LABEL}
          </span>
        </div>
        <div className="np-art np-art--loading" aria-hidden />
        <h4 className="np-track np-skeleton-text">Fetching…</h4>
        <p className="np-artist np-skeleton-sub">Last.fm</p>
        <NpEqBars />
      </div>
    );
  }

  const d = lf.display;
  const showArtwork = Boolean(d.artworkUrl);

  const subline = d.album ? `${d.artist} · ${d.album}` : d.artist;

  return (
    <div className="panel np-panel">
      <div className="p-head">
        <span>NOW PLAYING</span>
        <span className="p-live">
          <span className="dot" />
          {STATUS_LABEL}
        </span>
      </div>

      <div
        className={`np-art${showArtwork ? " np-art--live" : ""}`}
        style={
          showArtwork && d.artworkUrl
            ? { backgroundImage: `url(${d.artworkUrl})` }
            : undefined
        }
        aria-hidden
      />

      <h4 className="np-track">{d.title}</h4>
      <p className="np-artist">{subline}</p>

      <NpEqBars />
    </div>
  );
}
