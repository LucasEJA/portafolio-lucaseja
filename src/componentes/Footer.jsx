import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../estilos/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.facebook.com/LucasEJA" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaFacebook size={30} color="#fff" />
        </a>
        <a href="https://www.instagram.com/lucas_enmanuelp/profilecard/?igsh=Y3diNmJzcHI0MDB0" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaInstagram size={30} color="#fff" />
        </a>
        <a href="https://www.linkedin.com/in/lucas-enmanuel-jacinto-alvarez-249324270/" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaLinkedin size={30} color="#fff" />
        </a>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2024, LucasEJA</p>
      </div>
    </footer>
  );
};