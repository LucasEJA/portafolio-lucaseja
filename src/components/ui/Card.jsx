import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/Card.css';

export const Card = ({ iconUrl, skillName, className = '' }) => {
  return (
    <div className={`card-container glass-skill-card ${className}`}>
      <div className="card-content">
        <img
          src={iconUrl}
          className="card-icon"
          alt={`${skillName} icon`}
          loading="lazy"
        />
        <p className="card-text">{skillName}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  iconUrl: PropTypes.string.isRequired,
  skillName: PropTypes.string.isRequired,
  className: PropTypes.string
};