import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.mid};
  h1 {
    font-family: ${({ theme }) => theme.font.family.heading};
  }
  p {
    font-family: ${({ theme }) => theme.font.family.body};
  }
`;

interface AboutProps {
  id: string;
}

const About = ({ id }: AboutProps) => {
  const data = useStaticQuery(graphql`
    {
      file(extension: { eq: "pdf" }, absolutePath: { regex: "/cv/" }) {
        publicURL
        name
      }
    }
  `);

  return (
    <>
      <AboutContainer id={id}>
        <h1>What's in a name? </h1>
        <p>Clean, communicative, and comprehensive code.</p>
        <p>Because code isn’t just for computers. It’s for humans, too.</p>

        <p>
          Canadian-born coffee enthusiast, cat lover, and globetrotter. I’ve
          lived in Canada, the US, Singapore, Japan, and Spain, but spent time
          in many more. Currently based in the UK, where you’ll find me
          meditating on my balcony with far too many plants.
        </p>

        <a href={data.file.publicURL} target="_blank" className="button">
          Download my CV
        </a>
        <br />
        <a
          href="https://github.com/momentmuse"
          target="_blank"
          className="button"
        >
          Github
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/amy-kirasack"
          target="_blank"
          className="button"
        >
          LinkedIn
        </a>
      </AboutContainer>
    </>
  );
};

export default About;
