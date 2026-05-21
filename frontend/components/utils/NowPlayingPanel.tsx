"use client";

import { useLastFmRecentTrack } from "@/hooks/useLastFmRecentTrack";
import { useEffect, useState } from "react";

/** Demo strip when Last.fm credentials are absent — matches original placeholder loop */
const FALLBACK_TRACKS = [
  { t: "Helena", a: "Nothing But Thieves", dur: 218 },
  { t: "Eyes Wide Shut", a: "Tiny Habits", dur: 184 },
  { t: "Sunsetz", a: "Cigarettes After Sex", dur: 245 },
  { t: "August", a: "Taylor Swift", dur: 261 },
];

function formatTime(seconds: number) {
  const s = Math.max(0, Math.floor(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

function statusLabel(hasCreds: boolean, phase: string): string {
  if (!hasCreds) return "DEMO";
  switch (phase) {
    case "loading":
      return "LOADING…";
    case "error":
      return "ERROR";
    case "now_playing":
      return "LAST.FM · LIVE";
    case "recent":
      return "LAST.FM · LAST";
    case "empty":
      return "LAST.FM";
    default:
      return "LAST.FM";
  }
}

function DemoNowPlaying() {
  const [i, setI] = useState(0);
  const [elapsed, setElapsed] = useState(72);

  useEffect(() => {
    const t = window.setInterval(() => {
      setElapsed((prev) => {
        if (prev + 1 >= FALLBACK_TRACKS[i]!.dur) {
          setI((prevI) => (prevI + 1) % FALLBACK_TRACKS.length);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
    return () => window.clearInterval(t);
  }, [i]);

  const tr = FALLBACK_TRACKS[i]!;
  const pct = (elapsed / tr.dur) * 100;

  return (
    <div className="panel np-panel">
      <div className="p-head">
        <span>NOW&nbsp;PLAYING</span>
        <span className="p-live">
          <span className="dot" />
          {statusLabel(false, "")}
        </span>
      </div>
      <div className="np-art" aria-hidden />
      <h4 className="np-track">{tr.t}</h4>
      <p className="np-artist">{tr.a}</p>
      <NpEqBars />
      <NpProgress pct={pct} indeterminate={false} />
      <div className="np-times mono-num">
        <span>{formatTime(elapsed)}</span>
        <span>{formatTime(tr.dur)}</span>
      </div>
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

function NpProgress({
  pct,
  indeterminate,
}: {
  pct: number;
  indeterminate: boolean;
}) {
  return (
    <div className={`np-progress${indeterminate ? " np-progress--indeterminate" : ""}`}>
      <div
        style={
          indeterminate
            ? undefined
            : {
                position: "absolute",
                inset: "0 auto 0 0",
                width: `${Math.min(100, Math.max(0, pct))}%`,
                background: "var(--cream)",
                transition: "width 1s linear",
              }
        }
      />
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
          <span>NOW&nbsp;PLAYING</span>
          <span className="p-live">
            <span className="dot" />
            LAST.FM · ERROR
          </span>
        </div>
        <div className="np-art" aria-hidden />
        <p className="np-error-msg">
          {lf.fetchError ?? "Could not reach Last.fm."}
        </p>
        <NpEqBars />
        <NpProgress pct={0} indeterminate={false} />
      </div>
    );
  }

  if (lf.phase === "loading") {
    return (
      <div className="panel np-panel">
        <div className="p-head">
          <span>NOW&nbsp;PLAYING</span>
          <span className="p-live">
            <span className="dot" />
            {statusLabel(true, lf.phase)}
          </span>
        </div>
        <div className="np-art np-art--loading" aria-hidden />
        <h4 className="np-track np-skeleton-text">Fetching…</h4>
        <p className="np-artist np-skeleton-sub">Last.fm</p>
        <NpEqBars />
        <NpProgress pct={12} indeterminate={false} />
        <div className="np-times mono-num">
          <span>{formatTime(0)}</span>
          <span>{formatTime(180)}</span>
        </div>
      </div>
    );
  }

  const d = lf.display;
  const showArtwork = Boolean(d.artworkUrl);

  const pct =
    d.isNowPlaying && d.durationSec > 0
      ? (d.elapsedSec / d.durationSec) * 100
      : !d.isNowPlaying
        ? 100
        : 0;
  const showIndeterminate = d.isNowPlaying && d.durationSec <= 0;

  const subline = d.album ? `${d.artist} · ${d.album}` : d.artist;

  const showFooterTimes = d.isNowPlaying || d.durationSec > 0;

  return (
    <div className="panel np-panel">
      <div className="p-head">
        <span>NOW&nbsp;PLAYING</span>
        <span className="p-live">
          <span className="dot" />
          {statusLabel(true, lf.phase)}
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

      <NpProgress pct={pct} indeterminate={showIndeterminate} />

      {showFooterTimes ? (
        <div className="np-times mono-num">
          <span>{d.isNowPlaying ? formatTime(d.elapsedSec) : "—"}</span>
          <span>
            {d.durationSec > 0 ? formatTime(d.durationSec) : "—"}
          </span>
        </div>
      ) : (
        <div className="np-times mono-num np-times--muted">
          <span>—</span>
          <span>—</span>
        </div>
      )}
    </div>
  );
}
