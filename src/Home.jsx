import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* 🎥 Background Video */}
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/Images/videos/food3.mp4" type="video/mp4" />
      </video>

      {/* ===== OVERLAY ===== */}
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
  );
}

export default Home;
