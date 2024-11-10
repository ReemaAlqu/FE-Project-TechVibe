import React from "react";

export default function ProductItem(prop) {
  const { product } = prop;
  return (
    <div key={product.id}>
      <div>
        Name: {product.name} - price: (${product.price})
      </div>
      <p>Description: {product.description}</p>
      {/* <p>Category: {product.category.name}</p> */}
      <img src={product.imageUrl} alt={product.name} />
      <br />
    </div>
  );
}
