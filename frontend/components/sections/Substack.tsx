"use client";

import { socials } from "@/consts/socials";
import { formatWritingDate } from "@/lib/writing";
import { useWritingPosts } from "@/hooks/useWritingPosts";

export function Substack() {
  const { posts, status, error } = useWritingPosts();

  return (
    <section id="substack" data-screen-label="05 Substack">
      <div className="section-pad">
        <header className="section-head">
          <div className="h-left">
            <span className="h-id">05 — SUBSTACK</span>
            <h2>Substack</h2>
          </div>
          <p className="h-sub">
            the world is my oyster and i love writing about oysters apparently
          </p>
        </header>
        <div className="substack-bar">
          <div>
            <h3>Subscribe to my Substack on Sans Serif!</h3>
          </div>
          <div className="substack-bar-cta">
            <a
              href={socials.substack}
              className="subscribe-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              let&apos;s see it! →
            </a>
          </div>
        </div>

        <div className="posts-list">
          {status === "loading" ? (
            <p className="posts-list-status">Loading posts…</p>
          ) : null}
          {status === "error" ? (
            <p className="posts-list-status">
              Could not load posts from Google Sheets. {error}
            </p>
          ) : null}
          {status === "ready"
            ? posts.map((post, idx) => (
                <a
                  key={`${post.date}-${post.title}-${idx}`}
                  className="post-row"
                  href={post.url || socials.substack}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="date mono-num">
                    {post.date ? formatWritingDate(post.date) : "—"}
                  </span>
                  <div className="post-row-body">
                    <span className="title">{post.title}</span>
                    {post.bio ? <span className="bio">{post.bio}</span> : null}
                    {post.type ? (
                      <span className="tag">{post.type}</span>
                    ) : null}
                  </div>
                </a>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
