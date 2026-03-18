import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./ImageCarousel.css";

export default function ImageCarousel({ images, variant = "hero" }) {

  return (
    <div className={`carousel-wrapper carousel-${variant}`}>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        loop={true}
        slidesPerView={1}
        style={{ width: "100%" }} 
      >

        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt="Yoga trainer" />
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
}