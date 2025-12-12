import React from "react";

import icon1 from "../assets/icons/support1.svg";
import icon2 from "../assets/icons/support2.svg";
import icon3 from "../assets/icons/support3.svg";
import icon4 from "../assets/icons/support4.svg";
import icon5 from "../assets/icons/support5.svg";
import icon6 from "../assets/icons/support6.svg";
import icon7 from "../assets/icons/support7.svg";
import icon8 from "../assets/icons/support8.svg";


export default function Features() {
  return (
    <section className="section features">
      <div className="container">
        <h2 className="section-title">Поддержка от Drupal-coder</h2>

        <div className="features-grid">
          <div className="feature">
            <div className="feature-num">01</div>
            <h4>Постановка задачи по Email</h4>
            <p>Удобная и привычная модель, при которой задачи фиксируются и никогда не теряются.</p>

            <img src={icon1} className="feature-icon" alt="" />
          </div>

          <div className="feature">
            <div className="feature-num">02</div>
            <h4>Система Helpdesk – отчетность, прозрачность</h4>
            <p>Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете через браузер.</p>
            <img src={icon2} className="feature-icon" alt="" />
          </div>

          <div className="feature">
            <div className="feature-num">03</div>
            <h4>Расширенная техническая поддержка</h4>
            <p>Возможность организации расширенной техподдержки с 6:00 до 22:00 без выходных.</p>
            <img src={icon3} className="feature-icon" alt="" />
          </div>

          <div className="feature">
            <div className="feature-num">04</div>
            <h4>Персональный менеджер проекта</h4>
            <p>Ваш менеджер всегда в курсе состояния проекта и готов ответить на любые вопросы.</p>
            <img src={icon4} className="feature-icon" alt="" />
          </div>

          <div className="feature">
            <div className="feature-num">05</div>
            <h4>Удобные способы оплаты</h4>
            <p>Безналичный расчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, Paypal.</p>
            <img src={icon5} className="feature-icon" alt="" />
          </div>

          <div className="feature">
            <div className="feature-num">06</div>
            <h4>Работаем с SLA и NDA</h4>
            <p>Работа в рамках соглашений о конфиденциальности и об уровне качества работ.</p>
            <img src={icon6} className="feature-icon" alt="" />
          </div>

          <div className="feature">
            <div className="feature-num">07</div>
            <h4>Штатные специалисты</h4>
            <p>Надежные штатные специалисты, никаких фрилансеров.</p>
            <img src={icon7} className="feature-icon" alt="" />
          </div>

          <div className="feature">
            <div className="feature-num">08</div>
            <h4>Удобные каналы связи</h4>
            <p>Консультации по телефону, скайпу, в мессенджерах.</p>
            <img src={icon8} className="feature-icon" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
