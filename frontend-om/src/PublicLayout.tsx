import { Outlet } from "react-router";
import PageContainer from "./components/Layout/PageContainer";
import Navbar from "./components/Navbar/Navbar";
import { StyledPublicLayout, Header, Main, Footer } from "./PublicLayoutStyles";
import GuestHouseFooter from "./components/GuestHouseFooter/GuestHouseFooter";

const PublicLayout = () => {
  return (
    <StyledPublicLayout>
      <Header>
        <Navbar />
      </Header>

      <Main>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </Main>

      <Footer>
        <GuestHouseFooter />
      </Footer>
    </StyledPublicLayout>
  );
};

export default PublicLayout;
