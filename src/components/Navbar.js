import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Facebook from "../assets/social/facebook-3.svg";
import Github from "../assets/social/github.svg";
import Instagram from "../assets/social/instagram.svg";
import LinkedIn from "../assets/social/linkedin-icon.svg";
import DarkMode from "./DarkMode";
import { useTranslation } from "react-i18next";
import Dropdown from "react-bootstrap/Dropdown";
import "./Navbar.css";
import { Button } from "bootstrap";
import "flag-icon-css/css/flag-icons.min.css";
import i18next from "i18next";
import Cookies from "js-cookie";

const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
  },
];

const TranslateIcon = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-translate"
    viewBox="0 0 16 16"
  >
    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
  </svg>
);

const BurgerMenu = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-list"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
    />
  </svg>
);

const Navbar = () => {
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    // console.log(document.body.dir);
  }, [currentLanguage]);

  return (
    <div className="navbar">
      <div className="container">
        <nav className="content">
          <div className="name">
            <a href="/">
              <h4>{t("my_name")}</h4>
            </a>
          </div>
          <div className="nav__buttons">
            <a href="/home">{t("home")}</a>
            <a href="/projects">{t("projects")}</a>
            <a href="/about">{t("about")}</a>
          </div>
          <div className="nav__social  desk__nav">
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
            <DarkMode />
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-basic">
                <TranslateIcon />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {languages.map(({ code, name, country_code }) => {
                  return (
                    <Dropdown.Item
                      elementType={Button}
                      key={country_code}
                      onClick={() => i18next.changeLanguage(code)}
                      disabled={code === currentLanguageCode}
                    >
                      <span
                        className={`flag-icon flag-icon-${country_code} mx-2`}
                        style={{
                          opacity: code === currentLanguageCode ? 0.3 : 1,
                        }}
                      ></span>
                      {name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="phone__nav">
            <div className="nav__social">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <BurgerMenu />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    href="https://www.facebook.com/profile.php?id=100015783588265"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Facebook}
                      alt="Facebook-logo"
                      className="theSvg"
                    />
                    Facebook
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="https://github.com/madjed-hue"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Github} alt="Github-logo" className="theSvg" />
                    Github
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="https://www.instagram.com/fateh_bdf/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Instagram}
                      alt="Instagram-logo"
                      className="theSvg"
                    />
                    Instagram
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="https://www.linkedin.com/in/beddiaf-fateh-85a060159/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={LinkedIn}
                      alt="LinkedIn-logo"
                      className="theSvg"
                    />
                    LinkedIn
                  </Dropdown.Item>
                  <Dropdown.Item elementType={Button}>
                    <DarkMode />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-basic">
                  <TranslateIcon />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {languages.map(({ code, name, country_code }) => {
                    return (
                      <Dropdown.Item
                        elementType={Button}
                        key={country_code}
                        onClick={() => i18next.changeLanguage(code)}
                        disabled={code === currentLanguageCode}
                      >
                        <span
                          className={`flag-icon flag-icon-${country_code} mx-2`}
                          style={{
                            opacity: code === currentLanguageCode ? 0.3 : 1,
                          }}
                        ></span>
                        {name}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
