import React from 'react';
import '../css/PartnershipSection.css';

const PartnershipsSection: React.FC = () => {
  return (
    <section id="partnerships" className="partnerships">
      <div className="section-container">
        <h2>Strategic Partnerships</h2>
        <p className="section-description">Collaborating with industry leaders to drive innovation forward</p>
        
        <div className="partners-grid">
          {[1, 2, 3, 4, 5, 6].map(item => (
            <div key={item} className="partner-logo">
              <div className="logo-placeholder">
                <span>Partner {item}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="partnership-cta">
          <h3>Interested in partnering with us?</h3>
          <p>Let's explore how we can create transformative solutions together.</p>
          <button className="btn btn-primary">Become a Partner</button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;