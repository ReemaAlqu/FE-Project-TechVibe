import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import "./App.css";
import error404 from "./images/error404.jpg";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import Hero from "./components/hero/Hero";
import Reviews from "./components/reviews/Reviews";
import Newsletter from "./components/newsletter/Newsletter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import LayOut from "./components/layout/LayOut";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  const url = "https://fakestoreapi.com/products";

  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function getData() {
    // axios syntax:
    axios
      .get(url)
      .then((response) => {
        setProductsList(response.data);
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          index: true,
          element: <HomePage></HomePage>,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/about-us",
          element: <AboutUsPage />,
        },
        {
          path: "/products",
          element: <ProductsPage productsList={productsList} />,
        },
        {
          path: "/products/:productId",
          element: <SingleProductPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
