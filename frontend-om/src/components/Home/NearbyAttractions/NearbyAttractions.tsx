import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import NearbyAttractionsStyles from "./NearbyAttractionsStyles";

const NearbyAttractions = () => {
  return (
    <NearbyAttractionsStyles>
      <section className="attractions-section">
        <Box className="attractions-heading">
          <Box>
            <Typography component="h2" className="section-title">
              Nearby Attractions
            </Typography>

            <Typography component="p" className="section-description">
              Explore places of interest during your stay.
            </Typography>
          </Box>

          <Button
            component={Link}
            to="/contact"
            endIcon={<ArrowForwardOutlinedIcon />}
            className="view-all-button"
          >
            Plan Your Visit
          </Button>
        </Box>

        <Box className="attractions-grid">
          <Box className="attraction-card">
            <Box className="attraction-image-placeholder">
              <ExploreOutlinedIcon />
              <Typography component="span">Attraction image</Typography>
            </Box>

            <Box className="attraction-content">
              <Typography component="h3" className="attraction-name">
                Assi Ghat
              </Typography>
              <Typography component="p" className="attraction-description">
                Explore the riverfront and its surroundings.
              </Typography>
            </Box>
          </Box>

          <Box className="attraction-card">
            <Box className="attraction-image-placeholder">
              <ExploreOutlinedIcon />
              <Typography component="span">Attraction image</Typography>
            </Box>

            <Box className="attraction-content">
              <Typography component="h3" className="attraction-name">
                Ganga Ghats
              </Typography>
              <Typography component="p" className="attraction-description">
                Discover the historic riverfront areas.
              </Typography>
            </Box>
          </Box>

          <Box className="attraction-card">
            <Box className="attraction-image-placeholder">
              <ExploreOutlinedIcon />
              <Typography component="span">Attraction image</Typography>
            </Box>

            <Box className="attraction-content">
              <Typography component="h3" className="attraction-name">
                Local Temples
              </Typography>
              <Typography component="p" className="attraction-description">
                Explore temples and local heritage.
              </Typography>
            </Box>
          </Box>

          <Box className="attraction-card">
            <Box className="attraction-image-placeholder">
              <ExploreOutlinedIcon />
              <Typography component="span">Attraction image</Typography>
            </Box>

            <Box className="attraction-content">
              <Typography component="h3" className="attraction-name">
                Explore Varanasi
              </Typography>
              <Typography component="p" className="attraction-description">
                Discover the city at your own pace.
              </Typography>
            </Box>
          </Box>
        </Box>
      </section>
    </NearbyAttractionsStyles>
  );
};

export default NearbyAttractions;
