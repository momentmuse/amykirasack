import styled from 'styled-components';

export const LogoIcon = styled.img`
  position: fixed;
  top: 0.8rem;
  left: 0.8rem;
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
