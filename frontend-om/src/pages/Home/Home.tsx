import HeroSection from "../../components/Home/HeroSection/HeroSection";
import AvailabilitySection from "../../components/Home/AvailabilitySection/AvailabilitySection";
import FeaturedRooms from "../../components/Home/FeaturedRooms/FeaturedRooms";
import BenefitsSection from "../../components/Home/BenefitsSection/BenefitsSection";
import AboutSection from "../../components/Home/AboutSection/AboutSection";
import NearbyAttractions from "../../components/Home/NearbyAttractions/NearbyAttractions";
import LocationBanner from "../../components/Home/LocationBanner/LocationBanner";

import HomeStyles from "./HomeStyles";
import Spacer from "../../styledUtils/Spacer";

const Home = () => {
  return (
    <HomeStyles>
      <main>
        <HeroSection />

        <AvailabilitySection />

        <Spacer height={3} heightMd={3} />

        <FeaturedRooms />

        <Spacer height={3} heightMd={3} />

        <BenefitsSection />

        <Spacer height={3} heightMd={3} />

        <AboutSection />

        <Spacer height={3} heightMd={3} />

        <NearbyAttractions />

        <Spacer height={3} heightMd={3} />

        <LocationBanner />
      </main>
    </HomeStyles>
  );
};

export default Home;
