export const SKILLS_DATA = [
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    name: "HTML",
    category: "frontend"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    name: "CSS",
    category: "frontend"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    name: "JavaScript",
    category: "frontend"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    name: "Bootstrap",
    category: "frontend"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React",
    category: "frontend"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    name: "Tailwind CSS",
    category: "frontend"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    name: "Python",
    category: "backend"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    name: "Java",
    category: "backend"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    name: "Node.js",
    category: "backend"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    name: "PHP",
    category: "backend"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    name: "MySQL",
    category: "database"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg",
    name: "SQL Server",
    category: "database"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    name: "PostgreSQL",
    category: "database"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg",
    name: "MariaDB",
    category: "database"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    name: "Git",
    category: "tools"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    name: "Firebase",
    category: "tools"
  }
];

// Función utilitaria para filtrar por categoría
export const getSkillsByCategory = (category) => {
  return SKILLS_DATA.filter(skill => skill.category === category);
};

// Función para obtener todas las categorías únicas
export const getSkillCategories = () => {
  return [...new Set(SKILLS_DATA.map(skill => skill.category))];
};