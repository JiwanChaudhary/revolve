import { Typography, Box } from "@mui/material";
import React from "react";
import { BackButton, ContactWrapper, MobileBox } from "../../style/contact";
import ContactInformation from "./ContactInformation";
import FormInfo from "./FormInfo";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Contact = () => {
  return (
    <>
      <ContactWrapper>
        <Box>
          <Typography align="left">
            <BackButton to="/">
              <ArrowBackIcon />
            </BackButton>
          </Typography>
          <Typography
            align="center"
            variant="h4"
            sx={{ fontWeight: 600, letterSpacing: "1.5px", lineHeight: "1.5" }}
          >
            Contact Us
          </Typography>
          <Typography
            align="center"
            variant="body1"
            sx={{ opacity: 0.8, mb: "20px" }}
          >
            Any questions or remarks? Just write us a message!
          </Typography>
        </Box>
        <MobileBox>
          <ContactInformation />
          <FormInfo />
        </MobileBox>
      </ContactWrapper>
    </>
  );
};

export default Contact;
