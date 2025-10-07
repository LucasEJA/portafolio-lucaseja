import React from 'react';
import '../../styles/components/AboutMe.css';

export const AboutMe = () => {
  const handleCVClick = () => {
    window.open(
      "https://www.canva.com/design/DAGV7V5MqQs/wF7hV91lCGykyNKE8yIVrA/edit?utm_content=DAGV7V5MqQs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", 
      "_blank"
    );
  };

  return (
    <div id="aboutme" className="about-me">
      <h2>Sobre mí</h2>
      <p>
        Soy Ingeniero Informático, con una profunda pasión por la tecnología y un enfoque constante hacia el aprendizaje y la mejora continua. Mi fascinación por los avances tecnológicos me ha impulsado a desarrollar una sólida base de conocimientos y habilidades que me permiten abordar desafíos informáticos con eficacia y creatividad.
      </p>
      <p>
        A lo largo de mi formación en la <strong>Universidad Nacional de Piura (2019-2024)</strong>, he fortalecido mi capacidad para trabajar de manera colaborativa en equipos multidisciplinarios, lo que me ha permitido no solo adquirir conocimientos técnicos, sino también habilidades interpersonales y de liderazgo. Me considero una persona responsable, resiliente y con un enfoque optimista, cualidades que me permiten adaptarme y sobresalir en entornos dinámicos y en constante cambio.
      </p>

      <h3>Mis habilidades clave incluyen:</h3>
      <ul>
        <li>Aprendizaje Ágil</li>
        <li>Resiliencia ante Desafíos</li>
        <li>Enfoque Optimista y Proactivo</li>
        <li>Compromiso con la Puntualidad</li>
        <li>Liderazgo</li>
        <li>Trabajo en Equipo</li>
      </ul>
      
      <div className="div-button">
        <button onClick={handleCVClick} className="button">
          Ver mi CV
        </button>
      </div>
    </div>
  );
};