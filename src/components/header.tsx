import * as React from 'react';
import { Helmet } from 'react-helmet';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import styled from 'styled-components';
import Logo from './../images/icon.png';
import Cursor from './../cursors/cursor.png';
import Pointer from './../cursors/pointer.png';

interface HeaderProps {
  siteTitle: string;
}

const StyledHeader = styled.header`
  cursor: url(${Cursor}), auto;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  font-family: ${({ theme }) => theme.font.family.heading};
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

const StyledLink = styled(AnchorLink)`
  cursor: url(${Pointer}), pointer;
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
          <StyledLink to="/#work">work</StyledLink>
        </li>
        <li>
          <StyledLink to="/#about">about</StyledLink>
        </li>
        <li>
          <StyledLink to="/blog">blog</StyledLink>
        </li>
        <li>
          <StyledLink to="/#contact">contact</StyledLink>
        </li>
      </ul>
    </Navbar>
  </StyledHeader>
);

export default Header;
