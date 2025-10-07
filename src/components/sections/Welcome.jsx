import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../../styles/components/Welcome.css';
import lucasImage from '../../assets/lucaseja2.jpg';

export const Welcome = () => {
    return (
        <div id="welcome" className="welcome-container glass-section">
            <div className="welcome-photo glass-photo-frame">
                <img src={lucasImage} alt="Lucas Enmanuel Jacinto Alvarez" />
            </div>
            <div className="welcome-info">
                <p>Hola!!! Mi nombre es</p>
                <h1>Lucas Jacinto A.</h1>
                <p className="welcome-quote">"Desarrollador Full Stack | Apasionado por la tecnología"</p>
            </div>
            <div className="welcome-socials">
                <a 
                    href="https://github.com/LucasEJA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass-social-link"
                    aria-label="GitHub profile"
                >
                    <FaGithub size={30} color="#333" />
                </a>
                <a 
                    href="https://www.linkedin.com/in/lucas-enmanuel-jacinto-alvarez-249324270/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass-social-link"
                    aria-label="LinkedIn profile"
                >
                    <FaLinkedin size={30} color="#333" />
                </a>
            </div>
        </div>
    );
};