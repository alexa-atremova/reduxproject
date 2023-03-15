import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-right: 30px;

  color: #383230;
  &:last-child {
    margin-right: 0;
  }
  a {
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #383230;
  }
`;

export const NavLinkS = styled(NavLink)`
  font-size: 16px;
  font-weight: bold;
  color: #333333;

  &:hover {
    color: #0077ff;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #999999;
  border-radius: 5px 0 0 5px;
`;

export const SearchButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #0077ff;
  border: none;
  border-radius: 0 5px 5px 0;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #005ae6;
  }
`;

export const SignUp = styled(NavLink)`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #0077ff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #005ae6;
  }
`;
