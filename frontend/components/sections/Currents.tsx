"use client";

import { LetterboxdPanel } from "@/components/utils/LetterboxdPanel";
import { NowPlayingPanel } from "@/components/utils/NowPlayingPanel";
import { ReadingPanel } from "@/components/utils/ReadingPanel";
import { useCountUp, useInView } from "@/hooks/useScrollAnimation";
import { useRef } from "react";

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
      <div className="wx-loc">MANILA · PH</div>
      <div className="wx-temp mono-num">
        {t}
        <sup>°C</sup>
      </div>
      <div className="wx-cond">Humid &amp; partly cloudy</div>
      <div className="wx-row mono-num">
        <span className="k">FEELS LIKE</span>
        <span>37°</span>
      </div>
      <div className="wx-row mono-num">
        <span className="k">HUMIDITY</span>
        <span>78%</span>
      </div>
      <div className="wx-row mono-num">
        <span className="k">WIND</span>
        <span>11 km/h NE</span>
      </div>
      <div className="wx-row mono-num">
        <span className="k">UV</span>
        <span>8 HIGH</span>
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
    <section
      id="currents"
      className="currents"
      data-screen-label="03 The Currents"
    >
      <div className="section-pad">
        <header className="section-head">
          <div className="h-left">
            <span className="h-id">03 — CURRENTS</span>
            <h2>The Currents</h2>
          </div>
          <p className="h-sub">
            Stuff I&apos;m into right now, plus the weather from where I&apos;m
            at
            right now!
          </p>
        </header>
        <div className="panels">
          <NowPlayingPanel />
          <ReadingPanel />
          <LetterboxdPanel />
          <Weather />
        </div>
      </div>
    </section>
  );
}
