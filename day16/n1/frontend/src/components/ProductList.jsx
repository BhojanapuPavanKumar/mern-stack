const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((prod) => (
        <div key={prod._id}>
          <strong>{prod.title}</strong> - ₹{prod.price}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
