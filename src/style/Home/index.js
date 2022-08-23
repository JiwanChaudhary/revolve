import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../../theme";


export const HomeWrapper = styled(Box)(({ theme }) => ({
    height: '80vh',
    width: '100%',
    padding: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down("md")]: {
        height: '85vh',
        padding: '10px',
    },
}));
export const HomeTitle = styled(Typography)(() => ({
    color: Colors.main,
    letterSpacing: "2px",
    fontWeight: "600"
}))
export const HomeSubtitle = styled(Typography)(() => ({
    color: Colors.black,
    letterSpacing: "2px",
    fontWeight: "600"
}))