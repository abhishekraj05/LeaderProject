import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./PoetryStatsSection.css";
import poetryImage from "../../../assets/lalut.jpeg";

// Register modules manually for Swiper v9
SwiperCore.use([Autoplay, Navigation, Pagination]);

const poetryLines = [
  "हम राई से जवाहर लाल राय जी के साथ कंधे से कंधा मिलाकर जनसेवा के लिए कार्य करने का संकल्प लेते हैं।",
  "जहां तक दिखे खेत वही तक पहुंचे विकास की रेखा।",
  "हर हाथ को काम, हर चेहरे पर मुस्कान – यही है हमारा प्रण।",
  "समर्पण और सेवा ही हमारी असली पहचान है।",
  "जनता की उम्मीदों को हकीकत में बदलना है हमारा लक्ष्य।",
];

const stats = [
  { icon: "🌾", value1: 10, value2: 150, suffix: "+", label: "Villages Visited" },
  { icon: "🧑‍🤝‍🧑", value1: 90950, value2: 100000, suffix: "+", label: "Supporters" },
  { icon: "📢", value1: 10, value2: 200, suffix: "+", label: "Public Speeches" },
  { icon: "✅", value1: 30, value2: 100, suffix: "+", label: "Promises Fulfilled" },
];

const PoetryStatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="poetry-section-wrapper">
      <div className="slider-container">
        <img
          src={poetryImage}
          alt="poetry background"
          className="slider-bg-img"
        />
        <div className="slider-overlay">
          <Swiper
            spaceBetween={30}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            speed={800}
            pagination={{ clickable: true }}
            navigation={true}
            className="poetry-swiper"
          >
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

      <div className="stats-section" ref={ref}>
        {stats.map((stat, i) => (
          <div className="stat-card" key={i}>
            <div className="icon">{stat.icon}</div>
            <div className="value">
              {inView ? (
                <CountUp
                  start={stat.value1}
                  end={stat.value2}
                  duration={3}
                  separator=","
                  suffix={stat.suffix}
                />
              ) : (
                "0" + stat.suffix
              )}
            </div>
            <div className="label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoetryStatsSection;
