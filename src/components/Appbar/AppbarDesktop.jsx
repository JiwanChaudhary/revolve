import { Typography, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Appbar, ContactButton, ContactLink } from "../../style/Appbar";

const AppbarDesktop = () => {
  return (
    <Appbar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant="h5" sx={{ "&:hover": { cursor: "pointer" } }}>
            Revolve Nepal
          </Typography>
        </Link>
        <ContactLink to="/contact">
          <ContactButton>Contact us</ContactButton>
        </ContactLink>
      </Toolbar>
    </Appbar>
  );
};

export default AppbarDesktop;
