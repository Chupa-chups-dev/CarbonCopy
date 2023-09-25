import React from 'react'
import { motion } from 'framer-motion'
import style from './style.module.scss'
import Logo from './../../assets/Logo2.png'
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

export default function Advantages() {
  const { t } = useTranslation();
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className={style.advantages}>
        <div className="container">
          <div className={style.containerTop}>
            <motion.div custom={1} variants={textAnimation} className={style.title}>
              <h4>{t('advantages__title')}</h4>
              <p>HaaS <span>/</span> DaaS</p>
            </motion.div>
            <div className={style.logo}>
              <img src={Logo} alt="Logo" />
            </div>
          </div>
          <div className={style.containerDown}>
            <motion.div custom={2} variants={textAnimation} className={style.example}>
              <div className={style.example__number}>
                <p>1.</p>
              </div>
              <p className={style.example__title}>{t('advantages__example__title1')}</p>
              <p className={style.example__subtitle}>​{t('advantages__example__subtitle1')}​</p>
            </motion.div>
            <motion.div custom={3} variants={textAnimation} className={style.example}>
              <div className={style.example__number}>
                <p>2.</p>
              </div>
              <p className={style.example__title}>{t('advantages__example__title2')}</p>
              <p className={style.example__subtitle}>​{t('advantages__example__subtitle2')}</p>
            </motion.div>
            <motion.div custom={4} variants={textAnimation} className={style.example}>
              <div className={style.example__number}>
                <p>3.</p>
              </div>
              <p className={style.example__title}>{t('advantages__example__title3')}</p>
              <p className={style.example__subtitle}>​{t('advantages__example__subtitle3')}​</p>
            </motion.div>
            <motion.div custom={5} variants={textAnimation} className={style.example}>
              <div className={style.example__number}>
                <p>4.</p>
              </div>
              <p className={style.example__title}>{t('advantages__example__title4')}</p>
              <p className={style.example__subtitle}>​{t('advantages__example__subtitle4')}​</p>
            </motion.div>
            <motion.div custom={6} variants={textAnimation} className={style.example}>
              <div className={style.example__number}>
                <p>5.</p>
              </div>
              <p className={style.example__title}>{t('advantages__example__title5')}</p>
              <p className={style.example__subtitle}>​{t('advantages__example__subtitle5')}​</p>
            </motion.div>
            <motion.div custom={7} variants={textAnimation} className={style.example}>
              <div className={style.example__number}>
                <p>6.</p>
              </div>
              <p className={style.example__title}>{t('advantages__example__title6')}</p>
              <p className={style.example__subtitle}>​{t('advantages__example__subtitle6')}</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
