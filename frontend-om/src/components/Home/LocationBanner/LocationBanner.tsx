import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import LocationBannerStyles from "./LocationBannerStyles";

const LocationBanner = () => {
  return (
    <LocationBannerStyles>
      <section className="location-banner">
        <Box className="location-icon">
          <PlaceOutlinedIcon />
        </Box>

        <Box className="location-content">
          <Typography component="h2" className="location-title">
            Find Us in Varanasi
          </Typography>

          <Typography component="p" className="location-description">
            Contact us for directions and information about reaching OM Guest
            House.
          </Typography>
        </Box>

        <Button
          component={Link}
          to="/contact"
          variant="contained"
          endIcon={<DirectionsOutlinedIcon />}
          className="location-button"
        >
          Get Directions
        </Button>
      </section>
    </LocationBannerStyles>
  );
};

export default LocationBanner;
