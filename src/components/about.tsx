import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AboutMe1 from './../images/viaduct.png';
import AboutMe2 from './../images/quebec.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ScrollingHeadline from './ScrollingHeadline';
import { Container, Padding } from '../styles';
import { Parallax } from 'react-scroll-parallax';

const AboutContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.secondary};
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
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
      <ScrollingHeadline
        headline={
          'We do not come into this world; we come out of it, as leaves from a tree.'
        }
      />
      <Padding>
        <ImageContainer>
          <img src={AboutMe1} />
          <img src={AboutMe2} />
        </ImageContainer>

        <TextContainer>
          <p>
            Canadian-born coffee enthusiast, cat lover, and globetrotter. I’ve
            lived in Canada, the US, Singapore, Japan, and Spain, but spent time
            in many more. Currently based in the UK, where you’ll find me
            meditating on my balcony with far too many plants.
          </p>

          <a href={data.file.publicURL} target="_blank" className="button">
            <FontAwesomeIcon icon={faFilePdf} />
            get my cv
          </a>
          <br />
          <a
            href="https://github.com/momentmuse"
            target="_blank"
            className="button"
          >
            <FontAwesomeIcon icon={faGithub} />
            github
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/amy-kirasack"
            target="_blank"
            className="button"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            linkedin
          </a>
        </TextContainer>
      </Padding>
    </AboutContainer>
  );
};

export default About;
