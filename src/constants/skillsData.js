export const SKILLS_DATA = [
  // Frontend
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
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg",
    name: "XML",
    category: "frontend"
  },

  // Backend
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
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    name: "Express.js",
    category: "backend"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    name: "Spring Boot",
    category: "backend"
  },

  // Database
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
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
    category: "database"
  },

  // Tools
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    name: "Git",
    category: "tools"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    name: "GitHub",
    category: "tools"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    name: "Postman",
    category: "tools"
  },
  {
    iconUrl: "https://img.icons8.com/color/48/power-bi.png",
    name: "Power BI",
    category: "tools"
  },

  // Infrastructure
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    name: "Nginx",
    category: "infrastructure"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg",
    name: "Debian Linux",
    category: "infrastructure"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    name: "Firebase",
    category: "infrastructure"
  },
  {
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    name: "Google Cloud",
    category: "infrastructure"
  },
];

export const getSkillsByCategory = (category) => {
  return SKILLS_DATA.filter(skill => skill.category === category);
};

export const getSkillCategories = () => {
  return [...new Set(SKILLS_DATA.map(skill => skill.category))];
};