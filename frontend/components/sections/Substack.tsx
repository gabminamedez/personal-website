"use client";

import { useState } from "react";

const POSTS = [
  {
    d: "2026 · 04 · 12",
    t: "Why I decided to design and develop my portfolio with the garage door open",
    r: "12 min",
    tag: "PROCESS",
  },
  {
    d: "2026 · 03 · 28",
    t: "A curatorial practice for personal websites",
    r: "9 min",
    tag: "ESSAY",
  },
  {
    d: "2026 · 03 · 04",
    t: "On building in public (and the parts I keep private)",
    r: "7 min",
    tag: "CRAFT",
  },
  {
    d: "2026 · 02 · 17",
    t: "The taxonomy of things that don't matter, presented with gravitas",
    r: "5 min",
    tag: "USELESS",
  },
  {
    d: "2026 · 01 · 30",
    t: "CSS specificity wars and other things I lost in 2025",
    r: "11 min",
    tag: "DEV",
  },
];

export function Substack() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    if (!ok) {
      setState("err");
      setMsg("THAT EMAIL LOOKS WRONG — TRY AGAIN");
      return;
    }
    setState("ok");
    setMsg("SUBSCRIBED. SEE YOU IN THE INBOX.");
  };

  return (
    <section id="substack" data-screen-label="05 Substack">
      <div className="section-pad">
        <header className="section-head">
          <div className="h-left">
            <span className="h-id">05 — SUBSTACK</span>
            <h2>Substack</h2>
          </div>
          <p className="h-sub">
            Essays about building things, building yourself, and the
            embarrassing place where those overlap.
          </p>
        </header>
        <div className="substack-bar">
          <div>
            <h3>Subscribe on Substack.</h3>
            <p>
              One letter, roughly monthly. No funnels, no upsells. Just essays
              and the occasional dumb list.
            </p>
          </div>
          <div>
            <form
              className={`subscribe-form${
                state === "ok" ? " ok" : state === "err" ? " err" : ""
              }`}
              onSubmit={submit}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setState("idle");
                  setMsg("");
                }}
                placeholder="you@somewhere.com"
                aria-label="Email"
              />
              <button type="submit">
                {state === "ok" ? "DONE" : "SUBSCRIBE →"}
              </button>
            </form>
            <div className="subscribe-msg" aria-live="polite">
              {msg}
            </div>
          </div>
        </div>

        <div className="posts-list">
          {POSTS.map((p, idx) => (
            <a
              key={`${p.d}-${idx}`}
              className="post-row"
              href="https://sansserif.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="date mono-num">{p.d}</span>
              <span className="title">{p.t}</span>
              <span className="reads">{p.r}</span>
              <span className="tag">{p.tag}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
