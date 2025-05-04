import { Link } from "react-router-dom"
import "./introduction.css"

const Introduction = () => {
  return (
    <section className="introduction">
      <div className="introduction-container">
        <h1>Introduction</h1>

        <div className="introduction-section">
          <p>
            I am Rica Mae G. Ramos, and this portfolio serves as a showcase for the abilities, know-how, and experiences
            I have gained while undergoing on-the-job training at Occidental Mindoro State College's School of
            Accountancy Office (SCOA). I was able to become fully immersed in a variety of administrative and clerical
            tasks throughout my training, which helped me understand how an academic office operates on a daily basis.
            It improved my organizational and communication abilities, sharpened my attention to detail, and increased
            my sense of responsibility. I learned professionalism, teamwork, and integrity from working with the SCOA
            team—values that are essential in the accounting industry. It helped me grow as a learner and gave me the
            courage to face.
          </p>
        </div>

        <div className="introduction-section">
          <h2>A. IMPORTANCE OF INTERNSHIP</h2>
          <p>
            Internships also play a crucial role in helping students apply theoretical knowledge in practical settings.
            In the classroom, students will acquire an understanding of the principles and concepts in IT, however,
            internships will allow students to view how those theories will actually be implemented in the workplace.
            The practical application and exposure to not just the theory but application of theory will reinforce
            students learning and understanding of IT. The experiences students will obtain will expose them to actual
            challenges, tools, and problem solving while also allowing them to understand how they have or will use
            their specific area of study in the programming. Hence, providing students with a much clearer concept of
            how what they have learned in academics can be adapted and used in the practice of technology employment,
            ultimately giving them more confidence and competencies in transitioning to the workforce.
          </p>
          <p>
            In addition, internships give students the opportunity to gain exposure to different roles and
            specializations within the IT industry. Since the IT field is broad with areas such as software development,
            network administration, cybersecurity, data analysis, and more, internships allow students to explore these
            paths and discover which aligns best with their skills and interests. This early exposure helps them make
            informed decisions about their future careers and choose a specialization that suits their goals.
            Understanding the nature of different roles can also help students focus their studies and professional
            development on the areas they are most passionate about.
          </p>
          <p>
            Finally, internships often serve as a stepping stone to future employment. Many companies use internship
            programs as a way to identify and recruit new talent, offering full-time positions to high-performing
            interns after graduation. Even if a job offer isn't guaranteed, the experience and connections gained
            through an internship can greatly enhance a student's job prospects. Employers value candidates who have
            already been exposed to the work environment and demonstrated their ability to contribute effectively.
            Therefore, having internship experience not only boosts a student's resume but also opens doors to more job
            opportunities and career advancement.
          </p>
        </div>

        <div className="introduction-section">
          <h2>B. OBJECTIVES OF INTERNSHIP</h2>
          <p>The internship aims to:</p>
          <ul>
            <li>
              Provide practical experience that allows students to apply classroom knowledge in a real-world work
              setting
            </li>
            <li>Develop essential professional skills such as communication, teamwork, and problem-solving</li>
            <li>
              Expose students to various IT domains such as software development, networking, cybersecurity, or
              technical support
            </li>
            <li>Build a professional network that can support future career opportunities</li>
          </ul>
          <p>
            Overall, the internship is designed to equip IT students with the practical skills, industry exposure, and
            professional connections needed to confidently transition into the technology workforce and succeed in their
            future careers.
          </p>
        </div>

        <div className="introduction-section">
          <h2>C. TIME AND PLACE OF INTERNSHIP</h2>
          <div className="internship-details">
            <div className="detail-row">
              <span className="detail-label">Agency:</span>
              <span className="detail-value">SCHOOL OF ACCOUNTANCY</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Address:</span>
              <span className="detail-value">OMSC Labangan, San Jose, Occidental Mindoro</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Office Hours:</span>
              <span className="detail-value">8:00am-12:00 pm and 1:00pm-8:30 pm</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Duration:</span>
              <span className="detail-value">486 hours</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Date Started:</span>
              <span className="detail-value">January 21, 2025</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Date Ended:</span>
              <span className="detail-value">May 02, 2025</span>
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

export default Introduction
