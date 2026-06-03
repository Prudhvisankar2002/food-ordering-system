import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const popularItems = [
    { name: "Briyani", image: "/Images/veg_items/Biryani.jpg", category: "veg" },
    { name: "MintMojito", image: "/Images/cooldrinks/Mint Mojito.jpg", category: "cooldrinks" },
    { name: "Dosa", image: "/Images/veg_items/Dosa.jpg", category: "veg" },
    { name: "Pasta", image: "/Images/veg_items/Pasta.jpg", category: "veg" },
    { name: "GreenAppleMojito", image: "/Images/cooldrinks/Green Apple Mojito.jpg", category: "cooldrinks" },
    { name: "Burger", image: "/Images/veg_items/Burger.jpg", category: "veg" },
    { name: "OrangeJuice", image: "/Images/cooldrinks/Orange Juice.jpg", category: "cooldrinks" },
    { name: "ChickenBiryani", image: "/Images/Nonveg_items/ChickenBiryani.jpg", category: "nonveg" },
    { name: "Fishfry", image: "/Images/Nonveg_items/FishFry.jpg", category: "nonveg" },
    { name: "ChickenKebabs", image: "/Images/Nonveg_items/Chicken Kebabs.jpg", category: "nonveg" },
    { name: "MuttonCurry", image: "/Images/Nonveg_items/MuttonCurry.jpg", category: "nonveg" },
    { name: "Kova", image: "/Images/Milk_items/Kova.jpg", category: "milk" },
    { name: "Kulfi", image: "/Images/Milk_items/Kulfi.jpg", category: "milk" },
    { name: "FlavoredMilk", image: "/Images/Milk_items/FlavoredMilk.jpg", category: "milk" },
    { name: "Milkshake", image: "/Images/Milk_items/Milkshake.jpg", category: "milk" },
  ];

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <div className="home-container">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src="/Images/videos/food3.mp4" type="video/mp4" />
        </video>

        <div className="overlay">
          <h1 className="home-title">🔥 Welcome to DishDelight 🔥</h1>
          <p className="home-subtitle">
            🤤 Food that gives happiness and enjoyment 🤤
          </p>
          <button
            type="button"
            className="order-btn"
            onClick={() => navigate("/veg")}
          >
            🍔 Order Now
          </button>
        </div>
      </div>

      {/* ===== POPULAR ITEMS SCROLL ===== */}
      <div className="popular-section">
        <h3 className="popular-subtitle">Our Signature Dishes</h3>
        <h2 className="popular-title">
          Popular <span className="highlight">Choices</span>
        </h2>

        <div className="scroll-container">
          <div className="scroll-content">
            {popularItems.map((item, index) => (
              <div
                key={index}
                className="scroll-card"
                onClick={() => navigate(`/${item.category}`)}
              >
                <img src={item.image} alt={item.name} className="scroll-img" />
                <p className="scroll-name">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== COUPON BANNER ===== */}
      <div className="coupon-banner">
        <div className="coupon-content">
          <i className="fas fa-gift gift-icon"></i>
          <h2 className="coupon-title">🎁 Flat Discounts on Your Orders!</h2>
          <p className="coupon-subtitle">Use these codes to save instantly:</p>

          <div className="coupon-row">
            <div className="coupon-card orange">PRUDHVI2002 — 10%</div>
            <div className="coupon-card green">SANKAR13 — 20%</div>
            <div className="coupon-card pink">WELCOME5 — 5%</div>
            <div className="coupon-card blue">FESTIVE25 — 25%</div>
            <div className="coupon-card purple">SAVE10 — 5%</div>
            <div className="coupon-card gold">POOJI11 — 24%</div>
            <div className="coupon-card teal">MKRAO — 13%</div>
          </div>
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
          <a href="https://www.instagram.com/sankar_gowd/" target="_blank" rel="noopener noreferrer">
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
    </>
  );
}

export default Home;
