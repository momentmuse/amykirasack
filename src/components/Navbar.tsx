import * as React from 'react';
import { Link } from 'gatsby';
// TODO: uninstall anchor link!!
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import styled from 'styled-components';

const Nav = styled.label`
  z-index: 99;
`;

const Menu = styled.span`
  position: absolute;
  right: -100px;
  top: -100px;
  z-index: 100;
  width: 200px;
  height: 200px;
  background: ${({ theme }) => theme.color.background};
  border-radius: 50% 50% 50% 50%;
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  box-shadow: 0 0 0 0 ${({ theme }) => theme.color.background},
    0 0 0 0 ${({ theme }) => theme.color.background};
  cursor: pointer;
`;

const Hamburger = styled.span`
  position: absolute;
  top: 135px;
  left: 50px;
  width: 30px;
  height: 2px;
  background: #69d2e7;
  display: block;
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;

  &::before,
  &::after {
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: #69d2e7;
  }

  &::before {
    top: -10px;
  }
  &::after {
    bottom: -10px;
  }
`;

const Ul = styled.ul`
  z-index: 200;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  -webkit-transition: 0.25s 0.1s ease-in-out;
  transition: 0.25s 0.1s ease-in-out;
  text-decoration: none;
  list-style-type: none;

  a {
    font-size: ${({ theme }) => theme.font.size.xlarge};
    margin-bottom: 1rem;
    display: block;
  }
`;

const StyledInput = styled.input`
  display: none;
  &:checked + ${Menu} {
    box-shadow: 0 0 0 100vw ${({ theme }) => theme.color.background},
      0 0 0 100vh ${({ theme }) => theme.color.background};
    border-radius: 0;
  }

  &:checked + ${Menu} ${Hamburger} {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &:checked + ${Menu} ${Hamburger}::after {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    bottom: 0;
  }

  &:checked + ${Menu} ${Hamburger}::before {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    top: 0;
  }

  &:checked + ${Menu} + ${Ul} {
    opacity: 1;
  }
`;

const Navbar = () => {
  // TODO: make menu full screen when open, disable scroll.
  const closeMenu = () => {
    document.getElementById('checkbox').checked = false;
  };

  return (
    <Nav>
      <StyledInput type="checkbox" id="checkbox" />
      <Menu>
        {' '}
        <Hamburger></Hamburger>{' '}
      </Menu>
      <Ul>
        <li>
          <Link to="/#about" onClick={() => closeMenu()}>
            about
          </Link>
        </li>
        <li>
          <Link to="/#work" onClick={() => closeMenu()}>
            work
          </Link>
        </li>
        <li>
          <Link to="/#contact" onClick={() => closeMenu()}>
            contact
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={() => closeMenu()}>
            blog
          </Link>
        </li>
      </Ul>
    </Nav>
  );
};

export default Navbar;