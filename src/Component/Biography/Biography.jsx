import jawaharImg from '../../assets/jawaharabout.jpg';
import React from "react";
import "./Biography.css";
const Biography = () => {
  return (
    <div className="bio-wrapper">
      <div className="bio-card">
        <div className="bio-header">
          <h1 className="bio-title">Jawahar Lal Rai</h1>
          <p className="bio-position">
            Candidate for 137 – Mohiuddin Nagar Assembly Constituency (2025
            Elections)
          </p>
        </div>  

        <div className="bio-section main-info">
          <div className="bio-image-wrapper">
            <img src={jawaharImg} alt="Jawahar Lal Rai" className="bio-image" />
          </div>
          <div className="bio-info">
            <p>
              <strong>Father’s Name:</strong> Late Chandrika Rai
            </p>
            <p>
              <strong>Mother’s Name:</strong> Late Ramdulari Devi
            </p>
            <p>
              <strong>Date of Birth:</strong> 5th October 1967
            </p>
            <p>
              <strong>Religion:</strong> Hindu
            </p>
            <p>
              <strong>Education:</strong> Intermediate
            </p>
            <p>
              <strong>Profession:</strong> Politician and Social Worker
            </p>
            <p>
              <strong>Permanent Address:</strong>
              <br />
              Village – Sahbazpur Tola,
              <br />
              Post – Mahammadpur Rai,
              <br />
              PS – Mohiuddin Nagar,
              <br />
              District – Samastipur, Bihar, 848502
            </p>
          </div>
        </div>

        <div className="bio-section">
          <h2>Political Journey</h2>
          <ul>
            <li>
              Began political career in 1990 as Panchayat President, served till
              2004.
            </li>
            <li>Actively managed Lok Sabha elections in 1995 and 2000.</li>
            <li>
              Election In-Charge for Panchayat elections in 2001 and 2006 for
              Mohiuddin Nagar block.
            </li>
            <li>Serving as Panchayat Mukhiya since 2006 till present.</li>
          </ul>
        </div>

        <div className="bio-section">
          <h2>Leadership Qualities</h2>
          <ul>
            <li>
              Deep connection with grassroots citizens and rural communities.
            </li>
            <li>Bold decision-making and team-building capabilities.</li>
            <li>Respected for integrity, discipline, and responsibility.</li>
            <li>Dedicated to youth empowerment and social justice.</li>
          </ul>
        </div>

        <div className="bio-section">
          <h2>Vision & Mission</h2>
          <p>
            To empower the underprivileged and build a stronger, self-reliant
            Bihar. My mission is to bring education, employment, and healthcare
            to every doorstep in Mohiuddin Nagar and transform our region into a
            model of inclusive development.
          </p>
        </div>

        <div className="bio-section">
          <h2>Achievements</h2>
          <ul>
            <li>Led various awareness campaigns on health and sanitation.</li>
            <li>
              Organized multiple job camps and skill development initiatives for
              youth.
            </li>
            <li>
              Successfully resolved community disputes through peaceful
              mediation.
            </li>
            <li>
              Consistently worked to upgrade local roads, schools, and public
              facilities.
            </li>
          </ul>
        </div>

        <div className="bio-section">
          <h2>Personal Values</h2>
          <ul>
            <li>Honesty and transparency in leadership.</li>
            <li>Commitment to community service above personal gain.</li>
            <li>
              Faith in secular, inclusive politics that respects all religions
              and communities.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Biography;