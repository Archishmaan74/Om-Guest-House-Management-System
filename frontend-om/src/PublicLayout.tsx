import { Outlet } from "react-router";
import PageContainer from "./components/Layout/PageContainer";
import { StyledPublicLayout, Header, Main, Footer } from "./PublicLayoutStyles";

const PublicLayout = () => {
  return (
    <StyledPublicLayout>
      <Header>{/* Header will come here */}</Header>

      <Main>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </Main>

      <Footer>{/* Footer will come here */}</Footer>
    </StyledPublicLayout>
  );
};

export default PublicLayout;
