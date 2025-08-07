import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const LeaderIntro = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate('/about');
  };

  return (
    <div id="about" className="leader-container"> 
      <div className="leader-left">
        <img
          src="src\assets\jawaharabout.jpg"
          alt="Leader"
          className="leader-image"
        />
      </div>
      <div className="leader-right">
        <h1 className="leader-title">
        Jawahar Lal Rai
        </h1>
        <div className="leader-separator">༺ ❖ ༻</div>
        <p className="leader-description">
          Jawahar Lal Rai
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
