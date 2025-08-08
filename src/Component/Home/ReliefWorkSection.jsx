import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./ReliefWorkSection.css";

import img1 from "../../assets/b1.jpg";
import img2 from "../../assets/b2.jpg";
import img3 from "../../assets/b3.jpg";
import img4 from "../../assets/b4.jpg";
import img5 from "../../assets/b5.jpg";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ReliefWorkSection = () => {
  return (
    <section className="relief-section">
      <motion.div
        className="relief-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>बाढ़ राहत भान योजना</h2>
        <p>
          <strong style={{ color: "#2c3e50" }}>
            राष्ट्रीय जनता दल परिवार
          </strong>{" "}
          के तत्वाधान में{" "}
          <strong style={{ color: "#2c3e50" }}>मोहिउद्दीन नगर प्रखंड</strong>{" "}
          में <span className="highlight">"बाढ़ राहत भान"</span> योजना चलाई गई,
          जिसका उद्देश्य <u>बाढ़ से पीड़ित लोगों तक त्वरित सहायता पहुँचाना</u>{" "}
          था। इस योजना के अंतर्गत प्रभावित परिवारों को{" "}
          <span className="highlight">आवास, भोजन, दवाइयाँ</span> और अन्य ज़रूरी
          चीजें दी गईं।
        </p>
        <p>
          <strong style={{ color: "#2c3e50" }}>
            श्री जवारहर राय (समाजसेवी नेता)
          </strong>{" "}
          के नेतृत्व में स्थानीय टीमों ने दिन-रात काम कर{" "}
          <span className="highlight">राहत सामग्री वितरण</span>,{" "}
          <span className="highlight">पुनर्वास</span> और{" "}
          <span className="highlight">चिकित्सा सुविधा</span> का बेहतरीन प्रबंध
          किया। यह एक <strong>मानवीयता की मिसाल</strong> बन गया — जिससे
          पीड़ितों को <u>आशा और सुरक्षा</u> का अहसास हुआ।
        </p>
      </motion.div>

      <motion.div
        className="relief-swiper-wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="relief-swiper"
        >
          {[img1, img2, img3, img4,img5].map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`Relief Work ${idx + 1}`}
                className="relief-image  border border-success border-5 rounded-2"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default ReliefWorkSection;
