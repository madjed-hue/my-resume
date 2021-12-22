import React from "react";
import Marquee from "react-fast-marquee";
import "./Footer.css";
import ComunicationIcon from "../assets/interpersonel-skills/communication.svg";
import crownIcon from "../assets/interpersonel-skills/crown.svg";
import descissionIcon from "../assets/interpersonel-skills/descision.svg";
import inTimeIcon from "../assets/interpersonel-skills/intime.svg";
import problemIcon from "../assets/interpersonel-skills/problem.svg";
import teamIcon from "../assets/interpersonel-skills/team.svg";
import timeIcon from "../assets/interpersonel-skills/timemanagement.svg";
import codingIcon from "../assets/Interests/coding.svg";
import gamingIcon from "../assets/Interests/gaming.svg";
import readingIcon from "../assets/Interests/reading.svg";
import sportsIcon from "../assets/Interests/sports.svg";
import travelIcon from "../assets/Interests/travel.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__top">
          <Marquee speed={50}>
            <ul>
              <li>
                <img src={ComunicationIcon} alt="communcation-icon" />
                <p>Communication</p>
              </li>
              <li>
                <img src={descissionIcon} alt="Decision-icon" />
                <p>Decision Making</p>
              </li>
              <li>
                <img src={crownIcon} alt="Leadership-icon" />
                <p>Leadership</p>
              </li>
              <li>
                <img src={teamIcon} alt="Teamwork-icon" />
                <p>Teamwork</p>
              </li>
              <li>
                <img src={problemIcon} alt="Problem-icon" />
                <p>Problem Solving</p>
              </li>
              <li>
                <img src={timeIcon} alt="Time-icon" />
                <p>Time Management</p>
              </li>
              <li>
                <img src={inTimeIcon} alt="Punctuality-icon" />
                <p>Punctuality</p>
              </li>
            </ul>
          </Marquee>
        </div>
        <div className="footer__bottom">
          <div className="interest">
            <div className="intrest_img">
              <img src={codingIcon} alt="code-logo" />
            </div>
            <div className="intrest_name">
              <p>Coding</p>
            </div>
          </div>
          <div className="interest">
            <div className="intrest_img">
              <img src={gamingIcon} alt="game-logo" />
            </div>
            <div className="intrest_name">
              <p>Gaming</p>
            </div>
          </div>
          <div className="interest">
            <div className="intrest_img">
              <img src={readingIcon} alt="read-logo" />
            </div>
            <div className="intrest_name">
              <p>Reading</p>
            </div>
          </div>
          <div className="interest">
            <div className="intrest_img">
              <img src={sportsIcon} alt="sports-logo" />
            </div>
            <div className="intrest_name">
              <p>Sports</p>
            </div>
          </div>
          <div className="interest">
            <div className="intrest_img">
              <img src={travelIcon} alt="travel-logo" />
            </div>
            <div className="intrest_name">
              <p>Traveling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
