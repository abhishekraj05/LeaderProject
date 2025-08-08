import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div style={{backdropFilter: "blur(10px)"}} className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Oops! Page not found.</p>
        <Link to="/" className="notfound-button">Go to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
