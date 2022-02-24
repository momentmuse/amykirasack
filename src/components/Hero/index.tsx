import { useState, useEffect } from 'react';
import SquareVid from 'assets/videos/hero-splash-sq.mp4';
import WideVid from 'assets/videos/hero-splash.mp4';
import { useTheme } from 'styled-components';
import { HeroContainer, StyledVideoContainer, StyledType } from './Hero.styled';
import Typewriter from 'typewriter-effect';

interface Size {
  width: number | undefined;
  height: number | undefined;
}

export const Hero = () => {
  useEffect(() => {
    console.log(
      '%c %s',
      'font-weight: bold; font-size: 50px; color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68); ',
      'Well, hello there!',
      '\n',
      '\n',
      'Poking around are we? If you see anything unusual, do let me know!'
    );
  }, []);

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
