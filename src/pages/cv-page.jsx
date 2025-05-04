import { Link } from "react-router-dom"
import "./cv-styles.css"

export default function CVPage() {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <div className="header-content">
          <div className="profile-image-container">
            <img src="/src/assets/cv.png" alt="Rica Mae G. Ramos" className="profile-image" />
          </div>
          <div className="header-text">
            <h1>RICA MAE G. RAMOS</h1>
            <p>LIGAYA, SABLAYAN, OCCIDENTAL MINDORO</p>
            <p>Phone: 09056010604</p>
            <p>E-mail: rmaeg0215@gmail.com</p>
          </div>
        </div>
      </header>

      <section className="cv-section">
        <h2>Objectives</h2>
        <p>
          Seeking a challenging position in a reputed organization where I can learn new skills, that expand my
          knowledge, and leverage my learners.
        </p>
      </section>

      <section className="cv-section">
        <h2>Personal Information</h2>
        <div className="personal-info-grid">
          <div className="info-item">
            <span className="info-label">Date of Birth:</span>
            <span className="info-value">December 15, 2002</span>
          </div>
          <div className="info-item">
            <span className="info-label">Civil Status:</span>
            <span className="info-value">Single</span>
          </div>
          <div className="info-item">
            <span className="info-label">Place of Birth:</span>
            <span className="info-value">Ligaya, Sablayan, Occidental Mindoro</span>
          </div>
          <div className="info-item">
            <span className="info-label">Religion:</span>
            <span className="info-value">Catholic</span>
          </div>
          <div className="info-item">
            <span className="info-label">Age:</span>
            <span className="info-value">22</span>
          </div>
          <div className="info-item">
            <span className="info-label">Nationality:</span>
            <span className="info-value">Filipino</span>
          </div>
          <div className="info-item">
            <span className="info-label">Gender:</span>
            <span className="info-value">Female</span>
          </div>
          <div className="info-item">
            <span className="info-label">Language:</span>
            <span className="info-value">Tagalog</span>
          </div>
          <div className="info-item">
            <span className="info-label">Height:</span>
            <span className="info-value">5'0</span>
          </div>
          <div className="info-item">
            <span className="info-label">Weight:</span>
            <span className="info-value">50</span>
          </div>
          <div className="info-item">
            <span className="info-label">Mother's Name:</span>
            <span className="info-value">Loreza Ramos</span>
          </div>
          <div className="info-item">
            <span className="info-label">Mother's Occupation:</span>
            <span className="info-value">House Keeper</span>
          </div>
          <div className="info-item">
            <span className="info-label">Father's Name:</span>
            <span className="info-value">Michael Ramos</span>
          </div>
          <div className="info-item">
            <span className="info-label">Father's Occupation:</span>
            <span className="info-value">OFW</span>
          </div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Education</h2>

        <div className="education-item">
          <h3>TERTIARY</h3>
          <p className="institution">Occidental Mindoro State College</p>
          <p className="degree">Bachelor of Science in Information Technology</p>
          <p className="location">Rizal Street, San Jose Occidental Mindoro</p>
          <p className="year">2024-2025</p>
        </div>

        <div className="education-item">
          <h3>SENIOR HIGH SCHOOL</h3>
          <p className="institution">Ligaya National High School</p>
          <p className="location">Ligaya, Sablayan, Occidental Mindoro</p>
          <p className="year">2019-2020</p>
        </div>

        <div className="education-item">
          <h3>SECONDARY HIGH SCHOOL</h3>
          <p className="institution">Ligaya National High School</p>
          <p className="location">Ligaya, Sablayan, Occidental Mindoro</p>
          <p className="year">2015-2019</p>
        </div>

        <div className="education-item">
          <h3>ELEMENTARY</h3>
          <p className="institution">Ligaya National High School</p>
          <p className="location">Ligaya, Sablayan, Occidental Mindoro</p>
          <p className="year">2008-2015</p>
        </div>
      </section>

      <section className="cv-section">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Cashier/Assistant</h3>
          <p className="company">Ligaya Supermarket-Sablayan Occidental Mindoro</p>
          <p className="year">2020</p>
        </div>
      </section>

      <section className="cv-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Proficient in Office Productivity Tools (Microsoft Word, and PowerPoint)</li>
        </ul>
      </section>

      <footer className="cv-footer">
        <p className="certification">
          I hereby certify that, to the best of my knowledge, all the provided information are true and correct.
        </p>
        <div className="signature">
          <p>RICA MAE G. RAMOS</p>
          <p className="applicant">APPLICANT</p>
        </div>
      </footer>

      <div className="cv-button">
        <Link to="/about" className="back-button">
          ← Back
        </Link>
      </div>
    </div>
  )
}
