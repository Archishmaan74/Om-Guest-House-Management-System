import { styled } from "@mui/material/styles";

const AvailabilitySectionStyles = styled("div")(({ theme }) => ({
  "& .availability-section": {
    position: "relative",
    zIndex: 2,
    marginTop: "-2rem",
    padding: theme.spacing(4),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
  },

  "& .availability-heading": {
    marginBottom: theme.spacing(2),
  },

  "& .availability-description": {
    color: theme.palette.text.secondary,
  },

  "& .availability-panel": {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr)) auto",
    alignItems: "center",
    gap: theme.spacing(2),

    "& .MuiFormControl-root": {
      width: "100%",
    },

    "& .MuiInputBase-root": {
      height: "3.5rem",
      backgroundColor: theme.palette.background.paper,
    },

    "& .MuiButton-root": {
      minHeight: "3.5rem",
      padding: theme.spacing(1.5, 2),
      whiteSpace: "nowrap",
      boxShadow: "none",

      "&:hover": {
        boxShadow: "none",
      },
    },
  },
}));

export default AvailabilitySectionStyles;
