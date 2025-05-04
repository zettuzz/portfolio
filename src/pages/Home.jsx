import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-content">
          {/* Image on the left */}
          <div className="hero-image">
            <img
              src="/src/assets/aboutme.png"
              alt="Profile"
              className="hero-profile-image"
            />
          </div>

          {/* Text on the right */}
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hello, I'm</span>
              <span className="name">Rica Mae G. Ramos</span>
            </h1>
            <h2 className="hero-subtitle">
              Bachelor of Science in Information Technology
            </h2>
            <p className="hero-description">
              This E-Portfolio highlights my 486-hour Supervised Industrial
              Training at the School of Accountancy, OMSC Labangan Campus,
              completed from January 21 to May 2, 2025. During this time, I
              applied classroom knowledge to real-world tasks such as
              troubleshooting, basic networking, and system support.
            </p>
            <p className="hero-description">
              This experience strengthened my technical foundation and prepared
              me for entry-level roles in the IT field, with a focus on
              continuous growth and hands-on learning.
            </p>
            <div className="hero-buttons">
              <Link to="/about" className="btn btn-primary">
                Table of Contents
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
