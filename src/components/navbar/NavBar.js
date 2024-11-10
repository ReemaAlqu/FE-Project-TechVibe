import React from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";

import "./NavBar.css";
import myLogo from "../../images/myLogo.png";
import { DisplaySettings } from "@mui/icons-material";

export default function NavBar(prop) {
  const { wishList, isAuthenticated, userData } = prop;
  const arrayLength = wishList.length;

  return (
    <div className="NavBar-section">
      <div className="header_logo">
        <img id="logo-image" src={myLogo} alt="Tech Vibe Logo" />
      </div>

      <nav>
        <ul>
          <Link to="/home">
            <HomeIcon sx={{ color: "white" }} />
          </Link>

          <Link to="/products">
            <DevicesOtherIcon sx={{ color: "white" }} />
          </Link>

          <Link to="/cart">
            <ShoppingCartIcon sx={{ color: "white" }} />
          </Link>

          <Badge badgeContent={arrayLength} color="primary">
            <Link to="/wish-list">
              <FavoriteIcon sx={{ color: "white" }} />
            </Link>
          </Badge>

          {/* For the User  */}
          {isAuthenticated ? (
            <Link to="/profile">
              <PersonIcon sx={{ color: "white" }} />
            </Link>
          ) : (
            <Link to="/login">
              <PersonIcon sx={{ color: "white" }} />
            </Link>
          )}

          {/*********************************************************************************************** */}

          {/* For the admin */}
          {isAuthenticated && userData.userRole === "Admin" ? (
            <Link to="/dashboard">
              <DashboardIcon sx={{ color: "white" }} />
            </Link>
          ) : (
            <p style={{ display: "none" }}>nothing</p>
          )}
        </ul>
      </nav>
    </div>
  );
}
