import React from "react";
import telegramImg from "../../img/telegram.png"
import phoneImg from "../../img/phone.png"
import whatsappImg from "../../img/whatsapp.png"
import logoImg from "../../img/logo_welbex.png"

function Header() {
  const navItems = [
    { id: 0, name: "Услуги", link: "#" }, { id: 1, name: "Виджеты", link: "#" }, { id: 2, name: "Интеграции", link: "#" }, { id: 3, name: "Кейсы", link: "#" }, { id: 4, name: "Сертификаты", link: "#" },
  ];

  return (
    <div className="header">
      <div className="header__logo">
        <img src={logoImg} alt="logo" />
        <p className="header__text">крупный интегратор CRM в Росcии и ещё 8 странах</p>
      </div>
      <div className="header__links">
        <ul className="list">
          {
            navItems.map((item) => {
              return (
                <li className="item">
                  <a className="item__link" href={item.link}>{item.name}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="header__contacts">
        <a href="tel:+75555555555" className="header__tel">+7 555 555-55-55</a>
        <div className="header__сhannels">
            <img src={telegramImg} alt="telegram" />
            <img src={phoneImg} alt="phone" />
            <img src={whatsappImg} alt="whatsapp" />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Header);