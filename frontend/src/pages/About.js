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
import about from "../assets/images/home/about.jpg";
import { upToItems } from "../assets/data/upto";
import { inToBooks, inToMedia, inToMusic } from "../assets/data/into";

import aboutStyles from "../assets/styles/About.module.css";

const About = () => {
  return (
    <div className={aboutStyles.about}>
      <Meta
        title={"About Me | Gabriel Minamedez"}
        description={
          "He also writes for SLAM Philippines on the side. Aside from watching movies and series, reading books, and listening to music, he is also in a constant search to create something impactful be it through technology or the arts."
        }
        title2={"About"}
        url={"https://gabminamedez.github.io/about"}
      />

      <Container>
        <Row className={aboutStyles.headDiv}>
          <Col lg={7}>
            <div className={aboutStyles.bioCol}>
              <h1>
                <span className={aboutStyles.nametag}>
                  <i>What up world! It's</i>
                </span>
                <br />
                <span className={aboutStyles.name}>Gabriel Minamedez.</span>
              </h1>

              <br />

              <p>
                I'm a fresh Computer Science graduate from De La Salle
                University in sunny Manila, Philippines! The pair of glasses in
                my photos does justice for what I do 75% of my day: writing
                either code or stories with my laptop.
              </p>
              <p>
                I live my days constantly thinking about what I can innovate
                that could make a positive and lasting impact on even at least
                one person. That has always been my driving force in everything
                I do, whether I'm developing an application that I believe can
                help somebody, or writing an elaborate piece where I can air out
                my reservoir of thoughts.
              </p>
              <p>
                I spend the remaining 25% of my days doing the most random
                stuff! A perfectly peaceful day to me involves reading books,
                looking up historical tidbits, playing basketball, discovering
                music, and listening to podcasts.
              </p>
            </div>
          </Col>

          <Col lg={5} className={aboutStyles.aboutImageCol}>
            <img className={aboutStyles.aboutImage} src={about} alt="img" />

            <span className={aboutStyles.socials}>
              <a
                href="https://github.com/gabminamedez"
                target="_blank"
                className={aboutStyles.social}
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/gabminamedez/"
                target="_blank"
                className={aboutStyles.social}
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://sansserif.substack.com/"
                target="_blank"
                className={aboutStyles.social}
                rel="noreferrer"
              >
                <SiSubstack />
              </a>
              <a
                href="https://open.spotify.com/user/dirgfk4e07s0pggwbexjxmjbw?si=e0fe017022114a1e"
                target="_blank"
                className={aboutStyles.social}
                rel="noreferrer"
              >
                <FaSpotify />
              </a>
              <a
                href="https://www.instagram.com/gabminamedez/"
                target="_blank"
                className={aboutStyles.social}
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/GabMinamedez"
                target="_blank"
                className={aboutStyles.social}
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </span>
          </Col>
        </Row>

        <div className={aboutStyles.upToDiv}>
          <h2>What I'm currently up to...</h2>

          <br />

          <Row>
            {upToItems.map((item) => {
              return (
                <Col lg={4}>
                  <h3>{item.title}</h3>
                  {item.content}
                </Col>
              );
            })}
          </Row>
        </div>

        <div className={aboutStyles.inToDiv}>
          <h2>What I'm currently in to...</h2>

          <br />

          <h3>Media 📺</h3>
          <Row>
            {inToMedia.map((item) => {
              return (
                <Col sm={3} xs={6} className={aboutStyles.inToItem}>
                  <img src={item.url} alt="img" />
                </Col>
              );
            })}
            <Col sm={3} xs={6} className={aboutStyles.inToItem}>
              {inToMedia.map((item) => {
                return (
                  <p>
                    {item.title}
                    <br />
                    <i>{item.type}</i>
                  </p>
                );
              })}
            </Col>
          </Row>

          <h3>Books 📚</h3>
          <Row>
            {inToBooks.map((item) => {
              return (
                <Col sm={3} xs={6} className={aboutStyles.inToItem}>
                  <img src={item.url} alt="img" />
                </Col>
              );
            })}
            <Col sm={3} xs={6} className={aboutStyles.inToItem}>
              {inToBooks.map((item) => {
                return (
                  <p>
                    {item.title}
                    <br />
                    <i>{item.author}</i>
                  </p>
                );
              })}
            </Col>
          </Row>

          <h3>Music 🎵</h3>
          <Row>
            {inToMusic.map((item) => {
              return (
                <Col sm={3} xs={6} className={aboutStyles.inToItem}>
                  <img src={item.url} alt="img" />
                </Col>
              );
            })}
            <Col sm={3} xs={6} className={aboutStyles.inToItem}>
              {inToMusic.map((item) => {
                return (
                  <p>
                    {item.title}
                    <br />
                    <i>{item.artist}</i>
                  </p>
                );
              })}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
