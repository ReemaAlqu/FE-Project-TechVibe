import React from "react";

export default function WishListItem(prop) {
  const { item } = prop;
  return (
    <div>
      <div>
        {item.title} - price: (${item.price})
      </div>
      <img src={item.image} alt={item.title} />
    </div>
  );
}
