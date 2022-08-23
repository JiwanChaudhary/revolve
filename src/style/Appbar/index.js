import { AppBar, Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../../theme";
import { Link } from "react-router-dom";

export const AppbarWrapper = styled(Box)(({ theme }) => ({
    background: Colors.white,
    color: Colors.black,
}));

export const Appbar = styled(AppBar)(({ theme }) => ({
    background: Colors.white,
    position: 'sticky',
    top: '0',
    color: Colors.black,
    padding: '5px 60px',
    [theme.breakpoints.down("md")]: {
        padding: '0px',
    }
}));

export const ContactButton = styled(Button)(() => ({
    padding: '5px 10px',
    color: Colors.white,
    background: Colors.main,
    transition: '0.35sec ease-in-out',
    border: `1.5px solid ${Colors.main} `,
    "&:hover": {
        color: Colors.main,
        background: Colors.white,
    }
}));

export const ContactLink = styled(Link)(() => ({
    textDecoration: 'none',
}));
