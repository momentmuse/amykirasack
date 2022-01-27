import * as React from 'react';
import Marquee from 'react-fast-marquee';

interface ScrollingHeadlineProps {
  headline: string;
}

const ScrollingHeadline = ({ headline }: ScrollingHeadlineProps) => {
  return (
    <Marquee gradient={false} speed={80} pauseOnClick={true}>
      <h1>{headline.toLowerCase()}</h1>
      &nbsp;&nbsp;
    </Marquee>
  );
};

export default ScrollingHeadline;
