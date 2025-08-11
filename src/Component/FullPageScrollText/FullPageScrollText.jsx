import React, { useEffect, useRef } from "react";
import "./FullPageScrollText.css";
import gsap from "gsap";
import SplitType from "split-type";

import p12 from "../../assets/p46.jpg";
import p21 from "../../assets/p21.jpg";
import p22 from "../../assets/p51.jpg";

const sections = [
  { title: "Voice of the People, Strength of the Land", image: p12 },
  { title: "A Visionary Leader With a Mission to Serve", image: p21 },
  { title: "Leading With Integrity, Inspiring With Action", image: p22 },
];

const FullPageScrollText = () => {
  const containerRef = useRef(null);
  const currentIndex = useRef(0);
  const isAnimating = useRef(false);

  const animateTextIn = (index) => {
    const panels = gsap.utils.toArray(".panel");
    const heading = panels[index].querySelector("h1");
    const split = new SplitType(heading, { types: "chars" });

    gsap.fromTo(
      split.chars,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.05, duration: 1.2, ease: "power2.out" }
    );
  };

  const slideTo = (index) => {
    const panels = gsap.utils.toArray(".panel");

    gsap.to(panels[currentIndex.current], { yPercent: -100, duration: 1 });
    gsap.to(panels[index], {
      yPercent: 0,
      duration: 1,
      onComplete: () => {
        animateTextIn(index);
        currentIndex.current = index;
        isAnimating.current = false;
      },
    });
  };

  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");
    gsap.set(panels, { yPercent: 100 });
    gsap.set(panels[0], { yPercent: 0 });

    panels.forEach((panel) => {
      const split = new SplitType(panel.querySelector("h1"), { types: "chars" });
      gsap.set(split.chars, { opacity: 0, y: 50 });
    });

    animateTextIn(currentIndex.current);

    // Desktop scroll
    const handleScroll = (e) => {
      if (isAnimating.current) return;
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = currentIndex.current + direction;
      if (nextIndex < 0 || nextIndex >= panels.length) return;
      isAnimating.current = true;
      slideTo(nextIndex);
    };

    // Mobile swipe
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      if (Math.abs(diff) > 50 && !isAnimating.current) {
        const direction = diff > 0 ? 1 : -1;
        const nextIndex = currentIndex.current + direction;
        if (nextIndex >= 0 && nextIndex < panels.length) {
          isAnimating.current = true;
          slideTo(nextIndex);
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="fullpage-container" ref={containerRef}>
      {sections.map((section, index) => (
        <div
          key={index}
          className="panel"
          style={{ backgroundImage: `url(${section.image})` }}
        >
          <div className="overlay">
            <h1>{section.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FullPageScrollText;
