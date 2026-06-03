import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">
      <h1 className="about-title">🍴 About Us 🍴</h1>

      {/* ===== VERTICAL IMAGE + CONTENT ===== */}
      <div className="about-section">
        <img src="/Images/about/Team Cooking.webp" alt="Our Team" />
        <h2>Our Team</h2>
        <p>
          At DishDelight, our passionate chefs and staff work together to craft
          delicious meals that bring joy to every plate. Teamwork and creativity
          are the secret ingredients behind our success.
        </p>
      </div>

      <div className="about-section">
        <img src="/Images/about/Fresh Ingredients.webp" alt="Fresh Ingredients" />
        <h2>Fresh Ingredients</h2>
        <p>
          We believe great food starts with great ingredients. That’s why we use
          only the freshest produce, handpicked daily to ensure quality and taste
          in every dish we serve.
        </p>
      </div>

      <div className="about-section">
        <img src="/Images/about/Happy-customer.webp" alt="Happy Customers" />
        <h2>Happy Customers</h2>
        <p>
          Our customers are the heart of DishDelight. We strive to make every
          dining experience memorable, filled with flavor, warmth, and smiles.
        </p>
      </div>

      <div className="about-section">
        <img src="/Images/about/delivery.webp" alt="Fast Delivery" />
        <h2>Fast Delivery</h2>
        <p>
          Speed and reliability are our promises. Whether you’re at home or work,
          our delivery team ensures your favorite meals reach you hot and fresh,
          right on time.
        </p>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <h2 className="footer-title">DishDelight</h2>
        <p className="footer-text">
          Serving fresh meals with love and speed.<br />
          Follow us and stay connected!
        </p>

        <div className="social-icons">
          <a href="https://www.instagram.com/sankar_gowd/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://github.com/Prudhvisankar2002" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/prudhvi-sankar-m-4357b0267/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.youtube.com/@91.cse-bmathinaprudhvisank32" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
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
