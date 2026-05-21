"use client";

import type { KeyboardEvent } from "react";
import { useState } from "react";

function ListCard({
  title,
  items,
  openInit,
}: {
  title: string;
  items: { label: string; meta: string }[];
  openInit?: boolean;
}) {
  const [open, setOpen] = useState(!!openInit);

  const toggle = () => setOpen((o) => !o);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className={`list-card${open ? " open" : ""}`}>
      <div
        className="l-head"
        onClick={toggle}
        role="button"
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-expanded={open}
      >
        <span className="t">{title}</span>
        <span className="c mono-num">
          {String(items.length).padStart(2, "0")} ITEMS &nbsp;
          <span className="chev">▾</span>
        </span>
      </div>
      <div className="l-body">
        <ul>
          {items.map((it, idx) => (
            <li key={`${it.label}-${idx}`}>
              <span className="n">{String(idx + 1).padStart(2, "0")}</span>
              <span>{it.label}</span>
              <span className="meta">{it.meta}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="l-cta">
        <span>UPDATED MONTHLY</span>
        <span>{open ? "COLLAPSE" : "EXPAND"}</span>
      </div>
    </div>
  );
}

export function UselessLists() {
  return (
    <section id="lists" data-screen-label="06 Useless Lists">
      <div className="section-pad">
        <header className="section-head">
          <div className="h-left">
            <span className="h-id">06 — LISTS</span>
            <h2>
              Useless
              <br />
              Lists
            </h2>
          </div>
          <p className="h-sub">
            Useless lists, taken seriously. A curatorial practice for things
            that don&apos;t matter.
          </p>
        </header>
        <div className="lists">
          <ListCard
            title="Fonts I would marry"
            openInit
            items={[
              { label: "Akkurat", meta: "for letters" },
              { label: "Druk", meta: "for shouting" },
              { label: "Editorial New", meta: "for feelings" },
              { label: "Styrene A", meta: "for arguments" },
              { label: "Space Mono", meta: "for proof" },
              { label: "Helvetica", meta: "for honesty" },
            ]}
          />
          <ListCard
            title="Websites I keep returning to"
            items={[
              { label: "brutalistwebsites.com", meta: "comfort food" },
              { label: "neal.fun", meta: "infinite scroll" },
              { label: "poolside.fm", meta: "vibes only" },
              { label: "gracehoffman.info", meta: "type" },
              { label: "designbyform.com", meta: "rigor" },
              { label: "my-own-emotions.net", meta: "tbh" },
            ]}
          />
          <ListCard
            title="Things I've debugged at 2AM"
            items={[
              { label: "CORS errors", meta: "always" },
              { label: "z-index stacking", meta: "again" },
              { label: "Vercel env vars", meta: "twice this week" },
              { label: "APIs that return HTML", meta: "criminal" },
              { label: "React hydration", meta: "spiritual damage" },
              { label: "My own emotions", meta: "wip" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
