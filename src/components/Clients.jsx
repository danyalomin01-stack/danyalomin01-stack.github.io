import React from "react";

export default function Clients() {
  const logos = new Array(6).fill(0);
  return (
    <section className="section clients">
      <div className="container">
        <h3 className="section-title">Наши клиенты</h3>
        <div className="clients-row">
          {logos.map((_, i) => (
            <div className="client-logo" key={i}>
              {/* замените на <img src={...} /> по факту */}
              <div className="logo-placeholder">LOGO</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
