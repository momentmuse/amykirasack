import { StyledHeadline } from './ScrollingHeadline.styled';
import Marquee from 'react-fast-marquee';

type ScrollingHeadlineProps = {
  headline: string;
};

export const ScrollingHeadline = ({ headline }: ScrollingHeadlineProps) => {
  return (
    <Marquee gradient={false} speed={15}>
      <StyledHeadline>{`${headline} `.repeat(5).toLowerCase()}</StyledHeadline>
      &nbsp;
    </Marquee>
  );
};
