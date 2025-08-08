import React, { useState, useEffect, useRef } from "react";
import "./Biography.css";
import speech from "../../assets/p53.jpg";
import jawaharimg from "../../assets/p51.jpg";

function Biography() {
  const [activeTab, setActiveTab] = useState("leadership");
  const [animateBars, setAnimateBars] = useState(false);
  const barsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateBars(true);
        }
      },
      { threshold: 0.5 }
    );

    if (barsRef.current) observer.observe(barsRef.current);
    return () => {
      if (barsRef.current) observer.unobserve(barsRef.current);
    };
  }, []);

  return (
    <div className="biography-container">
      {/* Header Section */}
      <h1 className="title">Jawahar Lal Ray</h1>
      <p className="description">
        Shri Jawahar Lal Ray, a devoted and passionate leader, has always stood
        for the welfare and upliftment of his people. Known for his dedication,
        simplicity, and strong connection with the grassroots, he has tirelessly
        worked to improve the quality of life for the underprivileged. With a
        clear vision for the future and an undying love for the country, he
        continues to inspire generations.
      </p>

      {/* Banner Highlights Section */}
      <section className="banner-highlights">
        <div className="banner-image">
          <img
            className="biography-image"
            src={jawaharimg}
            alt="Jawahar Lal Ray Banner"
          />
        </div>
        <div className="banner-text">
          <h2 className="banner-title">Campaign Highlights</h2>
          <ul className="banner-points">
            <li>We, Tejashwi Yadav and Jawahar Lal Ray, promise this to you</li>
            <li>Every farmer will get 200 units of free electricity per month</li>
            <li>Social security pension will be increased from ₹400 to ₹1500</li>
            <li>Mai Bahin Maan Yojana – ₹2500</li>
            <li>Every promise will be fulfilled when the Tejashwi government comes</li>
            <li>Jawahar Lal Rai – Block Head, Mohiuddin Nagar</li>
          </ul>
        </div>
      </section>

      {/* Mission and Vision Section */}
     <div className="mission-vision-section">
  <div className="mission-vision-container">
    <div className="box">
      <div className="icon">🎯</div>
      <h3>Mission</h3>
      <p>
        To develop, connect, and inspire diverse people to build strong and
        vibrant communities.
      </p>
    </div>
    <div className="box">
      <div className="icon">👁</div>
      <h3>Vision</h3>
      <p>
        To create a region where barriers of age, race, economics, and
        education are lowered, and all citizens come to believe that they
        live in a just and caring community.
      </p>
    </div>
  </div>
</div>

      {/* Tab Section */}
      <div className="tab-section">
        <div className="tabs">
          {["leadership", "passion", "objective"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? "active" : ""}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === "leadership" && (
            <p>
              Leadership is an action, not a position. You get the best efforts
              from others not by lighting a fire beneath them, but by building a
              fire within.
            </p>
          )}
          {activeTab === "passion" && (
            <p>
              Shri Jawahar Lal Ray is passionate about uplifting rural
              communities, ensuring every voice is heard, and every family
              thrives.
            </p>
          )}
          {activeTab === "objective" && (
            <p>
              To ensure equitable development, inclusive growth, and strong
              democratic values across all sections of society.
            </p>
          )}
        </div>

        <div className="image-section">
          <img src={speech} alt="Jawahar Lal Ray" />
        </div>
      </div>



      {/* Hobbies Section */}
    <section className="hobbies-section" ref={barsRef}>
  <h2 className="hobbies-title">Hobbies</h2>
  <div className="hobbies-content">
    <div className="hobbies-text">
      <p>
        In spite of his over-busyness, Jawahar Lal Ray Ji feels lucky to be
        content with social programs and social service. He is also very
        interested in tree plantation.
      </p>
    </div>

    <div className="hobbies-bars">
      {[
        { label: "LEADERSHIP", color: "red", percentage: 80 },
        { label: "KINDNESS", color: "green", percentage: 65 },
        { label: "PASSION", color: "blue", percentage: 90 },
      ].map(({ label, color, percentage }) => (
        <div className="bar" key={label}>
          <span>{label}</span>
          <div className="progress-bar-outer">
            <div
              className={`progress-bar-inner ${color} ${
                animateBars ? "animate" : ""
              }`}
              style={{
                width: animateBars ? `${percentage}%` : "0%",
                transition: "width 2s ease-in-out",
              }}
            ></div>
            <span className="percentage-text">{percentage}%</span>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* <div className="hobbies-image-frame">
    <img
      src={speech}
      alt="Jawahar Lal Ray Ji at event"
      className="hobbies-image"
    />
  </div> */}
</section>

    </div>
  );
}

export default Biography;