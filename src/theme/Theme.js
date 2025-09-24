import { backdropClasses, createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    background: {
      default: "#121A1D",
    },
    navBackground:{
      default:" rgba(255, 255, 255, 0.1)"
    },
    text: {
      primary: "#ffffff",
      secondary: "#D68240",
    },
    primary: {
      main: "#D68240",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: "4rem",
      fontWeight: 600,
      color: "#ffffff",
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 500,
      color: "#ffffff",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "#ffffff",
    },
    body1: {
      fontSize: "1rem",
      color: "#9C9D9B",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "15px 20px",
          borderRadius: "8px",
          textTransform: "none",
        },
        containedPrimary: {
          backgroundColor: "#D68240",
          "&:hover": {
            backgroundColor: "#589881ff",
          },
        },
      },
    },
  },
});

export default Theme;
