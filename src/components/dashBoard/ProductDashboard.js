import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import error404 from "../../images/error404.jpg";
import ProductItem from "./ProductItem";

export default function ProductDashboard() {
  // way2: fetch product list with no pagination
  // fetch all the list of product in DB by fixd URL:

  const [productResponse, setProductResponse] = useState({
    products: [],
    totalCount: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function fetchData() {
    let url =
      "http://localhost:5125/api/v1/Products?Limit=100&Offset=0&Search=&MinPrice=0&MaxPrice=10000";
    axios
      .get(url)
      .then((response) => {
        setProductResponse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error");
        setError("Fail to fetch data");
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(productResponse.products);

  if (loading === true) {
    return (
      <div>
        {/* <h1>Loading ..... </h1> */}
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        {/* <div>{error.message}</div> */}
        <img className="error404" src={error404} alt="404" />
      </div>
    );
  }
  return (
    <div >
      <h1>ProductDashboard</h1>
      <div>
        {productResponse.products.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
