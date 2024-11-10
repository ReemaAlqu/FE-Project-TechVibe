import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

import "./LayOut.css"

export default function LayOut(prop) {
  const { wishList, isAuthenticated, userData } = prop;
  return (
    <div className="layout">
      <NavBar
        wishList={wishList}
        isAuthenticated={isAuthenticated}
        userData={userData}
      />
      <Outlet />
      <Footer />
    </div>
  );
}
