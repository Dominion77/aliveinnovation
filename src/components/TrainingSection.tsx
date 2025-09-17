import React from 'react';
import '../css/TrainingSection.css';

const TrainingSection: React.FC = () => {
  return (
    <section id="training" className="training">
      <div className="section-container">
        <div className="text-content">
          <h2>Training & Consultancy</h2>
          <p>Empower your team with our specialized training programs and strategic consultancy services. We bridge the gap between emerging technologies and business objectives.</p>
          
          <div className="services-list">
            <div className="service-item">
              <h4>Technical Workshops</h4>
              <p>Hands-on sessions on the latest technologies and methodologies.</p>
            </div>
            <div className="service-item">
              <h4>Strategic Consulting</h4>
              <p>Expert guidance to align technology with your business goals.</p>
            </div>
            <div className="service-item">
              <h4>Digital Transformation</h4>
              <p>End-to-end support for your organization's digital evolution.</p>
            </div>
          </div>
          
          <button className="btn btn-primary">Learn More</button>
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