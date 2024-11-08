import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function UserLogin(prop) {
  const { getUserData } = prop;
  // Password part from MUI
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  // handel form
  const [userLogin, setUerLogIn] = useState({
    emailAddress: "",
    password: "",
  });

  function onChangeHandlerEmailLogin(event) {
    setUerLogIn({ ...userLogin, emailAddress: event.target.value });
  }

  function onChangeHandlerPasswordLogin(event) {
    setUerLogIn({ ...userLogin, password: event.target.value });
  }

  const navigate = useNavigate();
  // onclick
  function logInUser() {
    const userUrlLogIn = " http://localhost:5125/api/v1/User/signIn";

    axios
      .post(userUrlLogIn, userLogin)
      .then((response) => {
        console.log(response, "This is the RESPONSE from LogIn");

        if (response.status === 200) {
          // save to local storage
          localStorage.setItem("token", response.data);
        }
      })
      .then(() => getUserData())
      .then(() => navigate("/profile"))
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400) {
          alert(error.response.data.message);
        }
        if (error.response.status === 401) {
          alert(error.response.data.message);
        }
      });
  }

  return (
    <div>
      <h1>UserLogin</h1>
      <p>Reema@gmail.com</p>
      <p>Reema@2024</p>
      <TextField
        id="emailAddress"
        label="Your Email:"
        variant="standard"
        onChange={onChangeHandlerEmailLogin}
      />
      <br />

      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">
          Your Password:
        </InputLabel>
        <Input
          id="standard-adornment-password"
          type={showPassword ? "text" : "password"}
          onChange={onChangeHandlerPasswordLogin}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <br />

      <Button
        variant="outlined"
        style={{ color: "black", borderColor: "black" }}
        onClick={logInUser}
      >
        LogIn ...
      </Button>

      <div>
        <h1> Dont have an account? </h1>
        <Link to="/register">
          <Button
            variant="outlined"
            style={{ color: "black", borderColor: "black" }}
          >
            Create an account
          </Button>
        </Link>
      </div>
    </div>
  );
}
