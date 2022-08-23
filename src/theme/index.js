import { createTheme } from "@mui/material/styles"

export const Colors = {
    black: "#000000",
    white: "#FFFFFF",
    main: ' #80669d',
}

const theme = createTheme({
    palatte: {
        paimary: {
            main: Colors.white,
        },
        secondary: {
            main: Colors.black,
        },
    },

    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableRipple: true,
            },
        },
    },
});

export default theme;