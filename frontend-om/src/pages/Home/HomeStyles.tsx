import { styled } from "@mui/material/styles";
import { Box, Button, Card, Paper } from "@mui/material";

export const HomePage = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  color: theme.palette.text.primary,
  [theme.breakpoints.up("md")]: { gap: theme.spacing(2.5) },
  "& .eyebrow": {
    color: theme.palette.primary.main,
    fontSize: "0.68rem",
    fontWeight: 700,
    letterSpacing: "0.24em",
    textTransform: "uppercase",
    marginBottom: theme.spacing(1.5),
  },
}));

export const Hero = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(2),
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "0.95fr 1.05fr",
    minHeight: 310,
    gap: theme.spacing(3),
  },
}));

export const HeroCopy = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  [theme.breakpoints.up("md")]: { padding: theme.spacing(3, 0) },
  "& .hero-title": {
    fontWeight: 800,
    fontSize: "clamp(2.1rem, 4vw, 3.25rem)",
    lineHeight: 1.08,
    letterSpacing: "-0.035em",
    marginBottom: theme.spacing(1.5),
    "& span": { color: theme.palette.primary.main },
  },
  "& .hero-description": {
    color: theme.palette.text.secondary,
    lineHeight: 1.65,
    maxWidth: 540,
    marginBottom: theme.spacing(2),
  },
  "& .hero-actions": { display: "flex", flexWrap: "wrap", gap: theme.spacing(1.5) },
}));

export const HeroImagePlaceholder = styled(Box)(({ theme }) => ({
  minHeight: 230,
  borderRadius: theme.shape.borderRadius * 1.5,
  background: "linear-gradient(135deg, #efe4d8 0%, #f8f3ed 45%, #e3c6a8 100%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(3),
  color: theme.palette.primary.dark,
  "& p:first-of-type": { fontWeight: 700 },
  [theme.breakpoints.up("md")]: { minHeight: 310 },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  minHeight: 42,
  borderRadius: 9,
  paddingInline: theme.spacing(2),
  fontWeight: 700,
  whiteSpace: "nowrap",
}));

export const AvailabilityCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "1px solid rgba(70, 50, 35, 0.08)",
  borderRadius: 14,
  boxShadow: "0 8px 28px rgba(50, 35, 20, 0.08)",
  "& .search-title": { fontSize: "1.15rem", fontWeight: 800 },
  "& .search-description": { color: theme.palette.text.secondary, fontSize: "0.88rem", marginBottom: theme.spacing(2) },
  [theme.breakpoints.up("md")]: { padding: theme.spacing(2.5) },
}));

export const SearchFields = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(1.5),
  alignItems: "center",
  "& .MuiInputBase-root": { backgroundColor: "#fff" },
  [theme.breakpoints.up("sm")]: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
  [theme.breakpoints.up("lg")]: { gridTemplateColumns: "repeat(4, minmax(0, 1fr)) auto" },
}));

export const Section = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  scrollMarginTop: theme.spacing(3),
}));

export const SectionTitleRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  flexWrap: "wrap",
}));

export const SectionHeading = styled("h2")(({ theme }) => ({
  margin: 0,
  fontSize: "clamp(1.35rem, 2vw, 1.8rem)",
  lineHeight: 1.2,
  letterSpacing: "-0.025em",
  fontWeight: 800,
  color: theme.palette.text.primary,
}));

export const SectionIntro = styled("p")(({ theme }) => ({
  margin: theme.spacing(0.5, 0, 0),
  fontSize: "0.88rem",
  color: theme.palette.text.secondary,
}));

export const RoomCardPlaceholder = styled(Card)(({ theme }) => ({
  overflow: "hidden",
  borderRadius: 10,
  height: "100%",
  borderColor: "rgba(70, 50, 35, 0.12)",
  "& .MuiCardContent-root": { display: "grid", gap: theme.spacing(0.75), padding: theme.spacing(1.5) },
}));

export const RoomImagePlaceholder = styled(Box)(({ theme }) => ({
  height: 150,
  background: "linear-gradient(135deg, #e9ded1, #f8f4ef)",
  [theme.breakpoints.up("md")]: { height: 135 },
}));

export const BenefitsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: theme.spacing(1.25),
  [theme.breakpoints.up("sm")]: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
  [theme.breakpoints.up("lg")]: { gridTemplateColumns: "repeat(6, minmax(0, 1fr))" },
}));

export const BenefitCard = styled(Card)(({ theme }) => ({
  minHeight: 118,
  padding: theme.spacing(1.5, 1),
  borderRadius: 10,
  textAlign: "center",
  backgroundColor: "rgba(255,255,255,0.58)",
  borderColor: "rgba(70, 50, 35, 0.08)",
  boxShadow: "none",
  "& .benefit-icon": {
    display: "grid",
    placeItems: "center",
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(0.75),
    "& svg": { fontSize: 28 },
  },
  "& .benefit-title": { fontSize: "0.82rem", fontWeight: 800 },
  "& .benefit-description": { fontSize: "0.72rem", lineHeight: 1.35, color: theme.palette.text.secondary, marginTop: theme.spacing(0.5) },
}));

export const AboutGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(2),
  alignItems: "center",
  [theme.breakpoints.up("md")]: { gridTemplateColumns: "1.05fr 1fr 0.72fr", gap: theme.spacing(3) },
  "& .about-copy": { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: theme.spacing(1.25) },
}));

export const AboutImagePlaceholder = styled(Box)(({ theme }) => ({
  minHeight: 180,
  borderRadius: 10,
  background: "linear-gradient(135deg, #e9ded1, #f8f4ef)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const AboutHighlights = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  "& > div:not(.MuiDivider-root)": { display: "flex", alignItems: "center", gap: theme.spacing(1.25) },
  "& svg": { color: theme.palette.primary.main, flexShrink: 0 },
}));

export const AttractionCard = styled(Card)(({ theme }) => ({
  height: "100%",
  overflow: "hidden",
  borderRadius: 10,
  borderColor: "rgba(70, 50, 35, 0.12)",
  "& .MuiCardContent-root": { padding: theme.spacing(1.25), display: "grid", gap: theme.spacing(0.5) },
  "& .MuiCardContent-root p:last-of-type": { display: "flex", alignItems: "center", gap: theme.spacing(0.25), fontSize: "0.73rem" },
  "& .MuiCardContent-root svg": { color: theme.palette.primary.main },
}));

export const AttractionImagePlaceholder = styled(Box)(({ theme }) => ({
  height: 85,
  background: "linear-gradient(135deg, #e9ded1, #f8f4ef)",
  [theme.breakpoints.up("md")]: { height: 95 },
}));

export const LocationPanel = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.5),
  border: "1px solid rgba(70, 50, 35, 0.1)",
  borderRadius: 10,
  backgroundColor: "rgba(255,255,255,0.5)",
  "& > svg": { color: theme.palette.primary.main, fontSize: 30 },
  "& > div": { flex: 1 },
  [theme.breakpoints.down("sm")]: { flexWrap: "wrap" },
}));
