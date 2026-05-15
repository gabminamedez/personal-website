"use client";

import { useCountUp, useInView } from "@/hooks/useScrollAnimation";
import { useRef } from "react";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref);
  const shipped = useCountUp(24, seen);
  const commits = useCountUp(3527, seen, 1800);
  const coffees = useCountUp(4, seen);
  const lists = useCountUp(12, seen);
  const posts = useCountUp(38, seen);
  const stars = useCountUp(412, seen, 1600);

  return (
    <section id="about" data-screen-label="02 About">
      <div className="section-pad" ref={ref}>
        <header className="section-head">
          <div className="h-left">
            <span className="h-id">02 — ABOUT</span>
            <h2>About</h2>
          </div>
          <p className="h-sub">
            A developer and designer who builds personal, useful, and slightly
            unhinged things on the internet.
          </p>
        </header>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I build things on the internet — some{" "}
              <span className="em-blue">useful</span>, mostly{" "}
              <span className="em-blue">fun</span>. By day a software engineer;
              by night a writer, list-maker, and chronic project starter.
            </p>
            <p>
              I like working at the seam between code and words — products that
              feel authored, websites that have a point of view, tools that
              respect the person on the other side of the screen.
            </p>
            <p>
              Lately: live data dashboards, custom embed widgets, and an
              unreasonable number of Notion templates I will never publish.
            </p>
            <div className="about-tags">
              <span className="tag">DEV</span>
              <span className="tag">DESIGN</span>
              <span className="tag">WRITING</span>
              <span className="tag">SIDE&nbsp;PROJECTS</span>
              <span className="tag">EXPEDITIONS</span>
              <span className="tag">COFFEE&nbsp;FORWARD</span>
            </div>
          </div>

          <div className="stats" aria-label="Quick stats">
            <div className="stat">
              <div className="k">PROJECTS&nbsp;SHIPPED</div>
              <div className="v mono-num">{shipped}</div>
            </div>
            <div className="stat blue">
              <div className="k">COMMITS</div>
              <div className="v mono-num">{commits.toLocaleString()}</div>
            </div>
            <div className="stat blue">
              <div className="k">COFFEES&nbsp;/&nbsp;DAY</div>
              <div className="v mono-num">
                {coffees}
                <span className="u">cups</span>
              </div>
            </div>
            <div className="stat">
              <div className="k">USELESS&nbsp;LISTS</div>
              <div className="v mono-num">{lists}</div>
            </div>
            <div className="stat">
              <div className="k">POSTS&nbsp;WRITTEN</div>
              <div className="v mono-num">{posts}</div>
            </div>
            <div className="stat blue">
              <div className="k">GITHUB&nbsp;STARS</div>
              <div className="v mono-num">{stars}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
