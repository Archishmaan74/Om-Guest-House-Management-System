import type { ReactNode } from "react";
import { StyledPageContainer } from "./PageContainerStyles";

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return <StyledPageContainer maxWidth="xl">{children}</StyledPageContainer>;
};

export default PageContainer;
