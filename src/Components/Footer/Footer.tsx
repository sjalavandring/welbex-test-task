import React from "react";
import telegramImg from "../../img/telegram.png"
import phoneImg from "../../img/phone.png"
import whatsappImg from "../../img/whatsapp.png"

function Footer() {
  const companyInfo = [
    { id: 0, name: "Партнёрская программа", link: "#"}, { id: 1, name: "Вакансии", link: "#"}
  ];
  const menuInfoColumn1 = [
    {id: 0, name: "Расчёт стоимости", link: "#" }, {id: 1, name: "Услуги", link: "#" }, {id: 3, name: "Виджеты", link: "#" }, {id: 4, name: "Интеграции", link: "#" }, {id: 5, name: "Наши клиенты", link: "#" }
  ]
  const menuInfoColumn2 = [
    {id: 0, name: "Кейсы", link: "#" }, {id: 1, name: "Благодарственные письма", link: "#" }, {id: 3, name: "Сертификаты", link: "#" }, {id: 4, name: "Блог на Youtube", link: "#" }, {id: 5, name: "Вопрос / Ответ", link: "#" }
  ]

  return (
    <div className="footer">
      <div className="footer__box">
        <div className="footer__item">
          <span className="footer__title">О компании</span>
          <ul className="list list-column">
              {
                companyInfo.map((item) => {
                  return (
                    <li className="item item__margin">
                      <a className="item__link" href={item.link}>{item.name}</a>
                    </li>
                  )
                })
              }
          </ul>
        </div>
        <div className="footer__item footer__item-menu">
          <span className="footer__title">Меню</span>
          <div className="footer__menu">
            <ul className="list list-column">
                {
                  menuInfoColumn1.map((item) => {
                    return (
                      <li className="item item__margin">
                        <a className="item__link" href={item.link}>{item.name}</a>
                      </li>
                    )
                  })
                }
            </ul>
            <ul className="list list-column">
                {
                  menuInfoColumn2.map((item) => {
                    return (
                      <li className="item item__margin">
                        <a className="item__link" href={item.link}>{item.name}</a>
                      </li>
                    )
                  })
                }
            </ul>
          </div>
        </div>
        <div className="footer__item footer__item-cont">
          <span className="footer__title">Контакты</span>
          <div className="footer-cont">
            <a href="tel:+75555555555" className="footer-cont__tel header__tel">+7 555 555-55-55</a>
            <div className="footer-cont__box">
              <img src={telegramImg} alt="telegram" />
              <img src={phoneImg} alt="phone" />
              <img src={whatsappImg} alt="whatsapp" />
            </div>
            <span className="footer-cont__street">Москва, Путевой проезд 3с1, к 902</span>
          </div>
        </div>
      </div>
      <div className="footer__copirate">
        <p className="footer__license">©WELBEX 2022. Все права защищены.</p>
        <a className="footer__policy" href="#">Политика конфиденциальности</a>
      </div>
    </div>
  );
}

export default React.memo(Footer);