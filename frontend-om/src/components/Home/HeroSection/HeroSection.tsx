import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import HeroSectionStyles from "./HeroSectionStyles";

const HeroSection = () => {
  return (
    <HeroSectionStyles>
      <Box component="section" className="home-hero">
        <Box className="hero-background" aria-hidden="true" />

        <Box className="hero-copy">
          <Typography variant="overline" className="hero-eyebrow">
            STAY CLOSE TO SPIRITUALITY
          </Typography>

          <Typography variant="h2" className="hero-title">
            Comfortable Stays
            <br />
            at <Box component="span">OM Guest House</Box>
          </Typography>

          <Typography variant="body1" className="hero-description">
            Clean and spacious rooms, warm hospitality, and a peaceful
            environment for families, business travelers, and tourists visiting
            the holy city of Varanasi.
          </Typography>

          <Box className="hero-actions">
            <Button
              component={Link}
              to="/rooms"
              variant="contained"
              endIcon={<ArrowForwardOutlinedIcon />}
            >
              Explore Rooms
            </Button>

            <Button component={Link} to="/rooms" variant="outlined">
              Check Availability
            </Button>
          </Box>
        </Box>
      </Box>
    </HeroSectionStyles>
  );
};

export default HeroSection;
