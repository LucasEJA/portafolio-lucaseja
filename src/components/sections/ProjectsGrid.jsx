import React, { useMemo, useState } from 'react';
import { PROJECTS_DATA } from '../../constants/projectsData';
import { CardProject } from '../ui/CardProject';
import { Modal } from '../ui/Modal';
import '../../styles/components/ProjectsGrid.css';
import '../../styles/components/ProjectModal.css';

export const ProjectsGrid = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const isModalOpen = Boolean(activeProject);

  const hasMoreProjects = PROJECTS_DATA.length > 2;
  const visibleProjects = useMemo(() => (
    showAll ? PROJECTS_DATA : PROJECTS_DATA.slice(0, 2)
  ), [showAll]);

  return (
    <>
      <div className="projects-grid-container">
        <div className="projects-grid">
          {visibleProjects.map((project) => (
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
            <button
              type="button"
              className="view-more-btn glass-button"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
            >
              {showAll ? 'Ver menos proyectos' : 'Ver todos los proyectos'}
            </button>
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
