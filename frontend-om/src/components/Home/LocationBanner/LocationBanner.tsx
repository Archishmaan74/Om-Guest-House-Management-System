import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import LocationBannerStyles from "./LocationBannerStyles";

const LocationBanner = () => {
  return (
    <LocationBannerStyles>
      <Box component="section" className="location-banner">
        <Box className="location-icon">
          <PlaceOutlinedIcon />
        </Box>

        <Box className="location-content">
          <Typography variant="h6">Find Us in Varanasi</Typography>

          <Typography variant="body2" className="location-description">
            Contact us for directions and information about reaching OM Guest
            House.
          </Typography>
        </Box>

        <Button
          component={Link}
          to="/contact"
          variant="contained"
          endIcon={<DirectionsOutlinedIcon />}
        >
          Get Directions
        </Button>
      </Box>
    </LocationBannerStyles>
  );
};

export default LocationBanner;
