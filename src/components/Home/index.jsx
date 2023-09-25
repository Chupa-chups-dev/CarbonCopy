import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import style from './style.module.scss'
import { useTranslation } from "react-i18next"
import i18next from 'i18next'
import { Link } from 'react-router-dom'
import Logo from './../../assets/Logo.png'
import Logo2 from './../../assets/Logo2.png'
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
    const textList = [
        t('home__subtitle1'),
        t('home__subtitle2'),
        t('home__subtitle3'),
        t('home__subtitle4'),
        t('home__subtitle5'),
        t('home__subtitle6'),
        t('home__subtitle7'),
        t('home__subtitle8'),
        t('home__subtitle9'),
        t('home__subtitle10'),
        t('home__subtitle11')
    ];
    const delay = 4000; // Задержка между сменой строк (в миллисекундах)
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textList.length);
        }, delay);

        return () => clearTimeout(timer);
    }, [currentIndex, textList.length, delay]);
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
                        <img className={style.logo2} src={Logo2} alt="Logo" />
                    </div>
                    <motion.h1  custom={1} variants={textAnimation} className={style.title1}>{t('home__title1')}</motion.h1>
                    <motion.h1  custom={1} variants={textAnimation} className={style.title2}>{t('home__title2')}</motion.h1>
                    <motion.p  custom={2} variants={textAnimation} className={style.subtitle}>{textList[currentIndex]}</motion.p>
                </div>
            </motion.div>
        </>
    )
}
