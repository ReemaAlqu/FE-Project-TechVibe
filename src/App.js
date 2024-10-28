import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import Hero from "./components/hero/Hero";
import Reviews from "./components/reviews/Reviews";

// import image
import error404 from "./images/error404.jpg";
import Newsletter from "./components/newsletter/Newsletter";

function App() {
  const url = "https://fakestoreapi.com/products";

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function getData() {
    // axios syntax:
    axios
      .get(url)
      .then((response) => {
        setProductList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Fail to fetch data");
        setLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

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
    <div className="App">
      <NavBar />
      <Hero />
      <Products productList={productList} />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
