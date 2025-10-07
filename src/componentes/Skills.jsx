import React from 'react';
import { Card } from './Card';
import '../estilos/Skills.css';

export const Skills = () => {
  const tecno = [
    {
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "HTML"
    },
    {
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: "CSS"
    },
    {
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "JAVASCRIPT"
    },
    {
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      name: "BOOTSTRAP"
    },
    {
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      name: "PYTHON"
    },
    {
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      name: "JAVA"
    },
    {
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
      name: "MYSQL"
    },
    {
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg",
      name: "SQL SERVER MICROSOFT"
    },
    {
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      name: "POSTGRESQL"
    },
    {
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg",
      name: "MARIADB"
    },
    {
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      name: "PHP"
    },
    {
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "REACT"
    },
    {
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      name: "TAILWIND CSS"
    },
    {
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "NODEJS"
    },
    {
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      name: "GIT"
    },
    {
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      name: "FIREBASE"
    }
  ];


  return (
    <div id="skills" className="skills-container">
      <div className="skills-wrapper">
        <h2 className="skills-header">Habilidades</h2>

        <p className="skills-subtitle">Estas son las tecnologías con las que tengo experiencia</p>

        <div className="skills-grid">
          {tecno.map((tech) => (
            <Card
              key={tech.name}
              iconUrl={tech.iconUrl}
              skillName={tech.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
