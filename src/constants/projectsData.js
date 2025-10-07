import appwebSGA from '../assets/appwebSGA.png';
import appwebBM from '../assets/appWebBM.png';

export const PROJECTS_DATA = [
  {
    id: 1,
    imageUrl: appwebSGA,
    projectName: "Sistema de gestión de archivos",
    description: "La aplicación web desarrollada permite gestionar las tareas administrativas de un instituto. Incluye funcionalidades como la carga y gestión de certificados y constancias, búsqueda de estudiantes, y generación automatizada de documentos.",
    driveLink: "https://drive.google.com/file/d/1SG74An3FbTJgwiQTz7QyhCY-MNoZ-5Nl/view?usp=sharing",
    technologies: ["React", "Node.js", "MySQL", "Express"],
    category: "web-app",
    featured: true,
    status: "completed"
  },
  {
    id: 2,
    imageUrl: appwebBM,
    projectName: "Sistema interno de Polleria Burger Maicol",
    description: "La aplicación web agiliza la gestión de pedidos en la pollería conectando cajeros, chef, meseros y repartidores en un sistema integrado. Permite registro eficiente, actualización en tiempo real del estado de pedidos, notificaciones inmediatas y generación automática de reportes. Su flujo digitalizado reduce errores, mejora el servicio y optimiza la administración del negocio con una interfaz adaptada a cada rol.",
    driveLink: "https://drive.google.com/file/d/1eeRapJRw-sK038jTYfree7vw1dOddRst/view?usp=sharing",
    technologies: ["React", "Node.js", "MySQL", "Socket.io"],
    category: "web-app",
    featured: true,
    status: "completed"
  }
];

// Función utilitaria para obtener proyectos destacados
export const getFeaturedProjects = () => {
  return PROJECTS_DATA.filter(project => project.featured);
};

// Función para obtener proyectos por categoría
export const getProjectsByCategory = (category) => {
  return PROJECTS_DATA.filter(project => project.category === category);
};

// Función para obtener proyecto por ID
export const getProjectById = (id) => {
  return PROJECTS_DATA.find(project => project.id === id);
};