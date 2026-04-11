import React from 'react';
import { Heart } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Dipan Mazumder. All rights reserved.
          </p>
          <div className="footer-heart">
            Made with <Heart size={16} color="var(--accent-cyan)" fill="var(--accent-cyan)" /> using React
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
