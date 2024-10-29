import React from "react";

import "./Products.css";
import Product from "./Product";

export default function Products(prop) {
  const { productsList, userInput, wishList, setWishList } = prop;

  const result = productsList.filter((product) =>
    product.title.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())
  );

  let products = productsList;
  if (userInput) {
    products = result;
  }
  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              wishList={wishList}
              setWishList={setWishList}
            />
          );
        })}
      </div>
    </div>
  );
}
