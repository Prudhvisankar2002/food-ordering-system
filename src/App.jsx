import React from 'react'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from './Home'
import Veg from './Veg'
import Nonveg from './Nonveg'
import Milk from './Milk'
import CoolDrinks from './CoolDrinks'
import AboutUs from './AboutUs'
import Cart from './Cart'
import Orders from './Orders'
import Login from "./Login";
import Register from "./Register";
import Contact from "./Contact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css"

function App() {

  const cartItems = useSelector(state => state.cart.items);

  const cartQuantity = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  return (

    <BrowserRouter>

      {/* ===== SIDEBAR ===== */}

      <nav className="navbar">

        <h2 className="logo">
        DishDelight
        </h2>

        <div className="nav-links">

          <NavLink to="/">
            <i className="fas fa-home"></i>
            <span>HOME</span>
          </NavLink>

          <NavLink to="/veg">
            <i className="fas fa-leaf"></i>
            <span>VEG</span>
          </NavLink>

          <NavLink to="/nonveg">
            <i className="fas fa-drumstick-bite"></i>
            <span>NON VEG</span>
          </NavLink>

          <NavLink to="/milk">
            <i className="fas fa-mug-hot"></i>
            <span>MILK</span>
          </NavLink>

          <NavLink to="/cooldrinks">
            <i className="fas fa-glass-cheers"></i>
            <span>COOL DRINKS</span>
          </NavLink>

          <NavLink to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>CART ({cartQuantity})</span>
          </NavLink>

          <NavLink to="/orders">
            <i className="fas fa-box"></i>
            <span>ORDERS</span>
          </NavLink>

          <NavLink to="/login">
            <i className="fas fa-sign-in-alt"></i>
            <span>LOGIN</span>
            </NavLink>

            <NavLink to="/register">
            <i className="fas fa-user-plus"></i>
            <span>REGISTER</span>
            </NavLink>

          <NavLink to="/about">
            <i className="fas fa-info-circle"></i>
            <span>ABOUT</span>
          </NavLink>

          <NavLink to="/contact">
            <i className="fas fa-envelope"></i>
            <span>CONTACT</span>
          </NavLink>

        </div>

      </nav>

      {/* ===== CONTENT ===== */}

      <div className="content">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/veg" element={<Veg />} />

          <Route path="/nonveg" element={<Nonveg />} />

          <Route path="/milk" element={<Milk />} />

          <Route path="/cooldrinks" element={<CoolDrinks />} />

          <Route path="/about" element={<AboutUs />} />

          <Route path="/orders" element={<Orders />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/contact" element={<Contact />} />

          </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App;