import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(prop) {
  const { isUserDataLoading, isAuthenticated, element, userData } = prop;

  if (isUserDataLoading === true) {
    return (
      <div>
        {/* <h1>Loading ..... </h1> */}
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </div>
    );
  }

  // if: isAuthenticated is true render element = <UserProfile /> page
  // else : user dosent login (No token) => navigate to <UserLogin /> page
  return isAuthenticated ? element : <Navigate to="/login" />;
}
