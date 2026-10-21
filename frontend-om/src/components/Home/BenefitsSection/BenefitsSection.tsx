import { Box, Card, CardContent, Typography } from "@mui/material";
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
      <Box component="section" className="benefits-section">
        <Box className="benefits-heading">
          <Typography variant="h4">Why Choose OM Guest House?</Typography>

          <Typography variant="body2" className="section-description">
            A comfortable and hassle-free stay with everything you need.
          </Typography>
        </Box>

        <Box className="benefits-grid">
          <Card variant="outlined" className="benefit-card">
            <CardContent>
              <BedOutlinedIcon className="benefit-icon" />
              <Typography variant="subtitle2">6 Room Types</Typography>
              <Typography variant="caption" className="benefit-description">
                For different needs
              </Typography>
            </CardContent>
          </Card>

          <Card variant="outlined" className="benefit-card">
            <CardContent>
              <CurrencyRupeeOutlinedIcon className="benefit-icon" />
              <Typography variant="subtitle2">Best Price Guarantee</Typography>
              <Typography variant="caption" className="benefit-description">
                Base tariff, no hidden charges
              </Typography>
            </CardContent>
          </Card>

          <Card variant="outlined" className="benefit-card">
            <CardContent>
              <VerifiedUserOutlinedIcon className="benefit-icon" />
              <Typography variant="subtitle2">Safe &amp; Secure</Typography>
              <Typography variant="caption" className="benefit-description">
                Your safety is our priority
              </Typography>
            </CardContent>
          </Card>

          <Card variant="outlined" className="benefit-card">
            <CardContent>
              <GroupsOutlinedIcon className="benefit-icon" />
              <Typography variant="subtitle2">Family Friendly</Typography>
              <Typography variant="caption" className="benefit-description">
                Ideal for families and groups
              </Typography>
            </CardContent>
          </Card>

          <Card variant="outlined" className="benefit-card">
            <CardContent>
              <LocationOnOutlinedIcon className="benefit-icon" />
              <Typography variant="subtitle2">Prime Location</Typography>
              <Typography variant="caption" className="benefit-description">
                Easy access to major attractions
              </Typography>
            </CardContent>
          </Card>

          <Card variant="outlined" className="benefit-card">
            <CardContent>
              <PhoneOutlinedIcon className="benefit-icon" />
              <Typography variant="subtitle2">Easy Booking</Typography>
              <Typography variant="caption" className="benefit-description">
                Online, call, WhatsApp or walk-in
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </BenefitsSectionStyles>
  );
};

export default BenefitsSection;
