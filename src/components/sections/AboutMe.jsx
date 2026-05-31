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
        <h2 className="about-me-title">Sobre mí</h2>
        <p className="about-me-paragraph">
          Soy Ingeniero Informático, con una profunda pasión por la tecnología y un enfoque constante hacia el aprendizaje y la mejora continua. Mi fascinación por los avances tecnológicos me ha impulsado a desarrollar una sólida base de conocimientos y habilidades que me permiten abordar desafíos informáticos con eficacia y creatividad.
        </p>
        <p className="about-me-paragraph">
          A lo largo de mi formación en la <strong>Universidad Nacional de Piura (2019-2024)</strong>, he fortalecido mi capacidad para trabajar de manera colaborativa en equipos multidisciplinarios, lo que me ha permitido no solo adquirir conocimientos técnicos, sino también habilidades interpersonales y de liderazgo. Me considero una persona responsable, resiliente y con un enfoque optimista, cualidades que me permiten adaptarme y sobresalir en entornos dinámicos y en constante cambio.
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
