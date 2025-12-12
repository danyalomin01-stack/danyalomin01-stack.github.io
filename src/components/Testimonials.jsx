import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  const items = [
    {
      name: "Иван Петров",
      text: "Отличная команда! Быстро реагируют на задачи и всегда на связи.",
    },
    {
      name: "Анна Смирнова",
      text: "Поддержка на высоком уровне. Делают всё качественно и в срок.",
    },
    {
      name: "Максим Волков",
      text: "Сотрудничаем давно — профессионализм и ответственность на уровне.",
    },
  ];

  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="section-title">Отзывы</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={true}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="review-card">
                <p className="review-text">"{item.text}"</p>
                <div className="review-name">— {item.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
