import React from "react";

import "./Products.css";
import Product from "./Product";

export default function Products(prop) {
  return (
    <div>
      <div className="product-list">
        {prop.productsList.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
