import React from "react";
import "./Banner.css";
import MyProfileImg from "../assets/prodile-image.jpg";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
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
                {t("para_hello")}
                <span className="span-Name">{t("my_name")}</span>
                {t("rest_para")}
              </p>
            </div>
            <div className="rightSide__bottom">
              <a href="mailto:madjedbdf@gmail.com">{t("contact_me")}</a>
              <a
                href="https://pdfhost.io/v/6gTfn.Wgj_FATEH_BEDDIAF_"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("my_resumer")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
