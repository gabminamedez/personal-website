const PROJECTS = [
  {
    n: "01",
    title: "Live Data Panels",
    stack: "Next.js · Vercel · APIs",
    desc:
      "Live dashboard pulling music (Last.fm), reading (Goodreads), code (GitHub), and weather (Open-Meteo) onto a single page that updates while you scroll.",
    meta: "2026 · IN PROD",
    featured: false,
  },
  {
    n: "02",
    title: "Substack Embed Widget",
    stack: "React · Vanilla JS",
    desc:
      "A custom embed widget for Substack posts on portfolio pages. Solves cross-origin pain, looks like the rest of your site, ships in one script tag.",
    meta: "2026 · OPEN SOURCE",
    featured: true,
  },
  {
    n: "03",
    title: "Goodreads Sync",
    stack: "Vanilla JS · Cron",
    desc:
      "Scrapes my reading shelf, normalizes it into JSON, and posts it to the personal site. Used to be a hack — now I trust it with my reading life.",
    meta: "2025 · MAINTAINED",
    featured: false,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" data-screen-label="04 Dev Portfolio">
      <div className="section-pad">
        <header className="section-head">
          <div className="h-left">
            <span className="h-id">04 — PORTFOLIO</span>
            <h2>
              Dev
              <br />
              Portfolio
            </h2>
          </div>
          <p className="h-sub">
            Some useful, mostly fun. Things I&apos;ve shipped recently, in
            order of how much they still embarrass me.
          </p>
        </header>
        <div className="projects">
          {PROJECTS.map((p) => (
            <article
              key={p.n}
              className={`project${p.featured ? " featured" : ""}`}
            >
              <div className="p-id">
                <span>{p.n}&nbsp;/&nbsp;03</span>
                <span>{p.featured ? "★ FEATURED" : "PROJECT"}</span>
              </div>
              <h3>{p.title}</h3>
              <p className="stack">{p.stack}</p>
              <p>{p.desc}</p>
              <div className="p-foot">
                <span>{p.meta}</span>
                <span>
                  VIEW <span className="arrow">→</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
