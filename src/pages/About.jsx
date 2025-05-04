"use client"

import { Link } from "react-router-dom"
import "./About.css"
import { BookOpen, Info, Award, FileText, BadgeCheck, BookMarked, ClipboardList, ImageIcon } from "lucide-react"

const About = () => {
  const sections = [
    {
      id: "introduction",
      title: "II. Introduction",
      icon: <Info size={40} />,
      path: "/introduction",
    },
    {
      id: "acknowledgement",
      title: "III. Acknowledgement",
      icon: <Award size={40} />,
      path: "/acknowledgement",
    },
    {
      id: "cv",
      title: "IV. Curriculum Vitae of the Student",
      icon: <FileText size={40} />,
      path: "/cv-page",
    },
    {
      id: "certificate",
      title: "V. Certificate of Completion",
      icon: <BadgeCheck size={40} />,
      path: "/certification",
    },
    {
      id: "experiences",
      title: "VI. Experiences and Reflections",
      icon: <BookMarked size={40} />,
      path: "/experience",
    },
    {
      id: "evaluation",
      title: "VII. Evaluation Sheets",
      icon: <ClipboardList size={40} />,
      path: "/ojt-dashboard",
    },
    {
      id: "photos",
      title: "VIII. Photo Evidence During Practice Training",
      icon: <ImageIcon size={40} />,
      path: "/TrainingEvidence",
    },
  ]

  return (
    <section className="about">
      <div className="about-header">
        <h1>TABLE OF CONTENTS</h1>
      </div>

      <div className="sections-grid">
        {sections.map((section) => (
          <div key={section.id} className="section-container">
            <Link to={section.path} className="section-card">
              <div className="section-icon">{section.icon}</div>
              <h3 className="section-title">{section.title}</h3>
            </Link>

            {section.subItems && section.subItems.length > 0 && (
              <div className="subsections">
                {section.subItems.map((subItem) => (
                  <div key={subItem.id} className="subsection-item">
                    <span className="bullet">•</span>
                    <Link to={subItem.path} className="subsection-link">
                      {subItem.title}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
