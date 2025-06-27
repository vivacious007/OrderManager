import React, { useEffect, useState } from "react";
import OrderForm from "./components/OrderForm";
import OrderDashboard from "./components/OrderDashboard";
import "./app.css";

function App() {
  const [orders, setOrders] = useState(() => {
    const stored = localStorage.getItem("orders");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order) => setOrders([order, ...orders]);

  return (
    <div className="App">
      <h1>Order Manager</h1>
      <OrderForm addOrder={addOrder} />
      <OrderDashboard orders={orders} />
    </div>
  );
}

export default App;