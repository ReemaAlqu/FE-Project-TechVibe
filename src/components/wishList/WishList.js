import React from "react";
import WishListItem from "./WishListItem";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function WishList(prop) {
  const { wishList } = prop;

  if (wishList.length === 0) {
    return (
      <div className="wish-list-container">
        <h1>Your wishlist is empty.</h1>
        <Link to="/products">
          <Button
            variant="outlined"
            style={{ color: "black", borderColor: "black" }}
          >
            Click here to explore products!
          </Button>
        </Link>
      </div>
    );
  }
  return (
    <div className="wish-list-container">
      <div className="wish-list-item">
        {wishList.map((item) => {
          return <WishListItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
