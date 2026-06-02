import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">
      <h1 className="about-title">🍴 About Us 🍴</h1>

      {/* ===== IMAGE GRID ===== */}
      <div className="about-grid">
        <div className="about-card">
          <img src="/Images/about/Team Cooking.webp" alt="Team Cooking" />
          <h2>Our Team</h2>
        </div>

        <div className="about-card">
          <img src="/Images/about/Fresh Ingredients.webp" alt="Fresh Ingredients" />
          <h2>Fresh Ingredients</h2>
        </div>

        <div className="about-card">
          <img src="/Images/about/Happy-customer.webp" alt="Happy Customers" />
          <h2>Happy Customers</h2>
        </div>

        <div className="about-card">
          <img src="/Images/about/delivery.webp" alt="Delivery Service" />
          <h2>Fast Delivery</h2>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <h2 className="footer-title">DishDelight</h2>
        <p className="footer-text">
          Serving fresh meals with love and speed.<br />
          Follow us and stay connected!
        </p>

        <div className="social-icons">
          <a href="https://www.instagram.com/sankar_gowd/ " target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/Prudhvisankar2002" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/prudhvi-sankar-m-4357b0267/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.youtube.com/@91.cse-bmathinaprudhvisank32" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <hr className="footer-line" />

        <p className="footer-copy">© 2026 DishDelight</p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
