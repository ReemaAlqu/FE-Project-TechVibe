import React from "react";
import "./Product.css"

export default function (prop) {
  return (
    <div>
      <p>{prop.product.title}</p>
      <div>{prop.product.price}</div>
      <img src={prop.product.image} alt={prop.product.title} />
    </div>
  );
}
