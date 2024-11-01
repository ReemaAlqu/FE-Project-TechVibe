import React from "react";
import "./Home.css"
import Hero from "../hero/Hero";
import Newsletter from "../newsletter/Newsletter";
import Reviews from "../reviews/Reviews";

export default function () {
  return (
    <div className="home">
      <Hero />
      <Newsletter />
      <Reviews />
    </div>
  );
}
