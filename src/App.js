import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import "./App.css";
import error404 from "./images/error404.jpg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import LayOut from "./components/layout/LayOut";
import SingleProductPage from "./pages/SingleProductPage";
import WishListPage from "./pages/WishListPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [wishList, setWishList] = useState([]);

  const [productResponse, setProductResponse] = useState({
    products: [],
    totalCount: 0,
  });

  // const url = "https://fakestoreapi.com/products"; the old URL for fake api

  // ***********************************************************************************

  // Add the ( LOGIC ) to send request or to get data from the ( SERVER )

  // 1-the FE need to know the (url)(Address)(Endpoint)
  const url1 = "http://localhost:5125";
  const productUrl =
    "http://localhost:5125/api/v1/Products?Limit=2&Offset=2&Filter.MinPrice=0&Filter.MaxPrice=10000";

  const [response, setResponse] = useState("");

  // 2- when i send the request to the BE I need to know the example :
  // method: get
  // body: non
  // rersponse:

  //axios
  function getDataFromServer() {
    // axios syntax:

    axios
      .get(productUrl)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setProductResponse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error");
        setLoading(false);
      });
  }

  // function getData() {
  //   // axios syntax:
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       setProductsList(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError("Fail to fetch data");
  //       setLoading(false);
  //     });
  // }

  useEffect(() => {
    getDataFromServer();
  }, []);
  console.log(response, "response from BE");

  console.log(productResponse, "this is from App");

  // if (loading === true) {
  //   return (
  //     <div>
  //       <Box sx={{ width: "100%" }}>
  //         <LinearProgress />
  //       </Box>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div>
  //       <img className="error404" src={error404} alt="404" />
  //     </div>
  //   );
  // }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut wishList={wishList} />,
      children: [
        {
          path: "/",
          element: <HomePage response={response} />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/products",
          element: (
            <ProductsPage
              // productResponse={productResponse}
              // productsList={productsList}
              setUserInput={setUserInput}
              userInput={userInput}
              wishList={wishList}
              setWishList={setWishList}
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
          path: "/login",
          element: <LoginPage />,
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
