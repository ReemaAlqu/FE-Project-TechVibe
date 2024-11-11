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
import UserProfile from "./components/user/UserProfile";
import ProtectedRoute from "./components/user/ProtectedRoute";
import Dashboard from "./components/dashBoard/DashBoard";
import ProductDashboard from "./components/dashBoard/ProductDashboard";
import UserDashboard from "./components/dashBoard/UserDashboard";
import OrderDashboard from "./components/dashBoard/OrderDashboard";

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
  const [cartList, setCartList] = useState([]);

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
  // with fetch data and render it we need also to use another hook from react (useEffect) : it's allow us to invoke the function and run it to get the data ONE time if the value of the dependency is Empty , and if dependency have any value change dynamically it gonna run the function get data to render it one more time
  useEffect(() => {
    getDataFromServer();
  }, [offset, limit, userInput, minPrice, maxPrice]);

  /******************************************************************************************************/
  // Get user data
  const [userData, setUserData] = useState(null);
  const [isUserDataLoading, setIsUserDataLoading] = useState(true);

  function getUserData() {
    setIsUserDataLoading(true);
    // token from local storage
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5125/api/v1/User/auth", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserData(response.data);
        setIsUserDataLoading(false);
      })
      .catch((error) => {
        setIsUserDataLoading(false);
        console.log(error);
      });
  }

  useEffect(() => {
    getUserData();
  }, []);

  console.log(userData, "user data from App");

  // protected route
  let isAuthenticated = userData ? true : false;

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <LayOut
          wishList={wishList}
          isAuthenticated={isAuthenticated}
          userData={userData}
        />
      ),
      children: [
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
              cartList={cartList}
              setCartList={setCartList}
            />
          ),
        },
        {
          path: "/products/:productId",
          element: <SingleProductPage />,
        },
        {
          path: "/cart",
          element: (
            <CartPage
              cartList={cartList}
              setCartList={setCartList}
              userData={userData}
            />
          ),
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
          element: <UserLogin getUserData={getUserData} />,
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute // this path can access and render <UserProfile /> conditionally with the logic inside the ProtectedRoute
              isUserDataLoading={isUserDataLoading}
              isAuthenticated={isAuthenticated}
              element={
                <UserProfile userData={userData} setUserData={setUserData} />
              }
            />
          ),
        },
        {
          path: "/dashboard",
          element: (
            <ProtectedRoute
              isUserDataLoading={isUserDataLoading}
              isAuthenticated={isAuthenticated}
              shouldCheckAdmin={true}
              userData={userData}
              element={<Dashboard />}
            />
          ),
        },
        {
          path: "/product-dashboard",
          element: (
            <ProtectedRoute
              isUserDataLoading={isUserDataLoading}
              isAuthenticated={isAuthenticated}
              shouldCheckAdmin={true}
              userData={userData}
              element={
                <ProductDashboard
                // productList={productResponse.products}
                // loading={loading}
                />
              }
            />
          ),
        },
        {
          path: "/user-dashboard",
          element: (
            <ProtectedRoute
              isUserDataLoading={isUserDataLoading}
              isAuthenticated={isAuthenticated}
              shouldCheckAdmin={true}
              userData={userData}
              element={<UserDashboard />}
            />
          ),
        },
        {
          path: "/order-dashboard",
          element: (
            <ProtectedRoute
              isUserDataLoading={isUserDataLoading}
              isAuthenticated={isAuthenticated}
              shouldCheckAdmin={true}
              userData={userData}
              element={<OrderDashboard />}
            />
          ),
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
