import React, { useState } from "react";
import bgVideo from "../assets/video/video.mp4";
import heroIcon from "../assets/icons/cup.png";
import supportIcon from "../assets/icons/cup.png";

// 👉 Добавляем SVG иконки
import icon1 from "../assets/icons/cup.png";


export default function Header({ onOpenModal }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState(false);

  return (
    <header className="header">
      <video
        className="header__video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="header__overlay" />

      <div className="header__content">
        <nav className="nav">
          <div className="logo">Drupal-coder</div>

          {/* Desktop menu */}
          <ul className="nav__list desktop">
            <li className="has-sub">
              Администрирование
              <ul className="submenu">
                <li>Миграция</li>
                <li>Бэкапы</li>
                <li>Аудит безопасности</li>
                <li>Оптимизация скорости</li>
                <li>Переезд на HTTPS</li>
              </ul>
            </li>
            <li>Продвижение</li>
            <li>Реклама</li>
            <li>О нас</li>
          </ul>

          {/* Burger */}
          <div
            className={`burger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>

          {/* MOBILE MENU */}
          <ul className={`nav__list mobile ${menuOpen ? "open" : ""}`}>
            <li onClick={() => setSubmenu(!submenu)}>
              Администрирование ▼
            </li>

            {submenu && (
              <ul className="mobile-submenu">
                <li>Миграция</li>
                <li>Бэкапы</li>
                <li>Аудит безопасности</li>
                <li>Оптимизация скорости</li>
                <li>Переезд на HTTPS</li>
              </ul>
            )}

            <li>Продвижение</li>
            <li>Реклама</li>
            <li>О нас</li>
          </ul>
        </nav>

        <div className="header-grid">
  {/* ЛЕВАЯ КОЛОНКА */}
  <div className="header-left">
    <h1>Поддержка сайтов на Drupal</h1>
    <p>
      Сопровождение и поддержка сайтов на CMS Drupal любых версий и
      запущенности
    </p>

    <button className="btn-primary" onClick={onOpenModal}>
      Связаться с нами
    </button>
  </div>

  {/* ПРАВАЯ КОЛОНКА */}
  <div className="header-features">
  <div className="feature-item">
    

    <div>
      <div className="feature-title">#1</div>
      <div className="feature-desc">Drupal-разработчик в России по версии Рейтинга Рунета</div>
    </div>
  </div>

  <div className="feature-item">
    <div>
      <div className="feature-title">3+</div>
      <div className="feature-desc">средний опыт специалистов более 3 лет</div>
    </div>
  </div>

  <div className="feature-item">
    <div>
      <div className="feature-title">14</div>
      <div className="feature-desc">лет опыта в сфере Drupal</div>
    </div>
  </div>

  <div className="feature-item">
    <div>
      <div className="feature-title">50+</div>
      <div className="feature-desc">модулей и тем в формате DrupalGive</div>
    </div>
  </div>

  <div className="feature-item">
    <div>
      <div className="feature-title">90 000+</div>
      <div className="feature-desc">часов поддержки сайтов на Drupal</div>
    </div>
  </div>

  <div className="feature-item">
    <div>
      <div className="feature-title">300+</div>
      <div className="feature-desc">Проектов на поддержке</div>
    </div>
  </div>
</div>

</div>


      </div>
    </header>
  );
}
