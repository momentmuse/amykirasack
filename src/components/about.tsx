import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AboutMe1 from './../images/viaduct.png';
import AboutMe2 from './../images/quebec.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ScrollingHeadline from './ScrollingHeadline';
import {
  Container,
  Padding,
  BlobMask,
  Blobs,
  SectionHeaderAlt,
} from '../styles';
import { Parallax } from 'react-scroll-parallax';

const AboutContainer = styled(Container)`
  /* background-color: ${({ theme }) => theme.color.secondary}; */
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageMaskA = styled(BlobMask)`
  mask-image: url(${Blobs.aboutA});
`;

const ImageMaskB = styled(BlobMask)`
  mask-image: url(${Blobs.aboutB});
`;

const TextContainer = styled.div`
  @media ${({ theme }) => theme.device.tablet} {
    margin-left: -30rem;
    margin-top: -10rem;
    width: 35rem;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 2rem;
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
      <SectionHeaderAlt>about.</SectionHeaderAlt>
      <ScrollingHeadline
        headline={
          'We do not come into this world; we come out of it, as leaves from a tree.'
        }
      />

      <ImageContainer>
        <Parallax translateY={[-20, 30]} translateX={[30, -10]}>
          <ImageMaskA>
            <img src={AboutMe1} />
          </ImageMaskA>
        </Parallax>
        <Parallax translateY={[25, -25]} translateX={[-20, 40]}>
          <ImageMaskB>
            <img src={AboutMe2} />
          </ImageMaskB>
        </Parallax>
      </ImageContainer>

      <Padding>
        <TextContainer>
          <p>
            Canadian-born coffee enthusiast, cat lover, and globetrotter. I’ve
            lived in Canada, the US, Singapore, Japan, and Spain, but spent time
            in many more. Currently based in the UK, where you’ll find me
            meditating on my balcony with far too many plants.
          </p>

          <LinkContainer>
            <a href={data.file.publicURL} target="_blank" className="button">
              <FontAwesomeIcon icon={faFilePdf} />
              &nbsp;get my cv
            </a>
            <br />
            <a
              href="https://github.com/momentmuse"
              target="_blank"
              className="button"
            >
              <FontAwesomeIcon icon={faGithub} />
              &nbsp;github
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/amy-kirasack"
              target="_blank"
              className="button"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              &nbsp;linkedin
            </a>
          </LinkContainer>
        </TextContainer>
      </Padding>
    </AboutContainer>
  );
};

export default About;
