"use client"

import { useForm, ValidationError } from "@formspree/react"
import "./Contact.css"

const Contact = () => {
  const [state, handleSubmit] = useForm("xzzrewgl") // Your Formspree form ID

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
            <p>rmaeg0215@gmail.com</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>09056010604</p>
          </div>
          <div className="info-item">
            <h3>Address</h3>
            <p>Ligaya, Sablayan, Occidental Mindoro</p>
          </div>
        </div>

        <div className="contact-form-container">
          {state.succeeded ? (
            <div className="form-success">
              <p>Thank you for your message! I will get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input id="name" type="text" name="name" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input id="email" type="email" name="email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" name="subject" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows="5" required></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button type="submit" className="submit-btn" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
