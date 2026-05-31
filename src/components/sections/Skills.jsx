import React from 'react';
import { Card } from '../ui/Card';
import { SKILLS_DATA, getSkillsByCategory } from '../../constants/skillsData';
import '../../styles/components/Skills.css';

const CORE_STACK = ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'];
const CATEGORY_CONFIG = {
  frontend: { label: 'Frontend', order: 1 },
  backend: { label: 'Backend', order: 2 },
  database: { label: 'Base de Datos', order: 3 },
  tools: { label: 'Herramientas', order: 4 }
};

export const Skills = () => {
  const categories = Object.keys(CATEGORY_CONFIG).sort(
    (a, b) => CATEGORY_CONFIG[a].order - CATEGORY_CONFIG[b].order
  );

  const isCoreSkill = (skillName) => CORE_STACK.includes(skillName);

  return (
    <section id="skills" className="skills-container glass-section section-shell">
      <div className="skills-wrapper">
        <h2 className="skills-header">Habilidades</h2>
        <p className="skills-subtitle">Mi stack principal en producción</p>

        <div className="skills-by-category">
          {categories.map((category) => {
            const skills = getSkillsByCategory(category);
            return (
              <div key={category} className="skill-category">
                <h3 className="category-label">{CATEGORY_CONFIG[category].label}</h3>
                <div className="skills-grid">
                  {skills.map((tech) => (
                    <Card
                      key={tech.name}
                      iconUrl={tech.iconUrl}
                      skillName={tech.name}
                      className={isCoreSkill(tech.name) ? 'core-skill' : ''}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};