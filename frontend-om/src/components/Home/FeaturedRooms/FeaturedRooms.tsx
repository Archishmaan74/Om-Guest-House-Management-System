import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FeaturedRoomsStyles from "./FeaturedRoomsStyles";

const FeaturedRooms = () => {
  return (
    <FeaturedRoomsStyles>
      <Box component="section" className="rooms-section">
        <Box className="rooms-heading">
          <Box>
            <Typography variant="h4">Our Rooms</Typography>

            <Typography variant="body1" className="section-description">
              Choose from 6 room types designed for a comfortable and relaxing
              stay.
            </Typography>
          </Box>

          <Button
            component={Link}
            to="/rooms"
            endIcon={<ArrowForwardOutlinedIcon />}
            variant="text"
          >
            View All Rooms
          </Button>
        </Box>

        <Box className="rooms-grid">
          <Box className="room-card">
            <Box className="room-image-placeholder">
              <KingBedOutlinedIcon />
              <Typography variant="body2">Room image</Typography>
            </Box>

            <Box className="room-card-content">
              <Typography variant="h6" className="room-name">
                Standard Double Bedroom
              </Typography>

              <Typography variant="body2" className="room-bathroom">
                (Attached Bathroom)
              </Typography>

              <Box className="room-details">
                <Box className="room-detail">
                  <PersonOutlineOutlinedIcon />
                  <Typography variant="body2">2 Guests</Typography>
                </Box>

                <Box className="room-detail">
                  <KingBedOutlinedIcon />
                  <Typography variant="body2">1 Double Bed</Typography>
                </Box>
              </Box>

              <Box className="room-card-footer">
                <Typography variant="h6" className="room-price">
                  ₹1,000{" "}
                  <Typography component="span" variant="body2">
                    / night
                  </Typography>
                </Typography>

                <Button
                  component={Link}
                  to="/rooms"
                  endIcon={<ArrowForwardOutlinedIcon />}
                  variant="contained"
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </Box>

          <Box className="room-card">
            <Box className="room-image-placeholder">
              <KingBedOutlinedIcon />
              <Typography variant="body2">Room image</Typography>
            </Box>

            <Box className="room-card-content">
              <Typography variant="h6" className="room-name">
                Standard Double Bed AC Room
              </Typography>

              <Typography variant="body2" className="room-bathroom">
                (Attached Washroom)
              </Typography>

              <Box className="room-details">
                <Box className="room-detail">
                  <PersonOutlineOutlinedIcon />
                  <Typography variant="body2">2 Guests</Typography>
                </Box>

                <Box className="room-detail">
                  <KingBedOutlinedIcon />
                  <Typography variant="body2">1 Double Bed</Typography>
                </Box>
              </Box>

              <Box className="room-card-footer">
                <Typography variant="h6" className="room-price">
                  ₹1,250{" "}
                  <Typography component="span" variant="body2">
                    / night
                  </Typography>
                </Typography>

                <Button
                  component={Link}
                  to="/rooms"
                  endIcon={<ArrowForwardOutlinedIcon />}
                  variant="contained"
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </Box>

          <Box className="room-card">
            <Box className="room-image-placeholder">
              <KingBedOutlinedIcon />
              <Typography variant="body2">Room image</Typography>
            </Box>

            <Box className="room-card-content">
              <Typography variant="h6" className="room-name">
                Deluxe Double Bed Spacious AC Room
              </Typography>

              <Typography variant="body2" className="room-bathroom">
                (Attached Bathroom + Sofa)
              </Typography>

              <Box className="room-details">
                <Box className="room-detail">
                  <PersonOutlineOutlinedIcon />
                  <Typography variant="body2">2 Guests</Typography>
                </Box>

                <Box className="room-detail">
                  <KingBedOutlinedIcon />
                  <Typography variant="body2">1 Double Bed</Typography>
                </Box>
              </Box>

              <Box className="room-card-footer">
                <Typography variant="h6" className="room-price">
                  ₹1,750{" "}
                  <Typography component="span" variant="body2">
                    / night
                  </Typography>
                </Typography>

                <Button
                  component={Link}
                  to="/rooms"
                  endIcon={<ArrowForwardOutlinedIcon />}
                  variant="contained"
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </FeaturedRoomsStyles>
  );
};

export default FeaturedRooms;
