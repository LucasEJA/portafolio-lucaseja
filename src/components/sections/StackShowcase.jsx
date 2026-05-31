import React from 'react';
import { SiReact, SiNodedotjs, SiPostgresql, SiTailwindcss } from 'react-icons/si';
import '../../styles/components/StackShowcase.css';

export const StackShowcase = () => {
  const stackItems = [
    { icon: SiReact, label: 'React', color: '#61DAFB' },
    { icon: SiNodedotjs, label: 'Node.js', color: '#68A063' },
    { icon: SiPostgresql, label: 'PostgreSQL', color: '#336791' },
    { icon: SiTailwindcss, label: 'Tailwind', color: '#38B2AC' },
  ];

  return (
    <div className="stack-showcase">
      <p className="stack-label">Mi Stack Principal</p>
      <div className="stack-icons">
        {stackItems.map(({ icon: Icon, label, color }) => (
          <div key={label} className="stack-item" title={label}>
            <Icon size={48} color={color} className="stack-icon" />
            <span className="stack-name">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
