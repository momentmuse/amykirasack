import * as React from 'react';
import HeroSplashSq from './../assets/videos/hero-splash-sq.mp4';
import HeroSplash from './../assets/videos/hero-splash.mp4';
import styled, { useTheme } from 'styled-components';

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const HeroContainer = styled.div`
  margin-top: 2vh;
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
        "Be imaginative.", "Stay curious.", "Believe it. Build it." "Clean,
        communicative, and comprehensive code.",
      </h1>
      <h2>Because software is for humans, too.</h2>
      <video autoPlay playsInline loop muted width="100%">
        {windowWidth && <source src={optimizeVideo()} type="video/mp4" />}
      </video>
    </HeroContainer>
  );
};

export default Hero;
