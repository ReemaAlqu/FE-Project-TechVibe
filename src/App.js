import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import error404 from "./images/error404.jpg";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import LayOut from "./components/layout/LayOut";
import SingleProductPage from "./pages/SingleProductPage";
import WishListPage from "./pages/WishListPage";
import CartPage from "./pages/CartPage";
import UserRegister from "./components/user/UserRegister";
import UserLogin from "./components/user/UserLogin";

function App() {
  // States
  const [productResponse, setProductResponse] = useState({
    products: [],
    totalCount: 0,
  });
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [wishList, setWishList] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  // ***********************************************************************************
  // const url = "https://fakestoreapi.com/products"; the old URL for fake api

  let limit = 3;
  let offset = (page - 1) * limit;

  function getUrl(userInput, minPrice, maxPrice) {
    let productUrl = `http://localhost:5125/api/v1/Products?Limit=${limit}&Offset=${offset}`;
    if (userInput) {
      productUrl += `&search=${userInput}`;
    }

    if (minPrice) {
      productUrl += `&minPrice=${minPrice}`;
    }

    if (maxPrice) {
      productUrl += `&maxPrice=${maxPrice}`;
    }
    return productUrl;
  }

  function getDataFromServer() {
    // axios syntax:
    axios
      .get(getUrl(userInput, minPrice, maxPrice))
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
    getDataFromServer();
  }, [offset, limit, userInput, minPrice, maxPrice]);

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
      element: <LayOut wishList={wishList} />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/products",
          element: (
            <ProductsPage
              productsList={productResponse.products}
              setUserInput={setUserInput}
              userInput={userInput}
              wishList={wishList}
              setWishList={setWishList}
              totalCount={productResponse.totalCount}
              page={page}
              handleChange={handleChange}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
            />
          ),
        },
        {
          path: "/products/:productId",
          element: <SingleProductPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/wish-list",
          element: <WishListPage wishList={wishList} />,
        },
        {
          path: "/register",
          element: <UserRegister />,
        },
        {
          path: "/login",
          element: <UserLogin />,
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
