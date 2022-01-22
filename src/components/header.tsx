import * as React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Logo from './../images/icon.png';

interface HeaderProps {
  siteTitle: string;
}

const StyledHeader = styled.header`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;
  background: transparent;
  display: flex;
  font-family: ${({ theme }) => theme.font.family.heading};
  > div {
    margin: 0 auto;
    padding: 0.5rem;
  }
`;

const NavLogo = styled.img`
  width: 2em;
`;

const Navbar = styled.nav`
  margin: 0 auto;
  padding: 1.5rem;
  > ul {
    margin-left:
    padding: 1.5rem;
    list-style-type: none;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
`;

const Header = ({ siteTitle }: HeaderProps) => (
  <StyledHeader>
    <Helmet title={siteTitle} titleTemplate="%s | Software Engineer" />
    <div>
      <h1>
        <StyledLink to="/">
          <NavLogo src={Logo} alt="site logo"></NavLogo>
        </StyledLink>
      </h1>
    </div>
    <Navbar>
      <ul>
        <li>
          <StyledLink to="/#work">Work</StyledLink>
        </li>
        <li>
          <StyledLink to="/#about">About</StyledLink>
        </li>
        <li>
          <StyledLink to="/blog">Blog</StyledLink>
        </li>
        <li>
          <StyledLink to="/#contact">Contact</StyledLink>
        </li>
      </ul>
    </Navbar>
  </StyledHeader>
);

export default Header;
