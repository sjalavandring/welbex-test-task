import React from "react";

function MainContent() {
  return (
    <div className="main-content">
        <div className="box-company">
            <h1 className="box-company__title">Зарабатывайте больше</h1>
            <p className="box-company__name">с WELBEX</p>
            <p className="box-company__text">Развиваем и контролируем продажи за вас</p>
        </div>
        <div className="info-company">
            <h2 className="info-company__title">Вместе с <span className="info-company__grad">бесплатной</span> <span className="info-company__grad">консультацией</span> мы дарим:</h2>
            <div className="company-grid__grid">
                <div className="company-grid__item">
                    <span className="company-grid__title"></span>
                    <p className="company-grid__text">30 готовых решений</p>
                </div>
                <div className="company-grid__item">
                    <span className="company-grid__title"></span>
                    <p className="company-grid__text">с показателями вашего бизнеса</p>
                </div>
                <div className="company-grid__item">
                    <span className="company-grid__title"></span>
                    <p className="company-grid__text">отдела продаж и CRM системы</p>
                </div>
                <div className="company-grid__item">
                    <span className="company-grid__title"></span>
                    <p className="company-grid__text">использования CRM</p>
                </div>
            </div>
            <div className="info-company__btn">
                <button className="button" type="button">Получить консультацию</button>
            </div>
        </div>
    </div>
  );
}

export default React.memo(MainContent);