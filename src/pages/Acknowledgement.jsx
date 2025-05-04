import { Link } from "react-router-dom"
import "./ack.css"

const Acknowledgement = () => {
  return (
    <section className="acknowledgement">
      <div className="acknowledgement-header">
        <h1>Acknowledgement</h1>
        <div className="acknowledgement-intro">
          <p>
            I want to sincerely thank everyone who helped me with this my On the-Job Training (OJT) experience. Above all, I am grateful to God for providing me with the strength, knowledge, and determination necessary to successfully finish this training.
          </p>
          <p>
            First, I thank God for guiding me and for giving the strength and knowledge to successfully finish this training. Also, I am deeply thankful to our OJT coordinator, Ma’am Marites D. Escultor for their guidance and patience throughout our training.
          </p>
          <p>
            I extend my sincere appreciation to my gratitude to my supervisor Ma’am Marilou D. Domingo and also the other mentors of the School of Accountancy office for providing this opportunity and equipping me with the knowledge and skills needed for the workplace. Their continuous support has been instrumental in my journey.
          </p>
          <p>
            I would like to take this opportunity to thank my family and friends for their never-ending encouragement and motivation. I have the confidence to keep going and make the most of this experience because of their trust in my abilities.
          </p>
          <p>
            Lastly, I want to thank myself for my own efforts and dedication in taking this educational opportunity. I am thankful for every challenge and lesson this OJT experience has given me, as it has been an important step toward my future career.
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

export default Acknowledgement
