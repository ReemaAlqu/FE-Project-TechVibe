import React from "react";
import TextField from "@mui/material/TextField";

export default function Form(prop) {
  const { setUserInput } = prop;

  function onChangeHandler(event) {
    setUserInput(event.target.value);
  }

  return (
    <div>
      {/* <form>
        <label>Please Enter product name </label>
        <input type="text" onChange={onChangeHandler} />
      </form> */}

      <TextField
        id="standard-basic"
        label="Search a product title"
        variant="standard"
        onChange={onChangeHandler}
      />
    </div>
  );
}
