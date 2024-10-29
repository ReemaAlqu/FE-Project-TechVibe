import React, { useState } from "react";

export default function Form() {
  const [userInput, setUserInput] = useState("");

  function onChangeHandler(event) {
    console.log(event.target.value);
    setUserInput(event.target.value);
  }

  // search product by name
  const productList = [
    { id: 1, name: "P1", price: 1 },
    { id: 2, name: "P2", price: 2 },
    { id: 3, name: "P3", price: 3 },
  ];

  // filter
  // const result = productList.filter((product) => product.name === userInput);

  // include
  const result = productList.filter((product) =>
    product.name.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())
  );

  console.log(result);
  return (
    <div>
      <h1>Form</h1>
      <form>
        <label>Please Enter product name </label>
        <input type="text" onChange={onChangeHandler} />
      </form>
      <p>User input: {userInput} </p>
    </div>
  );
}
