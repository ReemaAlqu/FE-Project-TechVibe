import React from "react";
import TextField from "@mui/material/TextField";

export default function Form(prop) {
  const { setUserInput } = prop;

  function onChangeHandler(event) {
    setUserInput(event.target.value);
  }

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Search a product Name"
        variant="standard"
        onChange={onChangeHandler}
      />
    </div>
  );
}
