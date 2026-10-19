import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import StyledHome from "./HomeStyles";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

const Home = () => {
  return (
    <StyledHome>
      <section className="home-hero">
        <Box className="hero-background" aria-hidden="true" />

        <Box className="hero-copy">
          <Typography component="p" className="hero-eyebrow">
            STAY CLOSE TO SPIRITUALITY
          </Typography>

          <Typography component="h1" className="hero-title">
            Comfortable Stays
            <br />
            at <span>OM Guest House</span>
          </Typography>

          <Typography component="p" className="hero-description">
            Clean and spacious rooms, warm hospitality, and a peaceful
            environment for families, business travelers, and tourists visiting
            the holy city of Varanasi.
          </Typography>

          <Box className="hero-actions">
            <Button
              component={Link}
              to="/rooms"
              variant="contained"
              endIcon={<ArrowForwardOutlinedIcon />}
              className="primary-action"
            >
              Explore Rooms
            </Button>

            <Button
              component={Link}
              to="/rooms"
              variant="outlined"
              className="secondary-action"
            >
              Check Availability
            </Button>
          </Box>
        </Box>
      </section>

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

      <section className="benefits-section">
        <Box className="benefits-heading">
          <Typography component="h2" className="section-title">
            Why Choose OM Guest House?
          </Typography>

          <Typography component="p" className="section-description">
            A comfortable and hassle-free stay with everything you need.
          </Typography>
        </Box>

        <Box className="benefits-grid">
          <Box className="benefit-card">
            <BedOutlinedIcon className="benefit-icon" />
            <Typography component="h3" className="benefit-title">
              6 Room Types
            </Typography>
            <Typography component="p" className="benefit-description">
              For different needs
            </Typography>
          </Box>

          <Box className="benefit-card">
            <CurrencyRupeeOutlinedIcon className="benefit-icon" />
            <Typography component="h3" className="benefit-title">
              Best Price Guarantee
            </Typography>
            <Typography component="p" className="benefit-description">
              Base tariff, no hidden charges
            </Typography>
          </Box>

          <Box className="benefit-card">
            <VerifiedUserOutlinedIcon className="benefit-icon" />
            <Typography component="h3" className="benefit-title">
              Safe &amp; Secure
            </Typography>
            <Typography component="p" className="benefit-description">
              Your safety is our priority
            </Typography>
          </Box>

          <Box className="benefit-card">
            <GroupsOutlinedIcon className="benefit-icon" />
            <Typography component="h3" className="benefit-title">
              Family Friendly
            </Typography>
            <Typography component="p" className="benefit-description">
              Ideal for families and groups
            </Typography>
          </Box>

          <Box className="benefit-card">
            <LocationOnOutlinedIcon className="benefit-icon" />
            <Typography component="h3" className="benefit-title">
              Prime Location
            </Typography>
            <Typography component="p" className="benefit-description">
              Easy access to major attractions
            </Typography>
          </Box>

          <Box className="benefit-card">
            <PhoneOutlinedIcon className="benefit-icon" />
            <Typography component="h3" className="benefit-title">
              Easy Booking
            </Typography>
            <Typography component="p" className="benefit-description">
              Online, call, WhatsApp or walk-in
            </Typography>
          </Box>
        </Box>
      </section>

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
    </StyledHome>
  );
};

export default Home;
