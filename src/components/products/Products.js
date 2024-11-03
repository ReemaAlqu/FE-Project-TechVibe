import React from "react";

import "./Products.css";
import Product from "./Product";
import ProductsPagination from "./ProductsPagination";

export default function Products(prop) {
  const {
    productsList,
    wishList,
    setWishList,
    totalCount,
    page,
    handleChange,
  } = prop;

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {productsList.map((product) => {
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
      <ProductsPagination
        totalCount={totalCount}
        page={page}
        handleChange={handleChange}
      />
    </div>
  );
}
