import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="home__content">
          <Flip top>
            <Banner />
          </Flip>
          <Flip bottom>
            <Footer />
          </Flip>
        </div>
      </div>
    </div>
  );
};

export default About;
