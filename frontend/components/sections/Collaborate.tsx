import { SocialLinks } from "@/components/utils/SocialLinks";
import { socials } from "@/consts/socials";

export function Collaborate() {
  return (
    <section id="collab" className="collab" data-screen-label="07 Collaborate">
      <div className="collab-inner">
        <h2>
          Let&apos;s <em>collaborate.</em>
        </h2>
        <div className="collab-grid">
          <p>
            Open to collaborations, creative projects, and random emails from
            internet strangers. If you&apos;re building something that needs
            code, words, or both, feel free to reach out!
          </p>
          <div className="collab-email">
            <div>
              <div className="label">EMAIL ME DIRECTLY</div>
              <a className="mail" href={socials.email}>
                gabminamedez@gmail.com
              </a>
            </div>
            <SocialLinks variant="footer" />
          </div>
        </div>

        <div className="foot-meta">
          <span>© {new Date().getFullYear()} Gabriel Minamedez</span>
          <a href="#identity" style={{ color: "inherit" }}>
            SCROLL BACK UP ↑
          </a>
        </div>
      </div>
    </section>
  );
}
