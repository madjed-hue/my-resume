import React from "react";
import "./Frontend.css";
import firebaseIcon from "../assets/skills/DevTools/firebase.svg";
import gitIcon from "../assets/skills/DevTools/git.svg";
import githubIcon from "../assets/skills/DevTools/github.svg";
import herokuIcon from "../assets/skills/DevTools/heroku.svg";
import npmIcon from "../assets/skills/DevTools/npm.svg";
import vscodeIcon from "../assets/skills/DevTools/visual-studio-code.svg";
import postmanIcon from "../assets/skills/DevTools/postman.svg";

const DevTools = () => {
  return (
    <div className="devtools">
      <div className="devtools__content">
        <div className="skill">
          <div className="skill_img">
            <img src={firebaseIcon} alt="firebase-logo" />
          </div>
          <div className="skill_name">
            <p>firebase</p>
          </div>
        </div>
        <div className="skill">
          <div className="skill_img">
            <img src={gitIcon} alt="git-logo" />
          </div>
          <div className="skill_name">
            <p>git</p>
          </div>
        </div>
        <div className="skill">
          <div className="skill_img">
            <img src={githubIcon} alt="github-logo" />
          </div>
          <div className="skill_name">
            <p>github</p>
          </div>
        </div>
        <div className="skill">
          <div className="skill_img">
            <img src={herokuIcon} alt="heroku-logo" />
          </div>
          <div className="skill_name">
            <p>heroku</p>
          </div>
        </div>
        <div className="skill">
          <div className="skill_img">
            <img src={npmIcon} alt="npm-logo" />
          </div>
          <div className="skill_name">
            <p>npm</p>
          </div>
        </div>
        <div className="skill">
          <div className="skill_img">
            <img src={vscodeIcon} alt="vscode-logo" />
          </div>
          <div className="skill_name">
            <p>vscode</p>
          </div>
        </div>
        <div className="skill">
          <div className="skill_img">
            <img src={postmanIcon} alt="postman-logo" />
          </div>
          <div className="skill_name">
            <p>postman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevTools;
