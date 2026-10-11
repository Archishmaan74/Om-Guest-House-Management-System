import { Box, Typography } from "@mui/material";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import StyledGuestHouseFooter from "./GuestHouseFooterStyles";

const GuestHouseFooter = () => {
  return (
    <StyledGuestHouseFooter>
      <Box className="footer-main">
        <Box className="footer-brand-section">
          <Typography component="h2" className="footer-brand-name">
            OM Guest House
          </Typography>

          <Typography className="footer-intro">
            A comfortable stay. A welcoming experience.
          </Typography>

          <Typography className="footer-description">
            Thoughtful hospitality, comfortable rooms, and a place to feel at
            home.
          </Typography>
        </Box>

        <Box className="footer-info-section">
          <Typography component="h3" className="footer-heading">
            Get in touch
          </Typography>

          <Box className="footer-info-list">
            <Box className="footer-info-item">
              <PhoneOutlinedIcon />
              <Typography>Call us</Typography>
            </Box>

            <Box className="footer-info-item">
              <EmailOutlinedIcon />
              <Typography>Email us</Typography>
            </Box>

            <Box className="footer-info-item">
              <LocationOnOutlinedIcon />
              <Typography>Find us</Typography>
            </Box>
          </Box>
        </Box>

        <Box className="footer-info-section">
          <Typography component="h3" className="footer-heading">
            Your stay
          </Typography>

          <Box className="footer-info-list">
            <Box className="footer-info-item">
              <AccessTimeOutlinedIcon />
              <Typography>Check-in details</Typography>
            </Box>

            <Box className="footer-info-item">
              <ShieldOutlinedIcon />
              <Typography>Privacy Policy</Typography>
            </Box>

            <Box className="footer-info-item">
              <DescriptionOutlinedIcon />
              <Typography>Terms of Stay</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="footer-bottom">
        <Typography className="footer-copyright">
          © {new Date().getFullYear()} OM Guest House. All rights reserved.
        </Typography>

        <Typography className="footer-tagline">
          Comfort. Care. Hospitality.
        </Typography>
      </Box>
    </StyledGuestHouseFooter>
  );
};

export default GuestHouseFooter;
