import { useEffect, useState } from "react";
import { Animated } from "react-animated-css";

import Hero from "src/components/Hero";
import Meta from "src/components/Meta";

import { fetchWritingPortfolioData } from "src/api/portfolio";
import { PortfolioWritingItem } from "src/types/portfolio";

import portfolioStyles from "src/styles/Portfolio.module.css";

const PortfolioWriting = () => {
  const [projects, setProjects] = useState<PortfolioWritingItem[]>([]);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const selectProject = (index: number) => {
    setSelectedProject(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWritingPortfolioData();
      setProjects(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Meta
        title={"Portfolio - Writing | Gabriel Minamedez"}
        description={
          "This is a collection of his writing endeavors for his personal blog, university, and publications."
        }
        title2={"Portfolio - Writing"}
        url={"https://gabminamedez.vercel.app/portfolio-writing"}
      />

      <Hero />

      <div className={portfolioStyles.portfolio + " block mx-auto"}>
        <h1>portfolio - writing</h1>
        <h2 className="italic">
          <a
            className="text-gmDarkGray hover:text-gmBlue text-2xl"
            href="https://docs.google.com/document/d/1ckJpYMRm7lapbw3Qwz4BSxI7YDKAiUlbqiajoVpMOYc/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            (<span className="underline">writing resume</span>)
          </a>{" "}
          <a
            className="text-gmDarkGray hover:text-gmBlue text-2xl"
            href="https://sansserif.substack.com/"
            target="_blank"
            rel="noreferrer"
          >
            (<span className="underline">substack</span>)
          </a>
        </h2>

        <div className={portfolioStyles.projects}>
          {projects.map((item: PortfolioWritingItem, index: number) => {
            return (
              <div
                key={index}
                className={`${portfolioStyles.project} ${index === projects.length - 1 ? portfolioStyles.lastProject : ""} ${index !== selectedProject && "py-0"}`}
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
                  animationIn="slideInLeft"
                  animationOut="slideOutRight"
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
                          <b>{item.type}</b> for {item.organization}.
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

export default PortfolioWriting;
