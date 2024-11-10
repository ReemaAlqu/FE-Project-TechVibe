import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import error404 from "../../images/error404.jpg";
import ProductItem from "./ProductItem";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ProductDashboard() {
  const [productResponse, setProductResponse] = useState({
    products: [],
    totalCount: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function fetchData() {
    let url =
      "http://localhost:5125/api/v1/Products?Limit=100&Offset=0&Search=&MinPrice=0&MaxPrice=10000";
    axios
      .get(url)
      .then((response) => {
        setProductResponse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error");
        setError("Fail to fetch data");
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(productResponse.products, "products from dash board");

  // create product ( Popover from MUI)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // fetch category

  const [categoryList, setCategoryList] = useState([]);

  function fetchCategory() {
    let url = "http://localhost:5125/api/v1/Category";
    axios
      .get(url)
      .then((response) => {
        setCategoryList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error");
        setError("Fail to fetch data");
      });
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  console.log(categoryList, "this is the Category List ");

  // get information from the Form
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: 0,
    description: "",
    imageUrl: "",
    categoryId: "",
  });

  function onChangeHandler(event) {
    console.log(event, " this is the event");
    setProductInfo({ ...productInfo, [event.target.name]: event.target.value });
  }

  console.log(productInfo, "this is the product info ");

  function createProduct() {
    const token = localStorage.getItem("token");
    const url = "http://localhost:5125/api/v1/Products";
    axios
      .post(url, productInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          alert("product is Created successfully");
          fetchData();
        }
      })
      .catch((error) => {
        console.log("error");
      });
  }

  if (loading === true) {
    return (
      <div>
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        {/* <div>{error.message}</div> */}
        <img className="error404" src={error404} alt="404" />
      </div>
    );
  }
  return (
    <div>
      <h1>ProductDashboard</h1>
      <p>Create new product</p>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Create new product
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <TextField
          name="name"
          label="Name"
          variant="standard"
          helperText="Please enter the product name "
          onChange={onChangeHandler}
        />
        <br />

        <TextField
          name="price"
          label="price"
          variant="standard"
          helperText="Please enter the product price "
          onChange={onChangeHandler}
        />
        <br />

        <TextField
          name="imageUrl"
          label="imageUrl"
          variant="standard"
          helperText="Please enter the product imageUrl  "
          onChange={onChangeHandler}
        />
        <br />

        <TextField
          name="description"
          label="description"
          variant="standard"
          helperText="Please enter the product description "
          onChange={onChangeHandler}
        />
        <br />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">category id</InputLabel>
          <Select
            labelId="categoryId"
            name="categoryId"
            value={productInfo.categoryId}
            label="categoryId"
            onChange={onChangeHandler}
          >
            {categoryList.map((category) => {
              return (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <Button
          variant="outlined"
          style={{ color: "black", borderColor: "black" }}
          onClick={createProduct}
        >
          Add product
        </Button>
      </Popover>

      <h1>List of products</h1>
      <div>
        {productResponse.products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              product={product}
              fetchData={fetchData}
            />
          );
        })}
      </div>
    </div>
  );
}
