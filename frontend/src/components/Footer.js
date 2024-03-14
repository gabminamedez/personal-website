import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
  FaTwitter,
} from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

import footerStyles from "../assets/styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <p>
        © {new Date().getFullYear()} <b>G</b>abriel Minamedez.
        <br />
        <a
          href="https://github.com/gabminamedez"
          target="_blank"
          className={footerStyles.social}
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/gabminamedez/"
          target="_blank"
          className={footerStyles.social}
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://sansserif.substack.com/"
          target="_blank"
          className={footerStyles.social}
          rel="noreferrer"
        >
          <SiSubstack />
        </a>
        <a
          href="https://open.spotify.com/user/dirgfk4e07s0pggwbexjxmjbw?si=e0fe017022114a1e"
          target="_blank"
          className={footerStyles.social}
          rel="noreferrer"
        >
          <FaSpotify />
        </a>
        <a
          href="https://www.instagram.com/gabminamedez/"
          target="_blank"
          className={footerStyles.social}
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/GabMinamedez"
          target="_blank"
          className={footerStyles.social}
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </p>
    </div>
  );
};

export default Footer;
