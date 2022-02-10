import React from 'react';
import { Helmet } from 'react-helmet';
import HomeLogo from './HomeLogo';
import Navbar from './Navbar';
import styled from 'styled-components';

interface HeaderProps {
  siteTitle: string;
}

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.primary};
  width: 100vw;
  height: 8rem;
  top: 0;
  left: 0;
  display: flex;
`;

const Header = ({ siteTitle }: HeaderProps) => (
  <StyledHeader id={'top'}>
    <Helmet title={siteTitle} titleTemplate="%s | Software Engineer" />
    <HomeLogo />
    <Navbar menuOpen={false} />
  </StyledHeader>
);

export default Header;
