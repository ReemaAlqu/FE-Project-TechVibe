import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="hero-section">
      <div class="hero-content">
        <h1 class="title">Welcome to our E-commerce store</h1>
        <h3>Discover the Latest in Tech</h3>
        <p>Your one-stop shop for cutting-edge devices and gadgets.</p>
        <Link to="/products">
          <button class="btn">Shop Now</button>
        </Link>
      </div>
    </div>
  );
}
