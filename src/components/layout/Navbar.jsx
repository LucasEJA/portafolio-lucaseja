import React, { useState } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope, FaCertificate, FaFileDownload } from 'react-icons/fa';
import '../../styles/components/Navbar.css';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar glass-navbar">
            <div className="navbar-logo">
                <a href="#welcome">LucasEJA</a>
            </div>

            <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <a href="#welcome">
                            <FaHome className="icon" size={20} color="#fff" />
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#aboutme">
                            <FaUser className="icon" size={20} color="#fff" />
                            Acerca de mi
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <FaProjectDiagram className="icon" size={20} color="#fff" />
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a href="#skills">
                            <FaTools className="icon" size={20} color="#fff" />
                            Habilidades
                        </a>
                    </li>
                    <li>
                        <a href="#certifications">
                            <FaCertificate className="icon" size={20} color="#fff" />
                            Certificados
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <FaEnvelope className="icon" size={20} color="#fff" />
                            Contactame
                        </a>
                    </li>
                </ul>
                <div className="navbar-cv-button">
                    <a 
                        href="https://www.canva.com/design/DAGV7V5MqQs/wF7hV91lCGykyNKE8yIVrA/edit?utm_content=DAGV7V5MqQs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Descargar mi CV"
                        title="Abrir CV en nueva pestaña"
                        className="cv-btn"
                    >
                        <FaFileDownload className="icon" size={18} />
                        Mi CV
                    </a>
                </div>
            </div>

            <div className="navbar-menu-icon" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};