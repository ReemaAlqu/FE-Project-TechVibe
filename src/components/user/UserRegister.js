import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, CardContent } from "@mui/material";
import "./UserRegister.css";

export default function UserRegister() {
  const [userInfo, setUerInfo] = useState({
    name: "",
    emailAddress: "",
    password: "",
  });

  function onChangeHandler(event) {
    setUerInfo({ ...userInfo, [event.target.id]: event.target.value });
  }

  // navigate
  const navigate = useNavigate();
  function registerNewUser() {
    const userUrl =
      "https://be-project-techvibe.onrender.com/api/v1/User/signUp";

    axios
      .post(userUrl, userInfo)
      .then((response) => {
        if (response.status === 201) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);

        if (error.status === 400) {
          if (error.response.data.errors?.EmailAddress) {
            alert(error.response.data.errors.EmailAddress[0]);
            return;
          }

          if (error.response.data.errors?.Password) {
            alert(error.response.data.errors.Password[0]);
            return;
          }
          if (error.response.data.message) {
            alert(error.response.data.message);
            return;
          }
        }
      });
  }

  return (
    <div className="user-register-container">
      <h1>Sign up to get started !</h1>
      <Card sx={{ width: "400px", marginTop: "20px", padding: "5px" }}>
        <CardContent>
          <TextField
            id="name"
            label="Your Name:"
            variant="standard"
            onChange={onChangeHandler}
          />
          <br />

          <TextField
            id="emailAddress"
            label="Your Email:"
            variant="standard"
            onChange={onChangeHandler}
          />
          <br />

          <TextField
            id="password"
            label="Your Password:"
            variant="standard"
            onChange={onChangeHandler}
          />
          <br />

          <Button
            variant="outlined"
            style={{ color: "black", borderColor: "black" }}
            onClick={registerNewUser}
          >
            Register
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
