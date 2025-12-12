import React from "react";

export default function Pricing() {
  return (
    <section className="section pricing">
      <div className="container">
        <h2 className="section-title">Тарифы</h2>
        <p className="section-sub">Выберите подходящий план обслуживания</p>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="plan-header">
              <h3>Базовый</h3>
              <div className="price">€99 / мес</div>
            </div>
            <ul>
              <li>Мониторинг 24/7</li>
              <li>Еженедельный бэкап</li>
              <li>Поддержка 5 заявок</li>
            </ul>
            <button className="btn-primary">Выбрать</button>
          </div>

          <div className="pricing-card popular">
            <div className="plan-header">
              <h3>Профессиональный</h3>
              <div className="price">€199 / мес</div>
            </div>
            <ul>
              <li>Приоритетная поддержка</li>
              <li>Ежедневный бэкап</li>
              <li>Оптимизация скорости</li>
            </ul>
            <button className="btn-primary">Выбрать</button>
          </div>

          <div className="pricing-card">
            <div className="plan-header">
              <h3>Enterprise</h3>
              <div className="price">По запросу</div>
            </div>
            <ul>
              <li>Индивидуальные SLA</li>
              <li>Выделенный инженер</li>
              <li>Интеграции и миграции</li>
            </ul>
            <button className="btn-primary">Узнать больше</button>
          </div>
        </div>
      </div>
    </section>
  );
}
