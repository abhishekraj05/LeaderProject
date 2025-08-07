import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './ImageSlider.css';

const ImageSlider = () => {
  const images = [
    'https://rjd.co.in/wp-content/uploads/2017/07/homepage-0.jpg',
    'https://mohanlalbadoli.com/wp-content/uploads/2021/07/slide-2.jpg',
    'https://rjd.co.in/wp-content/uploads/2017/07/homepage-0.jpg',
  ];

  return (
    <div className="slider-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="swiper-container"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="slide-img-wrapper">
              <img src={img} alt={`Slide ${index + 1}`} className="slide-img" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
