import { Box, Typography } from "@mui/material";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import BenefitsSectionStyles from "./BenefitsSectionStyles";

const BenefitsSection = () => {
  return (
    <BenefitsSectionStyles>
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
    </BenefitsSectionStyles>
  );
};

export default BenefitsSection;
