"use client";

import { SocialLinks } from "@/components/SocialLinks";
import { siteLinks } from "@/lib/site-config";
import { useEffect, useState } from "react";

export function Hero() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const manila = new Date(
    now.getTime() + (now.getTimezoneOffset() + 480) * 60000,
  );
  const hh = String(manila.getHours()).padStart(2, "0");
  const mm = String(manila.getMinutes()).padStart(2, "0");
  const ss = String(manila.getSeconds()).padStart(2, "0");

  return (
    <section id="identity" className="hero" data-screen-label="01 Identity Slab">
      <div className="hero-grid">
        <div>
          <h1 className="wordmark">
            <span className="line">Gabriel</span>
            <span className="line">Minamedez</span>
          </h1>
          <a className="hero-email" href={siteLinks.email}>
            (gabminamedez@gmail.com)
          </a>
          <dl className="hero-meta">
            <dt>is a</dt>
            <dd>Software Engineer / Writer / Expeditionist</dd>
            <dt>from</dt>
            <dd>Manila, Philippines</dd>
          </dl>
          <SocialLinks variant="hero" />
        </div>

        <aside className="status-card">
          <div className="label">
            <span>CURRENT&nbsp;STATUS</span>
            <span className="pill">LIVE</span>
          </div>
          <h3>Available for freelance &amp; collab</h3>
          <p>
            Open to weird, useful, or beautiful internet projects. Especially
            anything that combines code with words.
          </p>
          <div className="tags">
            <span className="tag">FREELANCE</span>
            <span className="tag">COLLAB</span>
            <span className="tag">CURIOUS&nbsp;PROJECTS</span>
            <span className="tag">RANDOM&nbsp;CONVOS</span>
          </div>
          <div
            style={{
              marginTop: 14,
              paddingTop: 12,
              borderTop: "1px solid var(--blue)",
              display: "flex",
              justifyContent: "space-between",
              fontSize: 10,
              letterSpacing: "0.18em",
              fontWeight: 700,
            }}
          >
            <span>MANILA&nbsp;·&nbsp;UTC+8</span>
            <span className="mono-num">
              {hh}:{mm}:{ss}
            </span>
          </div>
        </aside>
      </div>

      <div className="scroll-cue">
        <span className="label">
          SCROLL&nbsp;DOWN&nbsp;FOR&nbsp;EVERYTHING&nbsp;ELSE
        </span>
        <span className="arrow">
          <span>▼</span>
          <span>▼</span>
          <span>▼</span>
        </span>
      </div>
    </section>
  );
}
