import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import error404 from "../../images/error404.jpg";

export default function SingleProduct() {
  const { productId } = useParams();

  const url = `https://fakestoreapi.com/products/${productId}`;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    function getData() {
      // axios syntax:
      axios
        .get(url)
        .then((response) => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError("Fail to fetch data");
          setLoading(false);
        });
    }

    getData();
  }, [productId]);

  if (loading === true) {
    return (
      <div>
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <img className="error404" src={error404} alt="404" />
      </div>
    );
  }
  return (
    <div>
      <h1>SingleProductPage</h1>
      <div>
        {product.title} - price: (${product.price})
      </div>
      <p>Description: {product.description}</p>
      <img src={product.image} alt={product.title} />
      <br />
    </div>
  );
}