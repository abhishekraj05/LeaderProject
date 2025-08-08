import React, { useEffect, useRef } from 'react';
import './FullPageScrollText.css';
import gsap from 'gsap';
import SplitType from 'split-type';

import p12 from '../../assets/p12.jpg';
import p21 from '../../assets/p21.jpg';
import p22 from '../../assets/p22.jpg';

const sections = [
  {
    title: 'Welcome to Our Mission',
    image: p12
  },
  {
    title: 'Empowering the Future',
    image: p21
  },
  {
    title: 'Leading with Passion',
    image: p22
  }
];

const FullPageScrollText = () => {
  const containerRef = useRef(null);
  const currentIndex = useRef(0);
  const isAnimating = useRef(false);

  // ✅ Move animateTextIn to top so it's defined before use
  const animateTextIn = (index) => {
    const panels = gsap.utils.toArray('.panel');
    const heading = panels[index].querySelector('h1');
    const split = new SplitType(heading, { types: 'chars' });

    gsap.fromTo(
      split.chars,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.05, duration: 1.2, ease: 'power2.out' }
    );
  };

  useEffect(() => {
    const container = containerRef.current;
    const panels = gsap.utils.toArray('.panel');

    gsap.set(panels, { yPercent: 100 });
    gsap.set(panels[0], { yPercent: 0 });

    panels.forEach(panel => {
      const split = new SplitType(panel.querySelector('h1'), { types: 'chars' });
      gsap.set(split.chars, { opacity: 0, y: 50 });
    });

    // ✅ This is now safe
    animateTextIn(currentIndex.current);

    const handleScroll = (e) => {
      if (isAnimating.current) return;

      isAnimating.current = true;
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = currentIndex.current + direction;

      if (nextIndex < 0 || nextIndex >= panels.length) {
        isAnimating.current = false;
        return;
      }

      slideTo(nextIndex);
    };

    const slideTo = (index) => {
      const panels = gsap.utils.toArray('.panel');

      gsap.to(panels[currentIndex.current], { yPercent: -100, duration: 1 });
      gsap.to(panels[index], {
        yPercent: 0,
        duration: 1,
        onComplete: () => {
          animateTextIn(index);
          currentIndex.current = index;
          isAnimating.current = false;
        }
      });
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
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
