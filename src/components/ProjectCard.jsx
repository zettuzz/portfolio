"use client"

import { useState } from "react"
import "./ProjectCard.css"

const ProjectCard = ({ title, description, image, tags, link }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`project-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image">
        <img src={image || "/src/assets/placeholder.svg"} alt={title} />
        <div className="project-overlay">
          <a href={link} target="_blank" rel="noopener noreferrer" className="view-project">
            View Project
          </a>
        </div>
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
