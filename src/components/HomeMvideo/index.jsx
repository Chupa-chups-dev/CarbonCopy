import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import style from "./style.module.scss";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Logo from "./../../assets/Logo.png";
import Logo2 from "./../../assets/Logo2.png";
import { Link } from 'react-router-dom'
import Logo3 from "./../../assets/LogoMVideo.svg";
import Arrow from "./../../assets/fi-rr-arrow-right.svg";
const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className={style.home}
      >
        <div className={style.container}>
          <div className={style.BackToHome}>
              <Link className={style.link} to="/">Carbon Copy</Link>
              <img src={Arrow} alt="" />
              <Link to="https://www.mvideo.ru/">MVideo</Link>
          </div>
          <div className={style.languages}>
            <button
              onClick={() => {
                i18next.changeLanguage("ru");
              }}
            >
              ru
            </button>
            <span>/</span>
            <button
              onClick={() => {
                i18next.changeLanguage("en");
              }}
            >
              en
            </button>
          </div>
          <div className={style.logo}>
            <Link to="/">
              <img className={style.logo1} src={Logo} alt="Logo" />
            </Link>
            <Link to="/">
              <img className={style.logo3} src={Logo3} alt="Logo" />
            </Link>
            <img className={style.logo2} src={Logo2} alt="Logo" />
          </div>
          <motion.h1
            custom={1}
            variants={textAnimation}
            className={style.title1}
          >
            {t("MVideo__title")}
          </motion.h1>
          <motion.p
            custom={2}
            variants={textAnimation}
            className={style.subtitle}
          >
            {t("MVideo__subtitle")}
          </motion.p>
        </div>
      </motion.div>
    </>
  );
}
