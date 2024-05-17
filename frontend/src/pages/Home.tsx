import { Link } from "react-router-dom";

import Meta from "src/components/Meta";

import homeStyles from "src/styles/Home.module.css";
import Hero from "src/components/Hero";

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

      <Hero />

      <div className={homeStyles.directory}>
        <div className="absolute top-1/2 transform -translate-y-1/2 py-[90px]">
          <h2 className="text-3xl">
            <Link to="/about">about</Link>
          </h2>
          <h2 className="text-3xl">
            <Link to="/portfolio-dev">portfolio - dev</Link>
          </h2>
          <h2 className="text-3xl">
            <Link to="/portfolio-writing">portfolio - writing</Link>
          </h2>
          <h2 className="text-3xl">
            <a
              href="https://sansserif.substack.com/"
              target="_blank"
              rel="noreferrer"
            >
              blog
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
