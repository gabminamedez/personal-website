import { Icon } from "@/components/Icons";
import { siteLinks } from "@/lib/site-config";

type Variant = "hero" | "footer";

const linkItems = [
  { label: "GitHub", href: siteLinks.github, Cmp: Icon.Github },
  { label: "LinkedIn", href: siteLinks.linkedin, Cmp: Icon.Linkedin },
  { label: "Substack", href: siteLinks.substack, Cmp: Icon.Substack },
  { label: "Spotify", href: siteLinks.spotify, Cmp: Icon.Spotify },
  { label: "Instagram", href: siteLinks.instagram, Cmp: Icon.Instagram },
  { label: "Twitter", href: siteLinks.twitter, Cmp: Icon.Twitter },
] as const;

export function SocialLinks({ variant = "hero" }: { variant?: Variant }) {
  const cn = variant === "footer" ? "collab-socials" : "socials";

  return (
    <div className={cn}>
      {linkItems.map(({ label, href, Cmp }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Cmp />
        </a>
      ))}
    </div>
  );
}
