"use client";

import { useEffect, useState } from "react";

export const SECTIONS = [
  { id: "identity", label: "IDENTITY" },
  { id: "about", label: "ABOUT" },
  { id: "currents", label: "CURRENTS" },
  { id: "portfolio", label: "PORTFOLIO" },
  { id: "substack", label: "SUBSTACK" },
  { id: "lists", label: "LISTS" },
  { id: "collab", label: "COLLABORATE" },
] as const;

export function Nav() {
  const [active, setActive] = useState("identity");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / Math.max(1, max)) * 100);

      let cur = "identity";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 140) cur = s.id;
      }
      setActive(cur);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
  };

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-inner">
        <a
          href="#identity"
          onClick={(e) => go(e, "identity")}
          className="nav-logo"
          aria-label="Home"
        >
          G
        </a>
        <div className="nav-links">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`nav-link${active === s.id ? " active" : ""}`}
              onClick={(e) => go(e, s.id)}
            >
              {s.label}
            </a>
          ))}
        </div>
        <div className="nav-status" title="available for work">
          <span className="dot" />
          <span>OPEN&nbsp;FOR&nbsp;WORK</span>
        </div>
      </div>
      <div className="nav-progress" style={{ width: `${progress}%` }} />
    </nav>
  );
}
