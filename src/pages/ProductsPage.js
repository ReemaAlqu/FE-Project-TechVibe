import React from "react";
import Products from "../components/products/Products";
import Form from "../components/form/Form";
import PriceRangeForm from "../components/products/PriceRangeForm";

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
    setMinPrice,
    setMaxPrice,
  } = prop;

  return (
    <div>
      <Form setUserInput={setUserInput} />
      <PriceRangeForm setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
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
