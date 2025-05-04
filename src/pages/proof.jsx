"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import "./certification.css"

const Proof = () => {
  const [filter, setFilter] = useState("all")
  const [modalOpen, setModalOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const trainingPhotos = [
    { id: 1, image: "/assets/cert/6.jfif" },
    { id: 2, image: "/assets/cert/7.jfif" },
    { id: 3, image: "/assets/cert/8.jpg" },
    { id: 4, image: "/assets/cert/9.jfif" },
    { id: 5, image: "/assets/cert/10.jfif" },
    { id: 6, image: "/assets/cert/11.jfif" },
    { id: 7, image: "/assets/cert/applicationletter.png" },
  ]

  const filteredPhotos = filter === "all" ? trainingPhotos : trainingPhotos.filter((photo) => photo.category === filter)

  const openModal = (index) => {
    setCurrentPhotoIndex(index)
    setModalOpen(true)
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setModalOpen(false)
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = "auto"
  }

  const navigatePhoto = (direction) => {
    const newIndex = currentPhotoIndex + direction
    if (newIndex >= 0 && newIndex < filteredPhotos.length) {
      setCurrentPhotoIndex(newIndex)
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!modalOpen) return

    if (e.key === "Escape") {
      closeModal()
    } else if (e.key === "ArrowLeft") {
      navigatePhoto(-1)
    } else if (e.key === "ArrowRight") {
      navigatePhoto(1)
    }
  }

  // Add event listener for keyboard navigation
  useState(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [modalOpen, currentPhotoIndex])

  return (
    <section className="certification-section">
      <div className="certification-header">
        <h1>Verification Images</h1>
        <p>Photographic evidence of my completion of the OJT program</p>
      </div>

      <div className="photo-grid">
        {filteredPhotos.map((photo, index) => (
          <div className="photo-card" key={photo.id} onClick={() => openModal(index)}>
            <div className="photo-image">
              <img src={photo.image || "/assets/placeholder.svg"} alt={`Training session ${photo.id}`} />
              <div className="photo-overlay">
                <span>Click to view</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Photo Modal */}
      {modalOpen && (
        <div className="photo-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <img
              src={filteredPhotos[currentPhotoIndex].image || "/placeholder.svg"}
              alt={`Full size photo ${filteredPhotos[currentPhotoIndex].id}`}
            />

            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>

            {currentPhotoIndex > 0 && (
              <button className="modal-nav modal-prev" onClick={() => navigatePhoto(-1)}>
                <ChevronLeft size={36} />
              </button>
            )}

            {currentPhotoIndex < filteredPhotos.length - 1 && (
              <button className="modal-nav modal-next" onClick={() => navigatePhoto(1)}>
                <ChevronRight size={36} />
              </button>
            )}

            <div className="modal-counter">
              {currentPhotoIndex + 1} / {filteredPhotos.length}
            </div>
          </div>
        </div>
      )}

      <div className="navigation-button">
        <Link to="/about" className="back-button">
          ← Back
        </Link>
      </div>
    </section>
  )
}

export default Proof
