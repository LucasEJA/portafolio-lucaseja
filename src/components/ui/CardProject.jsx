import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/CardProject.css';

export const CardProject = ({ 
  imageUrl, 
  projectName, 
  description, 
  linkProy, 
  className = '' 
}) => {
  return (
    <div className={`card-project-container ${className}`}>
      <div className="card-project-content">
        <img
          src={imageUrl}
          alt={`${projectName} screenshot`}
          className="card-project-image"
          loading="lazy"
        />
        <h3 className="card-project-title">{projectName}</h3>
        <p className="card-project-description">{description}</p>
        <a 
          href={linkProy} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="card-project-link"
          aria-label={`Ver detalles del proyecto ${projectName}`}
        >
          Ver proyecto
        </a>
      </div>
    </div>
  );
};

CardProject.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkProy: PropTypes.string.isRequired,
  className: PropTypes.string
};