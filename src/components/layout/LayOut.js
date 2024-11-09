import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

import "./LayOut.css"

export default function LayOut(prop) {
  const { wishList, isAuthenticated } = prop;
  return (
    <div className="layout">
      <NavBar wishList={wishList} isAuthenticated={isAuthenticated} />
      <Outlet />
      <Footer />
    </div>
  );
}
