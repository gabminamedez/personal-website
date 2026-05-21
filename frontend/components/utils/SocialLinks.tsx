import type { IconType } from "react-icons";
import { FaLinkedinIn } from "react-icons/fa6";
import {
  SiApplemusic,
  SiGithub,
  SiInstagram,
  SiSubstack,
} from "react-icons/si";
import { socials } from "@/consts/socials";

type Variant = "hero" | "footer";

const linkItems: { label: string; href: string; Cmp: IconType }[] = [
  { label: "GitHub", href: socials.github, Cmp: SiGithub },
  { label: "LinkedIn", href: socials.linkedin, Cmp: FaLinkedinIn },
  { label: "Substack", href: socials.substack, Cmp: SiSubstack },
  { label: "Apple Music", href: socials.appleMusic, Cmp: SiApplemusic },
  { label: "Instagram", href: socials.instagram, Cmp: SiInstagram },
];

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
          <Cmp aria-hidden />
        </a>
      ))}
    </div>
  );
}
