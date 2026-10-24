import { styled } from "@mui/material/styles";

const NearbyAttractionsStyles = styled("div")(({ theme }) => ({
  "& .attractions-section": {
    width: "100%",
  },

  "& .attractions-heading": {
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

  "& .attractions-grid": {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: theme.spacing(2),
  },

  "& .attraction-card": {
    minWidth: 0,
    overflow: "hidden",
    borderColor: theme.palette.divider,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],

    "& .MuiCardContent-root": {
      padding: theme.spacing(2),

      "&:last-child": {
        paddingBottom: theme.spacing(2),
      },
    },
  },

  "& .attraction-image-placeholder": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(1),
    minHeight: "7rem",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.light,

    "& .MuiSvgIcon-root": {
      fontSize: "2rem",
    },

    "& .MuiTypography-root": {
      color: theme.palette.text.secondary,
    },
  },

  "& .attraction-description": {
    color: theme.palette.text.secondary,
  },
}));

export default NearbyAttractionsStyles;
