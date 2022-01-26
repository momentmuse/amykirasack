import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AboutMe1 from './../images/viaduct.png';
import AboutMe2 from './../images/fundy.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const AboutContainer = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.styles.padding};
  @media ${({ theme }) => theme.device.tablet} {
    padding: ${({ theme }) => theme.styles.paddingTablet};
    flex-direction: row;
  }
  @media ${({ theme }) => theme.device.laptop} {
    padding: ${({ theme }) => theme.styles.paddingLaptop};
  }

  img {
    max-width: 320px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    <AboutContainer id={id}>
      <img src={AboutMe1} />
      <img src={AboutMe2} />
      <TextContainer>
        <h1>What’s in a name?</h1>

        <p>
          Canadian-born coffee enthusiast, cat lover, and globetrotter. I’ve
          lived in Canada, the US, Singapore, Japan, and Spain, but spent time
          in many more. Currently based in the UK, where you’ll find me
          meditating on my balcony with far too many plants.
        </p>

        <a href={data.file.publicURL} target="_blank" className="button">
          <FontAwesomeIcon icon={faFilePdf} />
          Get my CV
        </a>
        <br />
        <a
          href="https://github.com/momentmuse"
          target="_blank"
          className="button"
        >
          <FontAwesomeIcon icon={faGithub} />
          Github
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/amy-kirasack"
          target="_blank"
          className="button"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </a>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
