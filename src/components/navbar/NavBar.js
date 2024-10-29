import React from "react";

// Import the css file
import "./NavBar.css";
// Import the images
import myLogo from "../../images/myLogo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar-section">
      <div className="header_logo">
        <img id="logo-image" src={myLogo} alt="Tech Vibe Logo" />
      </div>

      <nav>
        <ul>
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about-us">About Us</Link>
        </ul>
      </nav>
    </div>
  );
}
