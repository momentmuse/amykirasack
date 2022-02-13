import { useState, useEffect } from 'react';
import SquareVid from 'assets/videos/hero-splash-sq.mp4';
import WideVid from 'assets/videos/hero-splash.mp4';
import styled, { useTheme } from 'styled-components';
import Typewriter from 'typewriter-effect';
import HeroBg from 'assets/images/herobg.png';

const HeroContainer = styled.div`
  @media ${({ theme }) => theme.device.laptop} {
    background-image: url(${HeroBg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
`;

const StyledVideoContainer = styled.div`
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

const StyledType = styled.div`
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

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const Hero = () => {
  const theme = useTheme();

  const useWindowSize = (): Size => {
    const [windowSize, setWindowSize] = useState<Size>({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
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
      return windowWidth > mobileWidth ? WideVid : SquareVid;
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
                'Because software is for humans, too. :) ',
              ],
              autoStart: true,
              loop: true,
              cursor: '█',
            }}
          />
        </StyledType>
        {windowWidth && (
          <video
            autoPlay
            playsInline
            loop
            muted
            width="100%"
            preload="metadata"
          >
            <source src={optimizeVideo() + '#t=0.1'} type="video/mp4" />
          </video>
        )}
      </StyledVideoContainer>
    </HeroContainer>
  );
};

export default Hero;
