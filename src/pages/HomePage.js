import React from "react";
import Hero from "../components/hero/Hero";
import Newsletter from "../components/newsletter/Newsletter";
import Reviews from "../components/reviews/Reviews";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Newsletter />
      <Reviews />
    </div>
  );
}
