import React, { useState } from "react";

export default function OrderForm({ addOrder }) {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !price) return;
    addOrder({ id: Date.now(), description, price: parseFloat(price) });
    setDescription("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Order Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        step="0.01"
      />
      <button type="submit">Add Order</button>
    </form>
  );
}