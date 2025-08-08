import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Economy from "../../assets/Economy.png";
import EconomyImg from "../../assets/EconomyImg.jpg";
import Agriculture from "../../assets/Agriculture.png";
import AgricultureImg from "../../assets/AgricultureImg.jpg";
import Water from "../../assets/Water.png";
import WaterImg from "../../assets/WaterImg.jpg";
import Education from "../../assets/Education.png";
import EducationImg from "../../assets/EducationImg.jpg";
import Health from "../../assets/Health.png";
import HealthImg from "../../assets/HealthImg.jpg";
import Electricity from "../../assets/Electricity.png";
import Electricityimg from "../../assets/ElectricityImg.jpg";
import './FutureDevelopmentArea.css';

const Card = ({ image, icon, title, description, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="future-card"
      initial={{ opacity: 0, y: 80 }} // Start below and hidden
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }} // 📱 More sensitive for mobile
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.15
      }}
    >
      <img src={image} alt={title} className="future-image" />
      <div className="future-icon">
        <img src={icon} alt="icon" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => navigate("/vision")} className="future-button">
        Read More ⟶
      </button>
    </motion.div>
  );
};

const FutureDevelopmentArea = () => {
  const data = [
    {
      title: 'Economy',
      image: EconomyImg,
      icon: Economy,
      description:
        'Overtaxing is theft. A complex tax system is an excellent cover for this theft and has been imposed upon us...'
    },
    {
      title: 'Agriculture',
      image: AgricultureImg,
      icon: Agriculture,
      description:
        'Steps will be taken to increase profitability in agriculture by ensuring a minimum of 50% profit over production cost and providing affordable agricultural inputs...'
    },
    {
      title: 'Water',
      image: WaterImg,
      icon: Water,
      description:
        'A large annual budget will be allocated to improve land development in rain-dependent areas, increase farmer incomes, and provide RO plants.'
    },
    {
      title: 'Education',
      image: EducationImg,
      icon: Education,
      description:
        'Preparing skilled youth to deal with the challenges of a complex modern world by instilling a scientific temperament...'
    },
    {
      title: 'Health',
      image: HealthImg,
      icon: Health,
      description:
        'Under a public-private initiative, free diagnostic centers with CT scan, MRI, and ultrasound facilities will operate 24/7 for the poor in every hospital.'
    },
    {
      title: 'Electricity',
      image: Electricityimg,
      icon: Electricity,
      description:
        'Our manifesto promises to expand urban energy access to 100% and rural access to 90%. Currently, 94%...'
    }
  ];

  return (
    <section className="future-container">
      <h2>
        Future <span>Development Areas</span>
      </h2>
      <div className="future-grid">
        {data.map((item, index) => (
          <Card key={index} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default FutureDevelopmentArea;
