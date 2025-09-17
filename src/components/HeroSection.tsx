import React from 'react';
import '../css/HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="text-content">
          <h1>Building and scaling transformative digital products across industries.</h1>
          <p>We pioneer next-generation solutions that redefine possibilities and drive progress in the digital age.</p>
          <div className="button-group">
            <button className="btn btn-primary">Explore Our Work</button>
            <button className="btn btn-secondary">Get in Touch</button>
          </div>
        </div>
        <div className="visual-content">
          <div className="tech-visual">
            <div className="holographic-element"></div>
            <div className="floating-grid"></div>
            <div className="particle-effect"></div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="indicator-line"></div>
      </div>
    </section>
  );
};

export default HeroSection;