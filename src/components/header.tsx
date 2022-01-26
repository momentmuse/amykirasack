import * as React from 'react';
import { Helmet } from 'react-helmet';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
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
  img {
    width: 2em;
  }
`;

const Navbar = styled.nav`
  margin: 0 auto;
  padding: 1.5rem;
  > ul {
    margin-left: 1.5rem;
    list-style-type: none;
  }
`;

const StyledLink = styled(AnchorLink)`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
`;

const Header = ({ siteTitle }: HeaderProps) => (
  <StyledHeader>
    <Helmet title={siteTitle} titleTemplate="%s | Software Engineer" />
    <div>
      <h1>
        <StyledLink to="/">
          <img src={Logo} alt="site logo" />
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
