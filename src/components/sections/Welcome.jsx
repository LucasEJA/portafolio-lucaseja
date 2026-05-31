import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { StackShowcase } from './StackShowcase';
import '../../styles/components/Welcome.css';
import lucasImage from '../../assets/lucaseja2.jpg';

export const Welcome = () => {
    return (
        <section id="welcome" className="welcome-container glass-section section-shell">
            <div className="welcome-content">
                <div className="welcome-hero">
                    <div className="welcome-photo">
                        <img src={lucasImage} alt="Foto de Lucas Jacinto A." loading="lazy" />
                    </div>
                    <div className="welcome-text">
                        <p className="welcome-greeting">Hola! Mi nombre es</p>
                        <h1 className="welcome-name">Lucas Jacinto A.</h1>
                        <p className="welcome-quote">Desarrollador Full Stack | React • Node.js • PostgreSQL</p>
                    </div>
                </div>

                <StackShowcase />

                <div className="welcome-socials">
                    <a 
                        href="https://github.com/LucasEJA" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link github-link"
                        aria-label="GitHub profile"
                        title="GitHub"
                    >
                        <FaGithub size={32} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/lucas-enmanuel-jacinto-alvarez-249324270/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link linkedin-link"
                        aria-label="LinkedIn profile"
                        title="LinkedIn"
                    >
                        <FaLinkedin size={32} />
                    </a>
                </div>
            </div>
        </section>
    );
};
