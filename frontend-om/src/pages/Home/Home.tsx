import HeroSection from "../../components/Home/HeroSection/HeroSection";
import AvailabilitySection from "../../components/Home/AvailabilitySection/AvailabilitySection";
import FeaturedRooms from "../../components/Home/FeaturedRooms/FeaturedRooms";
import BenefitsSection from "../../components/Home/BenefitsSection/BenefitsSection";
import AboutSection from "../../components/Home/AboutSection/AboutSection";
import NearbyAttractions from "../../components/Home/NearbyAttractions/NearbyAttractions";
import LocationBanner from "../../components/Home/LocationBanner/LocationBanner";
import Loader from "../../components/Loader/Loader";

import HomeStyles from "./HomeStyles";
import Spacer from "../../styledUtils/Spacer";
import { useGetMediaQuery } from "../../app/services/mediaApis";
import { useGetRoomCategoriesQuery } from "../../app/services/roomsApis";

const Home = () => {
  const { data: media = [], isLoading: isMediaLoading } =
    useGetMediaQuery("ROOM");

  const { data: rooms = [], isLoading: isRoomsLoading } =
    useGetRoomCategoriesQuery();
  return (
    <HomeStyles>
      <main>
        {isMediaLoading ? <Loader /> : <HeroSection media={media} />}

        <Spacer height={2} heightMd={2} />

        <AvailabilitySection />

        <Spacer height={3} heightMd={3} />

        {isRoomsLoading ? <Loader /> : <FeaturedRooms rooms={rooms} />}

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
