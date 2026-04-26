import React from 'react';
import './PreLoader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="preloader-logo">
          <span className="preloader-fit">FIT</span>
          <span className="preloader-life">LIFE</span>
        </div>
        <div className="preloader-bar">
          <div className="preloader-bar-fill"></div>
        </div>
        <p className="preloader-text">LOADING YOUR FITNESS JOURNEY...</p>
      </div>
    </div>
  );
};

export default Preloader;
