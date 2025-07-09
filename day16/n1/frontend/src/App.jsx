import  { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2900/api/v1/products")
      .then((res) => setProducts(res.data.data.products || []))
      .catch((err) => console.error("Fetch failed:", err.message));
  }, []);

  const addProductToList = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductForm onAdd={addProductToList} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
