import React from "react";
import devlopmentvideo from "../../assets/devlopmentvideo.mp4";

export default function HomeVideo() {
  return (
    <section className="seva-section">
      <h2  style={{ color: "green" }} className="seva-title">
        1990 से अब तक सेवा करने का अवसर
      </h2>

      <div className="seva-card">
        <div className="seva-text">
          <h3 style={{ color: "green" }}>जनसेवा का हमारा सफर</h3>
          <p>
            1990 से अब तक, हमने अनगिनत लोगों की राजनीति के माध्यम से मदद की
            है। यह वीडियो हमारे समर्पण और सेवा भावना की झलक पेश करता है।
          </p>
        </div>

        <video
          src={devlopmentvideo}
          controls
          autoPlay
          loop
          className="seva-video"
          aria-label="जनसेवा के वीडियो"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
