import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import desneyImg from "../assets/Projects/Disney.png";
import airImg from "../assets/Projects/Airbnb.png";
import twentyCenturyImg from "../assets/Projects/20Century.png";
import amazonImg from "../assets/Projects/Amazon.png";
import huluImg from "../assets/Projects/Hulu.png";
import itStoreImg from "../assets/Projects/itStore.png";
import myBraryImg from "../assets/Projects/MyBrary.png";
import netflixImg from "../assets/Projects/Netflix.png";
import teslaImg from "../assets/Projects/Tesla.png";
import Flip from "react-reveal/Flip";
import "./ProjectCard.css";
import { useTranslation } from "react-i18next";

const myArray = [
  {
    id: "1",
    CardImg: `${desneyImg}`,
    cardTitle: "Desney Plus Clone",
    CardText: [
      "React",
      "FireStore",
      "Redux",
      "Styled-Components",
      "Material-UI",
    ],
    liveLink: "https://disneyplus-clone-77bb2.web.app/",
    githubLink: "https://github.com/madjed-hue/Disney-Clone",
  },
  {
    id: "2",
    CardImg: `${airImg}`,
    cardTitle: "Airbnb Clone",
    CardText: ["React", "Firebase", "Redux", "Material-UI"],
    liveLink: "https://airbnb-clone-23da7.web.app/",
    githubLink: "https://github.com/madjed-hue/airbnb-clone",
  },
  {
    id: "3",
    CardImg: `${twentyCenturyImg}`,
    cardTitle: "The20th-Century Clone",
    CardText: ["React", "tmdb-api", "Styled-Components", "Material-UI"],
    liveLink: "https://th-centry-studio-clone.web.app/",
    githubLink: "https://github.com/madjed-hue/The20th-century-studio-clone",
  },
  {
    id: "4",
    CardImg: `${amazonImg}`,
    cardTitle: "Amazone Clone",
    CardText: ["React", "Firebase", "Styled-Components", "Material-UI"],
    liveLink: "https://clone-7360d.web.app",
    githubLink: "https://github.com/madjed-hue/Amazon-clone",
  },
  {
    id: "5",
    CardImg: `${huluImg}`,
    cardTitle: "Hulu Clone",
    CardText: ["React", "tmdb-api", "Material-UI", "React-flip-move"],
    liveLink: "https://tender-clone-3e078.web.app/",
    githubLink: "",
  },
  {
    id: "6",
    CardImg: `${itStoreImg}`,
    cardTitle: "IT.Book-Store Clone",
    CardText: ["React", "IT Bookstore API", "Material-UI"],
    liveLink: "https://book-store-rho.vercel.app/",
    githubLink: "https://github.com/madjed-hue/Book-store",
  },
  {
    id: "7",
    CardImg: `${myBraryImg}`,
    cardTitle: "myBrary",
    CardText: ["ejs", "mongodb", "express", "nodejs", "filepond"],
    liveLink: "https://mybrary-web-tech.herokuapp.com/",
    githubLink: "https://github.com/madjed-hue/MyBrary",
  },
  {
    id: "8",
    CardImg: `${netflixImg}`,
    cardTitle: "Netflix Clone",
    CardText: ["React", "Redux", "Firebase Auth", "tmdb api"],
    liveLink: "https://netflix-clone-249d5.firebaseapp.com/",
    githubLink: "https://github.com/madjed-hue/Netflix-clone",
  },
  {
    id: "9",
    CardImg: `${teslaImg}`,
    cardTitle: "Tesla Clone",
    CardText: ["React", "Redux", "Firebase", "react-reveal"],
    liveLink: "https://tesla-clone-sigma.vercel.app/",
    githubLink: "https://github.com/madjed-hue/Tesla-Clone",
  },
];

const ProjectCard = () => {
  const { t } = useTranslation();
  return (
    <div className="projectCard">
      <Row>
        {myArray.map((arr) => {
          return (
            <Col key={arr.id}>
              <Flip left>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={arr.CardImg} />
                  <Card.Body>
                    <Card.Title>{arr.cardTitle}</Card.Title>
                    <Card.Text>{arr.CardText.toString().split("")}</Card.Text>
                    <div className="web__links">
                      <a
                        href={arr.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("live_preview")}
                      </a>
                      <a
                        href={arr.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("source_code")}
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Flip>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ProjectCard;
