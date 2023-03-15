import React from "react";
import { NavLink } from "react-router-dom";
import "./style.jsx";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavLinkS,
  NavList,
  Search,
  SearchButton,
  SearchInput,
  SignUp,
} from "./style.jsx";

function Header() {
  return (
    <HeaderWrapper>
      <Logo>LOGO</Logo>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to="/">Featured</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/woman">Women</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">Men</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">Jewelry</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/beauty">Beauty</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">Travel</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">Pets</NavLink>
          </NavItem>
        </NavList>
      </Nav>
      <Search>
        <SearchInput type="text" placeholder="Search..." />
        <SearchButton>Search</SearchButton>
        <SignUp to="/">Sign Up</SignUp>
      </Search>
    </HeaderWrapper>
  );
}

export default Header;
