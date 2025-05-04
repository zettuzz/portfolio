"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./certification.css"

const Certification = () => {
  const [filter, setFilter] = useState("all")

  const trainingPhotos = [
    { id: 1, image: "/assets/cert/1.jfif" },
    { id: 2, image: "/assets/cert/2.jfif" },
    { id: 3, image: "/assets/cert/3.jfif" },
    { id: 4, image: "/assets/cert/4.jfif" },
    { id: 5, image: "/assets/cert/5.jfif" },
  ]

  const filteredPhotos = filter === "all" ? trainingPhotos : trainingPhotos.filter((photo) => photo.category === filter)

  return (
    <section className="certification-section">
      <div className="certification-header">
        <h1>Certificate of Completion</h1>
        <p>Photographic evidence of my completion of the OJT program</p>
      </div>

      <div className="photo-grid">
        {filteredPhotos.map((photo) => (
          <div className="photo-card" key={photo.id}>
            <div className="photo-image">
              <img src={photo.image || "/assets/placeholder.svg"} alt={`Training session ${photo.id}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="navigation-button">
        <Link to="/about" className="back-button">
          ← Back
        </Link>
      </div>
    </section>
  )
}

export default Certification
