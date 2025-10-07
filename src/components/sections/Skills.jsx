import React from 'react';
import { Card } from '../ui/Card';
import { SKILLS_DATA } from '../../constants/skillsData';
import '../../styles/components/Skills.css';

export const Skills = () => {
  return (
    <div id="skills" className="skills-container glass-section">
      <div className="skills-wrapper">
        <h2 className="skills-header">Habilidades</h2>
        <p className="skills-subtitle">Estas son las tecnologías con las que tengo experiencia</p>

        <div className="skills-grid">
          {SKILLS_DATA.map((tech) => (
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