import React from "react";

const LeftLeadershipVision = ({ title, description, image }) => {
  return (
    <div className="vision-block">
      <div className="vision-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="vision-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default LeftLeadershipVision;
