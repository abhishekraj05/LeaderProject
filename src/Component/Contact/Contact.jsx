import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";
import img from "../../assets/p1.jpg";
import "./Contact.css";

const ContactSection = () => {
  const [loading, setLoading] = useState(true);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  }; // <- यह bracket properly बंद होना जरूरी है

  return (
    <section className="container py-5" id="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="row g-4 align-items-center shadow p-4 rounded-4"
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        {/* Left Side */}
        <motion.div variants={fadeUp} custom={1} className="col-lg-6 col-md-12 text-center">
          <img
            src={img}
            alt="Jawahar Lal Ray"
            className="mb-3"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid Green",
            }}
          />
          <h2 className="fw-bold">Jawahar Lal Ray</h2>
          <p className="text-muted">Progressive Thinker | Empowering the Youth</p>
          <p className="mt-3 text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
            Shri Jawahar Lal Ray, a devoted and passionate leader, has always stood
            for the welfare and upliftment of his people. Known for his dedication,
            simplicity, and strong connection with the grassroots, he has tirelessly
            worked to improve the quality of life for the underprivileged. With a
            clear vision for the future and an undying love for the country, he
            continues to inspire generations.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <a href="https://www.instagram.com/jawaharlal_ray_?igsh=MXhxa2k5bXozaDZpaw==" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
              <FaInstagram style={{ color: "Green" }} /> Instagram
            </a>
            <a href="https://x.com/pramukhjawahar?t=XgBns0xgcnB1coIkB0rKUw&s=08" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
              <FaTwitter style={{ color: "Green" }} /> Twitter
            </a>
            <a href="https://youtube.com/@pramukhmohiuddinnagar2435?feature=shared" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
              <FaYoutube style={{ color: "Green" }} /> YouTube
            </a>
            <a href="https://www.facebook.com/share/1BJRQcMG5v/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
              <FaFacebook style={{ color: "Green" }} /> Facebook
            </a>
            <a href="https://api.whatsapp.com/send?phone=919939819957&text=आप सबों के लिए तन मन धन और यह जीवन समर्पित-जवाहरलाल राय, प्रमुख मोहीउद्दीन नगर, जिला-समस्तीपुर, बिहार"
              target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
              <FaWhatsapp style={{ color: "Green" }} /> WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div variants={fadeUp} custom={2} className="col-lg-6 col-md-12">
          <div
            style={{
              width: "100%",
              height: "500px",
              borderRadius: "12px",
              border: "1px solid #e0e0e0",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {loading && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                }}
              >
                <div className="spinner"></div>
              </div>
            )}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfcAbU-e2KE2CrAUjecx6su_7ascsa6qH17HBskk3sin3mszw/viewform?usp=header"
              title="Location Map"
              width="100%"
              height="100%"
              frameBorder="0"
              onLoad={() => setLoading(false)}
              style={{
                border: "none",
                display: loading ? "none" : "block",
              }}
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
