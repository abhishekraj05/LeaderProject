import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./PoetryStatsSection.css";
import poetryImage from "../../../assets/lalut.jpeg";
// import poetryImage from '../../../assets/ttt.webp';

const poetryLines = [
  "हम राई से जवाहर लाल राय जी के साथ कंधे से कंधा मिलाकर जनसेवा के लिए कार्य करने का संकल्प लेते हैं।",
  "जहां तक दिखे खेत वही तक पहुंचे विकास की रेखा।",
  "हर हाथ को काम, हर चेहरे पर मुस्कान – यही है हमारा प्रण।",
  "समर्पण और सेवा ही हमारी असली पहचान है।",
  "जनता की उम्मीदों को हकीकत में बदलना है हमारा लक्ष्य।",
];

const stats = [
  { icon: "🌾", value: "50+", label: "Villages Visited" },
  { icon: "🧑‍🤝‍🧑", value: "10K+", label: "Supporters" },
  { icon: "📢", value: "25+", label: "Public Speeches" },
  { icon: "✅", value: "100+", label: "Promises Fulfilled" },
];

const PoetryStatsSection = () => {
  return (
    <div className="poetry-section-wrapper">
      {/* Top Poetry Slider Section */}
      <div className="slider-container">
        <img
          src={poetryImage}
          alt="poetry background"
          className="slider-bg-img"
        />
        <div className="slider-overlay">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            speed={800}
            pagination={{ clickable: true }}
            navigation={true}
            className="poetry-swiper">
            {poetryLines.map((line, index) => (
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

      {/* Stats Section */} 
      <div className="stats-section">
        {stats.map((stat, i) => (
          <div className="stat-card" key={i}>
            <div className="icon">{stat.icon}</div>
            <div className="value">{stat.value}</div>
            <div className="label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoetryStatsSection;
