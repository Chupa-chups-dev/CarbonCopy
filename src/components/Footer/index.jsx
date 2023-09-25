import React from 'react'
import style from './style.module.scss'
import logo from './../../assets/LogoFooter.png'

export default function Footer() {
  return (
    <>
      <div className={style.footer}>
        <div className="container">
          <div className={style.footer__container}>
            <ul>
              <li><a href="tel:+74994605810">+7 (499) 460-58-10</a></li>
              <li><a href="mailto:info@carboncopy.ru">info@carboncopy.ru</a></li>
              <li>г. Москва, Большой Гнездниковский пер., д. 1, стр. 2</li>
            </ul>
            <img src={logo} alt="logo" />
          </div>
          <p className={style.copyright}><a href="/">© 2021 Carbon Copy</a> | <a href="/">PopularFX Theme</a></p>
        </div>
      </div>
    </>
  )
}
