import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './../images/icon.png';

const LogoIcon = styled.img`
  position: fixed;
  top: 0.4rem;
  left: 0.4rem;
  z-index: 10;
  width: 5rem;
  will-change: transform;
  transition: transform 450ms;

  &:hover {
    transition: transform 140ms;
    transform: translateY(-1rem);
  }

  @media ${({ theme }) => theme.device.tablet} {
    top: 1rem;
    left: 4rem;
  }
`;

const HomeLogo = () => {
  return (
    <div>
      <h1>
        <Link to="/">
          <LogoIcon src={Logo} alt="site logo" />
        </Link>
      </h1>
    </div>
  );
};

export default HomeLogo;
