import { Outlet } from "react-router";
import PageContainer from "./components/Layout/PageContainer";
import { StyledAppLayout, Header, Main, Footer } from "./AppLayoutStyles";

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header>{/* Header will come here */}</Header>

      <Main>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </Main>

      <Footer>{/* Footer will come here */}</Footer>
    </StyledAppLayout>
  );
};

export default AppLayout;
