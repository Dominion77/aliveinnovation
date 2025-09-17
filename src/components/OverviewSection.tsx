import React from 'react';
import '../css/OverviewSection.css';

const OverviewSection: React.FC = () => {
  return (
    <section id="overview" className="overview">
      <div className="section-container">
        <div className="text-content">
          <h2>Redefining Technological Boundaries</h2>
          <p>At Alive Innovation Tech, we specialize in creating digital experiences that transcend conventional limitations. Our multidisciplinary approach combines cutting-edge technology with human-centered design to deliver solutions that matter.</p>
          <div className="stats-container">
            <div className="stat">
              <h3>3+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Industry Experts</p>
            </div>
            <div className="stat">
              <h3>35+</h3>
              <p>Early Adopters</p>
            </div>
          </div>
        </div>
        <div className="visual-content">
          <div className="abstract-tech">
            <div className="circuit-node"></div>
            <div className="data-stream"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;