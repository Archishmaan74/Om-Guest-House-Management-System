import { styled } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";

interface LoaderProps {
  small?: boolean;
}

interface StyledLoaderProps {
  small: boolean;
}

const StyledLoader = styled("div")<StyledLoaderProps>(({ theme, small }) => ({
  minHeight: small ? "auto" : 600,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: small ? theme.spacing(1) : theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  padding: small ? theme.spacing(1) : theme.spacing(4),
  color: theme.palette.text.primary,

  [theme.breakpoints.down("md")]: {
    minHeight: small ? "auto" : 400,
    padding: small ? theme.spacing(1) : theme.spacing(2),
  },

  "& .loader-hotel-icon": {
    fontSize: small ? 28 : 48,
    color: theme.palette.primary.main,
  },

  "& .loader-brand": {
    fontSize: small ? "16px" : "28px",
    fontWeight: 700,
    color: theme.palette.text.primary,
    textAlign: "center",
  },

  "& .loader-spinner": {
    color: theme.palette.primary.main,
  },

  "& .loader-message": {
    fontSize: small ? "12px" : "18px",
    fontWeight: 600,
    color: theme.palette.text.secondary,
    textAlign: "center",
  },
}));

const Loader = ({ small = false }: LoaderProps) => (
  <StyledLoader small={small}>
    <ApartmentIcon className="loader-hotel-icon" />

    <div className="loader-brand">OM GUEST HOUSE</div>

    <CircularProgress className="loader-spinner" size={small ? 22 : 40} />

    <div className="loader-message">Preparing your experience...</div>
  </StyledLoader>
);

export default Loader;
