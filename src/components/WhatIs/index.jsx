import React from 'react'
import { motion } from 'framer-motion'
import style from './style.module.scss'
import Logo from './../../assets/Logo.png'
import WhatIsImg from './../../assets/WhatIsImg.jpg'
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

export default function WhatIs() {
  const { t } = useTranslation();
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className={style.whatIs}>
        <div className="container">
          <div className={style.whatIs__container}>
            <motion.div
              custom={1} variants={textAnimation}
              className={style.inform}>
              <img src={Logo} alt="Logo" />
              <h4 className={style.title}>{t('whatIs__title')}<br /> HaaS / DaaS</h4>
              <div>
                <span>1. HaaS - Hardware as a Service</span>
                <p>{t('whatIs__inform__text1')}</p>
              </div>
              <div>
                <span>2. DaaS - Device as a Service</span>
                <p>{t('whatIs__inform__text2')}</p>
              </div>
            </motion.div>
            <motion.div
              custom={2} variants={textAnimation}
              className={style.img}>
              <img src={WhatIsImg} alt="Img" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
