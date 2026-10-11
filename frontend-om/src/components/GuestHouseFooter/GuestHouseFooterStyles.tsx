import { styled } from "@mui/material/styles";

const StyledGuestHouseFooter = styled("div")(({ theme }) => ({
  width: "100%",
  boxSizing: "border-box",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,

  "& .footer-main": {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr 1fr",
    gap: "3rem",
    width: "100%",
    boxSizing: "border-box",
    padding: "2.8rem 5.2%",

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr",
      gap: "2.5rem",
      padding: "2.5rem 1.5rem",
    },

    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gap: "2rem",
      padding: "2rem 1.2rem",
    },
  },

  "& .footer-brand-name": {
    marginBottom: "0.8rem",
    color: theme.palette.text.primary,
    fontSize: "1.4rem",
    fontWeight: 700,
    lineHeight: 1.4,
  },

  "& .footer-intro": {
    marginBottom: "0.6rem",
    color: theme.palette.primary.main,
    fontSize: "0.95rem",
    fontWeight: 600,
    lineHeight: 1.7,
  },

  "& .footer-description": {
    maxWidth: "26rem",
    color: theme.palette.text.secondary,
    fontSize: "0.9rem",
    lineHeight: 1.8,
  },

  "& .footer-heading": {
    marginBottom: "1.2rem",
    color: theme.palette.text.primary,
    fontSize: "1rem",
    fontWeight: 700,
  },

  "& .footer-info-list": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
  },

  "& .footer-info-item": {
    display: "flex",
    alignItems: "center",
    gap: "0.7rem",
    color: theme.palette.text.secondary,

    "& .MuiSvgIcon-root": {
      flexShrink: 0,
      color: theme.palette.primary.main,
      fontSize: "1.2rem",
    },

    "& .MuiTypography-root": {
      fontSize: "0.9rem",
      lineHeight: 1.6,
    },
  },

  "& .footer-bottom": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "0.8rem",
    width: "100%",
    boxSizing: "border-box",
    padding: "1.2rem 5.2%",
    borderTop: `1px solid ${theme.palette.divider}`,

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "1.2rem",
    },
  },

  "& .footer-copyright, & .footer-tagline": {
    color: theme.palette.text.secondary,
    fontSize: "0.8rem",
    lineHeight: 1.7,
  },

  "& .footer-tagline": {
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
}));

export default StyledGuestHouseFooter;
