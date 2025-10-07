import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../../styles/components/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer glass-footer">
      <div className="footer-icons">
        <a 
          href="https://github.com/LucasEJA" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer-icon"
          aria-label="GitHub profile"
        >
          <FaGithub size={30} color="#fff" />
        </a>
        <a 
          href="https://www.instagram.com/lucas_enmanuelp/profilecard/?igsh=Y3diNmJzcHI0MDB0" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer-icon"
          aria-label="Instagram profile"
        >
          <FaInstagram size={30} color="#fff" />
        </a>
        <a 
          href="https://www.linkedin.com/in/lucas-enmanuel-jacinto-alvarez-249324270/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer-icon"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin size={30} color="#fff" />
        </a>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2024, LucasEJA</p>
      </div>
    </footer>
  );
};