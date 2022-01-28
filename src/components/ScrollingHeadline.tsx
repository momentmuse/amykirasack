import * as React from 'react';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';

interface ScrollingHeadlineProps {
  headline: string;
}

// const StyledHeader = styled.div`
//   font-family: ${({ theme }) => theme.font.family.body};
//   font-size: ${({ theme }) => theme.font.size.xlarge};
//   color: ${({ theme }) => theme.color.light};
//   text-shadow: 0 0 3px ${({ theme }) => theme.color.background},
//     0 0 3px ${({ theme }) => theme.color.accent},
//     0 0 3px ${({ theme }) => theme.color.accent},
//     0 0 3px ${({ theme }) => theme.color.accent};
// `;

// add useTheme to access theme variables

const marqueeStyle = {
  overflow: 'hidden',
  marginTop: '8rem',
  webkitTextStroke: '1px rgba(109, 84, 93, 0.6)',
  textStroke: '1px navy',
  fontFamily: 'Young Serif',
  fontSize: '2.5rem',
  color: 'rgba(255, 255, 255, 0.6)',
  letterSpacing: '-1px',
  // textShadow:
  //   '0 0 3px #6d545d, 0 0 3px #6d545d, 0 0 3px #6d545d, 0 0 3px #6d545d,',
};

const ScrollingHeadline = ({ headline }: ScrollingHeadlineProps) => {
  return (
    <Marquee gradient={false} speed={20} style={marqueeStyle}>
      {`${headline} `.repeat(5).toLowerCase()}
      &nbsp;
    </Marquee>
  );
};

export default ScrollingHeadline;
