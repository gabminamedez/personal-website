import { Container, Row, Col } from "reactstrap";

import Meta from "src/components/Meta";
import { develop } from "src/assets/data/portfolio";

import portfolioStyles from "src/styles/Portfolio.module.css";
import { PortfolioDevItem } from "src/types/portfolio";

const Portfolio = () => {
  return (
    <div>
      <Meta
        title={"Portfolio | Gabriel Minamedez"}
        description={
          "This is a collection of his pet projects developed as he continues to learn about new technologies everyday."
        }
        title2={"Portfolio"}
        url={"https://gabminamedez.vercel.app/portfolio"}
      />

      <Container className={portfolioStyles.portfolio}>
        <div className={portfolioStyles.fixed}>
          <h1>My Work</h1>
          <p>
            My pet projects as I continue to learn and create (and cry) everyday
            about tech endeavors.
          </p>
        </div>

        <Row className={portfolioStyles.projects}>
          {develop.map((item: PortfolioDevItem) => {
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
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
