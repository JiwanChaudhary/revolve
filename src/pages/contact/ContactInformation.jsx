import { Box, Typography, Link } from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import { ContactInfoButton, ContactInfoWrapper } from "../../style/contact";

const ContactInformation = () => {
  return (
    <ContactInfoWrapper>
      <Typography variant="h5" sx={{ letterSpacing: "1px", pb: "5px" }}>
        Contact Information
      </Typography>
      <Typography sx={{ opacity: 0.8, pb: "5px" }}>
        Fill up the form and our team will get back to you within 24 hours.
      </Typography>
      <Box sx={{ lineHeight: "1", mt: "15px" }}>
        <ContactInfoButton disableRipple>
          <PhoneEnabledIcon />
        </ContactInfoButton>
        <Typography
          component={"span"}
          sx={{ ml: "10px", "&:hover": { cursor: "pointer" } }}
        >
          +977 9862981619
        </Typography>
      </Box>
      <Box sx={{ lineHeight: "1" }}>
        <ContactInfoButton disableRipple>
          <EmailIcon />
        </ContactInfoButton>
        <Typography
          component={"span"}
          sx={{ ml: "10px", "&:hover": { cursor: "pointer" } }}
        >
          jeewanchaudhary6@gmail.com
        </Typography>
      </Box>
      <Box sx={{ lineHeight: "1" }}>
        <ContactInfoButton disableRipple>
          <LocationOnIcon />
        </ContactInfoButton>
        <Typography component={"span"} sx={{ ml: "10px" }}>
          Bhaktapur, Kathmandu, Nepal
        </Typography>
      </Box>
      <Box sx={{ mt: "30px" }}>
        <Link
          href="https://www.facebook.com/jeewan.tharuchaudhary/"
          target="_blank"
        >
          <ContactInfoButton disableRipple>
            <FacebookIcon />
          </ContactInfoButton>
        </Link>
        <Link href="https://twitter.com/jeew_an/" target="_blank">
          <ContactInfoButton disableRipple>
            <TwitterIcon />
          </ContactInfoButton>
        </Link>
        <Link href="https://www.instagram.com/jeewa_n_/" target="_blank">
          <ContactInfoButton disableRipple>
            <InstagramIcon />
          </ContactInfoButton>
        </Link>

        <Link
          href="https://www.linkedin.com/in/jiwan-chaudhary/"
          target="_blank"
        >
          <ContactInfoButton disableRipple>
            <LinkedInIcon />
          </ContactInfoButton>
        </Link>
      </Box>
    </ContactInfoWrapper>
  );
};

export default ContactInformation;
