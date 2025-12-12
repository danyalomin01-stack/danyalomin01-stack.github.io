import React, { useState } from "react";

export default function ContactModal({ open, onClose }) {
  if (!open) return null;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("https://api.slapform.com/W6fxtBtij", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          phone: phone, // ← теперь телефон тоже отправляется
        }),
      });

      if (!res.ok) throw new Error("Ошибка отправки");

      setSuccess("Ваше сообщение отправлено!");

      // очищаем форму
      setForm({ name: "", email: "", message: "" });
      setPhone(""); // ← очищаем телефон
    } catch (err) {
      setError("Ошибка отправки. Попробуйте ещё раз.");
    }

    setLoading(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <button className="modal-close" onClick={onClose}>×</button>

        <h2>Связаться с нами</h2>
        <p>Оставьте данные, и мы ответим вам в ближайшее время.</p>

        <form className="modal-form" onSubmit={handleSubmit}>
          <label>
            Имя
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Телефон
            <input
              type="tel"
              inputMode="text"
              pattern="[0-9+]*"
              value={phone}
              onChange={(e) => {
                let v = e.target.value;

                // Разрешаем только цифры и знак +
                v = v.replace(/[^0-9+]/g, "");

                // Если + не в начале — убираем
                if (v.includes("+") && v.indexOf("+") !== 0) {
                  v = v.replace(/\+/g, ""); // убираем все +
                  v = "+" + v;              // ставим один в начало
                }

                setPhone(v);
              }}
              placeholder="+7 (___) ___-__-__"
              required
            />
          </label>

          <label>
            Сообщение
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>

          <label className="checkbox">
            <input type="checkbox" required />
            <span>Я согласен на обработку персональных данных</span>
          </label>

          <button className="btn-primary" disabled={loading}>
            {loading ? "Отправка..." : "Отправить сообщение"}
          </button>

          {success && <p style={{ color: "green" }}>{success}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
}
