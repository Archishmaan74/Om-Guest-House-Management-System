import { styled } from "@mui/material/styles";

const AvailabilitySectionStyles = styled("div")(({ theme }) => ({
  "& .availability-section": {
    position: "relative",
    zIndex: 2,
    width: "100%",
    boxSizing: "border-box",
    marginTop: "-2rem",
    padding: "1.5rem",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "0.8rem",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
  },

  "& .availability-heading": {
    marginBottom: "1.2rem",
  },

  "& .availability-title": {
    color: theme.palette.text.primary,
    fontSize: "1.2rem",
    fontWeight: 700,
  },

  "& .availability-description": {
    marginTop: "0.3rem",
    color: theme.palette.text.secondary,
    fontSize: "0.8rem",
  },

  "& .availability-panel": {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr)) auto",
    alignItems: "end",
    gap: "0.9rem",

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },

    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },

  "& .availability-field": {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    minWidth: 0,

    "& label": {
      color: theme.palette.text.secondary,
      fontSize: "0.8rem",
      fontWeight: 500,
    },
  },

  "& .availability-input": {
    boxSizing: "border-box",
    width: "100%",
    minWidth: 0,
    minHeight: "2.8rem",
    padding: "0.6rem",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "0.45rem",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    font: "inherit",
    fontSize: "0.8rem",
  },

  "& .availability-button": {
    minHeight: "2.8rem",
    padding: "0.7rem 1rem",
    borderRadius: "0.5rem",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    boxShadow: "none",
    textTransform: "none",
    fontSize: "0.8rem",
    fontWeight: 600,
    whiteSpace: "nowrap",

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: "none",
    },

    [theme.breakpoints.down("md")]: {
      gridColumn: "1 / -1",
      justifySelf: "start",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

export default AvailabilitySectionStyles;
