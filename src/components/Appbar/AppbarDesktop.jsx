import { Typography, Toolbar } from "@mui/material";
import React from "react";
import { Appbar, ContactButton, ContactLink } from "../../style/Appbar";

const AppbarDesktop = () => {
  return (
    <Appbar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ "&:hover": { cursor: "pointer" } }}>
          Revolve Nepal
        </Typography>
        <ContactLink to="/contact">
          <ContactButton>Contact us</ContactButton>
        </ContactLink>
      </Toolbar>
    </Appbar>
  );
};

export default AppbarDesktop;
