import { useState } from "react";
import { Animated } from "react-animated-css";

import Hero from "src/components/Hero";
import Meta from "src/components/Meta";
import { develop } from "src/assets/data/portfolio";

import portfolioStyles from "src/styles/Portfolio.module.css";
import { PortfolioDevItem } from "src/types/portfolio";

const PortfolioDev = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const selectProject = (index: number) => {
    setSelectedProject(index);
  };

  return (
    <div className={portfolioStyles.portfolio}>
      <Meta
        title={"Portfolio - Dev | Gabriel Minamedez"}
        description={
          "This is a collection of his pet projects developed as he continues to learn about new technologies everyday."
        }
        title2={"Portfolio - Dev"}
        url={"https://gabminamedez.vercel.app/portfolio"}
      />

      <Hero />

      <div className="block mx-auto w-[80%]">
        <h1>portfolio - dev</h1>
        <h2 className="italic">
          <a
            className="text-gmDarkGray hover:text-gmBlue text-2xl"
            href="https://docs.google.com/document/d/1hBoGjn5_nk3u8RZsyqLoIxgU3-SGNnyrWp3ZVydAp_M/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            (<span className="underline">dev resume</span>)
          </a>{" "}
          <a
            className="text-gmDarkGray hover:text-gmBlue text-2xl"
            href="https://github.com/gabminamedez"
            target="_blank"
            rel="noreferrer"
          >
            (<span className="underline">github</span>)
          </a>
        </h2>

        <div className={portfolioStyles.projects}>
          {develop.map((item: PortfolioDevItem, index: number) => {
            return (
              <div
                className={`${portfolioStyles.project} ${index === develop.length - 1 ? portfolioStyles.lastProject : ""} ${index !== selectedProject && "py-0"}`}
              >
                <div
                  className={
                    index === selectedProject
                      ? ""
                      : "cursor-pointer hover:bg-gmBlue hover:text-gmYellow transition-all"
                  }
                  onClick={() => selectProject(index)}
                >
                  <h3
                    className={
                      index === selectedProject
                        ? "px-[20px]"
                        : "px-[20px] my-0 py-[8px]"
                    }
                  >
                    {item.title}
                  </h3>
                </div>

                <Animated
                  animationIn="pulse"
                  animationOut="pulse"
                  animationInDuration={600}
                  animationOutDuration={600}
                  isVisible={index === selectedProject}
                >
                  {index === selectedProject && (
                    <div>
                      <img src={item.img} alt="img" />
                      <div className={portfolioStyles.projectDetails}>
                        <p className={portfolioStyles.projectBio}>{item.bio}</p>
                        <p
                          className={
                            portfolioStyles.projectMetadata + " italic"
                          }
                        >
                          <b>{item.type} Project</b> developed with {item.stack}
                          .
                        </p>
                        {item.url && (
                          <a
                            className="text-gmDarkGray hover:text-gmBlue underline"
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {item.url}
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </Animated>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDev;
