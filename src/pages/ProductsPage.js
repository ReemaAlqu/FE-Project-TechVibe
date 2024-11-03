import React from "react";
import Products from "../components/products/Products";
import Form from "../components/form/Form";

export default function ProductsPage(prop) {
  const {
    productsList,
    setUserInput,
    userInput,
    wishList,
    setWishList,
    totalCount,
    page,
    handleChange,
  } = prop;

  return (
    <div>
      <Form setUserInput={setUserInput} />
      <Products
        productsList={productsList}
        userInput={userInput}
        wishList={wishList}
        setWishList={setWishList}
        totalCount={totalCount}
        page={page}
        handleChange={handleChange}
      />
    </div>
  );
}
