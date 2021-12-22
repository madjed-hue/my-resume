import React from "react";
import Banner from "./Banner";
import DevTools from "./DevTools";
import "./Home.css";
import Skills from "./Skills";
import Swing from "react-reveal/Swing";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__content">
          <Swing>
            <Banner />
          </Swing>
          <Swing>
            <Skills />
          </Swing>
          <Swing>
            <DevTools />
          </Swing>
        </div>
      </div>
    </div>
  );
};

export default Home;
