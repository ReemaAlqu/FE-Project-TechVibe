import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card, CardContent } from "@mui/material";

export default function Cart(prop) {
  const { cart, cartList, setCartList } = prop;

  function increaseProductQuantity(id) {
    const newCartList = cartList.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartList(newCartList);
  }

  function decreaseroductQuantity(id) {
    const newCartList = cartList.map((item) => {
      if (item.quantity === 1) {
        return item;
      }
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCartList(newCartList);
  }

  // delete product from cart list
  // with filter we will keep the product that dont match with the condition
  function removeProduct(cart) {
    setCartList(cartList.filter((cartItem) => cartItem.id !== cart.id));
  }

  return (
    <Card sx={{ width: "400px", marginTop: "20px", padding: "5px" }}>
      <CardContent>
        <div>
          Name: {cart.name} (${cart.price})
        </div>
        <img src={cart.imageUrl} alt={cart.name} />

        <div>
          Quantity: ( {cart.quantity} ){"   "}
          <Button
            variant="contained"
            style={{
              color: "white",
              background: "black",
              width: "5px",
              height: "20px",
            }}
            onClick={() => decreaseroductQuantity(cart.id)}
          >
            -
          </Button>{" "}
          <Button
            variant="contained"
            style={{
              color: "white",
              background: "black",
              width: "5px",
              height: "20px",
            }}
            onClick={() => increaseProductQuantity(cart.id)}
          >
            +
          </Button>{" "}
          <DeleteIcon
            sx={{ color: "Red" }}
            onClick={() => removeProduct(cart)}
          />
        </div>
      </CardContent>
    </Card>
  );
}
