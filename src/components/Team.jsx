import React from "react";

import team1 from "../assets/team/team1.jpg";
import team2 from "../assets/team/team2.jpg";
import team3 from "../assets/team/team3.jpg";
import team4 from "../assets/team/team4.jpg";
import team5 from "../assets/team/team5.jpg";

export default function Team() {
  const team = [
  { name: "Сергей Синица", job: "Руководитель отдела веб-разработки, канд. тех. наук, заместитель директора",photo: team1 },
  { name: "Роман Агабеков", job: "Руководитель отдела DevOPS, директор",photo: team2 },
  { name: "Алексей Синица", job: "Руководитель отдела поддержки сайтов",photo: team3 },
  { name: "Дарья Бочкарева", job: "Руководитель отдела продвижения контекстной рекламы и контент-поддержки сайтов",photo: team4 },
  { name: "Ирина Торкунова", job: "Менеджер по работе с клиентами",photo: team5 },
];

  return (
    <section className="section team">
      <div className="container">
        <h2 className="section-title">Наша команда</h2>

        <div className="team-grid">
          {team.map((person, i) => (
            <div className="team-card" key={i}>
              <img src={person.photo} alt={person.name} className="team-photo" />
              <h3>{person.name}</h3>
              <p>{person.job}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
