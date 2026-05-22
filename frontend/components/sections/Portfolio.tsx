import { PortfolioSection } from "@/components/utils/PortfolioSection";

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
            Some useful, mostly fun. Things I&apos;ve shipped recently.
          </p>
        </header>
        <PortfolioSection />
      </div>
    </section>
  );
}
