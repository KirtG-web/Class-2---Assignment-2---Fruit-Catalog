import React from "react";
import Product from "../components/Product";
import "./Catalog.css";

function Catalog() {
  const products = [
    { name: "Apple", price: "$1.20", image: "/apple.png" },
    { name: "Banana", price: "$0.80", image: "/banana.jpg" },
    { name: "Orange", price: "$1.00", image: "/orange.jpg" },
  ];

  return (
    <div className="catalog-container">
      <h2 className="catalog-title">🍎 Fruit Catalog</h2>
      <div className="catalog-grid">
        {products.map((item, index) => (
          <Product
            key={index}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
