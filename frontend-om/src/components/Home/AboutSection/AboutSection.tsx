import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AboutSectionStyles from "./AboutSectionStyles";

const AboutSection = () => {
  return (
    <AboutSectionStyles>
      <section className="about-section">
        <Box className="about-image-placeholder">
          <ApartmentOutlinedIcon />

          <Typography component="p">OM GUEST HOUSE</Typography>

          <Typography component="span">Property image placeholder</Typography>
        </Box>

        <Box className="about-content">
          <Typography component="p" className="about-eyebrow">
            ABOUT OM GUEST HOUSE
          </Typography>

          <Typography component="h2" className="about-title">
            A Comfortable Stay.
            <br />A Welcoming Experience.
          </Typography>

          <Typography component="p" className="about-description">
            OM Guest House offers a welcoming place to stay, with room options
            designed for different guest needs. Explore our rooms and contact us
            if you need help choosing the right option for your visit.
          </Typography>

          <Button
            component={Link}
            to="/about"
            endIcon={<ArrowForwardOutlinedIcon />}
            className="about-button"
          >
            Learn More
          </Button>
        </Box>

        <Box className="about-highlights">
          <Box className="about-highlight">
            <ApartmentOutlinedIcon />

            <Box>
              <Typography component="h3">Room Options</Typography>
              <Typography component="p">
                Explore available categories
              </Typography>
            </Box>
          </Box>

          <Box className="about-highlight">
            <CheckCircleOutlineOutlinedIcon />

            <Box>
              <Typography component="h3">Comfortable Stay</Typography>
              <Typography component="p">
                Find a room suited to your needs
              </Typography>
            </Box>
          </Box>

          <Box className="about-highlight">
            <LocationOnOutlinedIcon />

            <Box>
              <Typography component="h3">Location</Typography>
              <Typography component="p">Contact us for directions</Typography>
            </Box>
          </Box>

          <Box className="about-highlight">
            <GroupsOutlinedIcon />

            <Box>
              <Typography component="h3">Guest Support</Typography>
              <Typography component="p">We are here to help</Typography>
            </Box>
          </Box>
        </Box>
      </section>
    </AboutSectionStyles>
  );
};

export default AboutSection;
