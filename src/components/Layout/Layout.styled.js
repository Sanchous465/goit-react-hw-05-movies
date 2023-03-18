

import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';

export const StyledLink = styled(NavLink)`
    font-size: 24px;
    color: black;
    text-decoration: none;
    &.active {
    color: red;
  }
`;
export const Nav = styled.nav`
    display: flex;
    gap: 10px;
    align-items: center;   
`;

export const Header = styled.header`
    padding: 15px 0 15px 20px;
    outline: 1px solid gray;
    margin-bottom: 20px;
`;
export const Main = styled.main`
    padding: 15px 0 15px 20px;
    margin-bottom: 20px;
`;