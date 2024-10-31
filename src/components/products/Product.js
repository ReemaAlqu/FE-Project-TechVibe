import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

export default function Product(prop) {
  const { product, wishList, setWishList } = prop;

  function addToFav(product) {
    const isInclude = wishList.some((item) => item.id === product.id);

    if (!isInclude) {
      setWishList([...wishList, product]);
    }
  }

  return (
    <div key={product.id}>
      <div>
        {product.title} - price: (${product.price})
      </div>
      <img src={product.image} alt={product.title} />
      <br />
      <Link to={`${product.id}`}>
        <button>More Details...</button>
      </Link>
      <button onClick={() => addToFav(product)}>Add to fav </button>
    </div>
  );
}
