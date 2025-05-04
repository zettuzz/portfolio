import { Link } from "react-router-dom"
import "./ack.css"

const Introduction = () => {
  return (
    <section className="acknowledgement">
      <div className="acknowledgement-header">
        <h1>Introduction</h1>
        <div className="acknowledgement-intro">
          <p>
          I am Rica Mae G. Ramos, and this portfolio serves as a showcase for the abilities, know-how, and experiences I have gained while undergoing on-the-job training at Occidental Mindoro State College's School of Accountancy Office (SCOA). I was able to become fully immersed in a variety of administrative and clerical tasks throughout my training, which helped me understand how an academic office operates on a daily basis. It improved my organizational and communication abilities, sharpened my attention to detail, and increased my sense of responsibility. I learned professionalism, teamwork, and integrity from working with the SCOA team—values that are essential in the accounting industry. It helped me grow as a learner and gave me the courage to face.
          </p>
        </div>

        <div className="acknowledgement-button">
          <Link to="/about" className="back-button">
            ← Back
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Introduction
