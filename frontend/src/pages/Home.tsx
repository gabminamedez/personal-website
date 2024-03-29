import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
  FaTwitter,
} from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

import Meta from "../components/Meta";

import homeStyles from "src/styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <Meta
        title={"Home | Gabriel Minamedez"}
        description={
          "On his off days, he loves to write about anything under the scorching sun."
        }
        title2={"Home"}
        url={"https://gabminamedez.vercel.app/"}
      />

      <Container>
        <div className={homeStyles.hero}>
          <Row>
            <Col md={6}>
              <h1>
                <span className="text-base">
                  <i>What up world! It's</i>
                </span>
                <br />
                <span className="text-gmBlue text-5xl">Gabriel Minamedez.</span>
              </h1>
            </Col>
            <Col md={6}>
              <p className="text-lg">
                🇵🇭 Guy with glasses from sunny Manila, PH
                <br />
                👨‍💻 Fullstack Software Engineer in Data Science
                <br />
                ✍️ Semi-Professional Word Vomiter
              </p>

              <div className="flex items-center ml-[-8px]">
                <a
                  href="https://github.com/gabminamedez"
                  target="_blank"
                  className={homeStyles.social}
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/gabminamedez/"
                  target="_blank"
                  className={homeStyles.social}
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://sansserif.substack.com/"
                  target="_blank"
                  className={homeStyles.social}
                  rel="noreferrer"
                >
                  <SiSubstack />
                </a>
                <a
                  href="https://open.spotify.com/user/dirgfk4e07s0pggwbexjxmjbw?si=e0fe017022114a1e"
                  target="_blank"
                  className={homeStyles.social}
                  rel="noreferrer"
                >
                  <FaSpotify />
                </a>
                <a
                  href="https://www.instagram.com/gabminamedez/"
                  target="_blank"
                  className={homeStyles.social}
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com/GabMinamedez"
                  target="_blank"
                  className={homeStyles.social}
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </div>
            </Col>
          </Row>
        </div>

        <div className={homeStyles.directory}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center py-[90px] m-0">
            <h2>
              <Link to="/about">About</Link>
            </h2>
            <h2>
              <Link to="/portfolio">Portfolio</Link>
            </h2>
            <h2>
              <a
                href="https://docs.google.com/document/d/1hBoGjn5_nk3u8RZsyqLoIxgU3-SGNnyrWp3ZVydAp_M/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </h2>
            <h2>
              <a
                href="https://sansserif.substack.com/"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
            </h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
