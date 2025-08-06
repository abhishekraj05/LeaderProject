import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageSlider.css";

// Register modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const ImageSlider = () => {
  const images = [
    'https://rjd.co.in/wp-content/uploads/2017/07/homepage-0.jpg',
    'https://mohanlalbadoli.com/wp-content/uploads/2021/07/slide-2.jpg',
    'https://rjd.co.in/wp-content/uploads/2017/07/homepage-0.jpg',
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
            <img src={img} alt={`Slide ${index + 1}`} className="full-slide-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
