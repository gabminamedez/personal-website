"use client";

import { SocialLinks } from "@/components/utils/SocialLinks";
import { socials } from "@/consts/socials";

export function Identity() {
  return (
    <section
      id="identity"
      className="hero"
      data-screen-label="01 Identity Slab"
    >
      <div className="hero-grid">
        <div>
          <h1 className="wordmark">
            <span className="line">Gabriel</span>
            <span className="line">Minamedez</span>
          </h1>
          <a className="hero-email" href={socials.email}>
            (gabminamedez@gmail.com)
          </a>
          <dl className="hero-meta">
            <dt>is a</dt>
            <dd>
              Software Engineer /<br />
              Writer /<br />
              Human
            </dd>
            <dt>from</dt>
            <dd>Manila, Philippines</dd>
          </dl>
          <SocialLinks variant="hero" />
        </div>
      </div>

      <div className="scroll-cue">
        <span className="label">SCROLL DOWN FOR EVERYTHING ELSE</span>
        <span className="arrow">
          <span>▼</span>
          <span>▼</span>
          <span>▼</span>
        </span>
      </div>
    </section>
  );
}
