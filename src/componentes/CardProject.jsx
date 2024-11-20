import React from 'react'
import '../estilos/CardProject.css'
export const CardProject = ({ imageUrl, projectName, description, linkProy }) => {
    return (
        <div className="card-project-container">
            <div className="card-project-content">
                <img
                    src={imageUrl}
                    alt={projectName}
                    className="card-project-image"
                />
                <h3 className="card-project-title">{projectName}</h3>
                <p className="card-project-description">{description}</p>
                <a href={linkProy} target="_blank" rel="noopener noreferrer" className="card-project-link">
                    Ver
                </a>
            </div>
        </div>
    )
}
