import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import style from './style.module.scss'
import axios from 'axios';
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



export default function LearnMore({ calculatorResult }) {
  const { t } = useTranslation();

  const [inn, setInn] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dataProcessingConsent, setDataProcessingConsent] = useState(false);
  const [informationConsent, setInformationConsent] = useState(false);

  const fetchCompanyName = () => {
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
    const token = "beb168dcb3f3bd4e1bed3d1b8a381b8522483657";

    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
      },
      body: JSON.stringify({ query: inn })
    };

    fetch(url, options)
      .then(response => response.json())
      .then(result => {
        if (result.suggestions && result.suggestions.length > 0) {
          setCompanyName(result.suggestions[0].value);
        } else {
          setCompanyName("");
        }
      })
      .catch(error => console.log("Error", error));
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    const formattedValue = formatPhoneNumber(value);
    setPhoneNumber(formattedValue);
  };

  const formatPhoneNumber = (value) => {
    // Удаляем все символы, кроме цифр
    const cleanedValue = value.replace(/\D/g, '');

    // Создаем маску для номера телефона
    let maskedValue = '+_(___) ___-__-__';

    // Заменяем нижние подчеркивания на цифры из введенного значения
    let digitIndex = 0;
    for (let i = 0; i < maskedValue.length; i++) {
      if (maskedValue[i] === '_' && digitIndex < cleanedValue.length) {
        maskedValue = maskedValue.slice(0, i) + cleanedValue[digitIndex] + maskedValue.slice(i + 1);
        digitIndex++;
      }
    }

    return maskedValue;
  };
  const [formData, setFormData] = useState({
    subject: 'Testing from GoLang',
  });
  const [source, setSource] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('source');
    setSource(source || 'Посадочная страница Карбон Копи'); // Если source не задан, установим пустую строку в состояние

    // Ваш остальной код здесь
  }, []);
  const firstEmail = 'info@carboncopy.ru';
  const secondEmail = 'd.zelenov@carboncopy.ru';
  const subjectText = `Новый лид! ${companyName}`
  const messageText = `Вам поступила новая заявка!\n\nИсточник: ${source}\n\nИНН: ${inn}\nНазвание компании: ${companyName}\nКонтактное лицо: ${firstName}\nEmail: ${email}\nТелефон: ${phoneNumber}\n\nКомментарий к заявке: ${comment}\n\nПредварительный расчет: ${calculatorResult}`;
  const resetForm = () => {
    setInn('');
    setCompanyName('');
    setFirstName('');
    setEmail('');
    setComment('');
    setPhoneNumber('');
    setDataProcessingConsent(false);
    setInformationConsent(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();


    axios.post('https://proxy.ctrl.lc:3001/api/v1/email/', {
      email: firstEmail,
      subject: subjectText,
      message: messageText,
    })
      .then((response) => {

        resetForm();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    axios.post('https://proxy.ctrl.lc:3001/api/v1/email/', {
      email: secondEmail,
      subject: subjectText,
      message: messageText,
    })
      .then((response) => {
        console.log('Success:', response.data);
        resetForm();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    resetForm();
    setIsConfirmationModalOpen(true);

  };


  const handleKeyDown = (event) => {
    if (event.key === 'Backspace') {
      const { selectionStart, selectionEnd } = event.target;

      if (selectionStart === selectionEnd && selectionStart > 0 && phoneNumber[selectionStart - 1]) {
        // Если нажат Backspace, курсор находится в начале или конце поля ввода,
        // и предыдущий символ является цифрой 7, удаляем символ 7
        const updatedNumber = phoneNumber.slice(0, selectionStart - 1) + phoneNumber.slice(selectionStart);
        setPhoneNumber(updatedNumber);
        event.preventDefault();
      }
    }
  };
  const handleInvalidPhone = (event) => {
    event.target.setCustomValidity('Пожалуйста, введите корректное номер телефона.');
  };
  const handleInvalidEmail = (event) => {
    event.target.setCustomValidity('Пожалуйста, введите корректное email.');
  };
  const handleInvalidFirstName = (event) => {
    event.target.setCustomValidity('Пожалуйста, заполните поле.');
  };
  const handleInvalidInn = (event) => {
    event.target.setCustomValidity('Пожалуйста, заполните поле корректно.');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const openModal1 = () => {
    setIsOpen1(true);
  };

  const closeModal1 = () => {
    setIsOpen1(false);
  };
  const openModal2 = () => {
    setIsOpen2(true);
  };

  const closeModal2 = () => {
    setIsOpen2(false);
  };


  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const closeConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className={style.learnMore}>
        <div className="container">
          <div className={style.learnMore__container}>
            <motion.div custom={1} variants={textAnimation} className={style.inform}>
              <h4 className={style.inform__title}>{t('learnMore__title')}</h4>
              <div className={style.inform__quation}>
                <h6>{t('learnMore__quation__title1')}</h6>
                <p>{t('learnMore__quation__subtitle1')}</p>
              </div>
              <div className={style.inform__quation}>
                <h6>{t('learnMore__quation__title2')}</h6>
                <p>{t('learnMore__quation__subtitle2')}</p>
              </div>
              <p className={style.inform__more}>{t('learnMore__quation__more')}</p>
            </motion.div>
            <motion.div custom={2} variants={textAnimation} className={style.form}>
              <form onSubmit={handleSubmit}>
                <div>
                  <input className={style.input} onBlur={fetchCompanyName} onInvalid={handleInvalidInn} pattern="^\d{10}$" type="text" placeholder={t('inn')} name="inn" value={inn} onChange={(e) => setInn(e.target.value)} required />
                </div>
                <div>
                  <input className={style.input} type="text" name="companyName" placeholder={t('nameCompany')} value={companyName} readOnly />
                </div>
                <div>
                  <input className={style.input} onInvalid={handleInvalidFirstName} pattern="[A-Za-zА-Яа-яЁё\s]+" type="text" name="firstName" placeholder={t('firstName')} value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div>
                  <input className={style.input} onInvalid={handleInvalidEmail} type="email" name="email" placeholder={t('email')} value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                  <input
                    className={style.input}
                    type="tel"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      handleInputChange(e);
                    }}
                    onInvalid={handleInvalidPhone}
                    onKeyDown={handleKeyDown}
                    placeholder="+7 (___) ___-__-__"
                    name="phone"
                    pattern="\+7\([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}"
                    value={phoneNumber}
                    required
                  />
                </div>
                <div>
                  <input className={style.textarea} placeholder={t('comment')} as="textarea" name="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                </div>
                <div className={style.button} >
                  <button type="submit" >
                    {t('send')}
                  </button>
                </div>
                <div className={style.checkbox}>
                  <input type="checkbox" checked={dataProcessingConsent} onChange={(e) => setDataProcessingConsent(e.target.checked)} name="dataProcessingConsent" required />
                  {t('Igive')}<span onClick={openModal1}>{t('Approval')}</span>{t('personalData')}
                </div>
                <div className={style.checkbox}>
                  <input type="checkbox" checked={informationConsent} onChange={(e) => setInformationConsent(e.target.checked)} name="informationConsent" required />
                  {t('Igive')}<span onClick={openModal2}>{t('Approval')}</span>{t('informationMaterials')}
                </div>
              </form>
            </motion.div>
          </div>
          {isOpen1 && (
            <div className={style.modal}>
              <div className={style.modal__content}>
                <h2>{t('personalData__title')}</h2>
                <p>{t('personalData__text1')}</p>
                <p>{t('personalData__text2')}</p>
                <p>{t('personalData__text3')}</p>
                <p>{t('personalData__text4')}</p>
                <p>{t('personalData__text5')}</p>
                <p>{t('personalData__text6')}</p>
                <p>{t('personalData__text7')}</p>
                <button onClick={closeModal1}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.63586 5.63599L18.3638 18.3639" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5.63586 18.364L18.3638 5.63609" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </button>
              </div>
            </div>
          )}
          {isOpen2 && (
            <div className={style.modal}>
              <div className={style.modal__content}>
                <h2>{t('informationMaterials__title')}</h2>
                <p>{t('informationMaterials__text1')}</p>
                <button onClick={closeModal2}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.63586 5.63599L18.3638 18.3639" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5.63586 18.364L18.3638 5.63609" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </button>
              </div>
            </div>
          )}
          {isConfirmationModalOpen && (
            <div className={style.modalOk}>
              <div className={style.modalOk__content}>
                <h2>Заявка отправлена. Мы с Вами свяжемся в течение 2-х рабочих дней.</h2>
                <button onClick={closeConfirmationModal}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.63586 5.63599L18.3638 18.3639" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.63586 18.364L18.3638 5.63609" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  )
}
