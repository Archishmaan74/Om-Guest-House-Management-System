import { styled } from "@mui/material/styles";

const NearbyAttractionsStyles = styled("div")(({ theme }) => ({
  "& .attractions-section": {
    width: "100%",
  },

  "& .attractions-heading": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    marginBottom: "1.1rem",

    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
      flexDirection: "column",
    },
  },

  "& .attractions-grid": {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "1rem",

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },

    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },

  "& .attraction-card": {
    minWidth: 0,
    overflow: "hidden",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "0.6rem",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
  },

  "& .attraction-image-placeholder": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
    minHeight: "7rem",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.light,

    "& .MuiSvgIcon-root": {
      fontSize: "2rem",
    },

    "& span": {
      color: theme.palette.text.secondary,
      fontSize: "0.7rem",
    },
  },

  "& .attraction-content": {
    padding: "0.8rem",
  },

  "& .attraction-name": {
    color: theme.palette.text.primary,
    fontSize: "0.9rem",
    fontWeight: 700,
  },

  "& .attraction-description": {
    color: theme.palette.text.secondary,
    fontSize: "0.8rem",
    lineHeight: 1.6,
  },
}));

export default NearbyAttractionsStyles;
