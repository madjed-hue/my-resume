import React from "react";
import "./Frontend.css";
import ReactIcon from "../assets/skills/Front/react.svg";
import HtmlIcon from "../assets/skills/Front/html-5.svg";
import CssIcon from "../assets/skills/Front/css3.svg";
import JavaScriptIcon from "../assets/skills/Front/javascript.svg";
import BootstrapIcon from "../assets/skills/Front/bootstrap-4.svg";
import ReduxIcon from "../assets/skills/Front/redux.svg";
import MaterialIcon from "../assets/skills/Front/material-ui-1.svg";
import ReactBootsrtapIcon from "../assets/skills/Front/react-bootstrap.svg";
import SassIcon from "../assets/skills/Front/sass-1.svg";
import StyledComponentIcon from "../assets/skills/Front/styled-components.svg";
import EjsIcon from "../assets/skills/Front/ejs.png";

const Frontend = () => {
  return (
    <div className="frontend">
      <div className="frontend__content">
        <div className="skill">
          <div className="skill_img">
            <img src={ReactIcon} alt="React-logo" />
          </div>
          <div className="skill_name">
            <p>React JS</p>
          </div>
        </div>

        <div className="skill">
          <div className="skill_img">
            <img src={HtmlIcon} alt="html-logo" />
          </div>
          <div className="skill_name">
            <p>Html</p>
          </div>
        </div>

        <div className="skill">
          <div className="skill_img">
            <img src={CssIcon} alt="css-logo" />
          </div>
          <div className="skill_name">
            <p>Css</p>
          </div>
        </div>

        <div className="skill">
          <div className="skill_img">
            <img src={JavaScriptIcon} alt="JavaScript-logo" />
          </div>
          <div className="skill_name">
            <p>JavaScript</p>
          </div>
        </div>

        <div className="skill">
          <div className="skill_img">
            <img src={BootstrapIcon} alt="Bootstrap-logo" />
          </div>
          <div className="skill_name">
            <p>Bootstrap</p>
          </div>
        </div>

        <div className="skill">
          <div className="skill_img">
            <img src={ReduxIcon} alt="Redux-logo" />
          </div>
          <div className="skill_name">
            <p>Redux</p>
          </div>
        </div>

        <div className="skill">
          <div className="skill_img">
            <img src={MaterialIcon} alt="Material-UI-logo" />
          </div>
          <div className="skill_name">
            <p>Material-UI</p>
          </div>
        </div>

        <div className="skill">
          <div className="skill_img">
            <img src={ReactBootsrtapIcon} alt="React_bbotstrap-logo" />
          </div>
          <div className="skill_name">
            <p>React-Bootstrap</p>
          </div>
        </div>

        <div className="skill">
          <div className="skill_img">
            <img src={SassIcon} alt="sass-logo" />
          </div>
          <div className="skill_name">
            <p>Sass</p>
          </div>
        </div>

        <div className="skill">
          <div className="skill_img">
            <img src={StyledComponentIcon} alt="styledComponent-logo" />
          </div>
          <div className="skill_name">
            <p>Styled Component</p>
          </div>
        </div>

        <div className="skill">
          <div className="skill_img">
            <img src={EjsIcon} alt="ejs-logo" />
          </div>
          <div className="skill_name">
            <p>Ejs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
