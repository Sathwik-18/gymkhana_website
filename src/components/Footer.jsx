import React from 'react';
import './Footer.css';
import { Instagram, Facebook, Linkedin, MapPin, Mail } from 'lucide-react'; 

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <img src="gymkhana_logo.png" alt="Gymkhana Logo" className="footer-gymkhana-logo" />
          <h2 className="footer-gymkhana-text">Student's Gymkhana</h2>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/clubs">Clubs</a></li>
            <li><a href="/events">Events</a></li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h3>Contact & Location</h3>
          <ul className="contact-list">
            <li className="contact-item location">
              <MapPin size={20} />
              <address>
                Indian Institute of Technology Indore, <br />
                Khandwa Road, Simrol, Indore 453552
              </address>
            </li>
            <li className="contact-item email">
              <Mail size={20} />
              <a href="mailto:studentgym@iiti.ac.in">studentgym@iiti.ac.in</a>
            </li>
          </ul>
        </div>

        <div className="footer-section social-links">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/studentgym/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={22} /></a> {/* Add aria-label for accessibility */}
            <a href="https://www.instagram.com/gymkhana_iiti/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={22} /></a> {/* Add aria-label for accessibility */}
            <a href="https://www.linkedin.com/company/students-gymkhana-iit-indore/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={22} /></a>   {/* Add aria-label for accessibility */}
          </div>
        </div>

        <div className="footer-section copyright">
          <p>© {new Date().getFullYear()} Gymkhana, IIT INDORE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;