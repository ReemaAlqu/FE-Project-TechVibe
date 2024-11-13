import React, { useState } from "react";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./Product.css";

export default function Product(prop) {
  const { product, wishList, setWishList, cartList, setCartList } = prop;

  // state for changing color
  const [isFav, setIsFav] = useState(false);
  // state for showing message/notifaction
  const [openFavMessage, setOpenFavMessage] = useState(false);

  function addToFav(product) {
    const isInclude = wishList.some((item) => item.id === product.id);

    if (!isInclude) {
      setWishList([...wishList, product]);
      setIsFav(true);
      setOpenFavMessage(true);
    }
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenFavMessage(false);
  };

  //************************************************************************************************* */

  // state for changing color
  const [inCart, setInCart] = useState(false);
  // state for showing message/notifaction
  const [openCarttMessage, setOpenCartMessage] = useState(false);

  // Add to cart function
  function addToCart(product) {
    const isInclude = cartList.some((item) => item.id === product.id);

    if (!isInclude) {
      // add quantity=> key & inatial value= 1  in product for the Cart only .
      setCartList([...cartList, { ...product, quantity: 1 }]);
      setInCart(true);
      setOpenCartMessage(true);
    }
  }
  console.log(cartList, "Cart ...");

  const handleCloseForCart = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenCartMessage(false);
  };

  return (
    <div className="product-section" key={product.id}>
      <div>
        {product.name} (${product.price})
      </div>
      <img src={product.imageUrl} alt={product.name} />

      <br />

      <Link to={`${product.id}`}>
        <MoreHorizIcon sx={{ color: "black" }} />
      </Link>

      <br />

      <ShoppingCartIcon
        onClick={() => addToCart(product)}
        sx={{ color: inCart ? "blue" : "grey" }}
      />
      <Snackbar
        open={openCarttMessage}
        autoHideDuration={3000}
        onClose={handleCloseForCart}
        message={`The ( ${product.name} ) has been added to the cart`}
      />

      <FavoriteIcon
        onClick={() => addToFav(product)}
        sx={{ color: isFav ? "red" : "grey" }}
      />

      <Snackbar
        open={openFavMessage}
        autoHideDuration={3000}
        onClose={handleClose}
        message={`The ( ${product.name} ) has been added to favorites`}
      />
    </div>
  );
}
