import React from "react";
import "./Banner.css";
import MyProfileImg from "../assets/prodile-image.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__content">
          <div className="left__side">
            <div className="image__container">
              <img src={MyProfileImg} alt="Profile-avatar" />
            </div>
          </div>
          <div className="right__side">
            <div className="rightSide__top">
              <p>
                Hi, my name is <span className="span-Name">Beddiaf Fateh</span>{" "}
                I a Mechanical Engineer and a self-taught software developer
                with well developed skills in frontend and backend software
                development and have concluded various Certifications and
                Projects in my areas of interest. I'm very passionate in writing
                clean code & always ready to learn. I work well in a team but
                also on my own as I love to set myself goals which I will
                achieve.
              </p>
            </div>
            <div className="rightSide__bottom">
              <a href="mailto:madjedbdf@gmail.com">Contact</a>
              <a
                href="https://pdfhost.io/v/6gTfn.Wgj_FATEH_BEDDIAF_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
