import { Outlet } from "react-router-dom";
import { StyledLink, Nav, Header, Main } from "./Layout.styled";
import { Suspense } from "react";
const Layout = () => {
    return (
      <>
        <Header>
          <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
          </Nav>
        </Header>
        <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        </Main>
      </>
    );
  };
export default Layout