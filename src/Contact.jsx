import React, { useState } from "react";
import "./Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_lh5e93d",     
        "template_ztaae9n",     
        formData,               
        "nqwOBEyDdn0Ns_LSV"     
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        alert("❌ Failed to send message: " + error.text);
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">
          <i className="fas fa-address-book"></i> Contact Us{" "}
          <i className="fas fa-address-book"></i>
        </h1>

        <h2>Reach Out Directly</h2>

        <div className="contact-info">
          <p><i className="fas fa-envelope"></i> <strong>Email:</strong> prudhvisankar46@gmail.com</p>
          <p><i className="fas fa-phone"></i> <strong>Phone:</strong> +91 6303470328</p>
          <p><i className="fas fa-map-marker-alt"></i> <strong>Address:</strong> 123 E-commerce Street, Cyberabad, Hyderabad</p>
          <p><i className="fas fa-clock"></i> <strong>Business Hours:</strong> Mon–Sat: 9:00 AM – 6:00 PM | Sunday: Closed</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />

          <label>Your Email</label>
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />

          <label>Subject</label>
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />

          <label>Message</label>
          <textarea name="message" placeholder="Write your message here..." value={formData.message} onChange={handleChange} required></textarea>

          <button type="submit">
            <i className="fas fa-paper-plane"></i> Send Message
          </button>
        </form>
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

export default Contact;
