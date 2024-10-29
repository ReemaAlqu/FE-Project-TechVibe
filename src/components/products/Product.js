import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

export default function (prop) {
  return (
    <div key={prop.product.id}>
      <div>
        {prop.product.id}. {prop.product.title} - price: (${prop.product.price})
      </div>
      <img src={prop.product.image} alt={prop.product.title} />
      <br />
      <Link to={`${prop.product.id}`}>
        <button>More Details...</button>
      </Link>
    </div>
  );
}
