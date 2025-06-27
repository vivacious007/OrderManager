import React from "react";

export default function OrderDashboard({ orders }) {
  const total = orders.reduce((sum, o) => sum + o.price, 0).toFixed(2);

  return (
    <div className="dashboard">
      <h2>Order Dashboard</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              {order.description} - ₹{order.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}