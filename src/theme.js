import { createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


export const Colors = {
  darkBlue: "#13242e",
  blueAccent: "#262D59",
  orange: "#ea7831",
  white: "#fdf7fa",
  gray: "#9497A1",
};


// mui theme settings

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.darkBlue,
    },
    secondary: {
      main: Colors.orange,
    },
    neutral: {
      main: Colors.white,
    },
    background: {
      default: Colors.white,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: "72px",
      fontWeight: 900,
      "@media (max-width: 1600px)": {
        fontSize: "56px",
        fontWeight: 900,
      },
      "@media (max-width: 1280px)": {
        fontSize: "48px",
        fontWeight: 800,
      },
      "@media (max-width: 960px)": {
        fontSize: "40px",
        fontWeight: 700, 
      },
      "@media (max-width: 600px)": {
        fontSize: "32px",
        fontWeight: 700,
      },
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: "36px",
      fontWeight: 700,
    },
    "@media (max-width: 960px)": {
      fontSize: "28px",
      fontWeight: 700,
    },
    "@media (max-width: 600px)": {
      fontSize: "24px",
      fontWeight: 700,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 16,
      fontWeight: 400,
      // color: Colors.white,
      "@media (max-width: 960px)": {
        fontSize: "14px",
        fontWeight: 400, 
      },
    },
    // h4: {
    //   fontFamily: ["Inter", "sans-serif"].join(","),
    //   fontSize: 14,
    // },
    // h5: {
    //   fontFamily: ["Inter", "sans-serif"].join(","),
    //   fontSize: 1,
    // },
    // h6: {
    //   fontFamily: ["Inter", "sans-serif"].join(","),
    //   fontSize: 64,
    // },
    
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: "none",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          "&[type='number']": {
            "-moz-appearance": "textfield", /* Firefox */
            "&::-webkit-outer-spin-button": {
              display: "none", /* Chrome, Safari */
            },
            "&::-webkit-inner-spin-button": {
              display: "none", /* Chrome, Safari */
            },
            "-webkit-appearance": "none", /* Chrome, Safari */
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: "100vw",
          height: "100vh",
          backgroundColor: Colors.darkBlue,
          color: Colors.white,
          zIndex: 1000,
        },
      },
    },
  },
});

export function useResponsiveFontSize() {
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  
  return {
    lg,
    md,
    sm
  };
}

