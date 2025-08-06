import React from "react";
import LeftLeadershipVision from "./LeftLeadershipVision";
import RightLeadershipVision from "./RightLeadershipVision";
import image5 from "../../assets/HealthImg.jpg";
import "./LeadershipVision.css";

const LeadershipVision = () => {
  return (
    <section className="vision-section">
      <LeftLeadershipVision
        title="YOUTH AFFAIRS"
        description="Youth are the mirror images of growth of the country. 50 crores youth population in India is the asset for the nation. Great impetus must be put into youth development, and I intend to initiate programmes centered on youth development empowerment and learning."
        image={image5}
      />
      <RightLeadershipVision
        title="INFRASTRUCTURE DEVELOPMENT"
        description="For welfare of the people of my constituency my major concern is refining infrastructure within our area. I set up intricate plans with serious deadlines and priorities. My priorities are roads, water supply, electricity, drainage, sanitation, health care, transport and safety.."
        image={image5}
      />
      <LeftLeadershipVision
        title="EDUCATION"
        description="To prepare an accomplished youth for negotiating with the challenges of the complex modern world by imbibing scientific temperament quality consciousness, managerial skills and human values.."
        image={image5}
      />
      <RightLeadershipVision
        title="WOMEN WELFARE"
        description="Mobilize, organize and create awareness among women about the need for education, self-reliance and development. Promote social justice, economic empowerment and awareness of legal rights among women. Identify, increase and strengthen the leadership and decision making capacity of women particularly in the rural areas. Promote vocational skills for alternative means of livelihood. Train potential women entrepreneur to take up income generation activities and micro enterprises. Provide health education to women especially in the areas of reproductive health, hygiene and nutrition.."
        image={image5}
      />
      <LeftLeadershipVision
        title="SPORTS AND RECREATION"
        description="Sports is one of the major sectors concerned with youth. Therefore I will initiate the measures to improve sporting facilities and make them more accessible to every strata of society..."
        image={image5}
      />
      <RightLeadershipVision
        title="HEALTH"
        description="To promote health, prevent illness and provide state-of-the-art diagnosis and treatment whenever and wherever we can best meet people’s individual and family needs.."
        image={image5}
      />
    </section>
  );
};

export default LeadershipVision;
