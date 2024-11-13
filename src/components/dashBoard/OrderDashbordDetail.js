import React from "react";

export default function OrderDashbordDetail(prop) {
  const { item } = prop;
  return (
    <div>
      <p>Name: {item.product.name}</p>
      <p>Quantity: {item.quantity}</p>
      <img src={item.product.imageUrl} alt={item.product.name} />

      <br />
    </div>
  );
}
