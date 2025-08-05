import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';
import SwiperCore, { Autoplay, Navigation, Thumbs } from 'swiper';

import './Gallery.css';
import image1 from '../../assets/AgricultureImg.jpg';
import image2 from '../../assets/WaterImg.jpg';
import image3 from '../../assets/HealthImg.jpg';
import image4 from '../../assets/WaterImg.jpg';
import image5 from '../../assets/HealthImg.jpg';
import image6 from '../../assets/ElectricityImg.jpg';

SwiperCore.use([Autoplay, Navigation, Thumbs]);

const images = [image1, image2, image3, image4,image5,image6];

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="gallery-container">
         <h2>
        छवि  <span >गैलरी</span>
      </h2>
      {/* Main Swiper – Autoplay and visible on load */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        thumbs={{ swiper: thumbsSwiper }}
        className="main-swiper"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img src={img} alt={`Slide ${idx + 1}`} className="gallery-full-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress
        freeMode
        className="thumb-swiper"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img src={img} alt={`Thumb ${idx + 1}`} className="gallery-thumb" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
