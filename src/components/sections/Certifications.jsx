import React from 'react';
import '../../styles/components/Certifications.css';
import { CardCertification } from '../ui/CardCertification';
import { CERTIFICATIONS_DATA } from '../../constants/certificationsData';

export const Certifications = () => {
    return (
        <div id="certifications" className="certifications-container glass-section">
            <div className="certifications-wrapper">
                <h2 className="certifications-header">Certificados</h2>

                <div className="certifications-grid">
                    {CERTIFICATIONS_DATA.map((certification) => (
                        <CardCertification
                            key={certification.id}
                            title={certification.title}
                            institution={certification.institution}
                            duration={certification.duration}
                            startDate={certification.startDate}
                            endDate={certification.endDate}
                            certificateUrl={certification.certificateUrl}
                            skills={certification.skills}
                            icon={certification.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
