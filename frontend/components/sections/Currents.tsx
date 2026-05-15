"use client";

import { NowPlayingPanel } from "@/components/sections/NowPlayingPanel";
import { useCountUp, useInView } from "@/hooks/useScrollAnimation";
import { useMemo, useRef } from "react";

function Reading() {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref);
  const pct = useCountUp(64, seen, 1600);

  return (
    <div className="panel" ref={ref}>
      <div className="p-head">
        <span>READING</span>
        <span className="p-live">
          <span className="dot" />
          GOODREADS
        </span>
      </div>
      <div className="rd-cover">
        <span className="a">— J.L. Borges</span>
        <span className="t">
          Labyrinths
          <br />
          <span
            style={{
              opacity: 0.8,
              fontWeight: 400,
              fontSize: 10,
              fontStyle: "italic",
              letterSpacing: 0,
            }}
          >
            selected stories &amp; other writings
          </span>
        </span>
      </div>
      <div className="rd-meta">
        <span>PROGRESS</span>
        <span className="mono-num">{pct}%</span>
      </div>
      <div className="rd-bar">
        <div style={{ width: `${pct}%` }} />
      </div>
      <div
        style={{
          marginTop: 10,
          display: "flex",
          justifyContent: "space-between",
          fontSize: 10,
          letterSpacing: "0.14em",
          fontWeight: 700,
          opacity: 0.85,
        }}
      >
        <span>BOOK&nbsp;14&nbsp;/&nbsp;2026</span>
        <span>192&nbsp;OF&nbsp;300&nbsp;p</span>
      </div>
    </div>
  );
}

function GithubToday() {
  const grid = useMemo(() => {
    const arr: number[] = [];
    for (let j = 0; j < 91; j++) {
      const r = (Math.sin(j * 1.7) + 1) / 2;
      const l =
        r < 0.3 ? 0 : r < 0.55 ? 1 : r < 0.75 ? 2 : r < 0.9 ? 3 : 4;
      arr.push(l);
    }
    return arr;
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref);
  const count = useCountUp(7, seen);
  const streak = useCountUp(43, seen, 1400);

  return (
    <div className="panel" ref={ref}>
      <div className="p-head">
        <span>GITHUB&nbsp;TODAY</span>
        <span className="p-live">
          <span className="dot" />
          API
        </span>
      </div>
      <div className="gh-count mono-num">
        {count}
        <small>COMMITS&nbsp;PUSHED&nbsp;TODAY</small>
      </div>
      <div className="gh-grid" aria-hidden="true">
        {grid.map((l, idx) => (
          <div key={idx} data-l={l} />
        ))}
      </div>
      <div className="gh-streak mono-num">
        <span>STREAK&nbsp;{streak}d</span>
        <span>{`3,527 '26`}</span>
      </div>
    </div>
  );
}

function Weather() {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref);
  const t = useCountUp(31, seen);

  return (
    <div className="panel" ref={ref}>
      <div className="p-head">
        <span>WEATHER</span>
        <span className="p-live">
          <span className="dot" />
          OPENMETEO
        </span>
      </div>
      <div className="wx-loc">MANILA&nbsp;·&nbsp;PH</div>
      <div className="wx-temp mono-num">
        {t}
        <sup>°C</sup>
      </div>
      <div className="wx-cond">Humid &amp; partly cloudy</div>
      <div className="wx-row mono-num">
        <span className="k">FEELS&nbsp;LIKE</span>
        <span>37°</span>
      </div>
      <div className="wx-row mono-num">
        <span className="k">HUMIDITY</span>
        <span>78%</span>
      </div>
      <div className="wx-row mono-num">
        <span className="k">WIND</span>
        <span>11&nbsp;km/h&nbsp;NE</span>
      </div>
      <div className="wx-row mono-num">
        <span className="k">UV</span>
        <span>8&nbsp;HIGH</span>
      </div>
      <div className="wx-sun mono-num">
        <span>05:42</span>
        <span className="arc" />
        <span>18:21</span>
      </div>
    </div>
  );
}

export function Currents() {
  return (
    <section id="currents" className="currents" data-screen-label="03 The Currents">
      <div className="section-pad">
        <header className="section-head">
          <div className="h-left">
            <span className="h-id">03 — CURRENTS</span>
            <h2>The Currents</h2>
          </div>
          <p className="h-sub">
            A live dashboard pulling music, reading, code, and weather. Updates
            while you&apos;re here.
          </p>
        </header>
        <div className="panels">
          <NowPlayingPanel />
          <Reading />
          <GithubToday />
          <Weather />
        </div>
      </div>
    </section>
  );
}
