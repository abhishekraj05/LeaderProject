// import React, { useState, useEffect, useRef } from "react";
// import "./Biography.css";
// import speech from "../../assets/speech.png";
// import speech2 from "../../assets/speech2.jpg";
// import pension from "../../assets/pension.png";
// import unit from "../../assets/200unit.png";

// import { FaBullseye, FaEye } from "react-icons/fa";

// function Biography() {
//   const [activeTab, setActiveTab] = useState("leadership");
//   const [animateBars, setAnimateBars] = useState(false);
//   const barsRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setAnimateBars(true);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (barsRef.current) observer.observe(barsRef.current);
//     return () => {
//       if (barsRef.current) observer.unobserve(barsRef.current);
//     };
//   }, []);

//   const highlights = [
//     {
//       title: "किसानों को सशक्त बनाना",
//       text: "हर किसान को कृषि विकास के लिए प्रति माह 200 यूनिट मुफ्त बिजली दी जाएगी।",
//       img: unit,
//     },
//     {
//       title: "सभी के लिए सामाजिक सुरक्षा",
//       text: "सामाजिक सुरक्षा पेंशन ₹400 से बढ़ाकर ₹1500 की जाएगी, जिससे हमारे बुजुर्गों को सम्मान और देखभाल मिल सके।",
//       img: speech,
//     },
//     {
//       title: "माई बहिन मान योजना",
//       text: "माई बहिन मान योजना के तहत हर पात्र महिला को ₹2500 वित्तीय स्वतंत्रता के लिए प्रदान किए जाएंगे।",
//       img: pension,
//     },
//   ];

//   return (
//     <div className="biography-container fade-in-page">
//       <h1 className="title">Jawahar Lal Ray</h1>
//       <p className="description">
//         Shri Jawahar Lal Ray, a devoted and passionate leader, has always stood
//         for the welfare and upliftment of his people. Known for his dedication,
//         simplicity, and strong connection with the grassroots, he has tirelessly
//         worked to improve the quality of life for the underprivileged.
//       </p>

//       <section className="campaign-section">
//         <div className="campaign-cards">
//           {highlights.map((item, index) => (
//             <div
//               className={`campaign-card highlight ${
//                 index >= highlights.length - 2 ? "campaign-card-alt" : ""
//               }`}
//               key={index}
//             >
//               <img src={item.img} alt={item.title} className="campaign-img" />
//               <div className="campaign-text">
//                 <h3>{item.title}</h3>
//                 <p>{item.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <div className="mission-vision-section">
//         <div className="mission-vision-container">
//           <div className="box">
//             <div className="icon">
//               <FaBullseye />
//             </div>
//             <h3>Mission</h3>
//             <p>
//               To develop, connect, and inspire diverse people to build strong and vibrant communities.
//             </p>
//           </div>
//           <div className="box">
//             <div className="icon">
//               <FaEye />
//             </div>
//             <h3>Vision</h3>
//             <p>
//               To create a region where barriers of age, race, economics, and education are lowered.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="tab-section">
//         <div className="tabs">
//           {["leadership", "passion", "objective"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={activeTab === tab ? "active" : ""}
//             >
//               {tab.toUpperCase()}
//             </button>
//           ))}
//         </div>
//         <div className="tab-content">
//           {activeTab === "leadership" && (
//             <p>Leadership is an action, not a position.</p>
//           )}
//           {activeTab === "passion" && (
//             <p>Passionate about uplifting rural communities.</p>
//           )}
//           {activeTab === "objective" && (
//             <p>To ensure equitable development for all.</p>
//           )}
//         </div>
//         <div className="image-section">
//           <img src={speech2} alt="Jawahar Lal Ray" />
//         </div>
//       </div>

//       <section className="hobbies-section" ref={barsRef}>
//         <h2 className="hobbies-title">Hobbies</h2>
//         <div className="hobbies-content">
//           <div className="hobbies-text">
//             <p>
//               Jawahar Lal Ray Ji enjoys participating in social programs and is deeply interested in tree plantation.
//             </p>
//             <p>
//                Jawahar Lal Ray Ji works tirelessly to improve education facilities in rural areas.
//             </p>
//             <p>
//                 His dedication inspires others to join in social and environmental causes.
//             </p>
//           </div>
//           <div className="hobbies-bars">
//             {[
//               { label: "LEADERSHIP", color: "red", percentage: 100 },
//               { label: "KINDNESS", color: "green", percentage: 100 },
//               { label: "PASSION", color: "blue", percentage: 100 },
//             ].map(({ label, color, percentage }) => (
//               <div className="bar" key={label}>
//                 <span>{label}</span>
//                 <div className="progress-bar-outer">
//                   <div
//                     className={`progress-bar-inner ${color} ${
//                       animateBars ? "animate" : ""
//                     }`}
//                     style={{
//                       width: animateBars ? `${percentage}%` : "0%",
//                       transition: "width 2s ease-in-out",
//                     }}
//                   ></div>
//                   <span className="percentage-text">{percentage}%</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Biography;
import React, { useState, useEffect, useRef } from "react";
import "./Biography.css";
import speech from "../../assets/speech.png";
import speech2 from "../../assets/speech2.jpg";
import pension from "../../assets/pension.png";
import unit from "../../assets/200unit.png";
import devlopmentvideo from "../../assets/devlopmentvideo.mp4";

