import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './About.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import jawaharImage from '../../assets/jawaharabout.jpg';

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const LeaderIntro = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const location = useLocation(); // Detect route change

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      });

      tl.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out"
      }).from(descRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        delay: 0.2,
        ease: "power2.out"
      }, "-=0.6");
    });

    ScrollTrigger.refresh(); // Ensure correct trigger

    return () => {
      ctx.revert(); // Clean up on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [location.pathname]); // Re-run on route change

  const handleViewMore = () => {
    window.location.href = '/about'; // Force reload (safe way)
  };

  return (
    <div id="about" className="leader-container">
      <div className="leader-left">
        <img src={jawaharImage} alt="Leader" className="leader-image" loading="lazy" />
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
