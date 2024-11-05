import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";

import error404 from "../../images/error404.jpg";

export default function SingleProduct() {
  const { productId } = useParams();

  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const ProductDetailUrl = `http://localhost:5125/api/v1/Products/${productId}`;

  useEffect(() => {
    function getData() {
      // axios syntax:
      axios
        .get(ProductDetailUrl)
        .then((response) => {
          setProductDetail(response.data);
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
        {productDetail.name} - price: (${productDetail.price})
      </div>
      <p>Description: {productDetail.description}</p>
      <img src={productDetail.imageUrl} alt={productDetail.name} />
      <Link to="/products">
        <Button
          variant="outlined"
          style={{ color: "black", borderColor: "black" }}
        >
          Go back
        </Button>
      </Link>
    </div>
  );
}
