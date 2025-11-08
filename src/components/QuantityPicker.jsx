import React, { useState } from "react";
import "./QuantityPicker.css";

function QuantityPicker({ onChange }) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    onChange && onChange(newQty);
  };

  const decrease = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      onChange && onChange(newQty);
    }
  };

  return (
    <div className="quantity-picker">
      <button className="qp-btn" onClick={decrease}>-</button>
      <span className="qp-value">{quantity}</span>
      <button className="qp-btn" onClick={increase}>+</button>
    </div>
  );
}

export default QuantityPicker;
