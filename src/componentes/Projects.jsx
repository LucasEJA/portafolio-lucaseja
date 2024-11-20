import React from 'react'
import '../estilos/Projects.css'
import { CardProject } from './CardProject'
import appwebSGA from '../assets/appwebSGA.png';

export const Projects = () => {
  const proys = [
    {
      imageUrl:appwebSGA,
      projectName:"Sistema de gestión de archivos",
      description:"La aplicación web desarrollada permite gestionar las tareas administrativas de un instituto. Incluye funcionalidades como la carga y gestión de certificados y constancias, búsqueda de estudiantes, y generación automatizada de documentos.",
      driveLink:""
    }
  ];
  return (
    <div id="projects" className="projects-container">
      <div className="projects-wrapper">
        <h2 className="projects-header">Proyectos</h2>

        <div className="projects-grid">
          {proys.map((pry) => (
            <CardProject
            key={pry.projectName}
            imageUrl={pry.imageUrl}
            projectName={pry.projectName}
            description={pry.description}
            linkProy={pry.driveLink}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
