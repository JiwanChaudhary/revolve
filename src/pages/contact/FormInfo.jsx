import { Box, TextField, Button } from "@mui/material";
import React from "react";
import { Colors } from "../../theme";
import SendIcon from "@mui/icons-material/Send";
import { FormInfoWrapper } from "../../style/contact";

const FormInfo = () => {
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
          />
          <TextField
            color="secondary"
            label="Last Name"
            variant="standard"
            required
            placeholder="Enter Last Name"
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
          />
          <TextField
            color="secondary"
            label="Phone"
            variant="standard"
            required
            placeholder="Enter Phone Number"
          />
        </Box>
        <TextField
          color="secondary"
          label="Message"
          variant="standard"
          sx={{ width: "100%" }}
          placeholder="Enter the message"
        />
        <Button
          fullWidth
          disableRipple
          endIcon={<SendIcon />}
          variant="contained"
          sx={{
            mt: "60px",
            background: Colors.main,
            color: Colors.white,
            border: `1.5px solid ${Colors.main}`,
            "&:hover": { background: Colors.white, color: Colors.main },
          }}
        >
          Send Message
        </Button>
      </FormInfoWrapper>
    </>
  );
};

export default FormInfo;
