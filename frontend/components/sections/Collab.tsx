import { SocialLinks } from "@/components/SocialLinks";
import { siteLinks } from "@/lib/site-config";

export function Collab() {
  return (
    <section id="collab" className="collab" data-screen-label="07 Collaborate">
      <div className="collab-inner">
        <h2>
          Let&apos;s <em>collaborate.</em>
        </h2>
        <div className="collab-grid">
          <p>
            Open to freelance, collaborations, creative projects, and random
            emails from internet strangers. If you&apos;re building something
            that needs code, words, or both — say hello. Replies are usually
            within 48 hours.
          </p>
          <div className="collab-email">
            <div>
              <div className="label">EMAIL&nbsp;ME&nbsp;DIRECTLY</div>
              <a className="mail" href={siteLinks.email}>
                gabminamedez@gmail.com
              </a>
            </div>
            <SocialLinks variant="footer" />
          </div>
        </div>

        <div className="foot-marquee" style={{ marginTop: 80 }}>
          <div className="marquee-track">
            <span>
              <span className="sep">MADE&nbsp;WITH&nbsp;FIGMA&nbsp;+&nbsp;NOTION&nbsp;+&nbsp;CLAUDE</span>
              <span className="sep">POWERED&nbsp;BY&nbsp;SPITE</span>
              <span className="sep">© 2026&nbsp;GABRIEL&nbsp;MINAMEDEZ</span>
              <span className="sep">MANILA&nbsp;·&nbsp;PH</span>
              <span className="sep">v2.0</span>
            </span>
            <span>
              <span className="sep">MADE&nbsp;WITH&nbsp;FIGMA&nbsp;+&nbsp;NOTION&nbsp;+&nbsp;CLAUDE</span>
              <span className="sep">POWERED&nbsp;BY&nbsp;SPITE</span>
              <span className="sep">© 2026&nbsp;GABRIEL&nbsp;MINAMEDEZ</span>
              <span className="sep">MANILA&nbsp;·&nbsp;PH</span>
              <span className="sep">v2.0</span>
            </span>
          </div>
        </div>

        <div className="foot-meta">
          <span>NO COOKIES · NO ANALYTICS · NO BULLSHIT</span>
          <a href="#identity" style={{ color: "inherit" }}>
            SCROLL&nbsp;BACK&nbsp;UP&nbsp;↑
          </a>
        </div>
      </div>
    </section>
  );
}
