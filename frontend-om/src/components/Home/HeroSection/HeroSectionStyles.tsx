import { styled } from "@mui/material/styles";
import { gradients } from "../../../theme/theme";

const HeroSectionStyles = styled("div")(({ theme }) => ({
  "& .home-hero": {
    position: "relative",
    isolation: "isolate",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    width: "100vw",
    minHeight: "19rem",
    marginTop: "-2rem",
    marginLeft: "-2rem",
    padding: theme.spacing(5, 8),
    overflow: "hidden",
    backgroundColor: theme.palette.background.default,
  },

  "& .hero-background": {
    position: "absolute",
    zIndex: -1,
    inset: 0,
    left: "35%",
    background: gradients.hero,

    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      background: gradients.heroOverlay,
    },
  },

  "& .hero-copy": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "50%",
    maxWidth: "43rem",
  },

  "& .hero-eyebrow": {
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
    letterSpacing: "0.1rem",
  },

  "& .hero-title": {
    margin: 0,
    color: theme.palette.text.primary,

    "& span": {
      color: theme.palette.primary.main,
    },
  },

  "& .hero-description": {
    maxWidth: "35rem",
    marginTop: theme.spacing(1.5),
    color: theme.palette.text.secondary,
  },

  "& .hero-actions": {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
  },

  "& .hero-actions .MuiButton-root": {
    padding: theme.spacing(1.5, 3),
    borderRadius: theme.shape.borderRadius,
    textTransform: theme.typography.button.textTransform,
    fontWeight: theme.typography.button.fontWeight,
  },

  "& .hero-actions .MuiButton-contained": {
    boxShadow: "none",

    "&:hover": {
      boxShadow: "none",
    },
  },
}));

export default HeroSectionStyles;