import { FaBullseye, FaEye } from "react-icons/fa";

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

  const highlights = [
    {
      title: "किसानों को सशक्त बनाना",
      text: "हर किसान को कृषि विकास के लिए प्रति माह 200 यूनिट मुफ्त बिजली दी जाएगी।",
      img: unit,
    },
    {
      title: "सभी के लिए सामाजिक सुरक्षा",
      text: "सामाजिक सुरक्षा पेंशन ₹400 से बढ़ाकर ₹1500 की जाएगी, जिससे हमारे बुजुर्गों को सम्मान और देखभाल मिल सके।",
      img: speech,
    },
    {
      title: "माई बहिन मान योजना",
      text: "माई बहिन मान योजना के तहत हर पात्र महिला को ₹2500 वित्तीय स्वतंत्रता के लिए प्रदान किए जाएंगे।",
      img: pension,
    },
  ];

  return (
    <div className="biography-container fade-in-page">
      <h1 className="title">Jawahar Lal Ray</h1>
      <p className="description">
        Shri Jawahar Lal Ray, a devoted and passionate leader, has always stood
        for the welfare and upliftment of his people. Known for his dedication,
        simplicity, and strong connection with the grassroots, he has tirelessly
        worked to improve the quality of life for the underprivileged.
      </p>

      <section className="campaign-section">
        <div className="campaign-cards">
          {highlights.map((item, index) => (
            <div
              className={`campaign-card highlight ${
                index >= highlights.length - 2 ? "campaign-card-alt" : ""
              }`}
              key={index}
            >
              <img src={item.img} alt={item.title} className="campaign-img" />
              <div className="campaign-text">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

   
<section className="seva-section">
  <h2 className="seva-title">1990 से अब तक सेवा करने का अवसर</h2>
  <div className="seva-card">
    <div className="seva-text">
      <h3>जनसेवा का हमारा सफर</h3>
      <p>
        1990 से अब तक, हमने अनगिनत लोगों की राजनीति के माध्यम से मदद की है।
        यह वीडियो हमारे समर्पण और सेवा भावना की झलक पेश करता है।
      </p>
    </div>
    <video
      src={devlopmentvideo}
      controls
      muted
      autoPlay
      loop
      className="seva-video"
      aria-label="जनसेवा के वीडियो" /* Added for better accessibility */
    >
      Your browser does not support the video tag. /* Fallback text */
    </video>
  </div>
</section>
      <div className="mission-vision-section">
        <div className="mission-vision-container">
          <div className="box">
            <div className="icon">
              <FaBullseye />
            </div>
            <h3>Mission</h3>
            <p>
              To develop, connect, and inspire diverse people to build strong and vibrant communities.
            </p>
          </div>
          <div className="box">
            <div className="icon">
              <FaEye />
            </div>
            <h3>Vision</h3>
            <p>
              To create a region where barriers of age, race, economics, and education are lowered.
            </p>
          </div>
        </div>
      </div>

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
            <p>Leadership is an action, not a position.</p>
          )}
          {activeTab === "passion" && (
            <p>Passionate about uplifting rural communities.</p>
          )}
          {activeTab === "objective" && (
            <p>To ensure equitable development for all.</p>
          )}
        </div>
        <div className="image-section">
          <img src={speech2} alt="Jawahar Lal Ray" />
        </div>
      </div>

      <section className="hobbies-section" ref={barsRef}>
        <h2 className="hobbies-title">Hobbies</h2>
        <div className="hobbies-content">
          <div className="hobbies-text">
            <p>
              Jawahar Lal Ray Ji enjoys participating in social programs and is deeply interested in tree plantation.
            </p>
            <p>
               Jawahar Lal Ray Ji works tirelessly to improve education facilities in rural areas.
            </p>
            <p>
                His dedication inspires others to join in social and environmental causes.
            </p>
          </div>
          <div className="hobbies-bars">
            {[
              { label: "LEADERSHIP", color: "red", percentage: 100 },
              { label: "KINDNESS", color: "green", percentage: 100 },
              { label: "PASSION", color: "blue", percentage: 100 },
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
      </section>
    </div>
  );
}

export default Biography;
