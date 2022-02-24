import styled from 'styled-components';
import HeroBg from 'assets/images/herobg.png';

export const HeroContainer = styled.div`
  @media ${({ theme }) => theme.device.laptop} {
    background-image: url(${HeroBg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
`;

export const StyledVideoContainer = styled.div`
  position: relative;
  margin: 0 auto;
  min-height: 60vh;
  @media ${({ theme }) => theme.device.tablet} {
    min-height: fit-content;
  }
  @media ${({ theme }) => theme.device.laptop} {
    padding: 0 10rem;
  }
  @media ${({ theme }) => theme.device.highres} {
    padding: 0 18rem;
  }
`;

export const StyledType = styled.div`
  position: absolute;
  left: 29%;
  top: 18%;
  width: 65%;

  @media ${({ theme }) => theme.device.tablet} {
    left: 34%;
    top: 32%;
    width: 40%;
  }

  & .Typewriter__wrapper,
  & .Typewriter__cursor {
    text-shadow: 2px 2px 20px ${({ theme }) => theme.color.light};
    color: ${({ theme }) => theme.color.accent};
    font-family: ${({ theme }) => theme.font.family.monospace};
    font-size: ${({ theme }) => theme.font.size.large};
    @media ${({ theme }) => theme.device.laptop} {
      font-size: ${({ theme }) => theme.font.size.xlarge};
    }
  }
`;
