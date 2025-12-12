import React from "react";

import ico1 from "../assets/icons/competency-1.svg";
import ico2 from "../assets/icons/competency-2.svg";
import ico3 from "../assets/icons/competency-3.svg";
import ico4 from "../assets/icons/competency-4.svg";
import ico5 from "../assets/icons/competency-5.svg";
import ico6 from "../assets/icons/competency-6.svg";
import ico7 from "../assets/icons/competency-7.svg";
import ico8 from "../assets/icons/competency-8.svg";

export default function Services() {
  const services = [
    {
      title: "",
      text: "Добавление информации на сайт, создание новых разделов",
      icon: ico1,
    },
    {
      title: "",
      text: "Разработка и оптимизация модулей сайта",
      icon: ico2,
    },
    {
      title: "",
      text: "Интеграция с CRM, 1C, платежными системами, любыми веб-сервисами",
      icon: ico3,
    },
    {
      title: "",
      text: "Любые доработки функционала и дизайна",
      icon: ico4,
    },
    {
      title: "",
      text: "Аудит и мониторинг безопасности Drupal сайтов",
      icon: ico5,
    },
    {
      title: "",
      text: "Миграция, импорт контента и апгрейд Drupal",
      icon: ico6,
    },
    {
      title: "",
      text: "Оптимизация и ускорение Drupal-сайтов",
      icon: ico7,
    },
    {
      title: "",
      text: "Веб-маркетинг, консультации и работы по SEO",
      icon: ico8,
    },
  ];

  return (
    <section className="section services">
      <div className="container">
        <h2 className="section-title">13 лет совершенствуем компетенции в Друпал поддержке!</h2>
        <p className="section-sub">
          Разрабатываем и оптимизируем модули, расширяем функциональность сайтов, обновляем дизайн
        </p>

        <div className="services-grid">
          {services.map((srv, i) => (
            <div className="service-card" key={i}>
              <div className="service-ico">
                <img src={srv.icon} alt={srv.title} />
              </div>
              <h3>{srv.title}</h3>
              <p>{srv.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
