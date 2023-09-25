import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import style from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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

export default function Partners() {
  const { t } = useTranslation();
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className={style.partners}
      >
        <div className="container">
          <motion.h2
            custom={1}
            className={style.title}
            variants={textAnimation}
          >
            {t("partners__title")}
          </motion.h2>
          <motion.p custom={2} variants={textAnimation} className={style.subtitle}>{t("partners__subtitle")}</motion.p>
          <motion.div variants={textAnimation}  custom={2} className={style.button}>
            <Link to="/with-Mvideo">{t("follow")}</Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
