import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Popover from "@mui/material/Popover";
import axios from "axios";

export default function ProductItem(prop) {
  const { product, fetchData } = prop;

  function deleteProductById() {
    const url = `http://localhost:5125/api/v1/Products/${product.id}`;
    const token = localStorage.getItem("token");
    axios
      .delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 204) {
          alert("a product is deleted successfully");
          fetchData();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //********************************************** */

  // Edit product
  const [anchorElEdit, setAnchorElEdit] = useState(null);
  const handleClickEditProduct = (event) => {
    setAnchorElEdit(event.currentTarget);
  };
  const handleCloseEditProduct = () => {
    setAnchorElEdit(null);
  };
  const openEditButten = Boolean(anchorElEdit);
  const idEditProduct = openEditButten ? "simple-popover" : undefined;

  const [productEditInfo, setProductEditInfo] = useState({
    nameEdit: "",
    priceEdit: 0,
    descriptionEdit: "",
  });

  function onChangeHandlerEdit(event) {
    setProductEditInfo({
      ...productEditInfo,
      [event.target.name]: event.target.value,
    });
  }
  console.log(productEditInfo, "This for edit info ");

  function editProductInfo() {
    const token = localStorage.getItem("token");
    const url = `http://localhost:5125/api/v1/Products/${product.id}`;
    axios
      .put(
        url,
        {
          name: productEditInfo.nameEdit,
          price: productEditInfo.priceEdit,
          description: productEditInfo.descriptionEdit,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response, "Respon Edit");
        if (response.status === 200) {
          alert("product is Updated successfully");
          fetchData();
        }
      })
      .catch((error) => {
        console.log("error");
      });
  }

  return (
    <div key={product.id}>
      <div>
        Name: {product.name} - price: (${product.price})
      </div>
      <p>Description: {product.description}</p>
      <p>Category: {product.category.name}</p>
      <img src={product.imageUrl} alt={product.name} />
      <br />
      <Button
        variant="outlined"
        style={{ color: "black", borderColor: "black" }}
        onClick={deleteProductById}
      >
        Delete
      </Button>

      <Button
        aria-describedby={idEditProduct}
        variant="contained"
        onClick={handleClickEditProduct}
      >
        Edit product
      </Button>

      <Popover
        id={idEditProduct}
        open={openEditButten}
        anchorEl={anchorElEdit}
        onClose={handleCloseEditProduct}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <TextField
          name="nameEdit"
          label="Edit Name"
          variant="standard"
          helperText="Please enter the new product name "
          onChange={onChangeHandlerEdit}
        />
        <br />

        <TextField
          name="priceEdit"
          label="Edit Price"
          variant="standard"
          helperText="Please enter the new product price "
          onChange={onChangeHandlerEdit}
        />
        <br />

        <TextField
          name="descriptionEdit"
          label="Edit Description"
          variant="standard"
          helperText="Please enter the new product description "
          onChange={onChangeHandlerEdit}
        />
        <br />

        <Button
          variant="outlined"
          style={{ color: "black", borderColor: "black" }}
          onClick={editProductInfo}
        >
          Edit Product
        </Button>
      </Popover>

      <br />
    </div>
  );
}
