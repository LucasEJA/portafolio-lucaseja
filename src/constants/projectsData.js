import appwebSGA from '../assets/appwebSGA.png';
import appwebBM from '../assets/appWebBM.png';
import cliente3 from '../assets/cliente_3.png';
import cliente4 from '../assets/cliente_4.png';
import cliente5 from '../assets/cliente_5.png';

export const PROJECTS_DATA = [
  {
    id: 1,
    imageUrl: appwebSGA,
    projectName: "Sistema de gestión de archivos",
    description: "La aplicación web desarrollada permite gestionar las tareas administrativas de un instituto. Incluye funcionalidades como la carga y gestión de certificados y constancias, búsqueda de estudiantes, y generación automatizada de documentos.",
    driveLink: "https://drive.google.com/file/d/1SG74An3FbTJgwiQTz7QyhCY-MNoZ-5Nl/view?usp=sharing",
    technologies: ["React", "Node.js", "MySQL", "Express", "Python"],
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
    technologies: ["React", "Node.js", "MySQL", "Express", "Tailwind CSS", "Socket.io"],
    category: "web-app",
    featured: true,
    status: "completed"
  },
  {
    id: 3,
    imageUrl: cliente3,
    projectName: "Taller Corazon de Maria",
    description: "Solucion con dos frontends: sitio publico como catalogo y panel administrativo para gestionar productos, anuncios, reseñas y contenido. La arquitectura separa la experiencia del cliente del control interno para operaciones mas eficientes.",
    driveLink: "https://drive.google.com/file/d/1SG74An3FbTJgwiQTz7QyhCY-MNoZ-5Nl/view?usp=sharing",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS", "Socket.io"],
    category: "web-app",
    featured: true,
    status: "completed"
  },
  {
    id: 4,
    imageUrl: cliente4,
    projectName: "Plataforma de Sorteos (Cliente Privado)",
    description: "Plataforma con web publica para compra de tickets y panel administrativo para gestionar sorteos, participantes y resultados. Flujo claro para usuarios y control centralizado para el equipo operativo.",
    driveLink: "https://drive.google.com/file/d/1SG74An3FbTJgwiQTz7QyhCY-MNoZ-5Nl/view?usp=sharing",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS", "Socket.io", "Telegram bot"],
    category: "web-app",
    featured: true,
    status: "completed"
  },
  {
    id: 5,
    imageUrl: cliente5,
    projectName: "Bazar Tavo's",
    description: "Sistema POS con control de inventario, ventas a credito y seguimiento de deudas. Centraliza ventas, stock y cuentas por cobrar para decisiones operativas con datos actualizados.",
    driveLink: "https://drive.google.com/file/d/1SG74An3FbTJgwiQTz7QyhCY-MNoZ-5Nl/view?usp=sharing",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS"],
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