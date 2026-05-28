import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./authSlice"; // make sure you have logout action
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Check login state from Redux
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userEmail = useSelector((state) => state.auth.user?.email);

  const handleLogout = () => {
    dispatch(logout());
    alert("👋 Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>🍔 My App</h2>
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/veg")}>Veg</li>
        <li onClick={() => navigate("/nonveg")}>NonVeg</li>
        <li onClick={() => navigate("/milk")}>Milk</li>
        <li onClick={() => navigate("/cooldrinks")}>CoolDrinks</li>
        <li onClick={() => navigate("/cart")}>Cart</li>
        <li onClick={() => navigate("/orders")}>Orders</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
        <li onClick={() => navigate("/about")}>About</li>

        {/* Account Dropdown */}
        <li className="dropdown">
          Account ⬇️
          <div className="dropdown-content">
            {!isLoggedIn ? (
              <>
                <button onClick={() => navigate("/login")}>Login</button>
                <button onClick={() => navigate("/register")}>Register</button>
              </>
            ) : (
              <>
                <p style={{ fontWeight: "bold" }}>👤 {userEmail}</p>
                <button onClick={() => navigate("/profile")}>Profile</button>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
