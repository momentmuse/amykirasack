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
  width: 100%;
`;

const StyledVideoContainer = styled.div`
  position: relative;
  z-index: -1;
  margin: 0 auto;
  @media ${({ theme }) => theme.device.tablet} {
    width: 70vw;
  }
`;

const StyledType = styled.div`
  position: absolute;
  left: 29%;
  top: 18%;
  width: 65%;

  @media ${({ theme }) => theme.device.tablet} {
    left: 0;
    right: 0;
    margin: auto;
    top: 32%;
    width: 44%;
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
      <StyledVideoContainer>
        <StyledType>
          <Typewriter
            options={{
              delay: 85,
              strings: [
                'Clean, communicative && comprehensive code.',
                'Because software is for humans, too. ☺️ ',
              ],
              autoStart: true,
              loop: true,
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
