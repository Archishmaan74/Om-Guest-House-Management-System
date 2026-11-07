import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import NearbyAttractionsStyles from "./NearbyAttractionsStyles";
import { useGetHomePageContentQuery } from "../../../app/services/homeApi";

const NearbyAttractions = () => {
  const { data: homeData } = useGetHomePageContentQuery();

  return (
    <NearbyAttractionsStyles>
      <Box component="section" className="attractions-section">
        <Box className="attractions-heading">
          <Box>
            <Typography variant="h4">Nearby Attractions</Typography>

            <Typography variant="body2" className="section-description">
              Explore places of interest during your stay.
            </Typography>
          </Box>

          <Button
            component={Link}
            to="/contact"
            endIcon={<ArrowForwardOutlinedIcon />}
            variant="text"
          >
            Plan Your Visit
          </Button>
        </Box>

        <Box className="attractions-grid">
          {/* Assi Ghat */}
          <Card variant="outlined" className="attraction-card">
            <Box className="attraction-image-placeholder">
              {homeData?.assiGhatImageUrl ? (
                <Box
                  component="img"
                  src={homeData.assiGhatImageUrl}
                  alt="Assi Ghat"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <>
                  <ExploreOutlinedIcon />
                  <Typography variant="caption">Attraction image</Typography>
                </>
              )}
            </Box>

            <CardContent>
              <Typography variant="subtitle1">Assi Ghat</Typography>
              <Typography variant="body2" className="attraction-description">
                Explore the riverfront and its surroundings.
              </Typography>
            </CardContent>
          </Card>

          {/* Ganga Ghats */}
          <Card variant="outlined" className="attraction-card">
            <Box className="attraction-image-placeholder">
              {homeData?.gangaGhatsImageUrl ? (
                <Box
                  component="img"
                  src={homeData.gangaGhatsImageUrl}
                  alt="Ganga Ghats"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <>
                  <ExploreOutlinedIcon />
                  <Typography variant="caption">Attraction image</Typography>
                </>
              )}
            </Box>

            <CardContent>
              <Typography variant="subtitle1">Ganga Ghats</Typography>
              <Typography variant="body2" className="attraction-description">
                Discover the historic riverfront areas.
              </Typography>
            </CardContent>
          </Card>

          {/* Local Temples */}
          <Card variant="outlined" className="attraction-card">
            <Box className="attraction-image-placeholder">
              {homeData?.templeImageUrl ? (
                <Box
                  component="img"
                  src={homeData.templeImageUrl}
                  alt="Local Temples"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <>
                  <ExploreOutlinedIcon />
                  <Typography variant="caption">Attraction image</Typography>
                </>
              )}
            </Box>

            <CardContent>
              <Typography variant="subtitle1">Local Temples</Typography>
              <Typography variant="body2" className="attraction-description">
                Explore temples and local heritage.
              </Typography>
            </CardContent>
          </Card>

          {/* Explore Varanasi */}
          <Card variant="outlined" className="attraction-card">
            <Box className="attraction-image-placeholder">
              {homeData?.varanasiImageUrl ? (
                <Box
                  component="img"
                  src={homeData.varanasiImageUrl}
                  alt="Explore Varanasi"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <>
                  <ExploreOutlinedIcon />
                  <Typography variant="caption">Attraction image</Typography>
                </>
              )}
            </Box>

            <CardContent>
              <Typography variant="subtitle1">Explore Varanasi</Typography>
              <Typography variant="body2" className="attraction-description">
                Discover the city at your own pace.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </NearbyAttractionsStyles>
  );
};

export default NearbyAttractions;
