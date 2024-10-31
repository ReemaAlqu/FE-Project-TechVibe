import React from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

import "./NavBar.css";
import myLogo from "../../images/myLogo.png";

export default function NavBar(prop) {
  const { wishList } = prop;
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

          <Link to="/login">
            <PersonIcon sx={{ color: "white" }} />
          </Link>
        </ul>
      </nav>
    </div>
  );
}
