import { styled } from "@mui/material/styles";

const FeaturedRoomsStyles = styled("div")(({ theme }) => ({
  "& .rooms-section": {
    width: "100%",
  },

  "& .rooms-heading": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  "& .section-description": {
    marginTop: theme.spacing(0.5),
    color: theme.palette.text.secondary,
  },

  "& .rooms-grid": {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: theme.spacing(2),
  },

  "& .room-card": {
    minWidth: 0,
    overflow: "hidden",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],

    "&:hover": {
      boxShadow: theme.shadows[3],
    },
  },

  "& .room-image-placeholder": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(1),
    height: "14rem",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light,

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },

    "& .MuiSvgIcon-root": {
      fontSize: "2rem",
      color: theme.palette.primary.main,
    },

    "& .MuiTypography-root": {
      color: theme.palette.text.secondary,
    },
  },

  "& .room-card-content": {
    padding: theme.spacing(2),
  },

  "& .room-name": {
    color: theme.palette.text.primary,
  },

  "& .room-bathroom": {
    marginTop: theme.spacing(0.5),
    color: theme.palette.text.secondary,
  },

  "& .room-details": {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: theme.spacing(2),
    marginTop: theme.spacing(1.5),
  },

  "& .room-detail": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
    color: theme.palette.text.secondary,

    "& .MuiSvgIcon-root": {
      fontSize: "1rem",
    },
  },

  "& .room-card-footer": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: theme.spacing(1),
    marginTop: theme.spacing(2),
  },

  "& .room-price": {
    color: theme.palette.primary.main,

    "& span": {
      color: theme.palette.text.primary,
    },
  },
}));

export default FeaturedRoomsStyles;
