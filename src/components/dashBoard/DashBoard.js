import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Alert,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function DashBoard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <div>
      <Alert severity="info">Hi , Please review your dashboard options!</Alert>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <ListItem button component={Link} to="/product-dashboard">
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button component={Link} to="/user-dashboard">
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button component={Link} to="/order-dashboard">
            <ListItemText primary="Orders" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
