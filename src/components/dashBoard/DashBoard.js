import React from "react";
import { Link } from "react-router-dom";

export default function DashBoard() {

  return (
    <div>
      <h1>DashBoard</h1>
      {/* gona use drawer from MUI fo styling */}
      <Link to="/product-dashboard">Products</Link>

      <p>Users</p>

      <Link to="/order-dashboard">Orders</Link>
    </div>
  );
}


