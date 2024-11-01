import React from "react";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import "./Hero.css";
export default function Hero() {
  return (
    <div className="hero-section">
      <div class="hero-content">
        <h1 class="title">Welcome to our E-commerce store</h1>
        <h3>Discover the Latest in Tech</h3>
        <p>Your one-stop shop for cutting-edge devices and gadgets.</p>
        <Link to="/products">
          <Button
            variant="outlined"
            style={{ color: "black", borderColor: "black" }}
          >
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
