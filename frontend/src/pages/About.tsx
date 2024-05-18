import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiSubstack, SiApplemusic } from "react-icons/si";

import Hero from "src/components/Hero";
import Meta from "src/components/Meta";

import { fetchIntoItemsData } from "src/api/about";
import about from "src/assets/images/about/about.jpg";
import { IntoItem } from "src/types/about";

import aboutStyles from "src/styles/About.module.css";

const About = () => {
  const [intoItems, setIntoItems] = useState<IntoItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchIntoItemsData();
      setIntoItems(data);
    };

    fetchData();
  }, []);

  return (
    <div className={aboutStyles.about}>
      <Meta
        title={"About Me | Gabriel Minamedez"}
        description={
          "Aside from watching movies and series, writing stories, reading books, and listening to music, he is also in constant search to create something impactful be it through technology or the arts."
        }
        title2={"About"}
        url={"https://gabminamedez.vercel.app/about"}
      />

      <Hero />

      <Container>
        <Row className="mb-[25px]">
          <Col lg={7}>
            <div className="block mx-auto w-[80%] overflow-wrap break-word">
              <h1>about</h1>

              <p>
                I'm a Software Engineer in Data Science from sunny Manila,
                Philippines! The pair of glasses in my photos does justice for
                what I do 75% of my day: writing either code or stories with my
                laptop.
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
                looking up random historical tidbits, discovering music,
                watching F1, and going on long walks.
              </p>
            </div>
          </Col>

          <Col
            lg={5}
            className="flex justify-center items-center flex-col text-center"
          >
            <img className={aboutStyles.aboutImage} src={about} alt="img" />

            <div className="mt-[20px] flex justify-center items-center">
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
                href="https://music.apple.com/profile/gabminamedez"
                target="_blank"
                className={aboutStyles.social}
                rel="noreferrer"
              >
                <SiApplemusic />
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
            </div>
          </Col>
        </Row>

        <div className={aboutStyles.inToDiv}>
          <h1>What I'm into right now (if you even care)</h1>

          <br />

          <div className="grid lg:grid-cols-4 sm:grid-cols-2">
            {intoItems.map((item: IntoItem) => {
              return (
                <div className={aboutStyles.imgWrapper}>
                  <img src={item.image} alt="img" />
                  <div className="absolute bottom-2 left-2 text-white text-base z-10">
                    <a
                      className="text-gmBlue hover:text-gmYellow hover:underline font-bold"
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.title}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
