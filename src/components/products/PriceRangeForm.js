import React from "react";
import TextField from "@mui/material/TextField";

export default function PriceRangeForm(prop) {
  const { setMinPrice, setMaxPrice } = prop;

  function onChangeHandlerMinPrice(event) {
    setMinPrice(event.target.value);
  }

  function onChangeHandlerMaxPrice(event) {
    setMaxPrice(event.target.value);
  }

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Enter the min price:"
        variant="standard"
        type="number"
        onChange={onChangeHandlerMinPrice}
      />
      <br />
      <TextField
        id="standard-basic"
        label="Enter the max price:"
        variant="standard"
        type="number"
        onChange={onChangeHandlerMaxPrice}
      />
    </div>
  );
}
