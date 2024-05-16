import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Animated } from "react-animated-css";

import Brand from "./components/Brand";
import MenuButton from "./components/MenuButton";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="layout">
        <Brand />
        <MenuButton toggleMenu={toggleMenu} isOpen={isOpen} />
        <Animated
          animationIn="slideInDown"
          animationOut="slideOutUp"
          animationInDuration={400}
          animationOutDuration={400}
          isVisible={isOpen}
          className="menu"
        >
          <div className="menuContent">
            <h1>
              <a href="/about">about</a>
            </h1>
            <h1>
              <a href="/portfolio">portfolio - dev</a>
            </h1>
            <h1>
              <a href="/portfolio">portfolio - writing</a>
            </h1>
            <h1>
              <a
                href="https://sansserif.substack.com/"
                target="_blank"
                rel="noreferrer"
              >
                blog
              </a>
            </h1>
          </div>
        </Animated>

        <div className="children">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
