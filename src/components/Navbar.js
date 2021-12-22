import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Facebook from "../assets/social/facebook-3.svg";
import Github from "../assets/social/github.svg";
import Instagram from "../assets/social/instagram.svg";
import LinkedIn from "../assets/social/linkedin-icon.svg";
import DarkMode from "./DarkMode";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <nav className="content">
          <div className="name">
            <a href="/">
              <h4>Fateh Beddiaf</h4>
            </a>
          </div>
          <div className="nav__buttons">
            <a href="/home">Home</a>
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
          </div>
          <div className="nav__social">
            <a
              href="https://www.facebook.com/profile.php?id=100015783588265"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="Facebook-logo" className="theSvg" />
            </a>
            <a
              href="https://github.com/madjed-hue"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="Github-logo" className="theSvg" />
            </a>
            <a
              href="https://www.instagram.com/fateh_bdf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram-logo" className="theSvg" />
            </a>
            <a
              href="https://www.linkedin.com/in/beddiaf-fateh-85a060159/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn-logo" className="theSvg" />
            </a>
            {/* <button id="btn-theme" onClick={() => handleToggle()}> */}
            <DarkMode />
            {/* </button> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
