import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { Link } from "react-router";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AvailabilitySectionStyles from "./AvailabilitySectionStyles";

const AvailabilitySection = () => {
  return (
    <AvailabilitySectionStyles>
      <Box component="section" className="availability-section">
        <Box className="availability-heading">
          <Typography variant="h6">Check Room Availability</Typography>

          <Typography variant="body2" className="availability-description">
            Select your dates and find the best room for your stay
          </Typography>
        </Box>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box className="availability-panel">
            <DatePicker
              label="Check-in Date"
              slotProps={{ textField: { name: "checkIn" } }}
            />

            <DatePicker
              label="Check-out Date"
              slotProps={{ textField: { name: "checkOut" } }}
            />

            <TextField label="Guests" name="guests" select defaultValue="2">
              <MenuItem value="1">1 Guest</MenuItem>
              <MenuItem value="2">2 Guests</MenuItem>
              <MenuItem value="3">3 Guests</MenuItem>
              <MenuItem value="4">4 Guests</MenuItem>
              <MenuItem value="5">5+ Guests</MenuItem>
            </TextField>

            <TextField
              label="Room Type (Optional)"
              name="roomType"
              select
              defaultValue="all"
            >
              <MenuItem value="all">All Room Types</MenuItem>
              <MenuItem value="standard">Standard</MenuItem>
              <MenuItem value="ac">AC Room</MenuItem>
              <MenuItem value="deluxe">Deluxe</MenuItem>
            </TextField>

            <Button component={Link} to="/rooms" variant="contained">
              Search Rooms
            </Button>
          </Box>
        </LocalizationProvider>
      </Box>
    </AvailabilitySectionStyles>
  );
};

export default AvailabilitySection;
