import { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import Meta from "../components/Meta";
import { develop } from "../assets/data/pfDevelop";
import sansserif from "../assets/images/portfolio/sansserif.png";
import { portfolioSections } from "src/constants/portfolio";

import portfolioStyles from "src/styles/Portfolio.module.css";

const Portfolio = () => {
  const [selected, setSelected] = useState(portfolioSections.coding);

  return (
    <div>
      <Meta
        title={"Portfolio | Gabriel Minamedez"}
        description={
          "This is a collection of his pet projects developed as he continues to learn about new technologies everyday."
        }
        title2={"Portfolio"}
        url={"https://gabminamedez.github.io/portfolio"}
      />

      <Container className={portfolioStyles.portfolio}>
        <div className={portfolioStyles.fixed}>
          <h1>My Work</h1>
          <p>
            My pet projects as I continue to learn and create (and cry) everyday
            about stuff ranging from technological to creative endeavors.
          </p>
          <h4>
            <span
              className={selected === portfolioSections.coding && "text-gmBlue"}
              onClick={(e) => setSelected(portfolioSections.coding)}
            >
              Coding
            </span>{" "}
            |
            <span
              className={
                selected === portfolioSections.writing && "text-gmBlue"
              }
              onClick={(e) => setSelected(portfolioSections.writing)}
            >
              {" "}
              Writing
            </span>
          </h4>
        </div>

        <Row className={portfolioStyles.projects}>
          {selected === portfolioSections.coding &&
            develop.map((item) => {
              return (
                <Col lg={6}>
                  <div className={portfolioStyles.project}>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <h2>{item.title}</h2>
                    </a>
                    <p className={portfolioStyles.metadata}>
                      <b>{item.type} Project</b> developed with {item.stack}.{" "}
                      <br />
                      <span className={portfolioStyles.projectBio}>
                        {item.bio}
                      </span>
                    </p>
                    <img src={item.img} alt="img" />
                  </div>
                </Col>
              );
            })}

          {selected === portfolioSections.writing && (
            <Col lg={6}>
              <div className={portfolioStyles.project}>
                <a
                  href="https://sansserif.substack.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2>Subscribe to Sans Serif!</h2>
                </a>
                <p className={portfolioStyles.metadata}>
                  A trail of word vomits to navigate this beautiful, twisted,
                  modern existence that I attempt to make sense of.
                </p>
                <img src={sansserif} alt="img" />
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
