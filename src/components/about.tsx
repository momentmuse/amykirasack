import * as React from 'react';

const About = ({ id }) => {
  return (
    <div
      id={id}
      style={{
        backgroundColor: `#ace1af`,
        height: `80vh`,
      }}
    >
      <h1>👩🏻‍💻What's in a name? 👩🏻‍💻</h1>
      <p>Clean, communicative, and comprehensive code.</p>
      <p>Because code isn’t just for computers. It’s for humans, too.</p>

      <p>
        Canadian-born coffee enthusiast, cat lover, and globetrotter. I’ve lived
        in Canada, the US, Singapore, Japan, and Spain, but spent time in many
        more. Currently based in the UK, where you’ll find me meditating on my
        balcony with far too many plants.
      </p>
    </div>
  );
};

export default About;
