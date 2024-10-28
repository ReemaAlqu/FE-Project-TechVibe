import React from "react";

// Import the css file
import "./NavBar.css";
// Import the images
import myLogo from "../../images/myLogo.png";

export default function NavBar() {
  return (
    <div className="NavBar-section">
      <div className="header_logo">
        <img id="logo-image" src={myLogo} alt="Tech Vibe Logo" />
      </div>

      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
        </ul>
      </nav>
    </div>
  );
}
