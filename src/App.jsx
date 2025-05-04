import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import TrainingEvidence from "./pages/TrainingEvidence"
import Contact from "./pages/Contact"
import Acknowledgement from "./pages/Acknowledgement" // already imported
import Introduction from "./pages/introduction"
import Experience from "./pages/experience"
import Certification from "./pages/certification"
import CVPage from "./pages/cv-page"
import Dashboard from "./pages/ojt-dashboard"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/TrainingEvidence" element={<TrainingEvidence />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/acknowledgement" element={<Acknowledgement />} /> {/* ← FIX */}
            <Route path="/experience" element={<Experience />} />
            <Route path="/cv-page" element={<CVPage />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/introduction" element={<Introduction />} /> {/* ← FIX */}
            <Route path="/ojt-dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
