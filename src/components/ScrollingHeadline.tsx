import * as React from 'react';
import Marquee from 'react-fast-marquee';

interface ScrollingHeadlineProps {
  headline: string;
}

const ScrollingHeadline = ({ headline }: ScrollingHeadlineProps) => {
  return (
    <Marquee gradient={false} speed={80} pauseOnClick={true}>
      <h1>{headline}</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </Marquee>
  );
};

export default ScrollingHeadline;
