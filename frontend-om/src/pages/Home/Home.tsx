import {
  Alert,
  Box,
  Button,
  CardContent,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import FamilyRestroomOutlinedIcon from "@mui/icons-material/FamilyRestroomOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import { Link as RouterLink } from "react-router";
import { useState } from "react";
import {
  AboutGrid,
  AboutHighlights,
  AboutImagePlaceholder,
  AvailabilityCard,
  BenefitCard,
  BenefitsGrid,
  Hero,
  HeroCopy,
  HeroImagePlaceholder,
  HomePage,
  Section,
  SectionHeading,
  SectionIntro,
  SectionTitleRow,
  RoomCardPlaceholder,
  RoomImagePlaceholder,
  SearchFields,
  StyledButton,
  AttractionCard,
  AttractionImagePlaceholder,
  LocationPanel,
} from "./HomeStyles";

const benefits = [
  {
    title: "6 Room Types",
    description: "Options for different needs",
    icon: <BedOutlinedIcon />,
  },
  {
    title: "Best Price",
    description: "Clear room rates",
    icon: <PaymentsOutlinedIcon />,
  },
  {
    title: "Safe & Secure",
    description: "Your safety matters",
    icon: <SecurityOutlinedIcon />,
  },
  {
    title: "Family Friendly",
    description: "Space for families and groups",
    icon: <FamilyRestroomOutlinedIcon />,
  },
  {
    title: "Prime Location",
    description: "Explore Varanasi",
    icon: <LocationOnOutlinedIcon />,
  },
  {
    title: "Easy Booking",
    description: "A simple booking journey",
    icon: <PhoneInTalkOutlinedIcon />,
  },
];

const attractions = [
  "Assi Ghat",
  "Kashi Vishwanath Temple",
  "Dashashwamedh Ghat",
  "Sankat Mochan Temple",
];

const Home = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState("");
  const [searchMessage, setSearchMessage] = useState("");

  const handleSearch = () => {
    if (!checkIn || !checkOut) {
      setSearchMessage("Please select both check-in and check-out dates.");
      return;
    }

    if (checkOut <= checkIn) {
      setSearchMessage("Check-out date must be after the check-in date.");
      return;
    }

    setSearchMessage(
      "Your search details are ready. Live availability will be connected in the booking integration task.",
    );
  };

  return (
    <HomePage>
      <Hero>
        <HeroCopy>
          <Typography className="eyebrow">Stay close to spirituality</Typography>
          <Typography component="h1" className="hero-title">
            Comfortable Stays
            <br />
            at <span>OM Guest House</span>
          </Typography>
          <Typography className="hero-description">
            Clean and spacious rooms, warm hospitality, and a peaceful
            environment for families, business travelers, and tourists visiting
            the holy city of Varanasi.
          </Typography>
          <Box className="hero-actions">
            <StyledButton component={RouterLink} to="/rooms" variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
              Explore Rooms
            </StyledButton>
            <StyledButton
              variant="outlined"
              onClick={() => document.getElementById("availability-search")?.scrollIntoView({ behavior: "smooth", block: "center" })}
              startIcon={<CalendarMonthOutlinedIcon />}
            >
              Check Availability
            </StyledButton>
          </Box>
        </HeroCopy>
        <HeroImagePlaceholder aria-label="Hero image will be supplied by the database">
          <Typography>Guest house hero image</Typography>
          <Typography variant="caption">Image URL integration is planned for the data-mapping task.</Typography>
        </HeroImagePlaceholder>
      </Hero>

      <AvailabilityCard id="availability-search" elevation={0}>
        <Typography component="h2" className="search-title">Check Room Availability</Typography>
        <Typography className="search-description">
          Select your dates and find the best room for your stay
        </Typography>
        <SearchFields>
          <TextField
            label="Check-in Date"
            type="date"
            value={checkIn}
            onChange={(event) => setCheckIn(event.target.value)}
            slotProps={{ inputLabel: { shrink: true }, htmlInput: { min: new Date().toISOString().slice(0, 10) } }}
            fullWidth
          />
          <TextField
            label="Check-out Date"
            type="date"
            value={checkOut}
            onChange={(event) => setCheckOut(event.target.value)}
            slotProps={{ inputLabel: { shrink: true }, htmlInput: { min: checkIn || new Date().toISOString().slice(0, 10) } }}
            fullWidth
          />
          <TextField select label="Guests" value={guests} onChange={(event) => setGuests(event.target.value)} fullWidth>
            {[1, 2, 3, 4, 5, 6].map((count) => (
              <MenuItem key={count} value={String(count)}>{count} {count === 1 ? "Guest" : "Guests"}</MenuItem>
            ))}
          </TextField>
          <TextField select label="Room Type (Optional)" value={roomType} onChange={(event) => setRoomType(event.target.value)} fullWidth>
            <MenuItem value="">All Room Types</MenuItem>
            <MenuItem value="standard">Standard</MenuItem>
            <MenuItem value="deluxe">Deluxe</MenuItem>
          </TextField>
          <StyledButton variant="contained" onClick={handleSearch} startIcon={<CalendarMonthOutlinedIcon />}>
            Search Rooms
          </StyledButton>
        </SearchFields>
        {searchMessage && <Alert severity={searchMessage.startsWith("Please") || searchMessage.startsWith("Check-out") ? "warning" : "info"} sx={{ mt: 2 }}>{searchMessage}</Alert>}
      </AvailabilityCard>

      <Section id="rooms">
        <SectionTitleRow>
          <Box>
            <SectionHeading component="h2">Our Rooms</SectionHeading>
            <SectionIntro>Choose from 6 room types designed for a comfortable and relaxing stay.</SectionIntro>
          </Box>
          <Button component={RouterLink} to="/rooms" endIcon={<ArrowForwardRoundedIcon />}>View All Rooms</Button>
        </SectionTitleRow>
        <Grid container spacing={2}>
          {[1, 2, 3].map((item) => (
            <Grid key={item} size={{ xs: 12, sm: 6, md: 4 }}>
              <RoomCardPlaceholder variant="outlined">
                <RoomImagePlaceholder />
                <CardContent>
                  <Typography fontWeight={700}>Room details will appear here</Typography>
                  <Typography color="text.secondary" variant="body2">Room category, photo URL and nightly price will be mapped from the API in the next task.</Typography>
                </CardContent>
              </RoomCardPlaceholder>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section>
        <SectionHeading component="h2">Why Choose OM Guest House?</SectionHeading>
        <SectionIntro>A comfortable and hassle-free stay with everything you need.</SectionIntro>
        <BenefitsGrid>
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} variant="outlined">
              <Box className="benefit-icon">{benefit.icon}</Box>
              <Typography className="benefit-title">{benefit.title}</Typography>
              <Typography className="benefit-description">{benefit.description}</Typography>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </Section>

      <Section>
        <AboutGrid>
          <AboutImagePlaceholder>
            <Typography>Property image</Typography>
            <Typography variant="caption">Will be supplied through a database image URL when available.</Typography>
          </AboutImagePlaceholder>
          <Box className="about-copy">
            <Typography className="eyebrow">About OM Guest House</Typography>
            <SectionHeading component="h2">A Comfortable Stay. A Welcoming Experience.</SectionHeading>
            <Typography color="text.secondary">
              Discover a welcoming place to stay while visiting Varanasi. Room
              information and property details will be connected to verified
              project data as those fields become available.
            </Typography>
            <StyledButton component={RouterLink} to="/about" variant="contained" endIcon={<ArrowForwardRoundedIcon />}>Learn More</StyledButton>
          </Box>
          <AboutHighlights>
            <Box><BedOutlinedIcon /><Box><Typography fontWeight={700}>Room options</Typography><Typography variant="body2" color="text.secondary">Explore available categories</Typography></Box></Box>
            <Divider />
            <Box><SecurityOutlinedIcon /><Box><Typography fontWeight={700}>Comfort first</Typography><Typography variant="body2" color="text.secondary">A welcoming guest experience</Typography></Box></Box>
            <Divider />
            <Box><LocationOnOutlinedIcon /><Box><Typography fontWeight={700}>Varanasi</Typography><Typography variant="body2" color="text.secondary">Plan your visit</Typography></Box></Box>
          </AboutHighlights>
        </AboutGrid>
      </Section>

      <Section>
        <SectionHeading component="h2">Nearby Attractions</SectionHeading>
        <SectionIntro>Explore some of Varanasi's well-known places.</SectionIntro>
        <Grid container spacing={2}>
          {attractions.map((attraction) => (
            <Grid key={attraction} size={{ xs: 6, sm: 6, md: 3 }}>
              <AttractionCard variant="outlined">
                <AttractionImagePlaceholder />
                <CardContent>
                  <Typography fontWeight={700}>{attraction}</Typography>
                  <Typography variant="body2" color="text.secondary"><LocationOnOutlinedIcon fontSize="small" /> Location details to be verified</Typography>
                </CardContent>
              </AttractionCard>
            </Grid>
          ))}
        </Grid>
        <LocationPanel>
          <LocationOnOutlinedIcon />
          <Box>
            <Typography fontWeight={700}>Our Location</Typography>
            <Typography variant="body2" color="text.secondary">The verified guest house address and map link can be connected when supplied.</Typography>
          </Box>
          <Button disabled endIcon={<ArrowForwardRoundedIcon />}>View on Google Maps</Button>
        </LocationPanel>
      </Section>
    </HomePage>
  );
};

export default Home;
