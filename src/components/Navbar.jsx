"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span>OJT-Eportfolio</span>
        </Link>

        <div className={`menu-icon ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Contents
            </Link>
          </li>

          
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
