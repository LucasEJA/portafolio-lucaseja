import React from 'react';
import '../../styles/components/Aboutme.css';

export const AboutMe = () => {
  const handleCVClick = () => {
    window.open(
      "https://www.canva.com/design/DAGV7V5MqQs/wF7hV91lCGykyNKE8yIVrA/edit?utm_content=DAGV7V5MqQs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", 
      "_blank"
    );
  };

  return (
    <section id="aboutme" className="about-me glass-section section-shell">
      <div className="about-me-content">
        <p className="about-me-intro">
          Soy Ingeniero Informático egresado de la UNP (2024). Especializado en desarrollo full-stack con enfoque en calidad y escalabilidad.
        </p>
      </div>
      
      <div className="div-button">
        <button onClick={handleCVClick} className="button glass-button" aria-label="Descargar CV">
          Ver mi CV
        </button>
      </div>
    </section>
  );
};