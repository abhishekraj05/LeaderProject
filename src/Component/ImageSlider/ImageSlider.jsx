import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ImageSlider.css';

import cover1 from "../../assets/CoverImg1.png"
import cover2 from "../../assets/coverimg3.png"
import cover3 from "../../assets/coverimg4.jpg"

// Register Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const ImageSlider = () => {
  const images = [
    cover3,
    cover2,
    cover1,
    cover2,
  ];
  return (
    <div className="slider-wrapper">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop
        className="swiper-container"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="slide-img-wrapper">
              <img style={{marginBottom: "2.5rem" , userSelect: "none"}} src={img} alt={`Slide ${index + 1}`} className="slide-img" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
