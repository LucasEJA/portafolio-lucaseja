import { useState, useEffect, useRef } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope, FaCertificate, FaFileDownload } from 'react-icons/fa';
import '../../styles/components/Navbar.css';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('welcome');
    const navbarRef = useRef(null);
    const menuButtonRef = useRef(null);
    
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Cerrar menú al presionar Escape y trampar foco (Focus Trap)
    useEffect(() => {
        if (!isMenuOpen) return;
        
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeMenu();
                menuButtonRef.current?.focus();
                return;
            }
            
            if (e.key === 'Tab') {
                const focusableElements = navbarRef.current?.querySelectorAll(
                    'a[href], button:not([disabled])'
                );
                if (!focusableElements || focusableElements.length === 0) return;
                
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        };
        
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isMenuOpen]);

    // Cerrar menú al hacer clic fuera del Navbar
    useEffect(() => {
        if (!isMenuOpen) return;
        
        const handleOutsideClick = (e) => {
            if (navbarRef.current && !navbarRef.current.contains(e.target)) {
                closeMenu();
            }
        };
        
        document.addEventListener('click', handleOutsideClick);
        document.addEventListener('touchstart', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
            document.removeEventListener('touchstart', handleOutsideClick);
        };
    }, [isMenuOpen]);

    // Bloquear scroll del body en pantallas móviles al abrir el menú
    useEffect(() => {
        const checkAndToggleScroll = () => {
            if (isMenuOpen && window.innerWidth <= 767) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        };

        checkAndToggleScroll();
        window.addEventListener('resize', checkAndToggleScroll);
        
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('resize', checkAndToggleScroll);
        };
    }, [isMenuOpen]);

    // Scroll Spy: Observar qué sección está visible para marcarla en el menú
    useEffect(() => {
        const sectionIds = ['welcome', 'aboutme', 'projects', 'skills', 'certifications', 'contact'];
        
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -50% 0px', // Activar cuando esté bien centrada en la pantalla
            threshold: 0
        };
        
        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };
        
        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        
        sectionIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });
        
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <nav ref={navbarRef} className="navbar glass-navbar" aria-label="Navegación principal">
            <div className="navbar-logo">
                <a href="#welcome" onClick={closeMenu}>LucasEJA</a>
            </div>

            <button 
                ref={menuButtonRef}
                className={`navbar-menu-icon ${isMenuOpen ? 'open' : ''}`} 
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Cerrar menú principal" : "Abrir menú principal"}
                aria-expanded={isMenuOpen}
                aria-controls="navbar-menu-links"
                type="button"
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <div 
                id="navbar-menu-links" 
                className={`navbar-links ${isMenuOpen ? 'open' : ''}`}
            >
                <ul>
                    <li>
                        <a 
                            href="#welcome" 
                            className={activeSection === 'welcome' ? 'active' : ''}
                            onClick={closeMenu}
                        >
                            <FaHome className="icon" size={20} color="#fff" />
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#aboutme" 
                            className={activeSection === 'aboutme' ? 'active' : ''}
                            onClick={closeMenu}
                        >
                            <FaUser className="icon" size={20} color="#fff" />
                            Acerca de mi
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#projects" 
                            className={activeSection === 'projects' ? 'active' : ''}
                            onClick={closeMenu}
                        >
                            <FaProjectDiagram className="icon" size={20} color="#fff" />
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#skills" 
                            className={activeSection === 'skills' ? 'active' : ''}
                            onClick={closeMenu}
                        >
                            <FaTools className="icon" size={20} color="#fff" />
                            Habilidades
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#certifications" 
                            className={activeSection === 'certifications' ? 'active' : ''}
                            onClick={closeMenu}
                        >
                            <FaCertificate className="icon" size={20} color="#fff" />
                            Certificados
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#contact" 
                            className={activeSection === 'contact' ? 'active' : ''}
                            onClick={closeMenu}
                        >
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
                        onClick={closeMenu}
                    >
                        <FaFileDownload className="icon" size={18} />
                        Mi CV
                    </a>
                </div>
            </div>
        </nav>
    );
};