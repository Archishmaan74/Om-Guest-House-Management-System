import { styled } from "@mui/material/styles";

const StyledNavbar = styled("header")(({ theme }) => ({
  width: "100%",

  "& .MuiAppBar-root": {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },

  "& .navbar-toolbar": {
    position: "relative",
    minHeight: "5rem",
    padding: "0 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",

    [theme.breakpoints.down("md")]: {
      padding: "0 1.2rem",
    },

    [theme.breakpoints.down("sm")]: {
      minHeight: "4.4rem",
      padding: "0 1rem",
      gap: "0.5rem",
    },
  },

  "& .navbar-brand": {
    display: "flex",
    alignItems: "center",
    gap: "0.7rem",
    flexShrink: 0,
    color: theme.palette.text.primary,
    textDecoration: "none",
    zIndex: 1,
  },

  "& .navbar-logo": {
    width: "2.8rem",
    height: "2.8rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    borderRadius: "0.8rem",

    "& .MuiSvgIcon-root": {
      fontSize: "1.6rem",
    },
  },

  "& .navbar-brand-copy": {
    display: "flex",
    flexDirection: "column",
    gap: "0.1rem",
  },

  "& .navbar-brand-name": {
    color: theme.palette.text.primary,
    fontSize: "1.1rem",
    fontWeight: 700,
    lineHeight: 1.3,
    whiteSpace: "nowrap",
  },

  "& .navbar-brand-subtitle": {
    color: theme.palette.text.secondary,
    fontSize: "0.7rem",
    letterSpacing: "0.04rem",
    whiteSpace: "nowrap",
  },

  "& .navbar-navigation": {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",

    [theme.breakpoints.down("md")]: {
      gap: "0.1rem",
    },

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  "& .navbar-link": {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
    padding: "0.7rem 0.8rem",
    borderRadius: "0.6rem",
    color: theme.palette.text.secondary,
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: 500,
    whiteSpace: "nowrap",
    transition: "color 150ms ease, background-color 150ms ease",

    "& .MuiSvgIcon-root": {
      fontSize: "1.1rem",
    },

    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.action.hover,
    },

    "&.active": {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.action.selected,
      fontWeight: 600,
    },
  },

  "& .navbar-actions": {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    marginLeft: "auto",
    zIndex: 1,

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  "& .navbar-theme-button": {
    width: "2.6rem",
    height: "2.6rem",
    flexShrink: 0,
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "0.7rem",

    "& .theme-light-icon": {
      display: "none",
    },

    "& .theme-dark-icon": {
      display: "block",
    },

    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.action.hover,
    },

    "&.Mui-disabled": {
      color: theme.palette.text.primary,
      opacity: 0.9,
    },
  },

  "& .navbar-login-button": {
    minHeight: "2.6rem",
    padding: "0.5rem 0.8rem",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "0.6rem",
    color: theme.palette.primary.main,
    textTransform: "none",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },

  "& .navbar-signup-button": {
    minHeight: "2.6rem",
    padding: "0.5rem 1rem",
    borderRadius: "0.6rem",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    textTransform: "none",
    fontWeight: 600,
    whiteSpace: "nowrap",

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },

  "& .navbar-mobile-actions": {
    display: "none",
    alignItems: "center",
    gap: "0.4rem",
    marginLeft: "auto",
    zIndex: 1,

    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },

  "& .navbar-menu-button": {
    width: "2.6rem",
    height: "2.6rem",
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "0.7rem",
  },
}));

export default StyledNavbar;
