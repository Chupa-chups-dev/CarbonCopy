import React from 'react'
import { motion } from 'framer-motion'
import style from './style.module.scss'
import { useTranslation } from "react-i18next"


const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },

  }),
}
export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className={style.aboutUs}>
        <div className="container">
          <motion.h2 custom={1} variants={textAnimation} className={style.title}>{t('aboutUs__title')}</motion.h2>
          <motion.h4 custom={2} variants={textAnimation} className={style.decisions__title}>{t('decisions__title')}</motion.h4>
          <motion.div custom={3} variants={textAnimation}  className={style.decisions}>
            <div className={style.decisions__example}>
              <div>
                <p>{t('decisions__text1')}</p>
              </div>
              <p className={style.decisions__example__text}><span>Carbon Copy</span>{t('decisions__example__text1')}</p>
            </div>
            <div className={style.decisions__example}>
              <div>
                <p>{t('decisions__text2')}</p>
              </div>
              <p className={style.decisions__example__text}><span>Carbon Copy</span>{t('decisions__example__text2')}</p>
            </div>
            <div className={style.decisions__example}>
              <div>
                <p>{t('decisions__text3')}</p>
              </div>
              <p className={style.decisions__example__text}><span>Carbon Copy</span>{t('decisions__example__text3')}</p>
            </div>
            <div className={style.decisions__example}>
              <div>
                <p>{t('decisions__text4')}</p>
              </div>
              <p className={style.decisions__example__text}><span>Carbon Copy</span>{t('decisions__example__text4')}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
