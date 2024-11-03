import React, { useState } from "react";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Rating from "@mui/material/Rating";

import "./Product.css";

export default function Product() {
  // // state for changing color
  // const [isFav, setIsFav] = useState(false);
  // // state for showing message/notifaction
  // const [open, setOpen] = useState(false);
  // // state for rating
  // const [value, setValue] = useState(0);

  // const { product, wishList, setWishList } = prop;

  // function addToFav(product) {
  //   const isInclude = wishList.some((item) => item.id === product.id);

  //   if (!isInclude) {
  //     setWishList([...wishList, product]);
  //     setIsFav(true);
  //     setOpen(true);
  //   }
  // }

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // function getRating(event, newValue) {
  //   setValue(newValue);
  // }

  return (
    // <div key={product.id}>
    <div>
      <h1>Tis is product</h1>

      {/* <div>
        {product.title} - price: (${product.price})
      </div>
      <img src={product.image} alt={product.title} />
      <br />
      <Link to={`${product.id}`}> */}
      {/* <button>More Details...</button> */}
      {/* <MoreHorizIcon sx={{ color: "black" }} />
      </Link> */}
      {/* <button onClick={() => addToFav(product)}>Add to fav </button> */}
      {/* <FavoriteIcon
        onClick={() => addToFav(product)}
        sx={{ color: isFav ? "red" : "grey" }}
      />

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={`( ${product.title} ) is addesd to wish list `}
      />
      <br /> */}

      {/* <Rating name="simple-controlled" value={value} onChange={getRating} /> */}

      {/* <Rating name="read-only" value={product.rating.rate} readOnly /> */}
    </div>
  );
}
