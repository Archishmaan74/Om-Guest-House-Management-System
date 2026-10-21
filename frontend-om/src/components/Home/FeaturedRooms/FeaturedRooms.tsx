import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FeaturedRoomsStyles from "./FeaturedRoomsStyles";

const FeaturedRooms = () => {
  return (
    <FeaturedRoomsStyles>
      <section className="rooms-section">
        <Box className="rooms-heading">
          <Box>
            <Typography component="h2" className="section-title">
              Our Rooms
            </Typography>

            <Typography component="p" className="section-description">
              Choose from 6 room types designed for a comfortable and relaxing
              stay.
            </Typography>
          </Box>

          <Button
            component={Link}
            to="/rooms"
            endIcon={<ArrowForwardOutlinedIcon />}
            className="view-all-button"
          >
            View All Rooms
          </Button>
        </Box>

        <Box className="rooms-grid">
          <Box className="room-card">
            <Box className="room-image-placeholder">
              <KingBedOutlinedIcon />
              <Typography component="span">Room image</Typography>
            </Box>

            <Box className="room-card-content">
              <Typography component="h3" className="room-name">
                Standard Double Bedroom
              </Typography>
              <Typography component="p" className="room-bathroom">
                (Attached Bathroom)
              </Typography>

              <Box className="room-details">
                <Box className="room-detail">
                  <PersonOutlineOutlinedIcon />
                  <Typography component="span">2 Guests</Typography>
                </Box>
                <Box className="room-detail">
                  <KingBedOutlinedIcon />
                  <Typography component="span">1 Double Bed</Typography>
                </Box>
              </Box>

              <Box className="room-card-footer">
                <Typography component="p" className="room-price">
                  ₹1,000 <span>/ night</span>
                </Typography>
                <Button
                  component={Link}
                  to="/rooms"
                  endIcon={<ArrowForwardOutlinedIcon />}
                  className="room-details-button"
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </Box>

          <Box className="room-card">
            <Box className="room-image-placeholder">
              <KingBedOutlinedIcon />
              <Typography component="span">Room image</Typography>
            </Box>

            <Box className="room-card-content">
              <Typography component="h3" className="room-name">
                Standard Double Bed AC Room
              </Typography>
              <Typography component="p" className="room-bathroom">
                (Attached Washroom)
              </Typography>

              <Box className="room-details">
                <Box className="room-detail">
                  <PersonOutlineOutlinedIcon />
                  <Typography component="span">2 Guests</Typography>
                </Box>
                <Box className="room-detail">
                  <KingBedOutlinedIcon />
                  <Typography component="span">1 Double Bed</Typography>
                </Box>
              </Box>

              <Box className="room-card-footer">
                <Typography component="p" className="room-price">
                  ₹1,250 <span>/ night</span>
                </Typography>
                <Button
                  component={Link}
                  to="/rooms"
                  endIcon={<ArrowForwardOutlinedIcon />}
                  className="room-details-button"
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </Box>

          <Box className="room-card">
            <Box className="room-image-placeholder">
              <KingBedOutlinedIcon />
              <Typography component="span">Room image</Typography>
            </Box>

            <Box className="room-card-content">
              <Typography component="h3" className="room-name">
                Deluxe Double Bed Spacious AC Room
              </Typography>
              <Typography component="p" className="room-bathroom">
                (Attached Bathroom + Sofa)
              </Typography>

              <Box className="room-details">
                <Box className="room-detail">
                  <PersonOutlineOutlinedIcon />
                  <Typography component="span">2 Guests</Typography>
                </Box>
                <Box className="room-detail">
                  <KingBedOutlinedIcon />
                  <Typography component="span">1 Double Bed</Typography>
                </Box>
              </Box>

              <Box className="room-card-footer">
                <Typography component="p" className="room-price">
                  ₹1,750 <span>/ night</span>
                </Typography>
                <Button
                  component={Link}
                  to="/rooms"
                  endIcon={<ArrowForwardOutlinedIcon />}
                  className="room-details-button"
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </FeaturedRoomsStyles>
  );
};

export default FeaturedRooms;
