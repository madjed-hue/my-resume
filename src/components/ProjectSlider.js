import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import desneyImg from "../assets/Projects/Disney.png";
import airImg from "../assets/Projects/Airbnb.png";
import twentyCenturyImg from "../assets/Projects/20Century.png";
import amazonImg from "../assets/Projects/Amazon.png";
import huluImg from "../assets/Projects/Hulu.png";
import itStoreImg from "../assets/Projects/itStore.png";
import myBraryImg from "../assets/Projects/MyBrary.png";
import netflixImg from "../assets/Projects/Netflix.png";
import teslaImg from "../assets/Projects/Tesla.png";

import "./ProjectSlider.css";

const ProjectSlider = () => {
  return (
    <div className="project__slider">
      <AwesomeSlider animation="cubeAnimation">
        <div className="wrap">
          <a href="/">
            <img src={desneyImg} alt="desney-img" />
          </a>
        </div>
        <div className="wrap">
          <a href="/">
            <img src={twentyCenturyImg} alt="20-century-img" />
          </a>
        </div>
        <div className="wrap">
          <a href="/">
            <img src={airImg} alt="airbnb-img" />
          </a>
        </div>
        <div className="wrap">
          <a href="/">
            <img src={amazonImg} alt="amazon-img" />
          </a>
        </div>
        <div className="wrap">
          <a href="/">
            <img src={huluImg} alt="hulu-img" />
          </a>
        </div>
        <div className="wrap">
          <a href="/">
            <img src={itStoreImg} alt="it-img" />
          </a>
        </div>
        <div className="wrap">
          <a href="/">
            <img src={myBraryImg} alt="library-img" />
          </a>
        </div>
        <div className="wrap">
          <a href="/">
            <img src={netflixImg} alt="netflix-img" />
          </a>
        </div>
        <div className="wrap">
          <a href="/">
            <img src={teslaImg} alt="tesla-img" />
          </a>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default ProjectSlider;
