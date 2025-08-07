import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const LeaderIntro = () => {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    // Animate title on scroll into view
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out"
    });

    // Animate description on scroll into view
    gsap.from(descRef.current, {
      scrollTrigger: {
        trigger: descRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 30,
      duration: 1.2,
      delay: 0.3,
      ease: "power2.out"
    });
  }, []);

const handleViewMore = () => {
  window.location.href = '/about'; // Full reload
};


  return (
    <div id="about" className="leader-container"> 
      <div className="leader-left">
        <img
          src="src/assets/jawaharabout.jpg"
          alt="Leader"
          className="leader-image"
        />
      </div>
      <div className="leader-right">
        <h1 ref={titleRef} className="leader-title">
          Jawahar Lal Rai
        </h1>
        <div className="leader-separator">༺ ❖ ༻</div>
        <p ref={descRef} className="leader-description">
          Jawahar Lal Rai, a dedicated leader from Mohaddinagar, is deeply passionate about social service, which inspired him to join the Rashtriya Janata Dal (RJD) and actively engage in the betterment of society through various initiatives. He has always dreamt of serving the nation and contributing to its development. Starting as a grassroots-level worker, he has successfully led numerous social campaigns and political programs with dedication and courage. As a committed party member, he has consistently accepted every responsibility entrusted to him and fulfilled each one with sincerity, discipline, and devotion.
        </p>
        <button className="view-more-button" onClick={handleViewMore}>
          View More
        </button>
      </div>
    </div>
  );
};

export default LeaderIntro;
