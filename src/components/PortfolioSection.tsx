import React from 'react';
import type { PortfolioItem } from '../types';
import '../css/PortfolioSection.css';

interface PortfolioSectionProps {
  portfolioItems: PortfolioItem[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ portfolioItems }) => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="section-container">
        <h2>Our Portfolio</h2>
        <p className="section-description">Discover our innovative solutions across various industries</p>
        
        <div className="portfolio-grid">
          {portfolioItems.map(item => (
            <div key={item.id} className="portfolio-card">
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="category">{item.category}</span>
              </div>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;