import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const popularItems = [
    { name: "Briyani", image: "/Images/veg_items/Biryani.jpg" },
    { name: "Dosa", image: "/Images/veg_items/Dosa.jpg" },
    { name: "Pasta", image: "/Images/veg_items/Pasta.jpg" },
    { name: "Burger", image: "/Images/veg_items/Burger.jpg" },

    { name: "ChickenBiryani", image: "/Images/Nonveg_items/ChickenBiryani.jpg" },
    { name: "Fishfry", image: "/Images/Nonveg_items/FishFry.jpg" },
    { name: "ChickenKebabs", image: "/Images/Nonveg_items/Chicken Kebabs.jpg" },
    { name: "MuttonCurry", image: "/Images/Nonveg_items/MuttonCurry.jpg" },

    { name: "Kova", image: "/Images/Milk_items/Kova.jpg" },
    { name: "Kulfi", image: "/Images/Milk_items/Kulfi.jpg" },
    { name: "FlavoredMilk", image: "/Images/Milk_items/FlavoredMilk.jpg" },
    { name: "Milkshake", image: "/Images/Milk_items/Milkshake.jpg" },

    { name: "CocaCola", image: "/Images/cooldrinks/CocaCola.jpg" },
    { name: "MintMojito", image: "/Images/cooldrinks/MintMojito.jpg" },
    { name: "Limca", image: "/Images/cooldrinks/Limca.jpg" },
    { name: "OrangeJuice", image: "/Images/cooldrinks/OrangeJuice.jpg" },
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
              <div key={index} className="scroll-card">
                <img src={item.image} alt={item.name} className="scroll-img" />
                <p className="scroll-name">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
