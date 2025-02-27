"use client"

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Page.css";

const LandingPage = () => {
  const navigate = useNavigate() // Initialize useNavigate
  const topRef = useRef(null)
  const featuresRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        }
      })
    })
    const hiddenElements = document.querySelectorAll(".hidden-element")
    hiddenElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="landing-page" ref={topRef}>
      <nav className="navbar">
        <div className="nav-brand">
          <span className="small-text">Read</span>
          <span className="normal-text">Nest</span>
        </div>
        <ul className="nav-links">
          <li>
            <a onClick={() => scrollToSection(topRef)}>Home</a>
          </li>
          <li>
            <a onClick={() => scrollToSection(featuresRef)}>Features</a>
          </li>
          <li>
            <a onClick={() => scrollToSection(contactRef)}>Contact</a>
          </li>
        </ul>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to ReadNest</h1>
          <p>Your Personal Book Management System</p>
          <button onClick={() => navigate("/login")} className="cta-button">
            Get Started
          </button>{" "}
          {/* Navigate on click */}
        </div>
      </header>

      <section className="features hidden-element" ref={featuresRef}>
        <h2>Why Choose ReadNest?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Easy Management</h3>
            <p>Organize your books effortlessly</p>
          </div>
          <div className="feature-card">
            <h3>Track Progress</h3>
            <p>Monitor your books</p>
          </div>
          <div className="feature-card">
            <h3>User-Friendly Interface</h3>
            <p>Easy to use</p>
          </div>
        </div>
      </section>

      <section className="cta-section hidden-element">
        <h2>Ready to Start Your Journey?</h2>
        <button onClick={() => navigate("/login")} className="cta-button">
          Join Now
        </button>
      </section>

      <footer className="footer" ref={contactRef}>
        <div className="footer-content">
          <div className="footer-section">
          <div className="footer-text">
          <span className="footer-small-text">Read</span>
          <span className="footer-normal-text">Nest</span>
        </div>
            <p>Your Personal Book Management System. Track, organize, easy to use and more.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a onClick={() => scrollToSection(topRef)}>Home</a>
              </li>
              <li>
                <a onClick={() => scrollToSection(featuresRef)}>Features</a>
              </li>
             
              <li>
                <a onClick={() => scrollToSection(contactRef)}>Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#library">Easy Management</a>
              </li>
              <li>
                <a href="#tracking">Progress Tracking</a>
              </li>
              <li>
                <a href="#reviews">Easy Search Books</a>
              </li>
              <li>
                <a href="#recommendations">User-Friendly interface</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul>
              <li>Email: info@readnest.com</li>
              <li>Contact: 01-4567890</li>
              <li>Address: Putalisadak, Kathmandu</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 ReadNest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage;

