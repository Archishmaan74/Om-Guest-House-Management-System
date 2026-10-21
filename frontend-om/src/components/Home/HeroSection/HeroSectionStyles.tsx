import { styled } from "@mui/material/styles";
import { gradients } from "../../../theme/theme";

const HeroSectionStyles = styled("div")(({ theme }) => ({
  "& .home-hero": {
    position: "relative",
    isolation: "isolate",
    display: "flex",
    alignItems: "center",
    width: "100vw",
    maxWidth: "100vw",
    boxSizing: "border-box",
    marginLeft: "calc(50% - 50vw)",
    marginRight: "calc(50% - 50vw)",
    marginTop: "-2rem",
    minHeight: "31rem",
    overflow: "hidden",
    padding: "3rem max(2rem, calc((100vw - 1440px) / 2))",
    backgroundColor: "#FAF6F0",
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
      background:
        "linear-gradient(90deg, #FAF6F0 0%, rgba(250,246,240,1) 12%, rgba(250,246,240,0.6) 40%, rgba(250,246,240,0) 75%)",
    },

    [theme.breakpoints.down("sm")]: {
      left: 0,
      opacity: 0.4,

      "&::before": {
        background: gradients.hero,
      },
    },
  },

  "& .hero-copy": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  "& .hero-eyebrow": {
    margin: 0,
    color: theme.palette.primary.main,
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.1rem",
    lineHeight: 1.6,
  },

  "& .hero-title": {
    marginTop: "1rem",
    color: theme.palette.text.primary,
    fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
    fontWeight: 700,
    lineHeight: 1.15,
    letterSpacing: "0.04rem",

    "& span": {
      color: theme.palette.primary.main,
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  },

  "& .hero-description": {
    maxWidth: "35rem",
    marginTop: "1.2rem",
    color: theme.palette.text.secondary,
    fontSize: "1rem",
    lineHeight: 1.9,
  },

  "& .hero-actions": {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "0.8rem",
    marginTop: "1.8rem",
  },

  "& .primary-action": {
    minHeight: "3rem",
    padding: "0.8rem 1.2rem",
    borderRadius: "0.7rem",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    boxShadow: "none",
    textTransform: "none",
    fontWeight: 600,

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: "none",
    },
  },

  "& .secondary-action": {
    minHeight: "3rem",
    padding: "0.8rem 1.2rem",
    borderColor: theme.palette.primary.main,
    borderRadius: "0.7rem",
    color: theme.palette.primary.main,
    textTransform: "none",
    fontWeight: 600,

    "&:hover": {
      borderColor: theme.palette.primary.dark,
      backgroundColor: theme.palette.action.hover,
    },
  },

  "& .hero-visual": {
    "& .home-hero": {
      position: "relative",
      isolation: "isolate",
      display: "flex",
      alignItems: "center",
      width: "100%",
      minHeight: "31rem",
      boxSizing: "border-box",
      overflow: "hidden",
      padding: "3rem 2rem",
      backgroundColor: "#FAF6F0",

      [theme.breakpoints.down("md")]: {
        minHeight: "28rem",
        padding: "2.5rem 1.5rem",
      },

      [theme.breakpoints.down("sm")]: {
        minHeight: "auto",
        padding: "3rem 1.3rem",
      },
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
        background: gradients.hero,
      },

      [theme.breakpoints.down("sm")]: {
        left: 0,
        opacity: 0.4,

        "&::before": {
          background: gradients.hero,
        },
      },
    },

    "& .hero-copy": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "55%",
      maxWidth: "43rem",
      padding: "0.5rem 0",

      [theme.breakpoints.down("md")]: {
        width: "68%",
      },

      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },

    "& .hero-eyebrow": {
      margin: 0,
      color: "#8B6A55",
      fontSize: "0.8rem",
      fontWeight: 700,
      letterSpacing: "0.2rem",
      lineHeight: 1.6,
    },

    "& .hero-title": {
      marginTop: "1.2rem",
      color: "#292725",
      fontSize: "clamp(2.5rem, 3.8vw, 3.7rem)",
      fontWeight: 750,
      lineHeight: 1.1,
      letterSpacing: "0.045rem",

      "& span": {
        color: theme.palette.primary.main,
      },

      [theme.breakpoints.down("sm")]: {
        fontSize: "2.4rem",
      },
    },

    "& .hero-description": {
      maxWidth: "36rem",
      marginTop: "1.3rem",
      color: "#55504C",
      fontSize: "1.1rem",
      lineHeight: 1.6,
    },

    "& .hero-actions": {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "1rem",
      marginTop: "1.6rem",
    },

    "& .primary-action": {
      minHeight: "3.3rem",
      padding: "0.8rem 1.4rem",
      borderRadius: "0.6rem",
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      boxShadow: "none",
      textTransform: "none",
      fontSize: "1.0rem",
      fontWeight: 650,

      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        boxShadow: "none",
      },
    },

    "& .secondary-action": {
      minHeight: "3.3rem",
      padding: "0.8rem 1.4rem",
      borderColor: theme.palette.primary.main,
      borderRadius: "0.55rem",
      color: theme.palette.primary.main,
      backgroundColor: "rgba(255,255,255,0.7)",
      textTransform: "none",
      fontSize: "0.9rem",
      fontWeight: 650,

      "&:hover": {
        borderColor: theme.palette.primary.dark,
        backgroundColor: "rgba(255,255,255,0.9)",
      },
    },

    minWidth: 0,
    padding: "1rem",
    borderRadius: "1.2rem",
    backgroundColor: theme.palette.secondary.light,
  },

  "& .hero-image-placeholder": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "25rem",
    padding: "2rem",
    border: `1px dashed ${theme.palette.primary.main}`,
    borderRadius: "0.8rem",
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,

    "& .MuiSvgIcon-root": {
      marginBottom: "1rem",
      color: theme.palette.primary.main,
      fontSize: "3.5rem",
    },

    "& p": {
      margin: 0,
      color: theme.palette.text.primary,
      fontSize: "1.3rem",
      fontWeight: 700,
    },

    "& span": {
      maxWidth: "18rem",
      color: theme.palette.text.secondary,
      fontSize: "0.9rem",
      lineHeight: 1.7,
    },

    [theme.breakpoints.down("sm")]: {
      minHeight: "17rem",
    },
  },
}));

export default HeroSectionStyles;
