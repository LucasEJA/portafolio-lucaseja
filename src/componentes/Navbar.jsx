import React, { useState } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa'; // Iconos de Font Awesome
import '../estilos/Navbar.css';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#welcome">LucasEJA</a>
            </div>

            <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <a href="#welcome"><FaHome className="icon" size={20} color="#fff" />Inicio</a>
                    </li>
                    <li>
                        <a href="#aboutme"><FaUser className="icon" size={20} color="#fff" />Acerca de mi</a>
                    </li>
                    <li>
                        <a href="#projects"><FaProjectDiagram className="icon" size={20} color="#fff" />Proyectos</a>
                    </li>
                    <li>
                        <a href="#skills"><FaTools className="icon" size={20} color="#fff" />Habilidades</a>
                    </li>
                    <li>
                        <a href="#contact"><FaEnvelope className="icon" size={20} color="#fff" />Contactame</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-menu-icon" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};