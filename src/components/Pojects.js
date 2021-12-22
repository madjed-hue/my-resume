import React from "react";
import Row from "react-bootstrap/Row";
import "./Projects.css";
import ProjectSlider from "./ProjectSlider";
import ProjectCard from "./ProjectCard";

const Pojects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="project__content">
          <div className="project__slider">
            <Row>
              <ProjectSlider />
            </Row>
          </div>
          <div className="project__cards">
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pojects;
