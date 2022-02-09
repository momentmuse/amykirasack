import React, { useState, useEffect, FC } from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import Pointer from './../cursors/pointer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSmileBeam,
  faLaptopCode,
  faPaperPlane,
  faPenFancy,
} from '@fortawesome/free-solid-svg-icons';

const Nav = styled.label`
  z-index: 99;
`;

const Menu = styled.span`
  position: absolute;
  z-index: 100;
  right: -100px;
  top: -100px;
  width: 200px;
  height: 200px;
  background: ${({ theme }) => theme.color.background};
  border-radius: 50% 50% 50% 50%;
  -moz-transition: 0.5s ease-in-out;
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  box-shadow: 0 0 0 0 ${({ theme }) => theme.color.background},
    0 0 0 0 ${({ theme }) => theme.color.background};
  -webkit-cursor: url(${Pointer}), pointer;
  cursor: url(${Pointer}), pointer;
`;

const Hamburger = styled.span`
  position: absolute;
  top: 135px;
  left: 50px;
  width: 30px;
  height: 2px;
  background: ${({ theme }) => theme.color.primary};
  display: block;
  -moz-transform-origin: center;
  -webkit-transform-origin: center;
  transform-origin: center;
  -moz-transition: 0.5s ease-in-out;
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;

  &::before,
  &::after {
    -moz-transition: 0.5s ease-in-out;
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.color.primary};
  }

  &::before {
    top: -10px;
  }
  &::after {
    bottom: -10px;
  }
`;

const fadeIn = keyframes`
  from {
    transform: scale(0.3);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(0.3);
    opacity: 0;
  }
`;

const LinkContainer = styled.div<{ menuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 200;
  position: absolute;
  top: 6rem;
  right: 1rem;
  @media ${({ theme }) => theme.device.tablet} {
    right: 6rem;
  }
 
  visibility: ${(props) => (props.menuOpen ? 'visible' : 'hidden')};
  -moz-transform-origin: top right;
  -webkit-transform-origin: top right;
  transform-origin: top right;
  -moz-animation: ${(props) => (props.menuOpen ? fadeIn : fadeOut)} 0.25s
  -webkit-animation: ${(props) =>
    props.menuOpen ? fadeIn : fadeOut} 0.25s ease-in-out;
  animation: ${(props) =>
    props.menuOpen ? fadeIn : fadeOut} 0.25s ease-in-out;
  -moz-transition: visibility 0.25s ease-in-out;
  -webkit-transition: visibility 0.25s ease-in-out;
  transition: visibility 0.25s ease-in-out;

  a {
    font-size: ${({ theme }) => theme.font.size.xxlarge};
    -webkit-text-decoration-thickness: 4px;
    text-decoration-thickness: 4px;
    margin-bottom: 1rem;
    display: block;
    max-width: 100vw;

    @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.font.size.xxxlarge};
    }
  }
`;

const StyledInput = styled.input`
  display: none;
  -webkit-cursor: url(${Pointer}), pointer;
  cursor: url(${Pointer}), pointer;

  &:checked + ${Menu} {
    box-shadow: 0 0 0 100vw ${({ theme }) => theme.color.background},
      0 0 0 100vh ${({ theme }) => theme.color.background};
    border-radius: 0;
  }

  &:checked + ${Menu} ${Hamburger} {
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &:checked + ${Menu} ${Hamburger}::after {
    -moz-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    bottom: 0;
  }

  &:checked + ${Menu} ${Hamburger}::before {
    -moz-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    top: 0;
  }

  &:checked + ${Menu} + ${LinkContainer} {
    opacity: 1;
  }
`;

interface NavProps {
  menuOpen: boolean;
}

const Navbar: FC<NavProps> = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isChecked) {
      document.body.classList.add('scroll');
    } else if (!isChecked && document.body.classList.contains('scroll')) {
      document.body.classList.remove('scroll');
    }
  }, [isChecked]);

  const closeMenu = () => {
    setIsChecked(false);
    (document.getElementById('checkbox') as HTMLInputElement).checked = false;
  };

  return (
    <Nav>
      <StyledInput
        type="checkbox"
        id="checkbox"
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      />
      <Menu>
        <Hamburger></Hamburger>
      </Menu>
      <LinkContainer menuOpen={isChecked ? true : false}>
        <div>
          <Link to="/#about" onClick={() => closeMenu()}>
            about <FontAwesomeIcon icon={faSmileBeam} />
          </Link>
        </div>
        <div>
          <Link to="/#work" onClick={() => closeMenu()}>
            work <FontAwesomeIcon icon={faLaptopCode} />
          </Link>
        </div>
        <div>
          <Link to="/#contact" onClick={() => closeMenu()}>
            contact <FontAwesomeIcon icon={faPaperPlane} />
          </Link>
        </div>
        <div>
          <Link to="/blog" onClick={() => closeMenu()}>
            blog <FontAwesomeIcon icon={faPenFancy} />
          </Link>
        </div>
      </LinkContainer>
    </Nav>
  );
};

export default Navbar;
