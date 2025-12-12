import React, { useState } from "react";

export default function FooterForm() {
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
        phone: phone,
      }),
    });

    if (!res.ok) throw new Error("Ошибка отправки");

    setSuccess("Ваше сообщение отправлено!");
    setForm({ name: "", email: "", message: "" });
    setPhone("");
  } catch (err) {
    setError("Ошибка отправки. Попробуйте ещё раз.");
  }

  setLoading(false);
};


  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Связаться с нами</h2>

        <form className="footer-form" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Ваше имя"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Ваш email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label>
            
            <input
              name="phone"
              inputMode="text"
              pattern="[0-9+]*"
              type="tel"

              placeholder="Ваш телефон"
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
              required
            />
          </label>

          <textarea
            name="message"
            placeholder="Ваше сообщение"
            value={form.message}
            onChange={handleChange}
            required
          />

          <label className="checkbox light">
            <input type="checkbox" required />
            <span>Я согласен на обработку персональных данных</span>
          </label>

          <button className="btn-primary" disabled={loading}>
            {loading ? "Отправка..." : "Связаться"}
          </button>

          {success && <p className="success">{success}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </footer>
  );
}
