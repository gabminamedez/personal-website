import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
  FaTwitter,
} from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

import heroStyles from "src/styles/Hero.module.css";

const Home = () => {
  return (
    <div className={heroStyles.hero}>
      <h1 className="text-8xl mb-[12px]">Gabriel Minamedez</h1>
      <div className="ml-[80px]">
        <h2 className="text-2xl italic mb-[12px]">(gabminamedez@gmail.com)</h2>

        <table className="mb-[12px]">
          <tr>
            <td className="italic">
              <h2 className="text-3xl">is a</h2>
            </td>
            <td className="w-[20px]" />
            <td>
              <h2 className="text-3xl">
                Software Engineer / Writer / Expeditionist
              </h2>
            </td>
          </tr>
          <tr>
            <td className="italic">
              <h2 className="text-3xl">from</h2>
            </td>
            <td className="w-[20px]" />
            <td>
              <h2 className="text-3xl">Manila, Philippines</h2>
            </td>
          </tr>
        </table>

        <div className="flex items-center ml-[-12px]">
          <a
            href="https://github.com/gabminamedez"
            target="_blank"
            className={heroStyles.social}
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gabminamedez/"
            target="_blank"
            className={heroStyles.social}
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://sansserif.substack.com/"
            target="_blank"
            className={heroStyles.social}
            rel="noreferrer"
          >
            <SiSubstack />
          </a>
          <a
            href="https://open.spotify.com/user/dirgfk4e07s0pggwbexjxmjbw?si=e0fe017022114a1e"
            target="_blank"
            className={heroStyles.social}
            rel="noreferrer"
          >
            <FaSpotify />
          </a>
          <a
            href="https://www.instagram.com/gabminamedez/"
            target="_blank"
            className={heroStyles.social}
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/GabMinamedez"
            target="_blank"
            className={heroStyles.social}
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className={heroStyles.hr} />
    </div>
  );
};

export default Home;
