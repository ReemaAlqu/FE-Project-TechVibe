import React from "react";
import Button from "@mui/material/Button";
import axios from "axios";

export default function ProductItem(prop) {
  const { product, fetchData } = prop;

  function deleteProductById() {
    const url = `http://localhost:5125/api/v1/Products/${product.id}`;
    const token = localStorage.getItem("token");
    axios
      .delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 204) {
          alert("a product is deleted successfully");
          fetchData();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div key={product.id}>
      <div>
        Name: {product.name} - price: (${product.price})
      </div>
      <p>Description: {product.description}</p>
      <p>Category: {product.category.name}</p>
      <img src={product.imageUrl} alt={product.name} />
      <br />
      <Button
        variant="outlined"
        style={{ color: "black", borderColor: "black" }}
        onClick={deleteProductById}
      >
        Delete
      </Button>
      <br />
    </div>
  );
}
