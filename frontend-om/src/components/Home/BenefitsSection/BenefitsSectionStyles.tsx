import { styled } from "@mui/material/styles";

const BenefitsSectionStyles = styled("div")(({ theme }) => ({
  "& .benefits-section": {
    width: "100%",
  },

  "& .benefits-heading": {
    marginBottom: theme.spacing(3),
  },

  "& .section-description": {
    marginTop: theme.spacing(0.5),
    color: theme.palette.text.secondary,
  },

  "& .benefits-grid": {
    display: "grid",
    gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
    gap: theme.spacing(1.5),
  },

  "& .benefit-card": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 0,
    minHeight: "7.8rem",
    textAlign: "center",
    borderColor: theme.palette.divider,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,

    "& .MuiCardContent-root": {
      width: "100%",
      padding: theme.spacing(2, 1),

      "&:last-child": {
        paddingBottom: theme.spacing(2),
      },
    },

    "& .benefit-icon": {
      display: "block",
      margin: `0 auto ${theme.spacing(1)}`,
      color: theme.palette.primary.main,
      fontSize: "1.8rem",
    },

    "& .MuiTypography-subtitle2": {
      color: theme.palette.text.primary,
    },

    "& .benefit-description": {
      display: "block",
      marginTop: theme.spacing(0.5),
      color: theme.palette.text.secondary,
    },
  },
}));

export default BenefitsSectionStyles;
