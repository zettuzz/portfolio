"use client"

import { useState } from "react"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please fill in all required fields.",
      })
      return
    }

    // Here you would typically send the form data to a server
    // For this example, we'll just simulate a successful submission

    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your message! I will get back to you soon.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section className="contact">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>Have a question or want to work together? Feel free to contact me.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <h3>Email</h3>
            <p>hello@yourportfolio.com</p>
          </div>
          <div className="info-item">
            <h3>Location</h3>
            <p>San Francisco, CA</p>
          </div>
          <div className="info-item">
            <h3>Social</h3>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          {formStatus.submitted ? (
            <div className="form-success">
              <p>{formStatus.message}</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              {formStatus.error && (
                <div className="form-error">
                  <p>{formStatus.message}</p>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
