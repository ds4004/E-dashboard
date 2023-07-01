import React, { useEffect, useState } from "react";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };
  console.log(products);

  return (
    <div className="product-list-div">
      <h1>Product List</h1>
      <ul className="product-list">
        <li className="product-list-item">Sr. no.</li>
        <li className="product-list-item">Name</li>
        <li className="product-list-item">Price</li>
        <li className="product-list-item">Category</li>
        <li className="product-list-item">Company</li>
      </ul>
      {products.map((item, index) => 
        <ul className="product-list">
          <li className="product-list-item">{index + 1}</li>
          <li className="product-list-item">{item.name || "name"}</li>
          <li className="product-list-item">{item.price}</li>
          <li className="product-list-item">{item.category}</li>
          <li className="product-list-item">{item.company}</li>
        </ul>
      )};
    </div>
  );
};

export default ProductList;
