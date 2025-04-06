import React from 'react'
import '../estilos/Projects.css'
import { CardProject } from './CardProject'
import appwebSGA from '../assets/appwebSGA.png';
import appwebBM from '../assets/appWebBM.png';

export const Projects = () => {
  const proys = [
    {
      imageUrl:appwebSGA,
      projectName:"Sistema de gestión de archivos",
      description:"La aplicación web desarrollada permite gestionar las tareas administrativas de un instituto. Incluye funcionalidades como la carga y gestión de certificados y constancias, búsqueda de estudiantes, y generación automatizada de documentos.",
      driveLink:"https://drive.google.com/file/d/1SG74An3FbTJgwiQTz7QyhCY-MNoZ-5Nl/view?usp=sharing"
    },
    {
      imageUrl:appwebBM,
      projectName:"Sistema interno de Polleria Burger Maicol",
      description:"La aplicación web agiliza la gestión de pedidos en la pollería conectando cajeros, chef, meseros y repartidores en un sistema integrado. Permite registro eficiente, actualización en tiempo real del estado de pedidos, notificaciones inmediatas y generación automática de reportes. Su flujo digitalizado reduce errores, mejora el servicio y optimiza la administración del negocio con una interfaz adaptada a cada rol.",
      driveLink:"https://drive.google.com/file/d/1eeRapJRw-sK038jTYfree7vw1dOddRst/view?usp=sharing"
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
