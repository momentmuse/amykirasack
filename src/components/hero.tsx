import * as React from 'react';
import HeroSplashSq from './../videos/hero-splash-sq.mp4';
import HeroSplash from './../videos/hero-splash.mp4';
import styled, { useTheme } from 'styled-components';
import Typewriter from 'typewriter-effect';

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const HeroContainer = styled.div`
  margin-top: 2vh;

  h1 {
    font-family: ${({ theme }) => theme.font.family.heading};
    color: ${({ theme }) => theme.color.accent};
  }
`;

const StyledVideoContainer = styled.div`
  position: relative;
  z-index: -1;
`;

const StyledType = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;

  @media ${({ theme }) => theme.device.laptop} {
    top: 40%;
    left: 33%;
  }

  & .Typewriter__wrapper,
  & .Typewriter__cursor {
    text-shadow: 2px 2px 2px ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.accent};
    font-family: ${({ theme }) => theme.font.family.monospace};
    font-size: ${({ theme }) => theme.font.size.large};
  }
`;

const Hero = () => {
  const theme = useTheme();

  const useWindowSize = (): Size => {
    const [windowSize, setWindowSize] = React.useState<Size>({
      width: undefined,
      height: undefined,
    });

    React.useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
  };

  const windowWidth = useWindowSize().width;

  const optimizeVideo = () => {
    if (windowWidth !== undefined) {
      const mobileWidth = Number(theme.device.mobile.replace(/[^0-9]/g, ''));
      return windowWidth > mobileWidth ? HeroSplash : HeroSplashSq;
    }
  };

  return (
    <HeroContainer>
      <h1>
        Clean, communicative, <br /> and comprehensive code.
      </h1>
      <StyledVideoContainer>
        <StyledType>
          <Typewriter
            options={{
              delay: 85,
              strings: 'Because software is for humans, too.',
              autoStart: true,
              loop: false,
              cursor: '█',
            }}
          />
        </StyledType>
        <video autoPlay playsInline loop muted width="100%">
          {windowWidth && <source src={optimizeVideo()} type="video/mp4" />}
        </video>
      </StyledVideoContainer>
    </HeroContainer>
  );
};

export default Hero;
