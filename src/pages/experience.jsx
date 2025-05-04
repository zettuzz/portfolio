import { Link } from "react-router-dom"
import "./ack.css"

const experience = () => {
  return (
    <section className="acknowledgement">
      <div className="acknowledgement-header">
        <h1>Experience and Reflection</h1>
        <div className="acknowledgement-intro">
          <p>
          I achieved valuable experience applying what I've learned in school to actual office tasks during my OJT at Occidental Mindoro State College's School of Accountancy Office (SCOA). We assisted in creating curricula, scanned books for documentation, and kept a daily eye on the teachers throughout the training. I also got better at helping employees, efficiently managing my time, and organizing files. I gained confidence and responsibility from this experience, which also helped me understand what it's like to work in a professional setting.
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

export default experience
