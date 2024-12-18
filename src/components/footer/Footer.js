import React from "react";

// Import the css file
import "./Footer.css";

// Import the images
import Facebook from "../../images/Facebook.png";
import Instagram from "../../images/Instagram.png";
import Twitter from "../../images/Twitter.png";

export default function Footer() {
  return (
    <div>
      <div className="Footer-section">
        <div>
          <nav>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </nav>
        </div>

        <div className="social-media">
          <a href=" https://www.facebook.com" target="_blank">
            <img src={Facebook} alt="Facebook" />
          </a>

          <a href="https://www.instagram.com" target="_blank">
            <img src={Instagram} alt="Instagram" />
          </a>

          <a href="https://x.com/" target="_blank">
            <img src={Twitter} alt="Twitter" />
          </a>
        </div>
      </div>

      <div className="rights">
        <p>2024 Tech Vibe. All rights reserved.</p>
      </div>
    </div>
  );
}
