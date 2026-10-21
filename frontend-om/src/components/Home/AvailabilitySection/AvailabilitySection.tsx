import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";
import AvailabilitySectionStyles from "./AvailabilitySectionStyles";

const AvailabilitySection = () => {
  return (
    <AvailabilitySectionStyles>
      <section className="availability-section">
        <Box className="availability-heading">
          <Typography component="h2" className="availability-title">
            Check Room Availability
          </Typography>

          <Typography component="p" className="availability-description">
            Select your dates and find the best room for your stay
          </Typography>
        </Box>

        <Box className="availability-panel">
          <Box className="availability-field">
            <Typography component="label" htmlFor="check-in">
              Check-in Date
            </Typography>
            <Box
              component="input"
              id="check-in"
              name="checkIn"
              type="date"
              className="availability-input"
            />
          </Box>

          <Box className="availability-field">
            <Typography component="label" htmlFor="check-out">
              Check-out Date
            </Typography>
            <Box
              component="input"
              id="check-out"
              name="checkOut"
              type="date"
              className="availability-input"
            />
          </Box>

          <Box className="availability-field">
            <Typography component="label" htmlFor="guest-count">
              Guests
            </Typography>
            <Box
              component="select"
              id="guest-count"
              name="guests"
              defaultValue="2"
              className="availability-input"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </Box>
          </Box>

          <Box className="availability-field">
            <Typography component="label" htmlFor="room-type">
              Room Type (Optional)
            </Typography>
            <Box
              component="select"
              id="room-type"
              name="roomType"
              defaultValue="all"
              className="availability-input"
            >
              <option value="all">All Room Types</option>
              <option value="standard">Standard</option>
              <option value="ac">AC Room</option>
              <option value="deluxe">Deluxe</option>
            </Box>
          </Box>

          <Button
            component={Link}
            to="/rooms"
            variant="contained"
            className="availability-button"
          >
            Search Rooms
          </Button>
        </Box>
      </section>
    </AvailabilitySectionStyles>
  );
};

export default AvailabilitySection;
