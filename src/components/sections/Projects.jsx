import React from 'react';
import '../../styles/components/Projects.css';
import { CardProject } from '../ui/CardProject';
import { PROJECTS_DATA } from '../../constants/projectsData';

export const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <div className="projects-wrapper">
        <h2 className="projects-header">Proyectos</h2>

        <div className="projects-grid">
          {PROJECTS_DATA.map((project) => (
            <CardProject
              key={project.id}
              imageUrl={project.imageUrl}
              projectName={project.projectName}
              description={project.description}
              linkProy={project.driveLink}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </div>
  );
};