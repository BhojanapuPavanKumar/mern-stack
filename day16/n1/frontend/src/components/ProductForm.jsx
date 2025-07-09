import React, { useState } from "react";
import axios from "axios";

const ProductForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    rating: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:2900/api/v1/products", formData);
      onAdd(res.data.data.product); // add to list
      setFormData({ title: "", price: "", description: "", rating: "", quantity: "" });
    } catch (err) {
      alert("Error adding product: " + err.response?.data?.data?.errMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <input name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <input name="rating" placeholder="Rating" value={formData.rating} onChange={handleChange} />
      <input name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
