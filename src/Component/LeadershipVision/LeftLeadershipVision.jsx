import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const LeftLeadershipVision = ({ title, description, image }) => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(descRef.current, {
      scrollTrigger: {
        trigger: descRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
    });

    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: 40,
      duration: 1.2,
      delay: 0.4,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="vision-block">
      <div className="vision-text">
        <h2 ref={titleRef}>{title}</h2>
        <p ref={descRef}>{description}</p>
      </div>
      <div className="vision-image">
        <img ref={imageRef} src={image} alt={title} />
      </div>
    </div>
  );
};

export default LeftLeadershipVision;
