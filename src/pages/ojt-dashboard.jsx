"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./ojt-dashboard-styles.css"

export default function OJTDashboard() {
  // State for OJT Report
  const [activeMonth, setActiveMonth] = useState("january")

  // State for DTR
  const [activeDtrMonth, setActiveDtrMonth] = useState("january")

  // State for Organizational Structure modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  // State for Evaluation Form modal
  const [isEvalModalOpen, setIsEvalModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }

  // Functions for Evaluation Form modal
  const openEvalModal = () => {
    setIsEvalModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeEvalModal = () => {
    setIsEvalModalOpen(false)
    document.body.style.overflow = "auto"
  }

  // Months data for OJT Report
  const months = [
    { id: "january", name: "January 2025" },
    { id: "february", name: "February 2025" },
    { id: "march", name: "March 2025" },
    { id: "april", name: "April 2025" },
    { id: "may", name: "May 2025" },
  ]

  // OJT Report data by month
  const januaryData = [
    {
      activity: "1. Meet ma'am Marilou D. Domingo she discussing the information that we should know regarding the OJT",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "2. Meeting with other teacher in School of Accountancy office",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "3. Assisting in preparing PowerPoint for accounting students.",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "4. Tasked to forward papers to other departments/offices",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "5. Checking and updating OJT logbook entries",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "6. Meeting with Evelyn discussing the regression matters",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
  ]

  const februaryData = [
    {
      activity: "1. Assisting in printing documents for faculty use",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "2. Designing event for accountancy activity",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "3. Scanning documents for faculty",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "4. Meet with other teacher's that we need to monitor",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "5. Meeting with Ma'am Malou and discuss matters",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "6. Meet Ma'am Evelyn to give the others papers in other offices",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "7. Creating OR code for faculty survey form",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "8. Data entry for student evaluation results",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "9. Daily monitoring of computer lab status",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "10. Assemble desktop computer units for office use",
      problems: "Power Supply not functioning",
      solution: "Ask For Guidance",
      remarks: "Accomplished",
    },
    {
      activity: "11. Meet Ma'am Evelyn every morning to performed assigned duties as instructed by the supervisor",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "12. Monitoring attendance of students for classes",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "13. Assigned to monitor students during classes hours.",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
  ]

  const marchData = [
    {
      activity: "1. Task for the day Daily Meeting monitoring by classroom",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "2. Daily Meeting with Ma'am Malou and other Interns",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "3. Printed and Scanned official documents",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "4. Helped prepare syllabus layout",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "5. Assisted in encoding student records",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "6. Delivered documents to other offices",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "7. Meeting with Ma'am Malou and Ma'am Evelyn",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
  ]

  const aprilData = [
    {
      activity: "1. Set up multimedia for classroom presentation",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "2. Performed basic computer maintenance",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "3. Clean the Hallway",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "4. Created student quiz sheets for mentor",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "5. Encode quiz results",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "6. Printed quiz and answer sheet",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "7. Updated Windows OS on faculty PC's",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "8. Took photos during monitoring",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "9. Updated department board with schedules",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
  ]

  const mayData = [
    {
      activity: "1. Checked classroom equipment",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "2. Performed basic computer maintenance",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "3. Meet Ma'am Malou",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "4. Organize the document",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "5. Help encode teacher's schedule",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "6. Labeled computers and accessories with asset tags",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "7. Monitoring the other teacher",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
    {
      activity: "8. Took photos during monitoring",
      problems: "NONE",
      solution: "NONE",
      remarks: "Accomplished",
    },
  ]

  const getActiveData = () => {
    switch (activeMonth) {
      case "january":
        return januaryData
      case "february":
        return februaryData
      case "march":
        return marchData
      case "april":
        return aprilData
      case "may":
        return mayData
      default:
        return januaryData
    }
  }

  // Objectives data for Internship Progress Report
  const objectivesData = [
    {
      objective: "1. Process product reviews and inform the development team of defects and errors.",
      status: "100%",
      problems: "None",
    },
    {
      objective: "2. Communicate quantitative and qualitative findings from test results to the development team",
      status: "100%",
      problems: "None",
    },
    {
      objective: "3. Spot areas for improvement to enhance the product's efficiency",
      status: "100%",
      problems: "None",
    },
    {
      objective:
        "4. Provides status updates to project managers for monitoring of business user requirements related activities.",
      status: "100%",
      problems: "None",
    },
    {
      objective:
        "5. Provides support to the respective teams for BUR (Business User Requirements) clarification during development and testing phases.",
      status: "100%",
      problems: "None",
    },
    {
      objective:
        "6. Practicing programming skills and getting in-depth knowledge of modern HTML/CSS, javascript, React and/or Flutter.",
      status: "100%",
      problems: "None",
    },
    {
      objective:
        "7. To have a solid understanding of how web applications work including security, session management, and best development practices.",
      status: "100%",
      problems: "None",
    },
    {
      objective:
        "8. Stay plugged into emerging technologies/industry trends and apply them into operations and activities.",
      status: "100%",
      problems: "None",
    },
    {
      objective:
        "9. Strong organizational skills to juggle multiple tasks within the constraints of timelines and budgets with business acumen.",
      status: "100%",
      problems: "None",
    },
  ]

  return (
    <div className="ojt-dashboard-container">
      {/* Organizational Structure Section */}
      <section className="org-structure-section">
        <h2>Organizational Structure</h2>

        <div className="content-section">
          <p>
            Our company operates with a clear hierarchical structure designed to optimize communication and workflow
            efficiency across all departments.
          </p>

          <div className="clickable-text" onClick={openModal}>
            <span>Click to View</span>
          </div>

          <p>
            Understanding our organizational structure helps team members identify proper channels for communication,
            reporting, and collaboration across different departments and management levels.
          </p>
        </div>

        {/* Modal for displaying the image */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
              <img src="/assets/orgstructure.png" alt="Organizational Structure" className="modal-image" />
              <div className="image-caption">Company Organizational Structure Chart</div>
            </div>
          </div>
        )}
      </section>

      {/* Weekly Accomplishment Report PDF Section */}
      <section className="weekly-report-section">
        <div className="report-header">
          <h1>WEEKLY ACCOMPLISHMENT REPORT</h1>
          <h2>OFFICE: SCHOOL OF ACCOUNTANCY</h2>
          <p>Address: OMSC Labangan, San Jose, Occidental Mindoro</p>
        </div>
        <div className="content-section">
          <p>
            You can view or download the full Weekly Accomplishment Report as a PDF document below.
          </p>
          <a
            href="/assets/Accomplished%20report%20ramos.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="clickable-text"
            style={{ display: 'inline-block', marginTop: '10px' }}
          >
            View Weekly Accomplishment Report (PDF)
          </a>
        </div>
      </section>

      {/* OJT Report Section */}
      <section className="ojt-report-section">
        <div className="report-header">
          <h1>ON-THE-JOB TRAINING</h1>
          <h2>MONTHLY ACCOMPLISHMENT REPORT</h2>
          <h3>OFFICE: SCHOOL OF ACCOUNTANCY</h3>
          <p>Address: OMSC Labangan, San Jose, Occidental Mindoro</p>
        </div>

        <div className="month-tabs">
          {months.map((month) => (
            <button
              key={month.id}
              className={`month-tab ${activeMonth === month.id ? "active" : ""}`}
              onClick={() => setActiveMonth(month.id)}
            >
              {month.name}
            </button>
          ))}
        </div>

        <div className="table-container">
          <table className="report-table">
            <thead>
              <tr>
                <th className="month-header" colSpan="4">
                  Monthly: {months.find((m) => m.id === activeMonth)?.name}
                </th>
              </tr>
              <tr>
                <th>ACTIVITIES</th>
                <th>PROBLEMS MET</th>
                <th>SOLUTION</th>
                <th>REMARKS</th>
              </tr>
            </thead>
            <tbody>
              {getActiveData().map((row, index) => (
                <tr key={index}>
                  <td>{row.activity}</td>
                  <td>{row.problems}</td>
                  <td>{row.solution}</td>
                  <td>{row.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="signature-section">
          <div className="signature-row">
            <p>Accomplished by:</p>
            <p>Noted by:</p>
          </div>
          <div className="signature-row">
            <div className="signature-block">
              <p className="signature-name">RICA MAE G. RAMOS</p>
              <p className="signature-title">OJT Trainee</p>
            </div>
            <div className="signature-block">
              <p className="signature-name">MARILOU D. DOMINGO</p>
              <p className="signature-title">Human Resources Officer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Time Record Section */}
      <section className="dtr-section">
        <div className="section-header">
          <h2>DAILY TIME RECORD</h2>
        </div>

        <div className="month-tabs">
          {months.map((month) => (
            <button
              key={`dtr-${month.id}`}
              className={`month-tab ${activeDtrMonth === month.id ? "active" : ""}`}
              onClick={() => setActiveDtrMonth(month.id)}
            >
              {month.name}
            </button>
          ))}
        </div>

        <div className="dtr-content">
          <h3>MONTH OF {activeDtrMonth.toUpperCase()} DTR</h3>
          <div className="dtr-image-container">
            {activeDtrMonth !== "january" && (
              <img src={`/assets/dtr/${activeDtrMonth}-dtr.png`} alt={`${activeDtrMonth} DTR`} className="dtr-image" />
            )}
            {activeDtrMonth === "january" && (
              <img src="/assets/dtr/january-dtr.png" alt="January DTR" className="dtr-image" />
            )}
          </div>
        </div>
      </section>

      {/* Internship Progress Report Section */}
      <section className="progress-report-section">
        <div className="section-header">
          <h2>ON-THE-JOB TRAINING</h2>
          <h3>INTERNSHIP PROGRESS REPORT</h3>
        </div>

        <div className="progress-info">
          <div className="info-row">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">Rica Mae G. Ramos</span>
            </div>
            <div className="info-item">
              <span className="info-label">Date:</span>
              <span className="info-value">May 02, 2025</span>
            </div>
          </div>
          <div className="info-row">
            <div className="info-item">
              <span className="info-label">Internship Site:</span>
              <span className="info-value">School of Accountancy</span>
            </div>
            <div className="info-item">
              <span className="info-label">Hours Rendered:</span>
              <span className="info-value">486 hours</span>
            </div>
          </div>
          <div className="info-row">
            <div className="info-item">
              <span className="info-label">Report Coverage:</span>
              <span className="info-value">January 21, 2025 – May 02, 2025</span>
            </div>
          </div>
        </div>

        <div className="table-container">
          <table className="progress-table">
            <thead>
              <tr>
                <th>Objectives</th>
                <th>Met</th>
                <th>Not Met</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1. Enhance proper work habits and attitudes in the workplace.</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
              <tr>
                <td>2. Understand the organization and how tasks are accomplished.</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
              <tr>
                <td>3. Apply knowledge and skills to real-life work situations.</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
              <tr>
                <td>4. Learn skills related to my future career.</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
              <tr>
                <td>5. Develop critical thinking and decision-making abilities.</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
              <tr>
                <td>6. Demonstrate enthusiasm and motivation.</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
              <tr>
                <td>7. Communicate effectively.</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
              <tr>
                <td>8. Maintain confidentiality and act ethically.</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
              <tr>
                <td>9. Display professionalism in all internship activities.</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="signature-section">
          <p>The following report accurately describes the internship activities completed to date:</p>
          <div className="signature-row">
            <div className="signature-block">
              <p className="signature-name">Rica Mae G. Ramos</p>
              <p className="signature-title">Intern</p>
              <p className="signature-date">Date: May 02, 2025</p>
            </div>
          </div>
          <p>I have read the attached report and concur with its content:</p>
          <div className="signature-row">
            <div className="signature-block">
              <p className="signature-name">Mary Ann A. Caratao</p>
              <p className="signature-title">Site Supervisor</p>
              <p className="signature-date">Date: May 02, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Analysis Report Section */}
      <section className="analysis-report-section">
        <div className="section-header">
          <h2>INTERNSHIP ANALYSIS REPORT</h2>
        </div>

        <div className="analysis-info">
          <div className="info-row">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">Rica Mae G. Ramos</span>
            </div>
            <div className="info-item">
              <span className="info-label">Date:</span>
              <span className="info-value">May 02, 2025</span>
            </div>
          </div>
          <div className="info-row">
            <div className="info-item">
              <span className="info-label">Internship Site:</span>
              <span className="info-value">School of Accountancy</span>
            </div>
          </div>
        </div>

        <div className="analysis-section">
          <h3>Setting</h3>
          <p>
            The work environment was organized and conducive to learning. The office layout and team structure allowed for smooth collaboration. My tasks were varied and helped me understand how different departments function.
          </p>
        </div>

        <div className="analysis-section">
          <h3>Site Supervisor</h3>
          <p>
            My supervisor was approachable and supportive. She gave clear instructions and corrected me when needed. Her guidance helped me grow professionally.
          </p>
        </div>

        <div className="analysis-section">
          <h3>Environmental Conditions or Events</h3>
          <p>
            The workplace was safe, quiet, and well-ventilated. Office resources were available and functional. There were no unexpected events that disrupted operations.
          </p>
        </div>

        <div className="analysis-section">
          <h3>Self-Assessment</h3>
          <p>
            The internship allowed me to gain real-world experience. I improved my communication, organization, and time management skills. I feel more confident and prepared for future employment. I'm proud of the progress I made during this internship.
          </p>
        </div>

        <div className="analysis-section">
          <h3>General</h3>
          <p>
            This internship has been a very insightful and productive experience. I learned the importance of teamwork and professionalism. I hope to continue learning and growing in my career journey.
          </p>
        </div>
      </section>

      {/* Student Internship Evaluation Form Section */}
      <section className="evaluation-form-section">
        <div className="section-header">
          <h2>STUDENT INTERNSHIP EVALUATION FORM</h2>
        </div>
        <div className="content-section">
          <p>
            View the official evaluation form for the internship. This form summarizes the quantitative and qualitative assessment of the internship experience.
          </p>
          <button className="clickable-text" onClick={openEvalModal}>
            View Evaluation Form
          </button>
        </div>
        {/* Modal for displaying the evaluation form image */}
        {isEvalModalOpen && (
          <div className="modal-overlay" onClick={closeEvalModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeEvalModal}>
                &times;
              </button>
              <img src="/assets/cert/evalform.jpg" alt="Student Internship Evaluation Form" className="modal-image" />
              <div className="image-caption">Student Internship Evaluation Form</div>
            </div>
          </div>
        )}
      </section>

      <div className="dashboard-button">
        <Link to="/about" className="back-button">
          ← Back
        </Link>
      </div>
    </div>
  )
}
