// src/components/Gallery/GalleryBanner.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./GalleryBanner.css";

import galleryBannerImage from "../../assets/lalut.jpeg";

const quotes = [
  "हम राई से जवाहर लाल राय जी के साथ कंधे से कंधा मिलाकर जनसेवा के लिए कार्य करने का संकल्प लेते हैं।",
  "जहां तक दिखे खेत वही तक पहुंचे विकास की रेखा।",
  "हर हाथ को काम, हर चेहरे पर मुस्कान – यही है हमारा प्रण।",
  "समर्पण और सेवा ही हमारी असली पहचान है।",
  "जनता की उम्मीदों को हकीकत में बदलना है हमारा लक्ष्य।",
];

const GalleryBanner = () => {
  return (
    <div className="gallery-banner-wrapper">
      <img src={galleryBannerImage} alt="Banner" className="banner-img" />
      <div className="banner-overlay">
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={800}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]} 
          className="banner-swiper"
        >
          {quotes.map((line, index) => (
            <SwiperSlide key={index}>
              <div className="quote-slide">
                <p className="quote-text">“{line}”</p>
                <p className="quote-author">— जनसेवा मिशन</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GalleryBanner;
