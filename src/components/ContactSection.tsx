import React from 'react';
import '../css/ContactSection.css';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="text-content">
          <h2>Get in Touch</h2>
          <p>Ready to transform your ideas into innovative digital solutions? Reach out to our team.</p>
          
          <div className="contact-info">
            <div className="info-item">
              <h4>Email</h4>
              <p>info@aliveinnovation.com</p>
            </div>
            <div className="info-item">
              <h4>Phone</h4>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="info-item">
              <h4>Location</h4>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows={4}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;