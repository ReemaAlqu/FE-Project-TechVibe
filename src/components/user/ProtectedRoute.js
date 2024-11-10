import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(prop) {
  const {
    isUserDataLoading,
    isAuthenticated,
    element,
    userData,
    shouldCheckAdmin,
    //productList,
  } = prop;

  if (isUserDataLoading === true) {
    return (
      <div>
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </div>
    );
  }

  /*  check if the user LogIn + role = admin  */
  if (shouldCheckAdmin) {
    return isAuthenticated && userData.userRole === "Admin"? element : <Navigate to="/login" />;
  }
  /*  check if the user LogIn only or not  */
  // if: isAuthenticated is true ,user login  => render element <UserProfile /> page
  // else : isAuthenticated is false, user dosent login (No token) => navigate to <UserLogin /> page
  return isAuthenticated ? element : <Navigate to="/login" />;
}
