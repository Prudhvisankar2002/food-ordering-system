import React from "react";
import { useSelector } from "react-redux";
import "./Orders.css";

function Orders() {
  const orderData = useSelector(
    (state) => state.orders?.orders || []
  );

  return (
    <div className="orders-container">
      <h1 className="orders-title">📦 My Orders</h1>

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
    </div>
  );
}

export default Orders;
