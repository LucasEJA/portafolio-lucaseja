import React from 'react';
import '../../styles/components/Projects.css';
import { ProjectCarousel } from '../carrusel/ProjectCarousel';

export const Projects = () => {
  return (
    <section id="projects" className="projects-container glass-section section-shell">
      <div className="projects-wrapper">
        <h2 className="projects-header">Proyectos</h2>
        <ProjectCarousel />
      </div>
    </section>
  );
};