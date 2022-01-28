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
  z-index: 99;
  display: flex;
  > div {
    margin: 0 auto;
  }
`;

const LogoIcon = styled.img`
  width: 5rem;
  will-change: transform;
  transition: transform 450ms;

  &:hover {
    transition: transform 140ms;
    transform: translateY(-10px);
  }
`;

const Navbar = styled.nav`
  margin: 0 auto;
  padding: 1.5rem;
  > ul {
    list-style-type: none;
  }
`;

const Header = ({ siteTitle }: HeaderProps) => (
  <StyledHeader>
    <Helmet title={siteTitle} titleTemplate="%s | Software Engineer" />
    <div>
      <h1>
        <AnchorLink to="/">
          <LogoIcon src={Logo} alt="site logo" />
        </AnchorLink>
      </h1>
    </div>
    <Navbar>
      <ul>
        <li>
          <AnchorLink to="/#work">work</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#about">about</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/blog">blog</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#contact">contact</AnchorLink>
        </li>
      </ul>
    </Navbar>
  </StyledHeader>
);

export default Header;
