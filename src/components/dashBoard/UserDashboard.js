import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, LinearProgress } from "@mui/material";
import UserDashBoardItem from "./UserDashBoardItem";

import "./UserDashboard.css";

export default function UserDashboard() {
  const [userList, setUserList] = useState([]);
  const [isUserDataLoading, setIsUserDataLoading] = useState(true);
  const [error, setError] = useState(null);

  function getUserList() {
    const token = localStorage.getItem("token");
    axios
      .get("https://be-project-techvibe.onrender.com/api/v1/User", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserList(response.data);
        setIsUserDataLoading(false);
      })
      .catch((error) => {
        setIsUserDataLoading(false);
        setError("Failed to fetch data");
      });
  }

  useEffect(() => {
    getUserList();
  }, []);

  if (isUserDataLoading) {
    return (
      <div>
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="user-list-dashbord-container">
      <div className="user-list-dashbord">
        {userList.map((user) => (
          <UserDashBoardItem
            key={user.userID}
            user={user}
            getUserList={getUserList}
          />
        ))}
      </div>
    </div>
  );
}
