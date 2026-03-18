import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./Gallery.css";

import img1 from "../../../assets/images/kapil1.jpeg";
import img2 from "../../../assets/images/kapil2.jpeg";
import img3 from "../../../assets/images/kapil3.jpeg";
import img4 from "../../../assets/images/kapil4.jpeg";
import img5 from "../../../assets/images/kapil5.jpeg";
import img6 from "../../../assets/images/kapil6.jpeg";
import img7 from "../../../assets/images/kapil7.jpeg";
import img8 from "../../../assets/images/kapil8.jpeg";
import img9 from "../../../assets/images/kapil9.jpeg";
import img10 from "../../../assets/images/kapil10.jpeg";
import img11 from "../../../assets/images/sapna1.jpeg";
import img12 from "../../../assets/images/sapna2.jpeg";
import img13 from "../../../assets/images/sapna3.jpeg";

const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
];

export default function Gallery() {
  return (
    <section className="gallery section">
      <div className="container">
        <div className="gallery__header text-center">
          <p className="gallery__tag">YOGA MOMENTS</p>
          <h2>Practice in Motion</h2>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="gallery-slider"
        >
          {galleryImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="gallery-card">
                <img src={img} alt="Yoga session" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
