import React from "react";
import "./Frontend.css";
import expressIcon from "../assets/skills/Back/express.svg";
import mongodbIcon from "../assets/skills/Back/mongodb.svg";
import mySqlIcon from "../assets/skills/Back/mysql.svg";
import nodeIcon from "../assets/skills/Back/nodejs.svg";

const Backend = () => {
  return (
    <div className="backend">
      <div className="backend__content">
        <div className="skill">
          <div className="skill_img">
            <img src={nodeIcon} alt="node-js-logo" />
          </div>
          <div className="skill_name">
            <p>nodejs</p>
          </div>
        </div>
        <div className="skill">
          <div className="skill_img">
            <img src={expressIcon} alt="express-logo" />
          </div>
          <div className="skill_name">
            <p>express</p>
          </div>
        </div>
        <div className="skill">
          <div className="skill_img">
            <img src={mongodbIcon} alt="mongodb-logo" />
          </div>
          <div className="skill_name">
            <p>mongodb</p>
          </div>
        </div>
        <div className="skill">
          <div className="skill_img">
            <img src={mySqlIcon} alt="mysql-logo" />
          </div>
          <div className="skill_name">
            <p>mysql</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
