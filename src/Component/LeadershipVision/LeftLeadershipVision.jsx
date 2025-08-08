import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const LeftLeadershipVision = ({ title, description, image }) => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);
  const location = useLocation(); // Track route changes

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.from(titleRef.current, {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power2.out",
      })
        .from(
          descRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .from(
          imageRef.current,
          {
            opacity: 0,
            x: 40,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.8"
        );
    });

    ScrollTrigger.refresh(); // ensure triggers update on route

    return () => {
      ctx.revert(); // cleanup GSAP context
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [location.pathname]); // rerun on route change

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
