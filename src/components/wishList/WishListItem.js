import React from "react";

export default function WishListItem(prop) {
  const { item } = prop;
  return (
    <div>
      <div>
        Name: {item.name} - price: (${item.price})
      </div>
      <img src={item.imageUrl} alt={item.name} />
    </div>
  );
}
