import { Box, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../theme";

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: "static",
        bottom: 0,
        padding: "20px",
        background: Colors.main,
        color: Colors.white,
      }}
    >
      <Typography align="center">
        © 2022 Revolve Nepal. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
