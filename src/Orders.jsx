import React from "react";
import { useSelector } from "react-redux";
import "./Orders.css";

function Orders() {
  const orderData = useSelector(
    (state) => state.orders?.orders || []
  );

  return (
    <div className="orders-container">
      <h1 className="orders-title">📦 My Orders 📦</h1>

      {orderData.length === 0 ? (
        <h2 className="empty-orders">No Orders Yet</h2>
      ) : (
        orderData.map((order, index) => (
          <div key={index} className="order-card">
            <h3>📅 Date: {order.date}</h3>
            <h3>💳 Payment: {order.payment}</h3>

            {order.items.map((item) => (
              <div key={item.id} className="bill-item">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <strong>₹{(item.price * item.quantity).toFixed(2)}</strong>
              </div>
            ))}

            <h2 className="order-total">
              Total: ₹{Number(order.total).toFixed(2)}
            </h2>
            <hr />
          </div>
        ))
      )}

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
    </div>
  );
}

export default Orders;
