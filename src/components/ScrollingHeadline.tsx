import * as React from 'react';
import Marquee from 'react-fast-marquee';

interface ScrollingHeadlineProps {
  headline: string;
}

const ScrollingHeadline = ({ headline }: ScrollingHeadlineProps) => {
  return (
    <Marquee gradient={false} speed={65} pauseOnClick={true}>
      <h1>{`${headline} `.repeat(5).toLowerCase()}</h1>
      &nbsp;
    </Marquee>
  );
};

export default ScrollingHeadline;
