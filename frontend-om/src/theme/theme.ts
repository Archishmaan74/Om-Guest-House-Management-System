import { createTheme } from "@mui/material/styles";

export const gradients = {
  primary: "linear-gradient(135deg, #8B5E3C 0%, #D4A373 100%)",
  hero: "linear-gradient(105deg, #FAF6F0 0%, #F5E7DE 22%, #E9B9A5 48%, #C98268 72%, #745044 100%)",
  warm: "linear-gradient(135deg, #FAF8F5 0%, #F5E7DE 50%, #D4A373 100%)",
  overlay:
    "linear-gradient(90deg, #FAF6F0 0%, rgba(250,246,240,0.9) 50%, rgba(250,246,240,0) 100%)",
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#8B5E3C",
    },
    secondary: {
      main: "#D4A373",
    },
    background: {
      default: "#FAF8F5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2D2A26",
      secondary: "#6B665F",
    },
  },



  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',

    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 10,
  },
});

export default theme;
