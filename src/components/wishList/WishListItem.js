import React from "react";
import { Card, CardContent } from "@mui/material";
import "./WishList.css";

export default function WishListItem(prop) {
  const { item } = prop;
  return (
    <Card sx={{ width: "400px", marginTop: "20px", padding: "5px" }}>
        <CardContent>
      <div>
        {item.name} (${item.price})
      </div>
      <img src={item.imageUrl} alt={item.name} />
    </CardContent>
    </Card>
  );
}
