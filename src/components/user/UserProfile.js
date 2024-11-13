import React, { useState } from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import TextField from "@mui/material/TextField";
import axios from "axios";
import "./UserProfile.css";
import { Card, CardContent } from "@mui/material";

export default function UserProfile(prop) {
  const { userData, setUserData } = prop;

  // popover from MUI
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // get new name
  const [newName, setNewName] = useState("");

  function onChangeHandlerName(event) {
    setNewName(event.target.value);
  }

  function updateUserProfile() {
    const token = localStorage.getItem("token");
    // send data to BE
    axios
      .put(
        `http://localhost:5125/api/v1/User/${userData.userID}`,
        {
          name: newName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setUserData(response.data);
        setAnchorEl(null);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logOutHandler() {
    //remove token from locall storage
    localStorage.removeItem("token");
    setUserData(null);
  }

  return (
    <div className="user-profile-container">
      <h2>Hi {userData.name} ! , Welcome to your profile</h2>
      <h4>you can view and update your personal information here.</h4>

      <Card sx={{ width: "400px", marginTop: "20px", padding: "5px" }}>
        <CardContent>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.emailAddress}</p>

          <div>
            <Button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
              style={{
                color: "white",
                borderColor: "black",
                backgroundColor: "black ",
              }}
            >
              Edit info
            </Button>{" "}
            <Button
              aria-describedby={id}
              variant="contained"
              onClick={logOutHandler}
              style={{
                color: "white",
                borderColor: "black",
                backgroundColor: "black ",
              }}
            >
              Log out
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
                id="name"
                label="Name:"
                variant="standard"
                helperText="Please enter your (new) name "
                onChange={onChangeHandlerName}
              />

              <Button
                aria-describedby={id}
                variant="contained"
                onClick={updateUserProfile}
                style={{
                  color: "white",
                  borderColor: "black",
                  backgroundColor: "black ",
                }}
              >
                Done
              </Button>
            </Popover>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
