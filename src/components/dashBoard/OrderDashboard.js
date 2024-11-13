import axios from "axios";
import React, { useEffect, useState } from "react";
import OrderDashboardItem from "./OrderDashboardItem";
import "./OrderDashboard.css";

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

  if (orderList.length === 0) {
    return <div>No orders yet</div>;
  }

  return (
    <div className="order-list-dashbord-container">
      <h1>Orders </h1>
      <div className="order-list-dashbord">
        {orderList.map((order) => {
          return <OrderDashboardItem key={order.id} order={order} />;
        })}
      </div>
    </div>
  );
}
