import React, { useState } from "react";

const items = [
  { q: "Как быстро вы отвечаете на запросы?", a: "В среднем в течение 1–4 часов в рабочее время по тарифам." },
  { q: "Можно ли подключить выделенного инженера?", a: "Да — в тарифе Enterprise мы предлагаем выделенный ресурс." },
  { q: "Поддерживаете старые версии Drupal?", a: "Да, но есть рекомендации по обновлению для безопасности." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="section faq">
      <div className="container">
        <h3 className="section-title">Вопросы и ответы</h3>
        <div className="faq-list">
          {items.map((it, i) => (
            <div className="faq-item" key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                {it.q}
                <span className={`faq-chevron ${open === i ? "open" : ""}`}>▾</span>
              </button>
              <div className={`faq-a ${open === i ? "open" : ""}`}>
                <p>{it.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
