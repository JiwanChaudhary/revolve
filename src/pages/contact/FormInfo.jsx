import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { FormInfoWrapper, SendMessageButton } from "../../style/contact";

const FormInfo = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    tel: "",
    message: "",
  });

  let name, value;
  function handleChange(e) {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });  
  }
  return (
    <>
      <FormInfoWrapper>
        <Box
          display="flex"
          justifyContent={"space-between"}
          sx={{ mb: "25px" }}
        >
          <TextField
            sx={{ pr: "20px" }}
            color="secondary"
            label="First Name"
            variant="standard"
            required
            placeholder="Enter First Name"
            type="text"
            name="fname"
            id="fname"
            value={user.fname}
            onChange={handleChange}
          />
          <TextField
            color="secondary"
            label="Last Name"
            variant="standard"
            required
            placeholder="Enter Last Name"
            type="text"
            name="lname"
            id="lname"
            value={user.lname}
            onChange={handleChange}
          />
        </Box>
        <Box
          display="flex"
          justifyContent={"space-between"}
          sx={{ mb: "25px" }}
        >
          <TextField
            sx={{ pr: "20px" }}
            color="secondary"
            label="Email"
            variant="standard"
            required
            placeholder="Enter Email Address"
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
          />
          <TextField
            color="secondary"
            label="Phone"
            variant="standard"
            required
            placeholder="Enter Phone Number"
            type="tel"
            name="tel"
            id="tel"
            value={user.tel}
            onChange={handleChange}
          />
        </Box>
        <TextField
          color="secondary"
          label="Message"
          variant="standard"
          sx={{ width: "100%" }}
          placeholder="Enter the message"
          type="text"
          name="message"
          id="message"
          value={user.message}
          onChange={handleChange}
        />
        <SendMessageButton
          fullWidth
          disableRipple
          endIcon={<SendIcon />}
          variant="contained"
        >
          Send Message
        </SendMessageButton>
      </FormInfoWrapper>
    </>
  );
};

export default FormInfo;
