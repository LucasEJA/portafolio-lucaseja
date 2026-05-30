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
    shortDescription: "Gestion administrativa institucional con certificados, constancias y busqueda rapida de estudiantes.",
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
    shortDescription: "Sistema de pedidos multirrol con estados en tiempo real y reportes automaticos.",
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
    shortDescription: "Landing y panel para catalogo, contenido y moderacion de reseñas.",
    description: "Plataforma web de presentación institucional y catálogo digital para una empresa especializada en vestimentas litúrgicas (casullas, estolas, albas y similares), orientada a sacerdotes, parroquias e instituciones religiosas. El sitio público permite explorar el catálogo de productos con sus detalles y contactar al taller directamente vía correo o WhatsApp. El panel administrativo centraliza la gestión completa del contenido: productos (nombre, descripción, precio e imagen), categorías, banners del hero y reseñas de clientes, las cuales pasan por un flujo de moderación donde el administrador aprueba o rechaza antes de publicarse en el sitio.",
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
    shortDescription: "Sorteos con compra de tickets, validacion via Telegram y panel de control.",
    description: "Plataforma de gestión de sorteos con sitio público y panel administrativo. Los participantes adquieren tickets subiendo su comprobante de pago (Yape/QR) desde la web; cada compra genera una notificación en tiempo real al administrador vía bot de Telegram, quien aprueba o rechaza el pago directamente desde el chat o desde el panel. Una vez aprobada la compra, el sistema asigna automáticamente números de tickets consecutivos entre los disponibles. Los ganadores se registran manualmente tras el sorteo en vivo, con foto de evidencia adjunta. El diseño del flujo elimina pagos no verificados y mantiene trazabilidad completa de participantes y resultados.",
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
    shortDescription: "POS multirrol con inventario, ventas a credito y cuentas por cobrar.",
    description: "Sistema POS multirrol para una boutique con venta de ropa, útiles escolares y perfumería, con acceso diferenciado para administrador, cajero y almacenero. Permite registrar ventas buscando productos por nombre o código de barras, con control de inventario en tiempo real. Incluye módulo de ventas a crédito: para operar bajo esta modalidad el cliente requiere un perfil registrado en el sistema, lo que permite llevar seguimiento de deudas activas, registrar abonos parciales y consultar el historial de pagos por cliente. Centraliza operaciones de caja, stock y cuentas por cobrar en una sola interfaz sin depender de registros externos.",
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