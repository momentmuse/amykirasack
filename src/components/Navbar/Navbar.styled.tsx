import styled, { keyframes } from 'styled-components';
import Pointer from 'assets/cursors/pointer.png';

export const Nav = styled.label`
  z-index: 99;
`;

export const Menu = styled.span`
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

export const Hamburger = styled.span`
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

export const LinkContainer = styled.div<{ isChecked: boolean }>`
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
 
  visibility: ${(props) => (props.isChecked ? 'visible' : 'hidden')};
  -moz-transform-origin: top right;
  -webkit-transform-origin: top right;
  transform-origin: top right;
  -moz-animation: ${(props) => (props.isChecked ? fadeIn : fadeOut)} 0.25s
  -webkit-animation: ${(props) =>
    props.isChecked ? fadeIn : fadeOut} 0.25s ease-in-out;
  animation: ${(props) =>
    props.isChecked ? fadeIn : fadeOut} 0.25s ease-in-out;
  -moz-transition: visibility 0.25s ease-in-out;
  -webkit-transition: visibility 0.25s ease-in-out;
  transition: visibility 0.25s ease-in-out;

  a {
    font-size: ${({ theme }) => theme.font.size.xxlarge};
    -webkit-text-decoration-thickness: 4px;
    text-decoration-thickness: 4px;
    text-underline-offset: 0.2rem;
    margin-bottom: 1rem;
    display: block;
    max-width: 100vw;

    @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.font.size.xxxlarge};
    }
  }
`;

export const StyledInput = styled.input`
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
