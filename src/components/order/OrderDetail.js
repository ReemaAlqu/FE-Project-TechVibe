import React from "react";

export default function OrderDetail(prop) {
  const { item } = prop;
  console.log(item, "item from order detail");
  return (
    <div>
      <p>Name: {item.product.name}</p>
      <p>Quantity: {item.quantity}</p>
      <img src={item.product.imageUrl} alt={item.product.name} />

      <br />
    </div>
  );
}
