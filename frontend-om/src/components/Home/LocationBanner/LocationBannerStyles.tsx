import { styled } from "@mui/material/styles";

const LocationBannerStyles = styled("div")(({ theme }) => ({
  "& .location-banner": {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    width: "100%",
    boxSizing: "border-box",
    padding: "1.4rem",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "0.8rem",
    backgroundColor: theme.palette.secondary.light,

    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
      flexDirection: "column",
    },
  },

  "& .location-icon": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: "3rem",
    height: "3rem",
    borderRadius: "0.6rem",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,

    "& .MuiSvgIcon-root": {
      fontSize: "1.6rem",
    },
  },

  "& .location-content": {
    flex: 1,
    minWidth: 0,
  },

  "& .location-title": {
    color: theme.palette.text.primary,
    fontSize: "1.0rem",
    fontWeight: 700,
  },

  "& .location-description": {
    color: theme.palette.text.secondary,
    fontSize: "0.8rem",
    lineHeight: 1.6,
  },

  "& .location-button": {
    flexShrink: 0,
    padding: "0.7rem 1rem",
    borderRadius: "0.5rem",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    boxShadow: "none",
    fontSize: "0.8rem",
    fontWeight: 600,
    textTransform: "none",

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: "none",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

export default LocationBannerStyles;
