import React from 'react'
import '../estilos/Card.css'

export const Card = ({ iconUrl, skillName }) => {
  return (
    <div className="card-container">
            <div className="card-content">
                <img
                    src={iconUrl}
                    className="card-icon"
                    alt={skillName}
                />
                <p className="card-text">{skillName}</p>
            </div>
        </div>
  )
}