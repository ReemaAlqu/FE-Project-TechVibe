import React from "react";
import WishListItem from "./WishListItem";

export default function WishList(prop) {
  const { wishList } = prop;

  if (wishList.length === 0) {
    return <p>The wish List is empty.</p>;
  }
  return (
    <div>
      <h1>wishList</h1>
      {wishList.map((item) => {
        return <WishListItem key={item.id} item={item} />;
      })}
    </div>
  );
}
