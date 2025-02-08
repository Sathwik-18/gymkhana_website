import React from 'react';
import './Home.css';

const Home = () => {
  const handleCouncilHover = (isHovered) => {
    const body = document.querySelector('body');
    if (isHovered) {
      body.classList.add('blurred');
    } else {
      body.classList.remove('blurred');
    }
  };

  return (
    <div className="container">
      <div className="gymkhana-map">
        <div className="logo-container">
          <img src="gymkhana_logo.png" alt="Gymkhana Logo" className="gymkhana-logo" />
        </div>
        
        <div
          id="science-tech"
          className="council"
          style={{ '--line-color': '#00ff00' }}
          onMouseEnter={() => handleCouncilHover(true)}
          onMouseLeave={() => handleCouncilHover(false)}
        >
          <div className="council-line"></div> 
          <div className="council-logo"> 
            <img
              src="science_tech_logo.jpg"
              alt="Science & Technology Council Logo"
              className="council-logo-img"
            />
          </div>
          <div className="council-info">
            <h3>Science & Technology Council</h3>
            <p>Fostering innovation and technical excellence through various clubs and activities.</p>
          </div>
        </div>

        <div
          id="cultural"
          className="council"
          style={{ '--line-color': '#ff0000' }}
          onMouseEnter={() => handleCouncilHover(true)}
          onMouseLeave={() => handleCouncilHover(false)}
        >
          <div className="council-line"></div> 
          <div className="council-logo"> 
            <img
              src="cultural_logo.jpg"
              alt="Cultural Council Logo"
              className="council-logo-img" 
            />
          </div>
          <div className="council-info">
            <h3>Cultural Council</h3>
            <p>Promoting arts, music, dance, and cultural activities across campus.</p>
          </div>
        </div>

        <div
          id="sports"
          className="council"
          style={{ '--line-color': '#0000ff' }}
          onMouseEnter={() => handleCouncilHover(true)}
          onMouseLeave={() => handleCouncilHover(false)}
        >
          <div className="council-line"></div>
          <div className="council-logo"> 
            <img
              src="sports_logo.jpg"
              alt="Sports Council Logo"
              className="council-logo-img" 
            />
          </div>
          <div className="council-info">
            <h3>Sports Council</h3>
            <p>Organizing sports events and maintaining athletic facilities for students.</p>
          </div>
        </div>

        <div
          id="academic"
          className="council"
          style={{ '--line-color': '#ffff00' }}
          onMouseEnter={() => handleCouncilHover(true)}
          onMouseLeave={() => handleCouncilHover(false)}
        >
          <div className="council-line"></div>
          <div className="council-logo"> 
            <img
              src="academic_logo.jpg"
              alt="Academic Council Logo"
              className="council-logo-img" 
            />
          </div>
          <div className="council-info">
            <h3>Academic Council</h3>
            <p>Supporting academic initiatives and student development programs.</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;