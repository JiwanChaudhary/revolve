import { Box, IconButton } from "@mui/material"
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { Colors } from "../../theme";


export const ContactWrapper = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: "30px 0px",
    padding: "30px",
    width: "100vw",
    background: "whitesmoke",
}));

export const BackButton = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2px 6px',
    textDecoration: 'none',
    background: Colors.main,
    color: Colors.white,
    borderRadius: '10px',
    position: 'absolute',
    left: '40px',
    top: '120px',
    border: `1.5px solid ${Colors.main}`,
    transition: "0.3s ease-in-out",
    "&:hover": {
        color: Colors.main,
        background: Colors.white,
    },
    [theme.breakpoints.down("md")]: {
        left: '20px',
        top: '100px',
    }
}));

export const MobileBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
    }
}));

export const FormInfoWrapper = styled(Box)(({ theme }) => ({
    padding: "20px",
    marginLeft: '20px',
    background: Colors.white,
    borderRadius: "20px",
    [theme.breakpoints.down("md")]: {
        marginLeft: '0px',
    }
}));

export const ContactInfoWrapper = styled(Box)(({ theme }) => ({
    padding: "30px 15px",
    background: Colors.main,
    color: Colors.white,
    borderRadius: "20px",
    [theme.breakpoints.down("md")]: {
        marginBottom: '20px',
    },
}));

export const ContactInfoButton = styled(IconButton)(() => ({
    color: Colors.white, "&:hover": { color: "#fac175" }
}));
