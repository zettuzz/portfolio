"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./TrainingEvidence.css"

const TrainingEvidence = () => {
  const [filter, setFilter] = useState("all")

  const trainingPhotos = [
    { id: 1, image: "/src/assets/photo/1.jfif" },
    { id: 2, image: "/src/assets/photo/2.jfif" },
    { id: 3, image: "/src/assets/photo/3.jfif" },
    { id: 4, image: "/src/assets/photo/4.jfif" },
    { id: 5, image: "/src/assets/photo/5.jfif" },
    { id: 6, image: "/src/assets/photo/6.jfif" },
  ]

  const filteredPhotos = filter === "all" ? trainingPhotos : trainingPhotos.filter((photo) => photo.category === filter)

  return (
    <section className="training-evidence">
      <div className="evidence-header">
        <h1>Training Documentation</h1>
        <p>Photographic evidence of training sessions and practice exercises</p>
      </div>
      

      <div className="evidence-grid">
        {filteredPhotos.map((photo) => (
          <div className="evidence-card" key={photo.id}>
            <div className="evidence-image">
              <img src={photo.image || "/src/assets/placeholder.svg"} alt={`Training session ${photo.id}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="training-evidence-button">
          <Link to="/about" className="backk-button">
            ← Back
          </Link>
        </div>
    </section>
  )
}

export default TrainingEvidence
