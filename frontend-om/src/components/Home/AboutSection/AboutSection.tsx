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
      <Box component="section" className="about-section">
        <Box className="about-image-placeholder">
          <ApartmentOutlinedIcon fontSize="large" />

          <Typography variant="subtitle2">OM GUEST HOUSE</Typography>

          <Typography variant="body2">Property image placeholder</Typography>
        </Box>

        <Box className="about-content">
          <Typography variant="overline" className="about-eyebrow">
            ABOUT OM GUEST HOUSE
          </Typography>

          <Typography variant="h5" className="about-title">
            A Comfortable Stay.
            <br />A Welcoming Experience.
          </Typography>

          <Typography variant="body2" className="about-description">
            OM Guest House offers a welcoming place to stay, with room options
            designed for different guest needs. Explore our rooms and contact us
            if you need help choosing the right option for your visit.
          </Typography>

          <Button
            component={Link}
            to="/about"
            endIcon={<ArrowForwardOutlinedIcon />}
            variant="contained"
          >
            Learn More
          </Button>
        </Box>

        <Box className="about-highlights">
          <Box className="about-highlight">
            <ApartmentOutlinedIcon />

            <Box>
              <Typography variant="subtitle2">Room Options</Typography>
              <Typography variant="body2">
                Explore available categories
              </Typography>
            </Box>
          </Box>

          <Box className="about-highlight">
            <CheckCircleOutlineOutlinedIcon />

            <Box>
              <Typography variant="subtitle2">Comfortable Stay</Typography>
              <Typography variant="body2">
                Find a room suited to your needs
              </Typography>
            </Box>
          </Box>

          <Box className="about-highlight">
            <LocationOnOutlinedIcon />

            <Box>
              <Typography variant="subtitle2">Location</Typography>
              <Typography variant="body2">Contact us for directions</Typography>
            </Box>
          </Box>

          <Box className="about-highlight">
            <GroupsOutlinedIcon />

            <Box>
              <Typography variant="subtitle2">Guest Support</Typography>
              <Typography variant="body2">We are here to help</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </AboutSectionStyles>
  );
};

export default AboutSection;
