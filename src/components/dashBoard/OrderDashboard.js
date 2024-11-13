import axios from "axios";
import React, { useEffect, useState } from "react";
import OrderDashboardItem from "./OrderDashboardItem";

export default function OrderDashboard(prop) {
  const [orderList, setOrderList] = useState([]);

  //   fetch the order from BE
  function getOrderByUserId() {
    const token = localStorage.getItem("token");
    const url = "http://localhost:5125/api/v1/Order";

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setOrderList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getOrderByUserId();
  }, []);

  console.log(orderList, "this is the response from orderDashboard");

  if (orderList.length === 0) {
    return <div>No order history yet</div>;
  }

  return (
    <div>
      OrderDashboard
      <div className="order-list-dashbord-container">
        <h1>UserOrderHistory</h1>
        <div className="order-list-dashbord">
          {orderList.map((order) => {
            return <OrderDashboardItem key={order.id} order={order} />;
          })}
        </div>
      </div>
    </div>
  );
}
