import React from 'react';
import PropTypes from 'prop-types';
import { PiCertificateFill } from 'react-icons/pi';
import { HiExternalLink } from 'react-icons/hi';
import '../../styles/components/CardProject.css';

export const CardCertification = ({
    title,
    institution,
    duration,
    startDate,
    endDate,
    certificateUrl,
    skills = [],
    icon: IconComponent = PiCertificateFill,
    className = ''
}) => {
    const handleViewCertificate = () => {
        window.open(certificateUrl, '_blank');
    };

    return (
        <div className={`card-certification-compact ${className}`}>
            {/* Icono lateral */}
            <div className="certification-compact-icon">
                <IconComponent size={40} />
            </div>

            <div className="certification-compact-content">
                <div className="certification-compact-info">
                    <h3 className="certification-compact-title">{title}</h3>
                    <div className="certification-compact-details">
                        <span className="certification-compact-institution">{institution}</span>
                        <span className="certification-compact-duration">{duration}</span>
                    </div>
                </div>

                <button
                    onClick={handleViewCertificate}
                    className="certification-compact-button"
                    aria-label={`Ver certificado de ${title}`}
                >
                    <span>Ver PDF</span>
                    <HiExternalLink size={14} />
                </button>
            </div>
        </div>
    );
};

CardCertification.propTypes = {
    title: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    certificateUrl: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
    icon: PropTypes.elementType,
    className: PropTypes.string
};