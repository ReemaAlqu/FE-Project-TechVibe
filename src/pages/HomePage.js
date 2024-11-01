import React from "react";

import Home from "../components/home/Home";

export default function HomePage(prop) {
  const { response } = prop;
  return (
    <div>
      <p>Response frome backend: {response}</p>
      <Home />
    </div>
  );
}
