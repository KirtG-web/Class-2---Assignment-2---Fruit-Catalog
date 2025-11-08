import React, { useState } from "react";
import "./Product.css";

function Product({ name, price, image }) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price}</p>
      <div className="quantity-picker">
        <button onClick={decrement}>-</button>
        <span>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Product;
