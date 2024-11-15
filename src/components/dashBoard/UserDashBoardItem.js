import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, LinearProgress } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./UserDashboard.css";

export default function UserDashBoardItem(prop) {
  const { user, getUserList } = prop;

  const [error, setError] = useState(null);

  function deletUser() {
    const token = localStorage.getItem("token");
    axios
      .delete(
        `https://be-project-techvibe.onrender.com/api/v1/User/${user.userID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response, "this is from user dash board item");

        if (response.status === 204) {
          alert("A user is deleted");
          getUserList();
        }
      })
      .catch((error) => {
        console.log(error);

        setError("Failed to fetch data");
      });
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="user-item">
      <Card sx={{ width: "100%", padding: "5px" }}>
        <CardContent>
          <p>{user.name}</p>
          <p>{user.emailAddress}</p>
          <DeleteIcon sx={{ color: "Red" }} onClick={deletUser} />
        </CardContent>
      </Card>
    </div>
  );
}
