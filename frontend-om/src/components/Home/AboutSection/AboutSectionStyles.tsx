import { styled } from "@mui/material/styles";

const AboutSectionStyles = styled("div")(({ theme }) => ({
  "& .about-section": {
    display: "grid",
    gridTemplateColumns: "1.05fr 1.1fr 0.8fr",
    alignItems: "center",
    gap: theme.spacing(3),
    width: "100%",
  },

  "& .about-image-placeholder": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 0,
    minHeight: "12rem",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.primary.main,
    textAlign: "center",
    backgroundColor: theme.palette.secondary.light,

    "& .MuiSvgIcon-root": {
      marginBottom: theme.spacing(1),
    },

    "& .MuiTypography-subtitle2": {
      color: theme.palette.text.primary,
    },

    "& .MuiTypography-body2": {
      marginTop: theme.spacing(0.5),
      color: theme.palette.text.secondary,
    },
  },

  "& .about-eyebrow": {
    color: theme.palette.primary.main,
    letterSpacing: "0.1rem",
  },

  "& .about-title": {
    color: theme.palette.text.primary,
  },

  "& .about-description": {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
  },

  "& .about-highlights": {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    minWidth: 0,
    paddingLeft: theme.spacing(2),
    borderLeft: `1px solid ${theme.palette.divider}`,
  },

  "& .about-highlight": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    minWidth: 0,

    "& > .MuiSvgIcon-root": {
      flexShrink: 0,
      color: theme.palette.primary.main,
    },

    "& .MuiTypography-subtitle2": {
      color: theme.palette.text.primary,
    },

    "& .MuiTypography-body2": {
      color: theme.palette.text.secondary,
    },
  },

  "& .about-content .MuiButton-root": {
    boxShadow: "none",

    "&:hover": {
      boxShadow: "none",
    },
  },
}));

export default AboutSectionStyles;
