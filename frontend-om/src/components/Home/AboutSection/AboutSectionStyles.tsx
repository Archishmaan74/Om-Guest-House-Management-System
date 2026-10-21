import { styled } from "@mui/material/styles";

const AboutSectionStyles = styled("div")(({ theme }) => ({
  "& .about-section": {
    display: "grid",
    gridTemplateColumns: "1.05fr 1.1fr 0.8fr",
    alignItems: "center",
    gap: "1.5rem",
    width: "100%",

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr",
      gap: "1.2rem",
    },

    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gap: "1.5rem",
    },
  },

  "& .about-image-placeholder": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 0,
    minHeight: "12rem",
    padding: "1rem",
    borderRadius: "0.6rem",
    color: theme.palette.primary.main,
    textAlign: "center",
    backgroundColor: theme.palette.secondary.light,

    "& .MuiSvgIcon-root": {
      fontSize: "2.8rem",
      marginBottom: "0.8rem",
    },

    "& p": {
      margin: 0,
      color: theme.palette.text.primary,
      fontSize: "0.9rem",
      fontWeight: 700,
    },

    "& span": {
      marginTop: "0.4rem",
      color: theme.palette.text.secondary,
      fontSize: "0.8rem",
    },

    [theme.breakpoints.down("md")]: {
      gridColumn: "1 / -1",
      minHeight: "10rem",
    },

    [theme.breakpoints.down("sm")]: {
      gridColumn: "auto",
    },
  },

  "& .about-content": {
    minWidth: 0,
  },

  "& .about-eyebrow": {
    color: theme.palette.primary.main,
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.1rem",
  },

  "& .about-title": {
    color: theme.palette.text.primary,
    fontSize: "1.5rem",
    fontWeight: 700,
    lineHeight: 1.3,
  },

  "& .about-description": {
    marginTop: "0.7rem",
    color: theme.palette.text.secondary,
    fontSize: "0.8rem",
    lineHeight: 1.7,
  },

  "& .about-button": {
    padding: "0.5rem 0.8rem",
    borderRadius: "0.4rem",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    fontSize: "0.8rem",
    fontWeight: 600,
    textTransform: "none",

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },

  "& .about-highlights": {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
    minWidth: 0,
    paddingLeft: "1rem",
    borderLeft: `1px solid ${theme.palette.divider}`,

    [theme.breakpoints.down("md")]: {
      gridColumn: "1 / -1",
      paddingLeft: 0,
      paddingTop: "1rem",
      borderLeft: "none",
      borderTop: `1px solid ${theme.palette.divider}`,
    },

    [theme.breakpoints.down("sm")]: {
      gridColumn: "auto",
    },
  },

  "& .about-highlight": {
    display: "flex",
    alignItems: "center",
    gap: "0.7rem",
    minWidth: 0,

    "& > .MuiSvgIcon-root": {
      flexShrink: 0,
      color: theme.palette.primary.main,
      fontSize: "1.5rem",
    },

    "& h3": {
      color: theme.palette.text.primary,
      fontSize: "0.8rem",
      fontWeight: 700,
      lineHeight: 1.4,
    },

    "& p": {
      marginTop: "0.2rem",
      color: theme.palette.text.secondary,
      fontSize: "0.7rem",
      lineHeight: 1.5,
    },
  },
}));

export default AboutSectionStyles;
