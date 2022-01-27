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
  display: flex;
  > div {
    margin: 0 auto;
    padding: 0.5rem;
  }
  img {
    width: 2rem;
  }
`;

const Navbar = styled.nav`
  margin: 0 auto;
  padding: 1.5rem;
  z-index: 100;
  > ul {
    margin-left: 1.5rem;
    list-style-type: none;
  }
`;

const Header = ({ siteTitle }: HeaderProps) => (
  <StyledHeader>
    <Helmet title={siteTitle} titleTemplate="%s | Software Engineer" />
    <div>
      <h1>
        <AnchorLink to="/">
          <img src={Logo} alt="site logo" />
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
