import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          
          <p className="copyright">© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
