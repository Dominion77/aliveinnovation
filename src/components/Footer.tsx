import React from 'react';
import '../css/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="logo-placeholder">
            <span>Alive Innovation Tech</span>
          </div>
          <p>Transforming ideas into digital reality</p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Company</h4>
            <ul>
              <li><a href="#overview">About Us</a></li>
              <li><a href="#portfolio">Work</a></li>
              <li><a href="#contact">Careers</a></li>
            </ul>
          </div>
          
          <div className="link-group">
            <h4>Services</h4>
            <ul>
              <li><a href="#portfolio">Product Development</a></li>
              <li><a href="#training">Consultancy</a></li>
              <li><a href="#training">Training</a></li>
            </ul>
          </div>
          
          <div className="link-group">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Alive Innovation Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;