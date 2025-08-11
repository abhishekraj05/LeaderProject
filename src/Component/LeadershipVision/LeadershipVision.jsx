import React from "react";
import { motion } from "framer-motion";
import LeftLeadershipVision from "./LeftLeadershipVision";
import RightLeadershipVision from "./RightLeadershipVision";
// import FullPageScrollText from "../FullPageScrollText/FullPageScrollText"
import image1 from "../../assets/p28.jpg";
import image2 from "../../assets/p39.jpg";
import image3 from "../../assets/p20.jpg";
import image4 from "../../assets/p48.jpg";
import image5 from "../../assets/p49.jpg";
import image6 from "../../assets/HealthImg.jpg";
import "./LeadershipVision.css";

const fadeInVariant = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -80 : 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
});

const LeadershipVision = () => {
  return (
    <>
    <section className="vision-section">
      <motion.div
        variants={fadeInVariant("left")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <LeftLeadershipVision
          title="YOUTH AFFAIRS"
          description="Youth are the mirror images of growth of the country. 50 crores youth population in India is the asset for the nation. Great impetus must be put into youth development, and I intend to initiate programmes centered on youth development empowerment and learning."
          image={image1}
        />
      </motion.div>

      <motion.div
        variants={fadeInVariant("right")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <RightLeadershipVision
          title="INFRASTRUCTURE DEVELOPMENT"
          description="For welfare of the people of my constituency my major concern is refining infrastructure within our area. I set up intricate plans with serious deadlines and priorities. My priorities are roads, water supply, electricity, drainage, sanitation, health care, transport and safety.."
          image={image2}
        />
      </motion.div>

      <motion.div
        variants={fadeInVariant("left")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <LeftLeadershipVision
          title="EDUCATION"
          description="To prepare an accomplished youth for negotiating with the challenges of the complex modern world by imbibing scientific temperament quality consciousness, managerial skills and human values.."
          image={image3}
        />
      </motion.div>

      <motion.div
        variants={fadeInVariant("right")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <RightLeadershipVision
          title="WOMEN WELFARE"
          description="Mobilize, organize and create awareness among women about the need for education, self-reliance and development. Promote social justice, economic empowerment and awareness of legal rights among women. Identify, increase and strengthen the leadership and decision making capacity of women particularly in the rural areas. Promote vocational skills for alternative means of livelihood. Train potential women entrepreneur to take up income generation activities and micro enterprises. Provide health education to women especially in the areas of reproductive health, hygiene and nutrition.."
          image={image4}
        />
      </motion.div>

      <motion.div
        variants={fadeInVariant("left")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <LeftLeadershipVision
          title="SPORTS AND RECREATION"
          description="Sports is one of the major sectors concerned with youth. Therefore I will initiate the measures to improve sporting facilities and make them more accessible to every strata of society..."
          image={image5}
        />
      </motion.div>

      <motion.div
        variants={fadeInVariant("right")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <RightLeadershipVision
          title="HEALTH"
          description="To promote health, prevent illness and provide state-of-the-art diagnosis and treatment whenever and wherever we can best meet people’s individual and family needs.."
          image={image6}
        />
      </motion.div>

    </section>
       {/* <FullPageScrollText />  */}
       </>
  );
};

export default LeadershipVision;
