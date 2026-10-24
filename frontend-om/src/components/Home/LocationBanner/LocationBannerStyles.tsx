import { styled } from "@mui/material/styles";

const LocationBannerStyles = styled("div")(({ theme }) => ({
  "& .location-banner": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    width: "100%",
    boxSizing: "border-box",
    padding: theme.spacing(3),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.secondary.light,
  },

  "& .location-icon": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: "3rem",
    height: "3rem",
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,

    "& .MuiSvgIcon-root": {
      fontSize: "1.6rem",
    },
  },

  "& .location-content": {
    flex: 1,
    minWidth: 0,

    "& .MuiTypography-root": {
      color: theme.palette.text.primary,
    },

    "& .location-description": {
      color: theme.palette.text.secondary,
    },
  },

  "& .MuiButton-root": {
    flexShrink: 0,
    padding: theme.spacing(1.5, 2),
    boxShadow: "none",

    "&:hover": {
      boxShadow: "none",
    },
  },
}));

export default LocationBannerStyles;
