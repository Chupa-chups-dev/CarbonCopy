import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import style from './style.module.scss'
import { useTranslation } from "react-i18next"
import i18next from 'i18next'
import Logo from './../../assets/Logo.png'
import Logo2 from './../../assets/Logo2.png'
import Logo3 from './../../assets/LogoMVideo.svg'
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

export default function Home() {
    const { t } = useTranslation();
    return (
        <>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                className={style.home}>
                <div className="container">
                    <div className={style.languages}>
                        <button onClick={() => {
                            i18next.changeLanguage('ru')
                        }}>ru</button><span>/</span><button onClick={() => {
                            i18next.changeLanguage('en')
                        }}>en</button>
                    </div>
                    <div className={style.logo}>
                        <img className={style.logo1} src={Logo} alt="Logo" />
                        <img className={style.logo3} src={Logo3} alt="Logo" />
                        <img className={style.logo2} src={Logo2} alt="Logo" />
                    </div>
                    <motion.h1  custom={1} variants={textAnimation} className={style.title1}>{t('MVideo__title')}</motion.h1>
                </div>
            </motion.div>
        </>
    )
}
