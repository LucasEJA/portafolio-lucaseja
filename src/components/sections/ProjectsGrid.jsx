import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../constants/projectsData';
import { CardProject } from '../ui/CardProject';
import { Modal } from '../ui/Modal';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '../../styles/components/ProjectsGrid.css';
import '../../styles/components/ProjectModal.css';

export const ProjectsGrid = () => {
  const [activeProject, setActiveProject] = useState(null);
  const isModalOpen = Boolean(activeProject);

  // Mostrar 2 proyectos destacados
  const featuredProjects = PROJECTS_DATA.slice(0, 2);
  const hasMoreProjects = PROJECTS_DATA.length > 2;

  return (
    <>
      <div className="projects-grid-container">
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project-grid-item">
              <CardProject
                imageUrl={project.imageUrl}
                projectName={project.projectName}
                description={project.shortDescription || project.description}
                linkProy={project.driveLink}
                technologies={project.technologies}
                onView={() => setActiveProject(project)}
              />
            </div>
          ))}
        </div>

        {hasMoreProjects && (
          <div className="projects-cta">
            <a href="#projects-gallery" className="view-more-btn glass-button">
              Ver todos los proyectos
              <FaExternalLinkAlt size={14} />
            </a>
          </div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setActiveProject(null)}
        title={activeProject?.projectName}
        size="lg"
        closeOnOverlayClick
      >
        {activeProject && (
          <div className="project-modal">
            <div className="project-modal-media">
              <img
                src={activeProject.imageUrl}
                alt={`Vista del proyecto ${activeProject.projectName}`}
                className="project-modal-image"
              />
            </div>
            <div className="project-modal-content">
              <p className="project-modal-description">{activeProject.description}</p>

              {activeProject.technologies?.length > 0 && (
                <div className="project-modal-technologies">
                  {activeProject.technologies.map((tech, index) => (
                    <div key={`${tech}-${index}`} className="tech-badge glass-tech-badge">
                      <span className="tech-name">{tech}</span>
                    </div>
                  ))}
                </div>
              )}

              <a
                href={activeProject.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="card-project-link glass-button project-modal-link"
              >
                Ver referencias
              </a>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};
