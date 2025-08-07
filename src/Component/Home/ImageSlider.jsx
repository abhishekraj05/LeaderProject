import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageSlider.css";
import cover1 from "../../assets/CoverImg1.png"
import cover2 from "../../assets/coverimg3.png"
import cover3 from "../../assets/coverimg4.jpg"

// Register modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const ImageSlider = () => {
  const images = [
    cover3,
    cover2,
    cover1,
    cover2,
  ];

  return (
    <div className="full-slider-wrapper">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img style={{marginBottom: "2rem"}} src={img} alt={`Slide ${index + 1}`} className="full-slide-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
