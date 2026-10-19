import { styled } from "@mui/material/styles";

const StyledHome = styled("div")(({ theme }) => ({
  width: "100%",

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
    background:
      "linear-gradient(105deg, #FAF6F0 0%, #F5E7DE 22%, #E9B9A5 48%, #C98268 72%, #745044 100%)",

    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(90deg, #FAF6F0 0%, rgba(250,246,240,0.95) 12%, rgba(250,246,240,0.55) 40%, rgba(250,246,240,0) 75%)",
    },

    [theme.breakpoints.down("sm")]: {
      left: 0,
      opacity: 0.35,

      "&::before": {
        background:
          "linear-gradient(90deg, rgba(250,246,240,0.95), rgba(250,246,240,0.6))",
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
    fontSize: "0.76rem",
    fontWeight: 700,
    letterSpacing: "0.12rem",
    lineHeight: 1.6,
  },

  "& .hero-title": {
    marginTop: "1rem",
    color: theme.palette.text.primary,
    fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
    fontWeight: 700,
    lineHeight: 1.15,
    letterSpacing: "-0.04rem",

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
    padding: "0.75rem 1.2rem",
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
    padding: "0.75rem 1.2rem",
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
        padding: "3rem 1.25rem",
      },
    },

    "& .hero-background": {
      position: "absolute",
      zIndex: -1,
      inset: 0,
      left: "35%",
      background:
        "linear-gradient(105deg, #FAF6F0 0%, #F5E7DE 22%, #E9B9A5 48%, #C98268 72%, #745044 100%)",

      "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(90deg, #FAF6F0 0%, rgba(250,246,240,0.95) 12%, rgba(250,246,240,0.55) 40%, rgba(250,246,240,0) 75%)",
      },

      [theme.breakpoints.down("sm")]: {
        left: 0,
        opacity: 0.35,

        "&::before": {
          background:
            "linear-gradient(90deg, rgba(250,246,240,0.95), rgba(250,246,240,0.6))",
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
      fontSize: "0.78rem",
      fontWeight: 700,
      letterSpacing: "0.24rem",
      lineHeight: 1.6,
    },

    "& .hero-title": {
      marginTop: "1.15rem",
      color: "#292725",
      fontSize: "clamp(2.5rem, 3.8vw, 3.65rem)",
      fontWeight: 750,
      lineHeight: 1.12,
      letterSpacing: "-0.045rem",

      "& span": {
        color: theme.palette.primary.main,
      },

      [theme.breakpoints.down("sm")]: {
        fontSize: "2.35rem",
      },
    },

    "& .hero-description": {
      maxWidth: "36rem",
      marginTop: "1.25rem",
      color: "#55504C",
      fontSize: "1.05rem",
      lineHeight: 1.55,
    },

    "& .hero-actions": {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "1rem",
      marginTop: "1.55rem",
    },

    "& .primary-action": {
      minHeight: "3.25rem",
      padding: "0.8rem 1.35rem",
      borderRadius: "0.55rem",
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      boxShadow: "none",
      textTransform: "none",
      fontSize: "0.95rem",
      fontWeight: 650,

      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        boxShadow: "none",
      },
    },

    "& .secondary-action": {
      minHeight: "3.25rem",
      padding: "0.8rem 1.35rem",
      borderColor: theme.palette.primary.main,
      borderRadius: "0.55rem",
      color: theme.palette.primary.main,
      backgroundColor: "rgba(255,255,255,0.65)",
      textTransform: "none",
      fontSize: "0.95rem",
      fontWeight: 650,

      "&:hover": {
        borderColor: theme.palette.primary.dark,
        backgroundColor: "rgba(255,255,255,0.85)",
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
      fontSize: "1.25rem",
      fontWeight: 700,
    },

    "& span": {
      maxWidth: "18rem",
      marginTop: "0.6rem",
      color: theme.palette.text.secondary,
      fontSize: "0.85rem",
      lineHeight: 1.7,
    },

    [theme.breakpoints.down("sm")]: {
      minHeight: "17rem",
    },
  },

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
    fontSize: "1.15rem",
    fontWeight: 700,
  },

  "& .availability-description": {
    marginTop: "0.3rem",
    color: theme.palette.text.secondary,
    fontSize: "0.82rem",
  },

  "& .availability-panel": {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr)) auto",
    alignItems: "end",
    gap: "0.85rem",

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
    gap: "0.45rem",
    minWidth: 0,

    "& label": {
      color: theme.palette.text.secondary,
      fontSize: "0.78rem",
      fontWeight: 500,
    },
  },

  "& .availability-input": {
    boxSizing: "border-box",
    width: "100%",
    minWidth: 0,
    minHeight: "2.8rem",
    padding: "0.55rem",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "0.45rem",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    font: "inherit",
    fontSize: "0.8rem",
  },

  "& .availability-button": {
    minHeight: "2.8rem",
    padding: "0.65rem 1rem",
    borderRadius: "0.5rem",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    boxShadow: "none",
    textTransform: "none",
    fontSize: "0.82rem",
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

  "& .rooms-section": {
    width: "100%",
    marginTop: "0.5rem",
  },

  "& .rooms-heading": {
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

  "& .section-title": {
    margin: 0,
    color: theme.palette.text.primary,
    fontSize: "1.55rem",
    fontWeight: 700,
    lineHeight: 1.35,
  },

  "& .section-description": {
    marginTop: "0.2rem",
    color: theme.palette.text.secondary,
    fontSize: "0.85rem",
    lineHeight: 1.6,
  },

  "& .view-all-button": {
    flexShrink: 0,
    color: theme.palette.primary.main,
    fontSize: "0.8rem",
    fontWeight: 600,
    textTransform: "none",

    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },

  "& .rooms-grid": {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "1.2rem",

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },

    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },

  "& .room-card": {
    minWidth: 0,
    overflow: "hidden",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "0.6rem",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    transition: "box-shadow 180ms ease",

    "&:hover": {
      boxShadow: theme.shadows[3],
    },
  },

  "& .room-image-placeholder": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
    minHeight: "7.5rem",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.light,

    "& .MuiSvgIcon-root": {
      fontSize: "2rem",
    },

    "& span": {
      color: theme.palette.text.secondary,
      fontSize: "0.75rem",
    },
  },

  "& .room-card-content": {
    padding: "0.8rem",
  },

  "& .room-name": {
    color: theme.palette.text.primary,
    fontSize: "0.85rem",
    fontWeight: 700,
    lineHeight: 1.45,
  },

  "& .room-bathroom": {
    minHeight: "1.2rem",
    marginTop: "0.15rem",
    color: theme.palette.text.secondary,
    fontSize: "0.75rem",
  },

  "& .room-details": {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "0.8rem",
    marginTop: "0.65rem",
  },

  "& .room-detail": {
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
    color: theme.palette.text.secondary,

    "& .MuiSvgIcon-root": {
      fontSize: "0.95rem",
    },

    "& span": {
      fontSize: "0.72rem",
    },
  },

  "& .room-card-footer": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "0.6rem",
    marginTop: "0.8rem",
  },

  "& .room-price": {
    color: theme.palette.primary.main,
    fontSize: "1rem",
    fontWeight: 700,

    "& span": {
      color: theme.palette.text.primary,
      fontSize: "0.7rem",
      fontWeight: 500,
    },
  },

  "& .room-details-button": {
    padding: "0.45rem 0.65rem",
    borderRadius: "0.4rem",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    fontSize: "0.72rem",
    fontWeight: 600,
    textTransform: "none",
    whiteSpace: "nowrap",

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },

  "& .benefits-section": {
    width: "100%",
    marginTop: "0.5rem",
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
    marginBottom: "0.55rem",
    color: theme.palette.primary.main,
    fontSize: "1.8rem",
  },

  "& .benefit-title": {
    color: theme.palette.text.primary,
    fontSize: "0.78rem",
    fontWeight: 700,
    lineHeight: 1.4,
  },

  "& .benefit-description": {
    marginTop: "0.25rem",
    color: theme.palette.text.secondary,
    fontSize: "0.68rem",
    lineHeight: 1.5,
  },

  "& .about-section": {
    display: "grid",
    gridTemplateColumns: "1.05fr 1.1fr 0.8fr",
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
      fontSize: "0.75rem",
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
    fontSize: "0.68rem",
    fontWeight: 700,
    letterSpacing: "0.12rem",
  },

  "& .about-title": {
    marginTop: "0.45rem",
    color: theme.palette.text.primary,
    fontSize: "1.45rem",
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
    marginTop: "0.8rem",
    padding: "0.5rem 0.8rem",
    borderRadius: "0.4rem",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    fontSize: "0.75rem",
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
      fontSize: "0.78rem",
      fontWeight: 700,
      lineHeight: 1.4,
    },

    "& p": {
      marginTop: "0.15rem",
      color: theme.palette.text.secondary,
      fontSize: "0.7rem",
      lineHeight: 1.5,
    },
  },

  "& .attractions-section": {
    width: "100%",
    marginTop: "0.5rem",
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
      fontSize: "0.72rem",
    },
  },

  "& .attraction-content": {
    padding: "0.8rem",
  },

  "& .attraction-name": {
    color: theme.palette.text.primary,
    fontSize: "0.85rem",
    fontWeight: 700,
  },

  "& .attraction-description": {
    marginTop: "0.3rem",
    color: theme.palette.text.secondary,
    fontSize: "0.75rem",
    lineHeight: 1.6,
  },

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
    fontSize: "1.05rem",
    fontWeight: 700,
  },

  "& .location-description": {
    marginTop: "0.3rem",
    color: theme.palette.text.secondary,
    fontSize: "0.8rem",
    lineHeight: 1.6,
  },

  "& .location-button": {
    flexShrink: 0,
    padding: "0.65rem 1rem",
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

export default StyledHome;
