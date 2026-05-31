import React from 'react';
import '../../styles/components/Projects.css';
import { ProjectsGrid } from './ProjectsGrid';

export const Projects = () => {
  return (
    <section id="projects" className="projects-container glass-section section-shell">
      <div className="projects-wrapper">
        <h2 className="projects-header">Proyectos Destacados</h2>
        <p className="projects-subtitle">Full-stack applications en producción</p>
        <ProjectsGrid />
      </div>
    </section>
  );
};