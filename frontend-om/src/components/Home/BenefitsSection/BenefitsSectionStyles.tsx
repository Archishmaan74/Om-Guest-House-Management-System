import { styled } from "@mui/material/styles";

const BenefitsSectionStyles = styled("div")(({ theme }) => ({
  "& .benefits-section": {
    width: "100%",
  },

  "& .benefits-heading": {
    marginBottom: "1rem",
  },

  "& .benefits-grid": {
    display: "grid",
    gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
    gap: "0.8rem",

    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    },

    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
  },

  "& .benefit-card": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 0,
    minHeight: "7.8rem",
    padding: "0.8rem 0.5rem",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "0.6rem",
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
  },

  "& .benefit-icon": {
    marginBottom: "0.6rem",
    color: theme.palette.primary.main,
    fontSize: "1.8rem",
  },

  "& .benefit-title": {
    color: theme.palette.text.primary,
    fontSize: "0.8rem",
    fontWeight: 700,
    lineHeight: 1.4,
  },

  "& .benefit-description": {
    marginTop: "0.3rem",
    color: theme.palette.text.secondary,
    fontSize: "0.7rem",
    lineHeight: 1.5,
  },

  "& .about-section": {
    display: "grid",
    gridTemplateColumns: "1.0fr 1.1fr 0.8fr",
    alignItems: "center",
    gap: "1.5rem",
    width: "100%",
    marginTop: "0.5rem",

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr",
      gap: "1.2rem",
    },

    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gap: "1.5rem",
    },
  },
}));

export default BenefitsSectionStyles;
