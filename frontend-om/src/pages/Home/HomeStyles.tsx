import { styled } from "@mui/material/styles";

const HomeStyles = styled("div")(({ theme }) => ({
  width: "100%",
  minWidth: 0,
  boxSizing: "border-box",

  "& .section-title": {
    margin: 0,
    color: theme.palette.text.primary,
    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
    fontWeight: 700,
    lineHeight: 1.3,
  },

  "& .section-description": {
    marginTop: "0.8rem",
    color: theme.palette.text.secondary,
    fontSize: "1.0rem",
    lineHeight: 1.8,
  },

  "& .view-all-button": {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    color: theme.palette.primary.main,
    fontWeight: 600,
    textDecoration: "none",
    transition: "color 0.2s ease",

    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
}));

export default HomeStyles;
