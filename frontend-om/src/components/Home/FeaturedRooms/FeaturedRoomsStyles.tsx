import { styled } from "@mui/material/styles";

const FeaturedRoomsStyles = styled("div")(({ theme }) => ({
  "& .rooms-section": {
    width: "100%",
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
    fontSize: "1.6rem",
    fontWeight: 700,
    lineHeight: 1.4,
  },

  "& .section-description": {
    marginTop: "0.2rem",
    color: theme.palette.text.secondary,
    fontSize: "0.9rem",
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
      fontSize: "0.8rem",
    },
  },

  "& .room-card-content": {
    padding: "0.8rem",
  },

  "& .room-name": {
    color: theme.palette.text.primary,
    fontSize: "0.9rem",
    fontWeight: 700,
    lineHeight: 1.5,
  },

  "& .room-bathroom": {
    minHeight: "1.2rem",
    marginTop: "0.2rem",
    color: theme.palette.text.secondary,
    fontSize: "0.8rem",
  },

  "& .room-details": {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "0.8rem",
    marginTop: "0.7rem",
  },

  "& .room-detail": {
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
    color: theme.palette.text.secondary,

    "& .MuiSvgIcon-root": {
      fontSize: "1rem",
    },

    "& span": {
      fontSize: "0.7rem",
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
    padding: "0.5rem 0.7rem",
    borderRadius: "0.4rem",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    fontSize: "0.7rem",
    fontWeight: 600,
    textTransform: "none",
    whiteSpace: "nowrap",

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export default FeaturedRoomsStyles;
