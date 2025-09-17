import React from 'react';
import '../css/TrainingSection.css';

const TrainingSection: React.FC = () => {
  return (
    <section id="training" className="training">
      <div className="section-container">
        <div className="text-content">
          <h2>Mission & Vision</h2>
          <p>Find out what drives us</p>
          
          <div className="services-list">
            <div className="service-item">
              <h4>Mission</h4>
              <p>To build and scale transformative digital products that bridge gaps across industries, empowering individuals, businesses, and communities through technology, innovation, and collaboration.</p>
            </div>
            <div className="service-item">
              <h4>Vision</h4>
              <p>To be Africa’s foremost technology innovation company, creating a diverse ecosystem of platforms and services that redefine industries, unlock opportunities, and connect people to a smarter, more inclusive digital future</p>
            </div>
            {/* <div className="service-item">
              <h4>Digital Transformation</h4>
              <p>End-to-end support for your organization's digital evolution.</p>
            </div> */}
          </div>
          
          {/* <button className="btn btn-primary">Learn More</button> */}
        </div>
        <div className="visual-content">
          <div className="hologram-container">
            <div className="hologram"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;