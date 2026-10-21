import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import HeroSectionStyles from "./HeroSectionStyles";
import Spacer from "../../../styledUtils/Spacer";

const HeroSection = () => {
  return (
    <HeroSectionStyles>
      <section className="home-hero">
        <Box className="hero-background" aria-hidden="true" />

        <Box className="hero-copy">
          <Typography component="p" className="hero-eyebrow">
            STAY CLOSE TO SPIRITUALITY
          </Typography>

          <Typography component="h1" className="hero-title">
            Comfortable Stays
            <br />
            at <span>OM Guest House</span>
          </Typography>

          <Spacer height={1} heightMd={1} />

          <Typography component="p" className="hero-description">
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
              className="primary-action"
            >
              Explore Rooms
            </Button>

            <Button
              component={Link}
              to="/rooms"
              variant="outlined"
              className="secondary-action"
            >
              Check Availability
            </Button>
          </Box>
        </Box>
      </section>
    </HeroSectionStyles>
  );
};

export default HeroSection;
