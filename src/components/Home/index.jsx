import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import { HomeSubtitle, HomeTitle, HomeWrapper } from "../../style/Home";

const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <HomeWrapper>
      <HomeTitle variant={matches ? "h3" : "h1"}>Coming Soon</HomeTitle>
      <HomeSubtitle variant={matches ? "h5" : "h3"}>Stay Tuned</HomeSubtitle>
    </HomeWrapper>
  );
};

export default Home;
