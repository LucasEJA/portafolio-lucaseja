// Mapeo de tecnologías con sus colores específicos (estilo GitHub)
export const TECH_COLORS = {
  'React': '#61DAFB',
  'Node.js': '#339933',
  'MySQL': '#4479A1',
  'Express': '#000000',
  'Socket.io': '#010101',
  'JavaScript': '#F7DF1E',
  'TypeScript': '#3178C6',
  'Python': '#3776AB',
  'PHP': '#777BB4',
  'HTML': '#E34F26',
  'CSS': '#1572B6',
  'MongoDB': '#47A248',
  'PostgreSQL': '#4169E1',
  'Vue.js': '#4FC08D',
  'Angular': '#DD0031',
  'Laravel': '#FF2D20',
  'Django': '#092E20',
  'Spring': '#6DB33F',
  'Docker': '#2496ED',
  'AWS': '#232F3E',
  'Firebase': '#FFCA28'
};

// Función para obtener el color de una tecnología
export const getTechColor = (tech) => {
  return TECH_COLORS[tech] || '#6B7280'; // Color gris por defecto
};