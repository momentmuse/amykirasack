import * as React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

interface HeaderProps {
  siteTitle: string;
}

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.color.primary};
  display: flex;
  font-family: ${({ theme }) => theme.font.family.heading};
  > div {
    margin: 0 auto;
    padding: 1.5rem;
  }
`;

const Navbar = styled.nav`
  margin: 0 auto;
  padding: 1.5rem;
  > ul {
    margin: 0 auto;
    padding: 1.5rem;
    list-style-type: none;
  }
`;

const Header = ({ siteTitle }: HeaderProps) => (
  <StyledHeader>
    <Helmet title={siteTitle} titleTemplate="%s | Software Engineer" />
    <div>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Navbar>
      <ul>
        <li>
          <Link to="/#work">Work</Link>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/#contact">Contact</Link>
        </li>
      </ul>
    </Navbar>
  </StyledHeader>
);

export default Header;
