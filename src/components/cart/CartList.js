import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import Cart from "./Cart";

export default function CartList(prop) {
  const { cartList, setCartList, userData } = prop;

  const navigate = useNavigate();

  if (cartList.length === 0) {
    return (
      <div>
        <h1>Cart is empty</h1>
        <Link to="/products">
          <Button
            variant="outlined"
            style={{ color: "black", borderColor: "black" }}
          >
            Let's go and shop now !
          </Button>
        </Link>
      </div>
    );
  }

  //  Calculate total amount of the money
  const totalPrice = cartList.reduce((acc, item) => {
    const result = acc + item.price * item.quantity;
    return result;
  }, 0);

  // in order to send request to BE to create order we should transform shape the data from cartList => orderdetail
  const orderDetails = cartList.map((item) => {
    return { productId: item.id, quantity: item.quantity };
  });

  const token = localStorage.getItem("token");

  // Checkout
  function CheckOut() {
    // check if user is login or not
    if (!userData) {
      alert("Please Login and then checkout");
      navigate("/login");
      return;
    }
    //send request to BE to create order
    const orderUrl = "http://localhost:5125/api/v1/Order";

    axios
      .post(
        orderUrl,
        { orderDetails: orderDetails },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response, "this is from order list ...");

        if (response.status === 200) {
          alert("Order is created successfully");
          navigate("/products");
          setCartList([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>CartList</h1>

      {cartList.map((cart) => {
        return (
          <Cart
            key={cart.id}
            cart={cart}
            cartList={cartList}
            setCartList={setCartList}
          />
        );
      })}

      <p>Total price: $ {totalPrice}</p>

      <Button
        variant="outlined"
        style={{ color: "black", borderColor: "black" }}
        onClick={CheckOut}
      >
        Checkout
      </Button>
    </div>
  );
}
