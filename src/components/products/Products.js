import React from "react";
import "./Products.css";
import Product from "./Product";

//Render List of peroducts
export default function Products(prop) {
  // prop data type is OBJECT
  // prop = { key : value }
  // prop = { propProductList : [ {},{},{},{},{},{} ] }

  return (
    <div>
      <h1>Products</h1>
      {/* product word in map function will represent for me each object inside the productList */}

      <div className="product-list">
        {prop.productList.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
