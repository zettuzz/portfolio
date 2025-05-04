import { Link } from "react-router-dom"
import "./history.css"

const History = () => {
  const coreValues = [
    {
      letter: "O",
      title: "Obedience to God",
      description:
        "The OMSCIANs, though with different religious orientation, believe in God and adhere to his teachings and commandments. They carry out their responsibilities with enthusiasm for they see God's presence in every person they serve and meet.",
    },
    {
      letter: "M",
      title: "Mindfulness",
      description:
        "The OMSCIANs are fully aware and responsible of their actions, attentive to the needs of their clientele and thoughtful towards others.",
    },
    {
      letter: "S",
      title: "Service-Orientedness",
      description:
        "The OMSCIANs provide services that meet and satisfy the expectations and needs of their clientele even before those needs are articulated. They make themselves available to others and ensure that the services they offer are continuously improved in order to achieve quality and customer satisfaction.",
    },
    {
      letter: "C",
      title: "Commitment",
      description:
        "The OMSCIANs are committed to the attainment of the institution's vision and mission. They have established a resilient bond with the institution and they work not because of monetary compensation or any other extrinsic reward, but rather spurred intrinsically with love and sensitivity to one's responsibility.",
    },
    {
      letter: "I",
      title: "Integrity and Ingenuity",
      description:
        "The OMSCIANs embrace the value of integrity and ingenuity. They adhere to moral and ethical principle. They are trustworthy, reliable and morally upright citizens who set aside their personal interests and prioritize the welfare of the people they serve. They think and act as one in dealing with decisions and collectively take advantage of opportunities and thereby overcome problems.",
    },
    {
      letter: "A",
      title: "Accountability",
      description:
        "The OMSCIANs acknowledge and assume responsibility for their actions and decisions in the implementation within the scope of their position encompassing all sectors of the institution and be answerable for resulting consequences.",
    },
    {
      letter: "N",
      title: "Nationalism",
      description:
        "The OMSCIANs are devoted not only for the interest of the Filipino people but for the interest of the academic community to achieve greater height of progress and development in promoting national consciousness and interest.",
    },
  ]

  return (
    <section className="history">
      <div className="history-container">
        <h1>History and Background</h1>

        <div className="history-section">
          <h2>HISTORY</h2>
          <p>
            Occidental Mindoro State College was established in 1966 as a Barrio High School. It was chartered as
            Occidental Mindoro National College on June 24, 1983, by virtue of Batas Pambansa Bilang 531. It was later
            renamed Occidental Mindoro State College on July 27, 2009, through Republic Act 9747. Most recently, upon
            the recommendation of the Commission on Higher Education, OMSC shall be converted into Occidental Mindoro
            State University by virtue of Republic Act 11587.
          </p>
        </div>

        <div className="history-section">
          <h2>BACKGROUND OF THE AGENCY</h2>

          <div className="subsection">
            <h3>Mission</h3>
            <p>
              A premier higher education institution that develops globally competitive, locally responsive, innovative
              professionals, and life-long learners.
            </p>
          </div>

          <div className="subsection">
            <h3>Vision</h3>
            <p>
              OMSC is committed to produce intellectual and human capital by developing excellent graduates through
              outcomes-based instruction, relevant research, responsive technical advisory services, community
              engagement, and sustainable production.
            </p>
          </div>

          <div className="subsection">
            <h3>Core Values</h3>
            <div className="core-values">
              {coreValues.map((value, index) => (
                <div className="core-value-item" key={index}>
                  <div className="core-value-header">
                    <span className="core-value-letter">{value.letter}</span>
                    <h4 className="core-value-title">
                      <span className="core-value-dash">-</span>
                      {value.title}
                    </h4>
                  </div>
                  <p className="core-value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
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

export default History
