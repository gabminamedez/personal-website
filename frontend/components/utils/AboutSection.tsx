"use client";

import { GITHUB_USERNAME } from "@/consts/github";
import { useGitHubStats } from "@/hooks/useGitHubStats";
import { useCountUp, useInView } from "@/hooks/useScrollAnimation";
import { useWritingPosts } from "@/hooks/useWritingPosts";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref);
  const gh = useGitHubStats(GITHUB_USERNAME);
  const writing = useWritingPosts();

  const animate = seen && gh.ready;
  const shipped = useCountUp(gh.projectsShipped ?? 0, animate);
  const sportsLeagues = useCountUp(6, seen);
  const coffees = useCountUp(3, seen);
  const lists = useCountUp(12, seen);
  const postsReady = writing.status === "ready";
  const posts = useCountUp(writing.postCount, seen && postsReady);
  const favoriteNumber = useCountUp(17, seen);

  return (
    <section id="about" data-screen-label="02 About">
      <div className="section-pad" ref={ref}>
        <header className="section-head">
          <div className="h-left">
            <span className="h-id">02 — ABOUT</span>
            <h2>About</h2>
          </div>
          <p className="h-sub">
            A developer and writer who creates personable, (sometimes) useful
            things on the internet.
          </p>
        </header>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              Hi! I&apos;m Gab and I create things on the internet: some{" "}
              <span className="em-blue">useful</span>, mostly{" "}
              <span className="em-blue">fun</span>. By day a software engineer;
              by night a writer, list-maker, and chronic project starter.
            </p>
            <p>
              I live my days planning + doing things I can innovate that could
              make a positive and lasting impact on even just one person. That
              has always been my driving force in everything I do, whether
              I&apos;m developing an application or writing an elaborate piece.
            </p>
            <p>
              I spend the remaining 25% of my days doing the most random stuff!
              A perfectly peaceful day to me involves reading books, coffee,
              looking up random historical tidbits, discovering music, watching
              baseball, and going on long walks.
            </p>
            <div className="about-tags">
              <span className="tag">DEV</span>
              <span className="tag">WRITING</span>
              <span className="tag">DESIGN</span>
              <span className="tag">SIDE PROJECTS</span>
              <span className="tag">EXPEDITIONS</span>
              <span className="tag">COFFEE</span>
              <span className="tag">SPORTS</span>
            </div>
          </div>

          <div className="stats" aria-label="Quick stats">
            <div className="stat">
              <div className="k">PROJECTS SHIPPED</div>
              <div className="v mono-num">{!gh.ready ? "—" : shipped}</div>
            </div>
            <div className="stat blue">
              <div className="k">SPORTS LEAGUES I FOLLOW</div>
              <div className="v mono-num">{sportsLeagues}</div>
            </div>
            <div className="stat blue">
              <div className="k">COFFEES/DAY</div>
              <div className="v mono-num">
                {coffees}
                <span className="u">cups</span>
              </div>
            </div>
            <div className="stat">
              <div className="k">USELESS LISTS</div>
              <div className="v mono-num">{lists}</div>
            </div>
            <div className="stat">
              <div className="k">POSTS WRITTEN</div>
              <div className="v mono-num">
                {!postsReady ? "—" : posts}
              </div>
            </div>
            <div className="stat blue">
              <div className="k">FAVORITE NUMBER</div>
              <div className="v mono-num">{favoriteNumber}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
