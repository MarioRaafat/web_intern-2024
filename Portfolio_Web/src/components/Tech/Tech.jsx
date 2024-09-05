import React from 'react'
import {technologies} from '../../constants/constants.js'
import "./Tech.css"


const Tech = () => {
  return (
    <>
      <div className="tech-section">
        <div className="tech-title">
          Technologies
        </div>

        <div className="tech-container">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <img src={tech.icon} alt={tech.name} className="tech-icon"/>
              <p className="tech-text">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Tech