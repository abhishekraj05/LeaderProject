import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import jawaharImage from '../../assets/About.png';

const LeaderIntro = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/about");
  };

  return (
    <div id="about" className="leader-container">
      <div className="leader-left">
        <img
          src={jawaharImage}
          alt="Leader"
          className="leader-image "
          loading="lazy"
        />
      </div>
      <div className="leader-right">
        <h1 className="leader-title fade-slide">Jawahar Lal Rai</h1>
        <div className="leader-separator fade-slide">༺ ❖ ༻</div>
        <p className="leader-description fade-slide">
          Jawahar Lal Rai, a dedicated leader from Mohaddinagar, is deeply passionate about
          social service, which inspired him to join the Rashtriya Janata Dal (RJD) and actively
          engage in the betterment of society through various initiatives. He has always dreamt
          of serving the nation and contributing to its development. Starting as a grassroots-level
          worker, he has successfully led numerous social campaigns and political programs with
          dedication and courage. As a committed party member, he has consistently accepted every
          responsibility entrusted to him and fulfilled each one with sincerity, discipline, and
          devotion.
        </p>
        <button className="view-more-button fade-slide" onClick={handleViewMore}>
          View More
        </button>
      </div>
    </div>
  );
};

export default LeaderIntro;
