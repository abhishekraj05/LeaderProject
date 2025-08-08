import React from "react";
import { Container } from "react-bootstrap";
import img from "../../assets/p1.jpg";
import "./Contact.css";

// React Icons import
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="contact-container" id="contact">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="contact-card text-center shadow">
          <img
            src={img}
            alt="profile"
            className="profile-img"
          />
          <h2 className="mt-3">Jawahar Lal Ray</h2>
          <p className="text-muted">Progressive Thinker | Empowering the Youth</p>

          <p className="description mt-4">
            Shri Jawahar Lal Ray, a devoted and passionate leader, has always stood
            for the welfare and upliftment of his people. Known for his dedication,
            simplicity, and strong connection with the grassroots, he has tirelessly
            worked to improve the quality of life for the underprivileged. With a
            clear vision for the future and an undying love for the country, he
            continues to inspire generations.
          </p>

          <div className="social-links mt-4">
            <a href="https://www.instagram.com/jawaharlal_ray_?igsh=MXhxa2k5bXozaDZpaw==" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="https://x.com/pramukhjawahar?t=XgBns0xgcnB1coIkB0rKUw&s=08" target="_blank" rel="noopener noreferrer">
              <FaTwitter /> Twitter
            </a>
            <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer">
              <FaYoutube /> YouTube
            </a>
            <a href="https://www.facebook.com/share/1BJRQcMG5v/" target="_blank" rel="noopener noreferrer">
              <FaFacebook /> Facebook
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactSection;
