import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Page.css";

const Index = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden-element");
    hiddenElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="nav-brand">
          <span className="small-text">Read</span>
          <span className="normal-text">Nest</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to ReadNest</h1>
          <p>Your Personal Book Management System</p>
          <button onClick={() => navigate('/login')} className="cta-button">Get Started</button> {/* Navigate on click */}
        </div>
      </header>

      <section className="features hidden-element">
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
        <h2>Ready to Start Your Reading Journey?</h2>
        <button onClick={() => navigate('/login')} className="cta-button">Join Now</button>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ReadNest</h3>
            <p>Your Personal Book Management System. Track, organize, and discover your next great read.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li><a href="#library">Library</a></li>
              <li><a href="#tracking">Progress Tracking</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#recommendations">Recommendations</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul>
              <li>Email: info@readnest.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Book Street</li>
              <li>City, State 12345</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 ReadNest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;